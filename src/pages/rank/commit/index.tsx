import Avatar from "@src/components/common/avatar";
import Table from "@src/components/common/table";
import { COMMIT_RANK_TABLE } from "@src/constants/rank/rank.constant";
import { useGetRankQuery } from "@src/queries/rank/rank.queries";

const CommitRank = () => {
  const { data } = useGetRankQuery<"commit">("commit");
  return (
    <Table
      keys={COMMIT_RANK_TABLE}
      data={data.data.map((item) => [
        item.rank,
        item.totalCommits,
        <Avatar url={item.avatarUrl} size="28px" />,
        item.username,
        item.name,
        item.bio,
      ])}
    />
  );
};

export default CommitRank;
