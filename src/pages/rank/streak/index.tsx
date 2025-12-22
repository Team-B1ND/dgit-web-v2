import Avatar from "@src/components/common/avatar";
import Table from "@src/components/common/table";
import CustomText from "@src/components/rank/customText";
import { STREAK_RANK_TABLE } from "@src/constants/rank/rank.constant";
import { useGetRankQuery } from "@src/queries/rank/rank.queries";

const StreakRank = () => {
  const { data } = useGetRankQuery<"streak">("streak");
  return (
    <Table
      keys={STREAK_RANK_TABLE}
      data={data.data.map((item) => [
        <CustomText text={"#" + item.rank} color="primaryNormal" weight="Bold" />,
        <CustomText text={item.longestStreak.toString()} color="primaryNormal" weight="Bold" />,
        <Avatar url={item.avatarUrl} size="28px" />,
        item.username,
        item.name,
        item.bio,
      ])}
    />
  );
};

export default StreakRank;
