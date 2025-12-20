import WeeklyCommits from '@src/pages/honor/weeklyCommits'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/honor_/_honorLayout/weekly-commit/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <WeeklyCommits />
  )
}
