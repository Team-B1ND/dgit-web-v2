import { UserProfileType } from '@src/types/user/user.type';

export interface ProfileRecordItem {
  label: string;
  key: keyof UserProfileType | null;
  unit: string;
}

export interface ProfileRecordSection {
  title?: string;
  items: ProfileRecordItem[];
}

export interface ProfileBigRecordItem {
  title: string;
  key: keyof UserProfileType | null;
  mainUnit: string;
  subType: 'percentage' | 'exp';
}

export const PROFILE_RECORD_SECTIONS: ProfileRecordSection[] = [
  {
    items: [
      { label: '오늘의 커밋', key: 'todayCommits', unit: '회' },
      { label: '이번주 커밋', key: 'weekCommits', unit: '회' },
    ],
  },
  {
    title: '기록',
    items: [
      { label: '레포지토리', key: 'repositoryCount', unit: '개' },
      { label: '총 커밋', key: 'totalCommits', unit: '커밋' },
      { label: '최장 스트릭', key: 'longestStreak', unit: '일' },
    ],
  },
];

export const PROFILE_BIG_RECORDS: ProfileBigRecordItem[] = [
  {
    title: '랭킹',
    key: 'ranking',
    mainUnit: '위',
    subType: 'percentage',
  },
  {
    title: '레벨',
    key: null,
    mainUnit: 'LV',
    subType: 'exp',
  },
];

// 레벨 더미 데이터 (추후 API 연동 시 교체)
export const LEVEL_DUMMY_DATA = {
  level: 1,
  currentExp: 1,
  maxExp: 1,
};
