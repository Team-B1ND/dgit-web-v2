import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/rank_/_rankLayout/commit/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/rank/_rankLayout/commit/"!</div>
}
