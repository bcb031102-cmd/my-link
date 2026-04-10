# 마이링크 (MyLink) - PRD (기능 정의서)

## 1. 프로젝트 개요
### 1.1 프로젝트명
- **마이링크 (MyLink)**

### 1.2 목적
- 개인의 주요 링크를 모아 제공하는 아주 심플한 **'디지털 명함'** 서비스입니다.
- 불필요한 기능(이미지 업로드, 테마 등)을 배제하고 직관적인 편집과 정보 전달에 집중합니다.

### 1.3 대상 사용자
- 복잡한 설정 없이 빠르게 자신만의 링크 페이지를 만들고 싶은 모든 사용자

### 1.4 기술 스택
- **Frontend**: Next.js (App Router), React, Tailwind CSS
- **UI library**: **shadcn/ui**
- **Authentication**: **Firebase Auth (Google Social Login)**
- **Database**: **Cloud Firestore**
- **Favicon API**: **Google S2 Favicon API** (`https://www.google.com/s2/favicons?domain=...`)

---

## 2. 핵심 기능 목록

### 2.1 필수 기능 (Must-Have)
| 기능명 | 설명 | 비고 |
| :--- | :--- | :--- |
| **Google 소셜 로그인** | Firebase Auth를 통한 단일 구글 계정 인증 | 간편 진입 |
| **링크 관리 (CRUD)** | 링크 제목 및 URL 추가, 수정, 삭제 | **인라인 편집** 적용 |
| **자동 파비콘 노출** | 구글 API를 통해 URL의 파비콘을 자동으로 아이콘화 | Google S2 API 사용 |
| **프로필 관리** | **닉네임(Nickname)**, 한 줄 소개(Bio) 설정 및 수정 | **이미지 업로드 없음** |
| **닉네임 기반 URL** | 별도의 핸들 없이 사용자의 닉네임이 고유 URL 경로가 됨 | 예: `mylink.io/닉네임` |
| **SNS 아이콘 연동** | 주요 소셜 채널 링크 아이콘 제공 | 기본 세트 |

---

## 3. 기능 상세 설명

### 3.1 인라인 편집 (Inline Editing)
- **UX**: 링크의 제목이나 URL을 수정할 때 별도의 페이지 이동이나 모달 없이, 해당 항목에서 즉시 텍스트를 수정할 수 있는 방식(Inline)을 채택합니다.
- **범위**: 링크 아이템뿐만 아니라 프로필의 닉네임과 소개글도 인라인으로 수정이 가능해야 합니다.

### 3.2 닉네임 기반 고유 주소
- **구조**: `[도메인]/[사용자 닉네임]`
- **특징**: 사용자가 닉네임을 수정하면 공개 페이지의 URL 경로도 함께 변경됩니다.

### 3.3 사용자 공개 페이지
- **디자인**: 이미지와 테마가 없는 미니멀리즘 디자인을 지향하며, shadcn/ui의 기본 컴포넌트 스타일을 활용합니다.

---

## 4. 데이터 저장 구조 (Firestore)

### 4.1 데이터 스키마
- **users** {collection}
  - **[uid]** {document}
    - **nickname**: string (URL 경로로 사용됨, 필수)
    - **bio**: string
    - **email**: string
    - **links** {sub-collection}
      - **[linkId]** {document}
        - title: string
        - url: string
        - createdAt: timestamp

---

## 5. UI/UX 디자인 원칙
1. **Zero Asset Upload**: 이미지 업로드 기능을 아예 제외하여 서비스 운영 및 사용의 복잡도를 최소화합니다.
2. **Inline Interaction**: 모든 정보의 수정은 실시간/인라인 방식으로 처리하여 데이터 관리의 직관성을 높입니다.
3. **Typography Focused**: 이미지 요소가 없으므로 텍스트 가독성과 shadcn/ui의 정갈한 레이아웃에 집중합니다.
