import * as S from './style'

const ProfileHeader = () => {
  return (
    <S.ProfileHeaderContainer>
      <S.ProfileImage $profileImg="https://picsum.photos/200"/>
      <S.ProfileDataSection>
        <div>
          <p>name field</p>
          <a href={`https://github.com/${"github"}`} target='_blank'>@github id field</a>
        </div>
        <p>description field</p>
      </S.ProfileDataSection>
    </S.ProfileHeaderContainer>
  );
}

export default ProfileHeader