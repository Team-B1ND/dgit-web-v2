import TableSkeleton from '@src/components/common/table/tableSkeleton'
import WeeklyCommitsTable from '@src/components/honor/weeklyCommitsTable'
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'

export const Route = createFileRoute('/honor_/_honorLayout/weekly-commit/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Suspense fallback={<TableSkeleton/>}>
      <WeeklyCommitsTable />
    </Suspense>
  )
}
