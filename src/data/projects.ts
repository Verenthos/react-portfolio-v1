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
    name: 'TradePort marketplace platform',
    kind: 'Case study',
    summary:
      'Production work on a seven chain digital asset marketplace: USDT and USDC swap flows, USDC checkout for physical goods, localization for the pack opening product, a RAG Discord bot for support tickets, and the bridge layer between chains. Backed by a Playwright framework that gates every release in Jenkins and GitHub Actions.',
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'RAG', 'Playwright', 'Jenkins'],
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
