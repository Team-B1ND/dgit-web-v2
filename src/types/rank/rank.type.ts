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

export type GetRankType<K extends keyof RankTypeMap> = RankTypeMap[K];