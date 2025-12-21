export interface UserProfileType {
  username: string;
  name: string;
  bio: string;
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