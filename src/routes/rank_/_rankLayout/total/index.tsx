import TotalRank from '@src/pages/rank/total'
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'

export const Route = createFileRoute('/rank_/_rankLayout/total/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Suspense fallback={<>loading</>}>
      <TotalRank />
    </Suspense>
  )
}
