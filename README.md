# React Native Login App

간단한 로그인 폼을 포함한 리액트 네이티브 예제 프로젝트입니다.

## 환경 설정

1. 의존성 설치
   ```bash
   npm install
   ```
2. Metro 번들러 실행
   ```bash
   npm start
   ```
3. 안드로이드 실행
   ```bash
   npm run android
   ```
4. iOS 실행
   ```bash
   npm run ios
   ```

## 구조
- `App.js` : 루트 컴포넌트로 `LoginScreen`을 렌더링합니다.
- `screens/LoginScreen.js` : 제목과 `LoginForm`으로 구성된 로그인 화면입니다.
- `components/LoginForm.js` : 이메일과 비밀번호 입력 필드 및 로그인 버튼을 제공합니다.

## 테스트
현재 자동화된 테스트는 없습니다. 플레이스홀더 테스트 스크립트 실행:
```bash
npm test
```
