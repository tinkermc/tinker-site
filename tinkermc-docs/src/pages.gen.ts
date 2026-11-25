// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages } from 'waku/router'

// prettier-ignore
type Page =
  | { path: '/agent/install'; render: 'static' }
  | { path: '/agent/troubleshooting'; render: 'static' }
  | { path: '/agent/update'; render: 'static' }
  | { path: '/contributing/kitchen-sink'; render: 'static' }
  | { path: '/dash/connect'; render: 'static' }
  | { path: '/dash/console'; render: 'static' }
  | { path: '/dash/create-server'; render: 'static' }
  | { path: '/dash/import-crafty'; render: 'static' }
  | { path: '/dash/install'; render: 'static' }
  | { path: '/dash/players'; render: 'static' }
  | { path: '/dash/server'; render: 'static' }
  | { path: '/dash/world'; render: 'static' }
  | { path: '/getting-started/how-it-works'; render: 'static' }
  | { path: '/getting-started/quick-start'; render: 'static' }
  | { path: '/getting-started/requirements'; render: 'static' }
  | { path: '/help/faq'; render: 'static' }
  | { path: '/help/support'; render: 'static' }
  | { path: '/'; render: 'static' }
  | { path: '/remote/tailscale'; render: 'static' }
  | { path: '/remote/tinkertunnel'; render: 'static' }

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>
  }
  interface CreatePagesConfig {
    pages: Page
  }
}
