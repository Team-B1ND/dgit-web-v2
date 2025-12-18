import RepositoryRank from '@src/pages/rank/repository';
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react';

export const Route = createFileRoute('/rank_/_rankLayout/repository/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Suspense fallback={<>loading....</>}>
      <RepositoryRank />
    </Suspense>
  );
}
