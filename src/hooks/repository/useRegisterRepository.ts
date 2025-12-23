import { registerRepositoryApi } from "@src/api/repository/repository.api";
import { RegisterRepositoryType } from "@src/types/repository/repository.type";
import { ChangeEvent, useState } from "react"

export const useRegisterRepositroy = () => {
  const [repoData, setRepoData] = useState<RegisterRepositoryType>({
    githubAccountId: 0,
    owner: "",
    repoName: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const isValueFilled = repoData.owner.length !== 0 && repoData.repoName.length !== 0

  const handleRepoData = (e: ChangeEvent<HTMLInputElement>, key: keyof RegisterRepositoryType) => {
    if(key === "githubAccountId") {
      setRepoData(prev => ({...prev, [key]: Number(e.target.value)}))
    }
    else {
      setRepoData(prev => ({ ...prev, [key]: e.target.value}))
    }
  }

  const saveRepository = async () => {
    try {
      setIsLoading(true);
      await registerRepositoryApi({ ...repoData, githubAccountId: 1 });
    } catch {
      alert("오류가 발생해 등록에 실패했습니다, 재시도해주세요")
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    repoData,
    isLoading,
    isValueFilled,
    handleRepoData,
    saveRepository,
  }
}