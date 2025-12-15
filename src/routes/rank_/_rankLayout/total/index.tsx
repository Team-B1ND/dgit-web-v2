import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/rank_/_rankLayout/total/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/rank/_rankLayout/total/"!</div>
}
