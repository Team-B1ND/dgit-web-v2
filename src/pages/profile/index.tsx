import ProfileHeader from '@src/pages/profile/profileHeader'
import * as S from './style'

const ProfilePage = () => {
  return (
    <S.ProfileLayoutContainer>
      <ProfileHeader />
      <S.ProfileMainContainer>
        <S.ProfileRecordContainer>
          <S.ProfileRecordItem>
            <S.ProfileRecordRow>
              <p>오늘의 커밋</p>
              <span>{0}회</span>
            </S.ProfileRecordRow>
            <S.ProfileRecordRow>
              <p>이번주 커밋</p>
              <span>{0}회</span>
            </S.ProfileRecordRow>
          </S.ProfileRecordItem>
          <S.ProfileRecordItem>
            <p>기록</p>
            <S.ProfileRecordRow>
              <p>레포지토리</p>
              <span>{0}개</span>
            </S.ProfileRecordRow>
            <S.ProfileRecordRow>
              <p>총 커밋</p>
              <span>{0}커밋</span>
            </S.ProfileRecordRow>
            <S.ProfileRecordRow>
              <p>최장 스트릭</p>
              <span>{0}일</span>
            </S.ProfileRecordRow>
          </S.ProfileRecordItem>
        </S.ProfileRecordContainer>
        <S.ProfileBigRecordContainer>
          <S.ProfileBigRecordItem>
            <p>랭킹</p>
            <div>{120}위</div>
            <span>상위 {24}%</span>
          </S.ProfileBigRecordItem>
          <S.ProfileBigRecordItem>
            <p>레벨</p>
            <div>{20}LV</div>
            <span>{1000} / {2400} EXP</span>
          </S.ProfileBigRecordItem>
        </S.ProfileBigRecordContainer>
      </S.ProfileMainContainer>
    </S.ProfileLayoutContainer>
  );
}

export default ProfilePage