import * as S from './style'

interface ProfileHeaderProps {
  name: string;
  username: string;
  bio: string;
  avatarUrl: string;
}

const ProfileHeader = ({
  name,
  username,
  bio,
  avatarUrl,
}: ProfileHeaderProps) => {
  return (
    <S.ProfileHeaderContainer>
      <S.ProfileImage $profileImg={avatarUrl}/>
      <S.ProfileDataSection>
        <div>
          <p>{name}</p>
          <a href={`https://github.com/${username}`} target='_blank'>@{username}</a>
        </div>
        <p>{bio ?? "자기소개가 없습니다."}</p>
      </S.ProfileDataSection>
    </S.ProfileHeaderContainer>
  );
}

export default ProfileHeader