# 마이링크 (MyLink) - PRD (기능 정의서)

## 1. 프로젝트 개요
### 1.1 프로젝트명
- **마이링크 (MyLink)**

### 1.2 목적
- 개발자와 크리에이터를 위한 **'기술 지향적 디지털 명함'** 서비스입니다.
- GitHub, 기술 블로그, 포트폴리오 사이트 등 전문적인 링크를 세련되게 모아 보여주는 것을 핵심 가치로 합니다.

### 1.3 대상 사용자
- **개발자**: 자신의 GitHub 저장소, 기술 블로그, 프로젝트 데모를 공유하고 싶은 엔지니어
- **테크 크리에이터**: 유튜브, 인스타그램 등에서 기술 관련 콘텐츠를 제작하는 창작자

### 1.4 기술 스택
- **Frontend**: Next.js (App Router), React, Tailwind CSS
- **UI Component Library**: **shadcn/ui** (Radix UI 기반)
- **Authentication**: **Firebase Auth (Google Social Login 단일 인증)**
- **Database**: Firestore (Firebase 연동 고려) 또는 PostgreSQL (Prisma)
- **Deployment**: Vercel

---

## 2. 핵심 기능 목록

### 2.1 필수 기능 (Must-Have)
| 기능명 | 설명 | 비고 |
| :--- | :--- | :--- |
| **Google 소셜 로그인** | Firebase Auth를 통한 단일 구글 계정 인증 | 간편한 가입 경험 |
| **링크 관리 (CRUD)** | 제목, URL 추가 및 수정 기능 (GitHub 연동 등 강조) | 기본 기능 |
| **드래그 앤 드롭 (DND)** | 링크 리스트 순서의 직관적 재정렬 | `dnd-kit` 권장 |
| **실시간 모바일 미리보기** | 에디팅 결과 소형 디바이스 뷰 실시간 반영 | shadcn/ui 기반 스타일 |
| **개발자 프로필 설정** | 이름, 한 줄 소개(Bio), 프로필 이미지 관리 | 미니멀 디자인 |
| **SNS 아이콘 연동** | GitHub, LinkedIn, Twitter(X) 등 테크 중심 아이콘 | 개발자 특화 |
| **shadcn/ui 테마 적용** | 다크/라이트 모드 지원 및 깔끔하고 모던한 UI 세트 | 디자인 일관성 |

### 2.2 향후 로드맵 (Future Roadmap)
- **방문자 클릭 통계**: 링크별 클릭 수 및 일일 방문자 수 시각화 데이터 제공
- **커스텀 도메인**: `mylink.io/[username]` 대신 개인 도메인 연동 기능
- **GitHub 잔디 연동**: 프로필 페이지에 사용자의 GitHub 활동(Contribution Graph) 표시
- **링크 애니메이션**: 강조하고 싶은 링크에 부드러운 호버링/웨이브 효과 추가
- **SEO 고급 설정**: 개발자 포트폴리오 검색 최적화를 위한 커스텀 메타 데이터 설정

---

## 3. 기능 상세 설명

### 3.1 링크 편집기 (Link Editor)
- **UI**: shadcn/ui의 `Card`, `Input`, `Switch` 컴포넌트를 사용하여 정갈한 인터페이스 구현.
- **필드**: 제목, URL, 활성화 상태 토글.
- **인터랙션**: 편집 즉시 자동 저장(Auto-save) 개념을 도입하여 사용자 경험 향상.

### 3.2 실시간 미리보기 (Live Preview)
- **디자인**: 실제 모바일 디스플레이 규격(iPhone 14/15 등)을 모방한 목업 프레임.
- **스타일**: shadcn/ui 기반의 고대비(High Contrast) 미니멀리즘 디자인 적용.

### 3.3 사용자 공개 페이지 (Public Bio Page)
- **반응형**: 데스크탑에서도 고급스럽게 보이도록 중앙 집중형 레이아웃 적용.
- **접근성**: 웹 표준을 준수하여 스크린 리더 및 키보드 조작성 확보.

---

## 4. 데이터 구조 제안

### 4.1 Firebase(Firestore) 기반 NoSQL 구조 예시
- **users** {collection}
  - **[uid]** {document}
    - email: string
    - username: string
    - profile: { displayName, bio, photoURL }
    - settings: { theme: "dark" | "light", accentColor: string }
    - links: [
        { id: string, title: string, url: string, active: boolean, order: number }
      ]
    - socials: { github: string, twitter: string, linkedIn: string }

---

## 5. UI/UX 디자인 원칙 (shadcn/ui 기반)
1. **Clean & Modern**: 여백(Spacing)과 타이포그래피를 강조한 shadcn/ui 특유의 미니멀리즘 유지.
2. **Developer-Friendly**: 코드 블록 스타일의 디자인 요소나 다크 모드를 기본 옵션으로 고려.
3. **Consistency**: 모든 버튼, 입력창, 모달은 shadcn/ui의 일관된 디자인 시스템을 따름.
