import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/honor_/_honorLayout/weekly-project/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/honor_/_honorLayout/weekly-project/"!</div>
}
