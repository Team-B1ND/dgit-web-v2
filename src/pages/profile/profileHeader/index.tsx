import Skeleton from '@src/components/common/skeleton';
import * as S from './style'

interface ProfileHeaderProps {
  name?: string;
  username?: string;
  bio?: string;
  avatarUrl?: string;
}

const ProfileHeader = ({
  name,
  username,
  bio,
  avatarUrl,
}: ProfileHeaderProps) => {
  return (name && username && bio && avatarUrl) ? (
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
  ) : (
    <Skeleton width='100%' height='176px' borderRadius='18px' />
  )
}

export default ProfileHeader