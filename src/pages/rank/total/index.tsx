import Avatar from "@src/components/common/avatar";
import Table from "@src/components/common/table";
import { TOTAL_RANK_TABLE } from "@src/constants/rank/rank.constant";
import { useGetRankQuery } from "@src/queries/rank/rank.queries";

const TotalRank = () => {
  const { data } = useGetRankQuery<"total">("total");
  return (
    <Table
      keys={TOTAL_RANK_TABLE}
      data={data.data.map((item) => [
        item.rank,
        item.level,
        item.totalCommits,
        <Avatar url={item.avatarUrl} size="28px" />,
        item.username,
        item.name,
        item.bio,
      ])}
    />
  );
};

export default TotalRank;
