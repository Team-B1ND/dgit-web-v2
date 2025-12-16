import Profile from '@src/pages/profile'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Profile/>
}
