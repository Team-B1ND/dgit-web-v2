import { RankScope } from "@src/types/rank/rank.type";

export const QUERY_KEYS = {
  rank: {
    getRankByScope: (scope: RankScope) => [`rank/${scope}`]
  }
}