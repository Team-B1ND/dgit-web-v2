import * as S from './style'

const ProfileHeader = () => {
  return (
    <S.ProfileHeaderContainer>
      <S.ProfileImage $profileImg="https://picsum.photos/200"/>
      <S.ProfileDataSection>
        <div>
          <p>name field</p>
          <span>@github id field</span>
        </div>
        <p>description field</p>
      </S.ProfileDataSection>
    </S.ProfileHeaderContainer>
  );
}

export default ProfileHeader