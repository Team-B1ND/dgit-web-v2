import HonorLayout from '@src/pages/honor'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/honor/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <HonorLayout>
      <Outlet/>    
    </HonorLayout>
  )
}
