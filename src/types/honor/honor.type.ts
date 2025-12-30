export interface WeeklyCommitsType {
  rank: number;
  weekStart: string;
  weekCommits: number;
  avatarUrl: string;
  githubName: string;
  name: string;
  bio: string;
  firstPlaceCount: number;
}

export interface WeeklyCommitsPageResponse {
  content: WeeklyCommitsType[];
  totalElements: number;
  totalPages: number;
  currentPage: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface WeeklyCommitsRankerType {
  githubName: string;
  name: string;
  avatarUrl: string;
  firstPlaceCount: number;
}