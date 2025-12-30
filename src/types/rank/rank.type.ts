export interface CommitRankType {
  rank: number;
  totalCommits: number;
  avatarUrl: string;
  username: string;
  name: string;
  bio: string;
}

export interface RepositoryRankType {
  rank: number;
  totalCommits: number;
  stars: number;
  ownerAvatarUrl: string;
  owner: string;
  repoName: string;
}

export interface StreakRankType {
  rank: number;
  longestStreak: number;
  avatarUrl: string;
  username: string;
  name: string;
  bio: string;
}

export interface TotalRankType {
  rank: number;
  level: number;
  totalCommits: number;
  avatarUrl: string;
  username: string;
  name: string;
  bio: string;
}

export type RankScope = "commit" | "repository" | "streak" | "total";

type RankTypeMap = {
  commit: CommitRankType;
  repository: RepositoryRankType;
  streak: StreakRankType;
  total: TotalRankType;
};

/**
 * @description `"commit" | "repository" | "streak" | "total"` 을 제네릭으로 제공하면, 각 scope에 맞는 타입을 리턴합니다.
 */
export type GetRankType<K extends keyof RankTypeMap> = RankTypeMap[K];