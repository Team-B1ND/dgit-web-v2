import { RankScope } from "@src/types/rank/rank.type";

export const QUERY_KEYS = {
  rank: {
    getRankByScope: (scope: RankScope) => [`rank/${scope}`],
  },
  honor: {
    getWeeklyCommits: () => [`honor/weeklyCommits`],
    getWeeklyCommitsRanker: () => [`honor/weeklyCommits/ranker`],
  },
  user: {
    getUserProfile: (id: number) => [`/stats/user`, id],
  },
};