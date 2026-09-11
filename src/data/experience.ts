export type Role = {
  title: string
  company: string
  where: string
  period: string
  bullets: string[]
}

export const experience: Role[] = [
  {
    title: 'Blockchain Engineer',
    company: 'TradePort',
    where: 'US company, remote from Brazil',
    period: 'Jan 2025 to present',
    bullets: [
      'Implemented stablecoin swap flows in production with USDT and USDC, and USDC checkout for physical Pokemon cards in RipStation, the pack opening product.',
      'Build and debug REST and RPC integrations across Sui, Movement, Aptos, IOTA, Supra, Stacks and NEAR, plus the bridge layer that moves assets between them.',
      'Built and shipped a production RAG application: a Discord bot for the support ticket flow with a vector database and semantic retrieval over the product database and past conversations.',
      'Production React and TypeScript, including the i18n and localization work for RipStation. Daily PostgreSQL for data validation and root cause investigation.',
      'Wrote the Playwright end to end framework in TypeScript and wired it into Jenkins and GitHub Actions as an enforced release gate, replacing a two hour manual verification pass on every release.',
      'Started and led the QA function from zero alongside feature work: standards, priorities, automation and outcomes.',
    ],
  },
  {
    title: 'Freelance Software Developer',
    company: 'Self employed',
    where: 'Local and international clients',
    period: 'Dec 2022 to Jan 2025',
    bullets: [
      'Shipped a narrative game solo in 2023 that passed 10,000 downloads, sold as a subscription through Patreon. Wrote the script, planned a day by day roadmap and followed it through release.',
      'Ran client work end to end: discovery with non technical owners, scoping, build, deployment and post launch support.',
      'JavaScript and React on the front, Node.js or Python and Django on the back.',
    ],
  },
  {
    title: 'Pharmacist',
    company: 'Grupo Panvel',
    where: 'Brazil',
    period: 'May 2023 to Jan 2024',
    bullets: [
      'Supervised the pharmacy team and was accountable for the store\'s pharmaceutical practice.',
      'High volume public facing consultation and prescription validation in a regulated, zero error environment with compliant record keeping.',
    ],
  },
]

export const education = [
  { school: 'UniCesumar', degree: 'Systems Analysis and Development', period: '2023 to 2025' },
  { school: 'UFRGS', degree: 'Bachelor of Pharmacy', period: '2017 to 2022' },
]
