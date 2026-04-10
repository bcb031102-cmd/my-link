# 마이링크 (MyLink) - PRD (기능 정의서)

## 1. 프로젝트 개요
### 1.1 프로젝트명
- **마이링크 (MyLink)**

### 1.2 목적
- 개인의 다양한 링크를 하나의 페이지에 깔끔하게 모아 보여주는 심플한 **'디지털 명함'** 서비스입니다.
- 복잡한 기능을 배제하고 핵심적인 링크 연결 기능에 집중합니다.

### 1.3 대상 사용자
- 소셜 미디어 채널이나 포트폴리오 사이트를 하나로 묶어 공유하고 싶은 일반 사용자 및 크리에이터

### 1.4 기술 스택
- **Frontend**: Next.js (App Router), React, Tailwind CSS
- **UI library**: **shadcn/ui**
- **Authentication**: **Firebase Auth (Google Social Login)**
- **Database**: **Cloud Firestore**
- **Deployment**: Vercel

---

## 2. 핵심 기능 목록

### 2.1 필수 기능 (Must-Have)
| 기능명 | 설명 | 비고 |
| :--- | :--- | :--- |
| **Google 소셜 로그인** | Firebase Auth를 통한 구글 계정 인증 | 단일 인증 방식 |
| **링크 관리 (CRUD)** | 링크 제목 및 URL 추가, 수정, 삭제 | 순서 변경/활성토글 없음 |
| **파비콘(Favicon) 아이콘** | 입력한 URL의 파비콘을 자동으로 아이콘으로 노출 | 시각적 편의성 |
| **프로필 설정** | **displayName**, 한 줄 소개(Bio), 프로필 이미지 관리 | 기본 정보 |
| **SNS 아이콘 연동** | 주요 소셜 미디어(인스타그램, 유튜브 등) 아이콘 링크 | 기본 제공 |

---

## 3. 기능 상세 설명

### 3.1 링크 관리
- **UI**: shadcn/ui 컴포넌트(Card, Input 등)를 활용한 정갈한 리스트 형태.
- **아이콘**: 사용자가 URL을 입력하면 해당 사이트의 파비콘을 자동으로 추출하여 표시.
- **단순화**: 드래그 앤 드롭을 통한 순서 변경 기능이나 링크 비활성화 기능은 포함하지 않음.

### 3.2 프로필 설정
- **기능**: 서비스 내에서 노출될 **displayName**과 소개글, 프로필 사진을 설정.

### 3.3 사용자 공개 페이지
- **반응형**: 모바일과 데스크탑 모두에서 최적화된 shadcn/ui 기반의 모던한 레이아웃 제공.

---

## 4. 데이터 저장 구조 (Firestore)

### 4.1 데이터 스키마
- **users** {collection}
  - **[uid]** {document}
    - **displayName**: string (필수)
    - bio: string
    - photoURL: string
    - email: string
    - **links** {sub-collection}
      - **[linkId]** {document}
        - title: string
        - url: string
        - createdAt: timestamp

---

## 5. UI/UX 디자인 원칙
1. **Shadcn/ui Aesthetic**: 라이브러리의 기본 디자인 시스템을 준수하여 깔끔하고 세련된 느낌 유지.
2. **Extreme Simplicity**: 사용자가 학습 없이 바로 사용할 수 있도록 불필요한 기능(미리보기, 애니메이션 등)은 배제.
3. **Consistency**: 모든 인터랙션 요소는 shadcn/ui의 일관된 테마를 따름.
