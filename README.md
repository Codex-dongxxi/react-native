# React Native Auth App

간단한 로그인과 회원가입 폼을 포함하고 서버와 통신하는 리액트 네이티브 예제 프로젝트입니다. 예제 API로 [Reqres](https://reqres.in)를 사용합니다.

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
- `App.js` : 로그인/회원가입 화면 간 전환을 관리합니다.
- `screens/LoginScreen.js` : 로그인 화면으로 `LoginForm`과 회원가입 화면으로 이동 버튼을 포함합니다.
- `screens/SignUpScreen.js` : 회원가입 화면으로 `SignUpForm`과 로그인 화면으로 돌아가는 버튼을 포함합니다.
- `components/LoginForm.js` : Reqres API와 통신해 로그인 요청을 보냅니다.
- `components/SignUpForm.js` : Reqres API와 통신해 회원가입 요청을 보냅니다.

## 테스트
현재 자동화된 테스트는 없습니다. 플레이스홀더 테스트 스크립트 실행:
```bash
npm test
```
