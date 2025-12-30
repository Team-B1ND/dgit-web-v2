export interface RegisterRepositoryType {
  githubAccountId: number;
  owner: string;
  repoName: string;
}

export interface RegisterRepositoryResType {
  id: number;
  owner: string;
  repoName: string;
  isApproved: true;
  totalCommits: number;
  stars: number;
  createdAt: string;
}