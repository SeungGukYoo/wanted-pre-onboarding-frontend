# 🎯 원티드 프리온보딩 프론트엔드 - 선발 과제

📝 **이름:** 유승국

## 🔧 로컬 설치 및 시작

```bash
# 의존성 파일 설치
$ npm install

# 로컬 서버 실행
$ npm start

# 실행 주소: [http://localhost:3000](http://localhost:3000)
```

## ❗️ 사용 기술

### Tools

![VS Code](https://img.shields.io/badge/-VS_Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)

### Language

![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white)
![JavaScript](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React&logoColor=white)
![JavaScript](https://img.shields.io/badge/-typescript-3178C6?style=flat-square&logo=typescript&logoColor=white)

### Library

![JavaScript](https://img.shields.io/badge/-tailwindCss-06B6D4?style=flat-square&logo=tailwindCss&logoColor=white)
![JavaScript](https://img.shields.io/badge/-postCss-DD3A0A?style=flat-square&logo=postCss&logoColor=white)
![JavaScript](https://img.shields.io/badge/-axios-06B6D4?style=flat-square&logo=axios&logoColor=white)
![JavaScript](https://img.shields.io/badge/-reactrouter-CA4245?style=flat-square&logo=reactrouter&logoColor=white)

## 🚀 배포 주소

- [Vercel 바로가기](https://wanted-pre-onboarding-frontend-topaz-theta.vercel.app/)

## 📌 프로젝트 설명

### 1️⃣ 메인 (`/` 페이지)</br>

`/signin` 페이지 혹은 `/signup` 페이지로 이동이 가능한 버튼이 있으며, 토큰이 있는 상태라면 `/todo` 페이지로 리다이렉트된다.

   <details>
    <summary>데모 영상</summary>
    <div>
     <img src="https://github.com/SeungGukYoo/wanted-pre-onboarding-frontend/assets/119836116/a5bb4224-3583-4059-b4b2-cdb39038e3fe" width="50%">
    </div>
   </details> 
   </br>
   
 ### 2️⃣ 회원가입(`/signup` 페이지)</br>
   토큰이 없는 상태에서만 접근할 수 있으며, 유효성 검사를 통과한다면 버튼이 활성화 된다.</br>
   동일한 이메일이 존재한다면 경고창이 나오며, 회원가입이 완료되면 `/signin` 페이지로 리다이렉트된다.
   <details>
    <summary>데모 영상</summary>
    <div>
    <img src="https://github.com/SeungGukYoo/wanted-pre-onboarding-frontend/assets/119836116/b009b8c7-accc-49c2-80f3-2d5871b09771" width="50%">
    </div>
   </details> 
   </br>

### 3️⃣ 로그인 (`/signin` 페이지)</br>

토큰이 없는 상태에서만 접근할 수 있으며, 유효성 검사를 통과한다면 버튼이 활성화 된다. </br>
존재하지 않은 사용자의 경우에는 오류문구가 출력되며, 로그인이 완료되었다면 `alert`가 발생한 후 `/todo` 페이지로 리다이렉트 된다.

   <details>
    <summary>데모 영상</summary>
    <div>
    <img src="https://github.com/SeungGukYoo/wanted-pre-onboarding-frontend/assets/119836116/3ed2a19e-382c-4a9a-befe-84f4c72bf32a" width="50%">
    </div>
   </details> 
   </br>

### 4️⃣ Todo (`/todo` 페이지) </br>

토큰이 있는 상태에서만 접근이 가능하다. </br>
빈값을 입력하게 된다면 경고창이 발생하며 재입력을 해야한다. 이후에 수정, 삭제등을 할 수 있으며, 한번 입력된 값은 서버에 저장되기 때문에 새로고침하여도 사라지지 않게된다. </br>
로그아웃을 하지 않고 종료를 할 시에는 토큰이 사라지지 않아, 재방문시 자동으로 로그인이 완료된다.

   <details>
    <summary>데모 영상</summary>
    <div>
    <img src="https://github.com/SeungGukYoo/wanted-pre-onboarding-frontend/assets/119836116/ca99c126-0b1b-40a6-80cd-4a9458f1982c" width="50%">
    </div>
   </details> 
   </br>
