# WinnerOne [LET'S]

<div align="center">

</br>
<img src="https://github.com/developer-jyyun/lets/assets/131247158/807bdd12-651c-433f-89e4-0d0511d3ba95" width=300 />

<p align="center">
  <a href="https://winnerone.site/">
    <img alt="Static Badge" src="https://img.shields.io/badge/Winner%20One-ff3478" width="240"alt="site"/>
  </a>
</p>

</div>

<br/>

## 📆 프로젝트 기간

`2023.12.26 ~ 2024.01.29`

## 참고

프로젝트 규칙: https://github.com/yanolja-finalproject/LETS_FE/wiki

## 📝 프로젝트 소개

소개 내용 작성

🔐 TEST용 ID:

🔐 TEST용 PASSWORD:


프로젝트 규칙: https://github.com/yanolja-finalproject/LETS_FE/wiki
<br/><br/>

## 🖌️ 프로젝트 아키텍처

<div align="center">
<img src="https://github.com/yanolja-finalproject/LETS_FE/assets/131247158/766886b1-728c-4d9f-9690-22d94f630be5" alt="프로젝트 아키텍처">

</div>
<br/>

<p align="left">

## 🧑🏻‍💻 기술 스택

### Frontend Stacks

<p align="left">
    <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white"/>
    
</p>
<p align="left">
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img src="https://img.shields.io/badge/vercel-ffffff?style=for-the-badge&logo=vercel&logoColor=black"/>
  <img src="https://img.shields.io/badge/Eslint-4B32C3?logo=eslint&logoColor=white&style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black&style=for-the-badge"/>
</p>

### Collaboration Tools

<p align="left">
  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
  <img src="https://img.shields.io/badge/vscode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
</p>

<p align="left">
  <img src="https://img.shields.io/badge/notion-ffffff?style=for-the-badge&logo=notion&logoColor=black">
    <img src="https://img.shields.io/badge/slack-4A154B?style=for-the-badge&logo=slack&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white"/>

</p>
<br/>

<br/>

## 🧑🏻‍💻 Git convention


### ✅ Commit log

```
Feat: 새로운 기능 추가
Fix: 버그 수정
Env: 개발 환경 관련 설정
Style: 코드 스타일 수정 (세미 콜론, 인덴트 등의 스타일적인 부분만), 주석 추가/수정
Refactor: 코드 리팩토링 (더 효율적인 코드로 변경 등)
Design: CSS 등 디자인 추가/수정
Docs: 내부 문서 추가/수정
Test: 테스트 추가/수정
Chore: 빌드, 세팅 관련 코드 수정
Move: 파일 삭제, 이름 변경
!HOTFIX: 급하게 버그를 고쳐야하는 경우
```

### ✅ Branch strategy
```
main 브랜치
develop 브랜치
feature/기능이름
hotfix 브랜치
```
---

## 📂 폴더 구조

```
📦public
 ┃
 ┣ 📂assets
📦src
 ┣ 📂api
 ┣ 📂app
 ┃ ┣ 📂_components
 ┃ ┣ 📂_test
 ┃ ┣ 📂(navbar)
 ┃ ┃ ┣ 📂compare
 ┃ ┃ ┣ 📂heart
 ┃ ┃ ┣ 📂my
 ┃ ┃ ┣ 📂email-signup
 ┃ ┃ ┣ 📂items
 ┃ ┃ ┣ 📂my
 ┃ ┃ ┣ 📂payment
 ┃ ┃ ┣ 📂search
 ┃ ┃ ┣ 📂search-filter
 ┃ ┃ ┣ 📂search-result
 ┃ ┃ ┣ 📜error.tsx
 ┃ ┃ ┗  📜layout.tsx
 ┃ ┣ 📂(non-navbar)
 ┃ ┃ ┣ 📂advertisement
 ┃ ┃ ┣ 📂balance
 ┃ ┃ ┣ 📂email-signin
 ┃ ┃ ┣ 📂email-signup
 ┃ ┃ ┣ 📂items
 ┃ ┃ ┣ 📂my
 ┃ ┃ ┣ 📂schedule
 ┃ ┃ ┣ 📂signin
 ┃ ┃ ┣ 📂my
 ┃ ┃ ┣ 📜error.tsx
 ┃ ┃ ┗  📜layout.tsx
 ┃ ┣ 📜 constants.ts
 ┃ ┣ 📜 globals.css
 ┃ ┣ 📜 layout.tsx
 ┃ ┣ 📜 page.tsx
 ┃ ┣ 📜 test-utils.ts
 ┃ ┗ 📜 types.ts
 ┣ 📂hooks
 ┃   ┗ 📂query 
 ┣ 📂mocks
 ┣ 📂store
 ┣ 📂utils
 ┣ 📜.env
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜package.json
 ┣ 📜package-lock.json
 ┣ 📜local.cert.pem
 ┣ 📜local.key.pem
 ┣ 📜server.js
 ┣ 📜README.md
 ┣ 📜tailwind.config.ts
 ┗ 📜tsconfig.json
```

## 🧑🏻‍💻 주요 기능

<div align="center">
  <table>
    <tr align="center">
      <th>로그인/회원가입</th>
      <th>메인 페이지</th>
    </tr>
    <tr>      
      <td><img src="https://github.com/yanolja-finalproject/LETS_FE/assets/59171592/d04a78f7-89b0-47d8-987e-ed5b5fa36111" height="400">
</td>
       <td><img src="https://github.com/yanolja-finalproject/LETS_FE/assets/59171592/9f853c37-5b00-4668-b90f-4dce1d21f3df"
height="400"></td>   
    </tr>    
    <tr align="center">
      <th>상세페이지</th>
      <th>비교페이지</th>         
    </tr>
    <tr>      
      <td><img src="https://github.com/yanolja-finalproject/LETS_FE/assets/59171592/89bb851d-d195-4c1f-82c7-ffecfccf50f3"
height="400"></td>
        <td><img src="https://github.com/yanolja-finalproject/LETS_FE/assets/59171592/3a443f97-25cf-463b-a5db-aff7712537b1"
height="400"></td>
    </tr>    
            <tr align="center">
      <th>검색페이지</th>
      <th>결제페이지</th>
    </tr>
    <tr>      
        <td><img src="https://github.com/yanolja-finalproject/LETS_FE/assets/59171592/de6df220-790d-49c5-9abc-f3b55360b245"
height="400"></td>
        <td><img src="https://github.com/yanolja-finalproject/LETS_FE/assets/59171592/f91b3818-1d92-474a-aba9-e86b83100ba2"
height="400"></td>
    </tr> 
     <tr align="center">
      <th>찬반 투표</th>    
      <th>찜하기</th>    
    </tr>
    <tr>      
       <td><img src="https://github.com/yanolja-finalproject/LETS_FE/assets/59171592/eb217d96-48c7-4da9-b3f0-706b5cedf236"
height="400"></td>
        <td><img src="https://github.com/yanolja-finalproject/LETS_FE/assets/59171592/8fa483e0-fbfa-46fa-8169-b05c22cc2159"
height="400"></td>
    </tr> 
         <tr align="center">
      <th>마이페이지</th>    
      <th>페이지</th>    
    </tr>
    <tr>      
       <td><img src="https://github.com/yanolja-finalproject/LETS_FE/assets/59171592/32e68eba-d9ee-44bd-8f62-c9c33262c5bc"
height="400"></td>
        <td><img src="https://github.com/developer-jyyun/lets/assets/131247158/5daa1fff-3d58-44b9-b8cb-c8a354b55ca4"
height="400"></td>
    </tr> 
  </table>
</div>

 <br>

## 🧑🏻‍💻 팀 소개 및 역할

<table align="center">
    <tr>
        <td align="center">
            <img alt="avatar" src="https://github.com/2YH02.png" width="100">
        </td>
        <td align="center">
            <img alt="avatar" src="https://github.com/noSPkeepgoing.png" width="100">
        </td>
        <td align="center">
            <img alt="avatar" src="https://avatars.githubusercontent.com/u/59171592?v=4" width="100">
        </td>
        <td align="center">
            <img alt="avatar" src="https://github.com/applevalley.png" width="100">
        </td>
        <td align="center">
            <img alt="avatar" src="https://github.com/developer-jyyun.png" width="100">
        </td>
    </tr>
    <tr>
        <td align="center"><a href="https://github.com/2YH02">이용훈<br>팀장</a></td>
        <td align="center"><a href="https://github.com/noSPkeepgoing">최선파<br>팀원</a></td>
        <td align="center"><a href="https://github.com/https://github.com/KittelLee">이진욱<br>팀원</a>
        </td>
        <td align="center"><a href="https://github.com/applevalley">남현준<br>팀원</a></td>
        <td align="center"><a href="https://github.com/Eojodeveloper-jyyun">윤지영<br>팀원</a></td>
    </tr>    
    <tr align="center">
        <td>로그인&회원가입 페이지<br/>패키지 상세보기 페이지<br/>여행 일정 선택 페이지</td>
        <td>패키지 리스트 공통 컴포넌트<br/>검색&해시태그 페이지<br/>검색결과 화면</td>
        <td>비교페이지<br/>결제페이지</td>
        <td>홈 화면<br/>광고&테마 패키지 리스트</td>
        <td>마이페이지</td>  
    </tr>
 </table>

## 🧑🏻‍💻 회고 & 트러블 슈팅
<details>
<summary>이용훈</summary>
  
</details>

<details>
<summary>최선파</summary>
</details>

<details>
  <summary>남현준</summary>
</details>
<details>
<summary>이진욱</summary>
</details>

<details>
<summary>윤지영</summary>
  느낀점
</details>
