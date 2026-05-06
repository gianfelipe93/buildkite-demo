import { execSync } from 'child_process'

const DOMAINS_DIR = 'src'

function getChangedFiles(): string[] {
  try {
    const output = execSync('git diff --name-only origin/main...HEAD', { encoding: 'utf-8' })
    return output.trim().split('\n').filter(Boolean)
  } catch {
    return []
  }
}

function getChangedDomains(changedFiles: string[]): string[] {
  const domains = new Set<string>()
  for (const file of changedFiles) {
    const parts = file.split('/')
    if (parts[0] === DOMAINS_DIR && parts.length > 1) {
      domains.add(parts[1])
    }
  }
  return [...domains].sort()
}

function generatePipeline(domains: string[]): string {
  if (domains.length === 0) {
    return [
      'steps:',
      '  - label: ":white_check_mark: No domain changes — nothing to test"',
      '    command: "echo No relevant changes detected"',
    ].join('\n') + '\n'
  }

  const steps = domains.map(domain =>
    [
      `  - label: ":vitest: Test ${domain}"`,
      `    key: test-${domain}`,
      `    command: "npm ci && npx vitest run src/${domain}"`,
      `    agents:`,
      `      queue: default`,
    ].join('\n')
  )

  return 'steps:\n' + steps.join('\n') + '\n'
}

const changedFiles = getChangedFiles()
const changedDomains = getChangedDomains(changedFiles)

process.stderr.write(`Changed files:\n${changedFiles.map(f => `  ${f}`).join('\n') || '  (none)'}\n`)
process.stderr.write(`Affected domains: ${changedDomains.join(', ') || '(none)'}\n`)

process.stdout.write(generatePipeline(changedDomains))
