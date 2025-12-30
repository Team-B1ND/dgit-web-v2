import { useGetWeeklyCommitsRanker } from "@src/queries/honor/honor.queries"
import * as S from "./style"
import { Trophy } from "@b1nd/dds-web";

const WeeklyCommitsRanker = () => {
  const { data } = useGetWeeklyCommitsRanker();
  return data.data.length !== 0 ? (
    <S.WeeklyCommitsRankerContainer>
      {data.data.map((item, idx) => (
        <S.WeeklyCommitsRankerItem
          $width={idx === 0 ? "FULL" : `${220 - 20 * idx}px`}
        >
          <p>#{idx + 1}</p>
          <S.WeeklyCommitsRankerData>
            <S.WeeklyCommitsRankerImage $imageUrl={item.avatarUrl} />
            <S.WeeklyCommitsRankerNameContainer>
              <p>{item.name}</p>
              <span>{item.githubName}</span>
            </S.WeeklyCommitsRankerNameContainer>
            <S.WeeklyCommitsRankerAwardCount>
              <Trophy size={24} />
              <p>x{item.firstPlaceCount}</p>
            </S.WeeklyCommitsRankerAwardCount>
          </S.WeeklyCommitsRankerData>
        </S.WeeklyCommitsRankerItem>
      ))}
    </S.WeeklyCommitsRankerContainer>
  ) : (
    <></>
  )
}

export default WeeklyCommitsRanker