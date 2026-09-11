export type Project = {
  name: string
  kind: string
  summary: string
  stack: string[]
  repo?: string
  live?: string
  note?: string
}

export const projects: Project[] = [
  {
    name: 'Multi-chain wallet demo',
    kind: 'Open source',
    summary:
      'Phantom on Solana devnet and Slush on Sui testnet behind one TypeScript interface. The UI never learns which chain it is talking to. Playwright suite mocks the adapter layer and runs in GitHub Actions on every push.',
    stack: ['TypeScript', 'React', 'Vite', 'Tailwind', 'Playwright', 'Solana', 'Sui'],
    repo: 'https://github.com/Verenthos/multichain-wallet-demo',
    live: 'https://multichain-wallet-demo.vercel.app',
  },
  {
    name: 'TradePort QA and support platform',
    kind: 'Case study',
    summary:
      'A QA department built from zero for a seven chain marketplace: a Playwright framework gating every release in Jenkins and GitHub Actions, and a RAG Discord bot that pulls product data and past tickets into the support flow. Two hours of manual checks per release went to zero.',
    stack: ['Playwright', 'TypeScript', 'Jenkins', 'GitHub Actions', 'PostgreSQL', 'RAG'],
    note: 'Work project, code is private.',
  },
  {
    name: 'Narrative game on Patreon',
    kind: 'Solo product',
    summary:
      'Written, built and released alone in 2023. Passed 10,000 downloads and ran as a paid subscription, with a day by day roadmap followed from the first line of script to launch.',
    stack: ['Python', 'Game scripting', 'Product roadmap'],
    note: 'Released under a separate name.',
  },
]
