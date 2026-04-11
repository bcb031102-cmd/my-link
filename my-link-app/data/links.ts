/**
 * 마이링크 (MyLink) 더미 데이터
 * PRD(docs/prd.md)의 데이터 스키마를 준수하여 작성되었습니다.
 */

export interface Link {
  id: string;
  title: string;
  url: string;
  clicks: number; // 클릭 수 (기본값 0)
  createdAt: Date; // 생성일 (최신순 정렬에 사용)
  icon?: string; // 아이콘 식별자 (PRD에 따라 자동 파비콘 추출 방식으로 대체 가능)
}

export const dummyLinks: Link[] = [
  {
    id: '5',
    title: '포트폴리오',
    url: 'https://portfolio.com',
    clicks: 310,
    createdAt: new Date('2024-03-20T16:20:00Z'),
    icon: 'briefcase',
  },
  {
    id: '4',
    title: 'GitHub',
    url: 'https://github.com/username',
    clicks: 230,
    createdAt: new Date('2024-03-15T11:45:00Z'),
    icon: 'github',
  },
  {
    id: '3',
    title: '블로그',
    url: 'https://blog.naver.com',
    clicks: 85,
    createdAt: new Date('2024-03-10T09:15:00Z'),
    icon: 'globe',
  },
  {
    id: '2',
    title: '유튜브',
    url: 'https://www.youtube.com',
    clicks: 450,
    createdAt: new Date('2024-03-05T14:30:00Z'),
    icon: 'youtube',
  },
  {
    id: '1',
    title: '인스타그램',
    url: 'https://www.instagram.com',
    clicks: 120,
    createdAt: new Date('2024-03-01T10:00:00Z'),
    icon: 'instagram',
  },
];
