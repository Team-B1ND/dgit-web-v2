import Avatar from "@src/components/common/avatar";
import Table from "@src/components/common/table";
import { STREAK_RANK_TABLE } from "@src/constants/rank/rank.constant";
import { useGetRankQuery } from "@src/queries/rank/rank.queries";

const StreakRank = () => {
  const { data } = useGetRankQuery<"streak">("streak");
  return (
    <Table
      keys={STREAK_RANK_TABLE}
      data={data.data.map((item) => [
        item.rank,
        item.longestStreak,
        <Avatar url={item.avatarUrl} size="28px" />,
        item.username,
        item.name,
        item.bio,
      ])}
    />
  );
};

export default StreakRank;
