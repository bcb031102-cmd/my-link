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
| **Google 소셜 로그인** | Firebase Auth를 통한 구글 계정 인증 | 간편 진입 |
| **링크 관리 (CRUD)** | 링크 제목 및 URL 추가, 수정, 삭제 | **인라인 편집** 적용 |
| **자동 파비콘 노출** | 구글 API를 통해 URL의 파비콘을 자동으로 아이콘화 | Google S2 API 사용 |
| **프로필 관리** | **displayName**(표시 이름), **username**(고유 핸들), Bio 설정 | 인라인 수정 가능 |
| **username 기반 URL** | 사용자가 설정한 고유 **username**이 URL 경로가 됨 | 예: `mylink.io/username` |
| **SNS 아이콘 연동** | 주요 소셜 채널 링크 아이콘 제공 | 기본 세트 |

---

## 3. 기능 상세 설명

### 3.1 인라인 편집 (Inline Editing)
- **UX**: 모든 정보(링크 제목, URL, displayName, username, bio)는 별도의 페이지 이동 없이 해당 위치에서 즉시 수정할 수 있는 인라인 방식을 채택합니다.
- **실시간성**: 편집 즉시 DB에 반영되어 사용자 경험의 연속성을 유지합니다.

### 3.2 이름 및 고유 주소 체계
- **displayName**: 프로필 페이지 상단에 가장 크게 노출되는 사용자의 실제 이름 또는 닉네임입니다.
- **username**: 시스템 내에서 중복이 허용되지 않는 고유 핸들이며, 공개 페이지의 URL 경로(`[도메인]/[username]`)로 사용됩니다.
- **상호작용**: 사용자가 `username`을 수정하면 연결된 공개 페이지 주소도 즉시 변경됩니다.

### 3.3 사용자 공개 페이지
- **디자인**: 이미지와 테마가 없는 미니멀리즘 디자인을 지향하며, shadcn/ui의 기본 컴포넌트 스타일을 활용합니다.

---

## 4. 데이터 저장 구조 (Firestore)

### 4.1 데이터 스키마
- **users** {collection}
  - **[uid]** {document}
    - **username**: string (고유 핸들, URL 경로로 사용됨, 필수)
    - **displayName**: string (프로필 상단 노출 이름, 필수)
    - **bio**: string
    - **email**: string
    - **links** {sub-collection}
      - **[linkId]** {document}
        - title: string
        - url: string
        - createdAt: timestamp

---

## 5. UI/UX 디자인 원칙
1. **Clear Hierarchy**: `displayName`을 가장 강조하고, 그 아래에 `username` 또는 소개글을 배치하여 정보의 위계를 명확히 합니다.
2. **Zero Asset Upload**: 이미지 업로드 기능을 아예 제외하여 서비스 운영 및 사용의 복잡도를 최소화합니다.
3. **Inline Interaction**: 모든 정보의 수정은 인라인 방식으로 처리하여 데이터 관리의 직관성을 높입니다.
