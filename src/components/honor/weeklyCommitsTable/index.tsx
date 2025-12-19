import Table from "@src/components/common/table";
import { WEEKLY_COMMITS_TABLE } from "@src/constants/honor/honor.constant";
import { useGetWeeklyCommits } from "@src/queries/honor/honor.queries"

const WeeklyCommitsTable = () => {
  const { data } = useGetWeeklyCommits();
  return (
    <Table
      keys={WEEKLY_COMMITS_TABLE}
      data={data.data.content.map(item => [
        item.weekStart,
        item.weekCommits,
        item.avatarUrl,
        item.githubName,
        item.name,
        item.bio
      ])}
    />
  )
}

export default WeeklyCommitsTable