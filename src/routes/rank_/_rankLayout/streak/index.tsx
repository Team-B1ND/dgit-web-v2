import TableSkeleton from '@src/components/common/table/tableSkeleton';
import StreakRank from '@src/pages/rank/streak';
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react';

export const Route = createFileRoute('/rank_/_rankLayout/streak/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Suspense fallback={<TableSkeleton/>}>
      <StreakRank />
    </Suspense>
  );
}
