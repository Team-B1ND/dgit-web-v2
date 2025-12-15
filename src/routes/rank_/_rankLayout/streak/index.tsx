import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/rank_/_rankLayout/streak/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/rank_/_rankLayout/streak/"!</div>
}
