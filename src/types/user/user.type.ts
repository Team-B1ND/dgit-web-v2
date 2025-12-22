export interface UserProfileType {
  username: string;
  name: string;
  bio: string;
  avatarUrl: string;
  todayCommits: number;
  weekCommits: number;
  totalCommits: number;
  repositoryCount: number;
  longestStreak: number;
  currentStreak: number;
  ranking: number;
  level: number;
  updatedAt: string;
}

export interface UserGithubAccountType {
  id: number;
  username: string;
  createdAt: string;
  updatedAt: string;
}