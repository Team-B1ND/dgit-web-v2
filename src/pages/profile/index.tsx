import ProfileHeader from '@src/pages/profile/profileHeader'
import * as S from './style'
import { useGetUserProfile } from '@src/hooks/user';
import { PROFILE_RECORD_SECTIONS, PROFILE_BIG_RECORDS, LEVEL_DUMMY_DATA } from '@src/constants/user/user.constant';
import Skeleton from '@src/components/common/skeleton';

const ProfilePage = () => {
  const { userProfileData: data, isLoading } = useGetUserProfile();
  const profile = data?.data;

  const getRecordValue = (key: string | null) => {
    if (!key || !profile) return 0;
    return profile[key as keyof typeof profile] ?? 0;
  };

  const getBigRecordMainValue = (key: string | null) => {
    if (!key) return LEVEL_DUMMY_DATA.level;
    if (!profile) return 0;
    return profile[key as keyof typeof profile] ?? 0;
  };

  const renderBigRecordSub = (subType: 'percentage' | 'exp') => {
    if (subType === 'exp') {
      return `${LEVEL_DUMMY_DATA.currentExp} / ${LEVEL_DUMMY_DATA.maxExp} EXP`;
    }
    // 랭킹 퍼센트 계산 로직 (임시로 24% 고정)
    return `상위 24%`;
  };

  return !isLoading ? (
    <S.ProfileLayoutContainer>
      <ProfileHeader
        name={profile!.name}
        username={profile!.username}
        bio={profile!.bio}
        avatarUrl={profile!.avatarUrl}
      />
      <S.ProfileMainContainer>
        <S.ProfileRecordContainer>
          {PROFILE_RECORD_SECTIONS.map((section, sectionIndex) => (
            <S.ProfileRecordItem key={sectionIndex}>
              {section.title && <p>{section.title}</p>}
              {section.items.map((item, itemIndex) => (
                <S.ProfileRecordRow key={itemIndex}>
                  <p>{item.label}</p>
                  <span>
                    {getRecordValue(item.key)}
                    {item.unit}
                  </span>
                </S.ProfileRecordRow>
              ))}
            </S.ProfileRecordItem>
          ))}
        </S.ProfileRecordContainer>
        <S.ProfileBigRecordContainer>
          {PROFILE_BIG_RECORDS.map((record, index) => (
            <S.ProfileBigRecordItem key={index}>
              <p>{record.title}</p>
              <div>
                {getBigRecordMainValue(record.key)}
                {record.mainUnit}
              </div>
              <span>{renderBigRecordSub(record.subType)}</span>
            </S.ProfileBigRecordItem>
          ))}
        </S.ProfileBigRecordContainer>
      </S.ProfileMainContainer>
    </S.ProfileLayoutContainer>
  ) : (
    <S.ProfileLayoutContainer>
      <Skeleton width="100%" height="176px" borderRadius="18px" />
      <S.ProfileMainContainer>
        <S.ProfileRecordContainer>
          {PROFILE_RECORD_SECTIONS.map((section, idx) => (
            <S.ProfileRecordItem key={idx}>
              {section.title && <p>{section.title}</p>}
              {section.items.map((_, idx) => (
                <Skeleton key={idx} width="100%" height="24px" borderRadius="16px" />
              ))}
            </S.ProfileRecordItem>
          ))}
        </S.ProfileRecordContainer>
        <S.ProfileBigRecordContainer>
          {PROFILE_BIG_RECORDS.map((_, idx) => (
            <Skeleton key={idx} width='100%' height='100%' borderRadius='18px'/>
          ))}
        </S.ProfileBigRecordContainer>
      </S.ProfileMainContainer>
    </S.ProfileLayoutContainer>
  );
}

export default ProfilePage