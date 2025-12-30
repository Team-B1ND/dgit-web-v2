import RegisterRepository from '@src/components/repository/registerRepository';
import RankLayout from '@src/pages/rank'
import { createFileRoute, Outlet, useRouterState } from '@tanstack/react-router'

export const Route = createFileRoute('/rank_/_rankLayout')({
  component: RouteComponent,
})

function RouteComponent() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <>
      <RankLayout>
        <Outlet/>
      </RankLayout>
      {pathname === "/rank/repository" && <RegisterRepository />}
    </>
  )
}
