import CommitRank from '@src/pages/rank/commit'
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'

export const Route = createFileRoute('/rank_/_rankLayout/commit/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Suspense fallback={<>loading....</>}>
      <CommitRank/>
    </Suspense>
  )
}
