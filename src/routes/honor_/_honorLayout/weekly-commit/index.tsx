import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/honor_/_honorLayout/weekly-commit/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/honor/weekly-commit/"!</div>
}
