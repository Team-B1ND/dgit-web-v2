import RankLayout from '@src/pages/rank'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/rank_/_rankLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <RankLayout>
      <Outlet/>
    </RankLayout>
  )
}
