import Skeleton from "@src/components/common/skeleton"
import TableSkeleton from "@src/components/common/table/tableSkeleton"
import WeeklyCommitsRanker from "@src/components/honor/weeklyCommitsRanker"
import WeeklyCommitsTable from "@src/components/honor/weeklyCommitsTable"
import { Suspense } from "react"

const WeeklyCommits = () => {
  return (
    <>
      <Suspense fallback={<Skeleton width="100%" height="280px" borderRadius="18px"/>}>
        <WeeklyCommitsRanker/>
      </Suspense>
      <Suspense fallback={<TableSkeleton/>}>
        <WeeklyCommitsTable/>
      </Suspense>
    </>
  )
}

export default WeeklyCommits