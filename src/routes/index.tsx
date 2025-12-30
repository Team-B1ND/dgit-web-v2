import TableSkeleton from '@src/components/common/table/tableSkeleton';
import RankLayout from '@src/pages/rank'
import TotalRank from '@src/pages/rank/total';
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react';

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <RankLayout>
      <Suspense fallback={<TableSkeleton />}>
        <TotalRank />
      </Suspense>
    </RankLayout>
  );
}
