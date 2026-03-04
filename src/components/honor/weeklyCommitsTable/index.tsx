import Avatar from "@src/components/common/avatar";
import GithubLink from "@src/components/common/githubLink";
import Table from "@src/components/common/table";
import { WEEKLY_COMMITS_TABLE } from "@src/constants/honor/honor.constant";
import { useGetWeeklyCommits } from "@src/queries/honor/honor.queries"

const WeeklyCommitsTable = () => {
  const { data } = useGetWeeklyCommits();
  return (
    <Table
      keys={WEEKLY_COMMITS_TABLE}
      data={data.data.content.map((item) => [
        item.weekStart,
        item.weekCommits,
        <Avatar url={item.avatarUrl} size="28px" />,
        <GithubLink username={item.githubName}/>,
        item.name,
        item.bio,
      ])}
    />
  );
}

export default WeeklyCommitsTable