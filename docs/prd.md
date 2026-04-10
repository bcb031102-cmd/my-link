# 마이링크 (MyLink) - PRD (기능 정의서)

## 1. 프로젝트 개요
### 1.1 프로젝트명
- **마이링크 (MyLink)**

### 1.2 목적
- 분산된 개인의 소셜 미디어 채널, 포트폴리오, 홍보 링크 등을 하나의 페이지에 모아서 관리하고 공유할 수 있는 **'디지털 링크 명함'** 서비스입니다.
- 링크트리(Linktree)의 핵심 기능을 벤치마킹하여 사용자 친화적인 편집 경험을 제공하는 것을 목표로 합니다.

### 1.3 대상 사용자
- 인플루언서, 크리에이터 등 여러 SNS 채널을 운영하는 사용자
- 자신의 포트폴리오를 한눈에 보여주고 싶은 구직자 및 개발자
- 소규모 온라인 비즈니스를 운영하는 사업자

### 1.4 기술 스택
- **Frontend**: Next.js, React, Tailwind CSS
- **State Management**: React Context API 또는 Zustand (간단한 상태 관리)
- **Deployment**: Vercel (권장)
- **Database (추후)**: PostgreSQL (Prisma/Drizzle ORM 권장) or MongoDB

---

## 2. 핵심 기능 목록

### 2.1 필수 기능 (Must-Have)
| 기능명 | 설명 | 비고 |
| :--- | :--- | :--- |
| **회원가입/로그인** | 이메일과 비밀번호를 이용한 기본 인증 | MVP 필수 |
| **링크 관리 (CRUD)** | 링크 제목 및 URL 추가, 수정, 삭제 기능 | 핵심 가치 |
| **드래그 앤 드롭 (DND)** | 링크 리스트의 순서를 직관적으로 변경 가능 | UX 핵심 |
| **실시간 모바일 미리보기** | 편집 중인 내용이 우측 모바일 목업 화면에 즉시 반영 | 편집 경험 향상 |
| **프로필 설정** | 프로필 이미지 업로드, 닉네임, 한 줄 소개 관리 | 커스텀 아이덴티티 |
| **SNS 아이콘 연동** | 인스타그램, 트위터, 유튜브 등 아이콘 기반 링크 연결 | 상/하단 배치 |
| **테마 선택** | 사전에 정의된 컬러 및 버튼 스타일 적용 (최소 3종 이상) | 기본 커스터마이징 |

### 2.2 선택/추후 개발 기능 (Nice-to-Have)
- **소셜 로그인**: 구글, 페이스북, 카카오 등 간편 인증
- **링크 애니메이션**: 특정 링크 강조를 위한 바운스, 반짝임 효과
- **클릭 통계 (Analytics)**: 날짜별 총 방문자 수 및 각 링크별 클릭률 집계
- **커스텀 도메인**: `mylink.io/username` 외에 개인 도메인 연동
- **SEO 최적화**: 검색 엔진 결과에 노출될 타이틀 및 메타 태그 설정

---

## 3. 기능 상세 설명

### 3.1 링크 편집기 (Link Editor)
- **기능**: 사용자는 "새 링크 추가" 버튼을 눌러 새 항목을 생성할 수 있습니다.
- **필드**: 제목(Title), URL.
- **인터랙션**:
  - 각 링크 항목 왼쪽의 핸들을 통해 드래그 앤 드롭으로 순서 변경.
  - 토글 버튼을 통해 링크 활성화/비활성화 가능.

### 3.2 실시간 미리보기 (Live Preview)
- **구조**: 편집 화면이 좌측(또는 상단), 모바일 기기 프레임을 가진 미리보기 화면이 우측(또는 하단)에 위치.
- **반영**: 제목을 입력하거나 색상을 바꾸면 페이지 새로고침 없이 미리보기 화면이 업데이트됨.

### 3.3 사용자 공개 페이지 (Public Bio Page)
- **URL 구조**: `[서비스도메인]/[username]` 형태의 고유 경로 제공.
- **디자인**: 모바일 뷰에 최적화된 반응형 레이아웃 (Centered Layout).

---

## 4. 데이터 구조 제안

### 4.1 초기 MVP용 Mockup 구조
```javascript
const userProfile = {
  uid: "user_123",
  username: "barkchaebin",
  displayName: "박채빈",
  bio: "Next.js 개발자입니다.",
  profileImage: "/images/avatar.png",
  theme: "modern-dark",
  links: [
    { id: "l1", title: "GitHub", url: "https://github.com", active: true },
    { id: "l2", title: "Blog", url: "https://velog.io", active: true }
  ],
  socials: {
    instagram: "@my_handle",
    twitter: "@my_handle"
  }
};
```

### 4.2 향후 DB 스키마 (Relation 제안)
- **User**: `id`, `email`, `password_hash`, `username`, `created_at`
- **Profile**: `userId`, `displayName`, `bio`, `profileImage`, `themeId`
- **Link**: `id`, `profileId`, `title`, `url`, `order`, `isActive`, `clicks`
- **Theme**: `id`, `name`, `config_json` (배경색, 버튼색, 폰트 등)

---

## 5. UI/UX 디자인 원칙
1. **Mobile First**: 모든 페이지는 모바일에서 가장 완벽하게 보여야 함.
2. **Simple & Bold**: 버튼과 텍스트는 명확하게 구분되어야 하며, 불필요한 장식은 최소화함.
3. **Interactive**: 드래그 앤 드롭, 버튼 클릭 시 즉각적인 시각적 피드백 제공.
