# ajouchong-admin

아주대학교 총학생회 서비스의 관리자 화면을 만들기 위한 React 프로젝트입니다. 현재는 Create React App 기반의 초기 프론트엔드 구조가 중심이며, 관리자 기능을 붙이기 위한 출발점으로 사용할 수 있습니다.

## 프로젝트 개요

이 저장소는 `ajouchong` 서비스의 관리자 클라이언트 역할을 목표로 합니다. 공지, 소개글, 제휴, Q&A, 회칙 등 운영자가 관리해야 하는 데이터를 다루는 화면을 확장할 수 있도록 React 기반 구조를 준비합니다.

## 현재 구현 상태

- React 18 기반 SPA 초기 구조
- Create React App 개발 환경
- 기본 테스트 설정
- `src/App.js` 중심의 초기 화면

## 기술 스택

- React `18`
- React DOM
- React Scripts `5`
- Testing Library
- Web Vitals

## 폴더 구조

```text
.
├── public/
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── setupTests.js
├── package.json
└── README.md
```

## 실행 방법

```bash
npm install
npm start
```

개발 서버는 기본적으로 `http://localhost:3000`에서 실행됩니다.

## 사용 가능한 스크립트

```bash
npm start      # 개발 서버 실행
npm run build  # 프로덕션 빌드
npm test       # 테스트 실행
npm run eject  # CRA 설정 추출
```

## 향후 개선 포인트

- 로그인/권한 처리 연결
- 관리자 전용 라우팅 구성
- 게시글 CRUD 화면 추가
- API 클라이언트 계층 분리
- 배포 환경 변수와 API 서버 주소 정리

## 관련 저장소

- `toadsam/ajouchong__JJH`: Spring Boot 기반 백엔드
- `toadsam/ajouchong-web`: 사용자용 웹 클라이언트
