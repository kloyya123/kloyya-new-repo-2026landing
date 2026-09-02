/**
 * Tool registry — the single source of truth for every connected
 * app shown on the page (and, eventually, in the product).
 *
 * ⚠ The `icon` URLs are PLACEHOLDERS pointing at third-party CDNs.
 * Replace them with self-hosted SVGs before launch:
 *   · icon CDNs drop marks over trademark policy (this happened
 *     twice while the design was being built)
 *   · they leak visitor IPs to a third party
 *   · they are a render-blocking dependency on your busiest page
 * Check each vendor's brand guidelines for permitted use.
 *
 * Keep `id` values stable — the backend spec uses them as ToolId.
 */

export const TOOLS = {
  slack:      { id: 'slack',      name: 'Slack',      icon: 'https://www.google.com/s2/favicons?domain=slack.com&sz=64' },
  gmail:      { id: 'gmail',      name: 'Gmail',      icon: 'https://cdn.simpleicons.org/gmail' },
  gcal:       { id: 'gcal',       name: 'Calendar',   icon: 'https://cdn.simpleicons.org/googlecalendar' },
  notion:     { id: 'notion',     name: 'Notion',     icon: 'https://cdn.simpleicons.org/notion' },
  linear:     { id: 'linear',     name: 'Linear',     icon: 'https://cdn.simpleicons.org/linear' },
  jira:       { id: 'jira',       name: 'Jira',       icon: 'https://cdn.simpleicons.org/jira' },
  github:     { id: 'github',     name: 'GitHub',     icon: 'https://cdn.simpleicons.org/github' },
  figma:      { id: 'figma',      name: 'Figma',      icon: 'https://cdn.simpleicons.org/figma' },
  salesforce: { id: 'salesforce', name: 'Salesforce', icon: 'https://www.google.com/s2/favicons?domain=salesforce.com&sz=64' },
  hubspot:    { id: 'hubspot',    name: 'HubSpot',    icon: 'https://cdn.simpleicons.org/hubspot' },
  gdrive:     { id: 'gdrive',     name: 'Drive',      icon: 'https://cdn.simpleicons.org/googledrive' },
  asana:      { id: 'asana',      name: 'Asana',      icon: 'https://cdn.simpleicons.org/asana' },
  whatsapp:   { id: 'whatsapp',   name: 'WhatsApp',   icon: 'https://cdn.simpleicons.org/whatsapp' },
  instagram:  { id: 'instagram',  name: 'Instagram',  icon: 'https://cdn.simpleicons.org/instagram' }
};

/** Display order for the "connects to 14 places" strip. */
export const TOOL_ORDER = [
  'slack', 'gmail', 'gcal', 'notion', 'linear', 'jira', 'github',
  'figma', 'salesforce', 'hubspot', 'gdrive', 'asana', 'whatsapp', 'instagram'
];

export const allTools = () => TOOL_ORDER.map((k) => TOOLS[k]);
export const pickTools = (...ids) => ids.map((k) => TOOLS[k]);
