import Table from "@src/components/common/table";
import { REPOSITORY_RANK_TABLE } from "@src/constants/rank/rank.constant";
import { useGetRankQuery } from "@src/queries/rank/rank.queries";

const RepositoryRank = () => {
  const { data } = useGetRankQuery<"repository">("repository");
  return (
    <Table
      keys={REPOSITORY_RANK_TABLE}
      data={data.data.map((item) => [
        item.rank,
        item.stars,
        item.totalCommits,
        item.ownerAvatarUrl,
        item.owner,
        item.repoName,
      ])}
    />
  );
};

export default RepositoryRank;
