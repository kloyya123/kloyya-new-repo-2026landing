/**
 * All page copy and data lives here — not in components.
 *
 * This is deliberate: marketing will iterate on this weekly and
 * should not need to open a JSX file to change a headline. When you
 * wire a CMS, this file becomes the shape of the API response.
 * See the backend spec § 3 "Content model".
 */

import { pickTools } from './tools.js';

export const announcement = {
  tag: 'NEW',
  text: 'Kloyya now reads WhatsApp Business and Instagram alongside your work stack',
  linkLabel: "See what's new →",
  href: '#'
};

export const nav = {
  links: [
    { label: 'How it works', href: '#product' },
    { label: 'Security', href: '#security' },
    { label: 'Pricing', href: '#pricing' }
  ],
  /* The "Product" dropdown. In the full app these deep-link into
     the product; here they scroll to the relevant section. */
  menu: [
    { name: 'Outcome composer', desc: 'Say what you want to be true',      glyph: '✧', color: 'var(--blue)',    href: '#product' },
    { name: 'Plan review',      desc: 'See every step before it runs',     glyph: '▤', color: '#5E6AD2',        href: '#product' },
    { name: 'Live runs',        desc: 'Watch it work, with a readable log', glyph: '◷', color: 'var(--green)',   href: '#product' },
    { name: 'Connections',      desc: '14 tools, read-only by default',    glyph: '⬡', color: '#B4741F',        href: '#connections' }
  ],
  menuFootNote: 'Four steps, none of them a black box',
  menuFootLink: { label: 'See pricing →', href: '#pricing' }
};

export const hero = {
  badge: { tag: 'BETA', text: 'Now reading across 14 tools', linkLabel: 'Join the waitlist →', href: '#pricing' },
  /* headline is split so the last word can carry the serif italic */
  headline: 'Ask for the outcome, not the',
  headlineAccent: 'answer',
  sub: "Kloyya reads across the tools your work already lives in and comes back with the decision — including the part you didn't think to ask for.",
  placeholder: 'Ask Kloyya for an outcome — say what you want to be true…',
  micHint: 'or type — Kloyya asks a question back before it runs',
  chips: [
    'Which customers are about to churn and why',
    'Where are we leaking money this quarter?',
    'Is the December launch actually going to ship?'
  ],
  /* Words the fake transcription types out, in order. Replace the
     whole mechanism with a real transcribe call — spec § 9. */
  transcript: ['tell me ', 'which customers ', 'are about to ', 'churn ', 'and why'],
  footnote: 'No card. Connect one tool and run your first outcome in under five minutes.'
};

export const demo = {
  urlBar: 'kloyya.com/outcome/new',
  query: 'Tell me which customers are about to churn and why',
  readingLabel: 'reading',
  readingTools: pickTools('salesforce', 'slack', 'gmail', 'hubspot', 'gcal'),
  quote: '"Before I run — do you want all 212 accounts, or just the 84 on annual contracts renewing before December? The second one is the question I think you\'re actually asking."',
  quoteAttribution: 'Kloyya · asked before running',
  elapsed: '0:41',
  duration: '3:38',
  progressPct: 19,
  chapters: [
    { t: '0:00', label: 'You state the outcome' },
    { t: '0:41', label: 'Kloyya asks one question back' },
    { t: '1:26', label: 'The plan, before it runs' },
    { t: '2:09', label: "It finds something you didn't ask for" },
    { t: '3:02', label: 'The answer, with its sources' }
  ],
  initialChapter: 1
};

export const logoStrip = {
  label: 'In private beta with operating teams at',
  /* Placeholder names. Swap for real customer logos once you have
     signed permission to use them — see README. */
  names: ['Meridian Health', 'Corvus Labs', 'Peakline Retail', 'Sable & Finch', 'Ardent Freight', 'Northwind Group', 'Halcyon Studio']
};

export const howItWorks = {
  eyebrow: 'How it works',
  heading: 'Four steps. None of them are a black box.',
  composer: {
    kicker: 'Outcome composer',
    title: 'Say it, or speak it',
    text: 'Type the outcome or hold the mic and talk. Kloyya asks the one clarifying question a good colleague would ask, then goes.',
    mockQuery: 'Tell me which customers are about to churn'
  },
  connected: {
    kicker: 'Connected tools',
    title: 'It reasons over your real data, not a summary of it',
    text: 'Fourteen connections — Salesforce, Slack, Gmail, Notion, WhatsApp and more — read directly through your existing permissions, read-only until you approve otherwise.',
    stack: pickTools('slack', 'gmail', 'gcal', 'notion', 'salesforce', 'hubspot', 'linear', 'whatsapp'),
    answerLabel: 'ONE ANSWER',
    answerValue: '9 accounts',
    answerBarPct: 68,
    answerNote: '6 share one cause'
  },
  plan: {
    kicker: 'Plan review',
    title: 'Edit the plan before it runs',
    text: 'Every step and source in plain language. Cut one, add one, change the scope.',
    steps: [
      { n: '1', w: '62%', tone: 'neutral' },
      { n: '2', w: '78%', tone: 'neutral' },
      { n: '3', w: '48%', tone: 'blue' },
      { n: '4', w: '70%', tone: 'amber' }
    ]
  },
  runs: {
    kicker: 'Live runs',
    title: 'Watch it work, line by line',
    text: 'A log you can actually read. If it finds something better, it interrupts and says so.',
    log: [
      { t: '00:09', tag: 'read',    tone: 'read',   msg: 'sf/accounts → 212' },
      { t: '00:31', tag: 'filter',  tone: 'plain',  msg: 'renewal < dec → 84' },
      { t: '01:07', tag: 'read',    tone: 'read',   msg: 'slack → 214 msgs' },
      { t: '02:16', tag: 'signal',  tone: 'signal', msg: 'tone shift ×31' },
      { t: '03:19', tag: 'gap',     tone: 'gap',    msg: 'no zendesk grant' },
      { t: '03:41', tag: 'insight', tone: 'signal', msg: '6/9 share wk-2 dropoff' }
    ]
  },
  enterprise: {
    kicker: 'Enterprise ready',
    title: 'SOC 2, SSO and audit logs',
    text: 'Read-only by default, nothing trains a shared model, revoke and it forgets.'
  }
};

export const pushback = {
  heading: 'It will tell you when you asked the wrong question.',
  sub: "Most tools give you back a shinier version of what you typed. A good colleague tells you what they found on the way — even when it isn't what you went looking for.",
  tag: 'PUSHBACK',
  quoteBefore: '"You asked me which customers are about to churn. I found nine. But the more useful answer is ',
  quoteHighlight: 'why',
  quoteAfter: ' — six of the nine never got past week two of onboarding. Fixing that is worth more than saving these six."',
  sourcesLabel: 'Because it read',
  sources: [
    { toolId: 'salesforce', name: 'Salesforce',   detail: '212 accounts, 90 days of health' },
    { toolId: 'slack',      name: 'Slack',        detail: '214 escalation messages' },
    { toolId: 'gmail',      name: 'Gmail',        detail: '96 support threads' },
    { toolId: 'gdrive',     name: 'Google Drive', detail: '18 QBR decks nobody reread' }
  ]
};

export const connections = {
  headingPlain: 'Connects to ',
  headingStrong: '14 places your work already is',
  link: { label: 'See all connections →', href: '#' }
};

export const security = {
  eyebrow: 'Security',
  heading: "You are handing it the things you'd never paste into a chat box.",
  guarantees: [
    { tag: 'PERMISSIONS', title: 'Read-only until you say otherwise', body: 'Every connection starts read-only. Write access is granted per outcome and expires with it — never standing.' },
    { tag: 'ISOLATION',   title: 'Nothing trains a shared model',     body: 'Your threads, records and files are used to answer your question and nothing else. No cross-tenant training, ever.' },
    { tag: 'DELETION',    title: 'Revoke and it forgets',             body: 'Disconnect a source and Kloyya drops everything it derived from it within the hour. You can watch it happen in the audit log.' }
  ],
  /* ⚠ Every one of these is a compliance claim. Do not ship until
     legal and security have signed off — see README. */
  badges: ['SOC 2 Type II', 'GDPR', 'ISO 27001', 'UK data residency', 'Penetration tested quarterly'],
  link: { label: 'Read the trust centre →', href: '#' }
};

/**
 * Pricing. Monthly price in whole dollars; the yearly figure is
 * DERIVED, never typed — see pricing.js. Change a monthly number
 * and every yearly figure and saving updates with it.
 */
export const pricing = {
  eyebrow: 'Pricing',
  heading: 'Priced per workspace, not per question.',
  sub: 'Because the moment you meter the questions, people stop asking the interesting ones.',
  yearlyDiscount: 0.10,
  tiers: [
    {
      id: 'free', name: 'Free', monthly: 0,
      cadenceLabel: 'forever',
      yearlyOverride: '30 days unlimited, then 3 a month',
      desc: 'For trying one real outcome before you commit to anything.',
      cta: 'Start free', ctaStyle: 'ghost', highlighted: false,
      features: ['30 days of unlimited outcomes', 'Then 3 outcomes a month, for life', '3 connections', 'Plan review and activity log']
    },
    {
      id: 'starter', name: 'Starter', monthly: 69,
      desc: 'For one person with a question they keep postponing.',
      cta: 'Start 7-day trial', ctaStyle: 'ghost', highlighted: false,
      features: ['Unlimited outcomes', 'All 14 connections', 'Plan review and activity log', 'Email support']
    },
    {
      id: 'business', name: 'Business', monthly: 99,
      desc: 'For a founder running the whole thing themselves.',
      cta: 'Start 7-day trial', ctaStyle: 'primary', highlighted: true, badge: 'MOST CHOSEN',
      features: ['Everything in Starter', 'Deep digs across a full quarter', 'Context memory that compounds', 'Approvals and handoffs', 'Priority support']
    },
    {
      id: 'teams', name: 'Teams', monthly: 279,
      desc: 'For the team that runs on answers nobody has time to dig for.',
      cta: 'Start 7-day trial', ctaStyle: 'ghost', highlighted: false,
      features: ['Everything in Business', 'Up to 10 seats', 'Shared outcome library', 'Team-wide context memory', 'Usage and impact reporting']
    },
    {
      id: 'enterprise', name: 'Enterprise', monthly: null,
      cadenceLabel: 'talk to sales',
      yearlyOverride: 'Annual agreement',
      desc: 'For when the data is sensitive and the answers are board-level.',
      cta: 'Talk to sales', ctaStyle: 'dark', highlighted: false,
      features: ['SSO, SCIM and audit logs', 'Private deployment option', 'Custom connections', 'Named support engineer', 'Data residency controls']
    }
  ]
};

export const faq = {
  eyebrow: 'FAQ',
  heading: 'Frequently asked questions',
  sub: 'Everything people want to know before they connect anything.',
  items: [
    { q: 'What actually happens to my data?', a: 'Kloyya reads through your existing permissions and nothing else. Your data never trains a shared model, connections are read-only until you approve a specific write, and revoking a source makes Kloyya forget what it read from it within the hour.' },
    { q: 'How is this different from asking a chatbot?', a: "A chatbot answers the question you typed. Kloyya reads your actual accounts, threads and files, then tells you when the question you typed wasn't the useful one. It shows the plan before it runs and cites every source afterwards." },
    { q: 'Can it do things, or only tell me things?', a: 'Both — but it drafts before it acts. Emails, tasks, docs and updates are prepared and held. Nothing leaves your workspace until you have read the words and pressed send.' },
    { q: 'What if it gets something wrong?', a: "It tells you when it isn't sure, and why. Every claim links back to the thread, record or file it came from, so you can check the reasoning rather than trusting the conclusion." },
    { q: 'Which tools does it connect to?', a: 'Fourteen today: Slack, Gmail, Google Calendar, Google Drive, Notion, Linear, Jira, GitHub, Figma, Salesforce, HubSpot, Asana, WhatsApp Business and Instagram. More each month.' },
    { q: 'How long does an outcome take?', a: "Most finish in five to fifteen minutes. Deep digs across a full quarter of data can run longer — you can close the tab and Kloyya will tell you when it's done." }
  ],
  footNote: "Still unsure? Book a demo and we'll run one of your own outcomes live.",
  initialOpen: 0
};

export const finalCta = {
  heading: 'Start with one outcome.',
  sub: "We'll do the digging.",
  primary: 'Start 7-day free trial',
  secondary: 'Talk to our team',
  footnote: '$69 a month after the trial. No card to start.'
};

export const footer = {
  tagline: 'Ask for the outcome, not the',
  taglineAccent: 'answer',
  columns: [
    { title: 'Product',   links: ['Outcome composer', 'Plan review', 'Live runs', 'Connections', 'Pricing'] },
    { title: 'Resources', links: ['Documentation', 'Outcome library', 'Prompting guide', 'Changelog', 'Support'] },
    { title: 'Company',   links: ['About', 'Customers', 'Careers', 'Blog', 'Contact'] },
    { title: 'Legal',     links: ['Privacy', 'Terms', 'Security', 'Trust centre', 'Status'] }
  ],
  copyright: '© 2026 Kloyya Inc. All rights reserved.',
  /* ⚠ Wire to a real status source before launch, or remove. */
  status: 'All systems operational',
  socials: [
    { name: 'TikTok',    icon: 'https://cdn.simpleicons.org/tiktok/A8A296',    href: '#' },
    { name: 'Instagram', icon: 'https://cdn.simpleicons.org/instagram/A8A296', href: '#' },
    { name: 'X',         icon: 'https://cdn.simpleicons.org/x/A8A296',         href: '#' }
  ]
};
