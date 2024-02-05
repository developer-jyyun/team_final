# WinnerOne [LET'S]

<div align="center">

</br>
<img src="https://github.com/developer-jyyun/team_final/assets/131247158/9a25b928-342c-45ba-9399-0852e4d244d6" width=300 />

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

저희는 패키지 여행 서비스 기획을 맡아 주의 집중 시간이 짧아진 2030부터, 앱 사용을 어려워 하는 5060까지<br/>
폭 넓은 연령층을 타겟으로 보다 쉽고 빠르게 패키지 서비스를 찾아 볼 수 있는 LET'S를 개발하였습니다.

🔐 TEST용 ID: bosix76317@alibrs.com

🔐 TEST용 PASSWORD: qwer1234!


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
        <td>마이페이지<br/>서브메뉴 페이지</td>  
    </tr>
 </table>

## 🧑🏻‍💻 회고 & 트러블 슈팅
<details>
<summary>이용훈</summary>
  프로젝트를 진행하는데 팀원 모두가 처음사용하는 테일윈드와, next.js를 도입하면서 어려움이 약간 있었지만 이를 통해 많은걸 배울 수 있었던 거 같아서 너무 좋았습니다.<br/>
  <br/>
  물론 next.js를 정말 최대한 활용하지 못한 점은 아쉬움이 많이 남지만 처음 시도해보는 기술 스택인 점을 고려하면 그냥 최선을 다했다는 점에서 만족을 하고, 아쉬움이 남았던 부분은 확실히 정리하고, 더 공부 해서 스스로의 역량을 발전시켜나가고 싶습니다.
</details>

<details>
<summary>최선파</summary>
  테일윈드를 처음 사용함에 있어 예상치 못한 어려움을 겪었다.<br/> 
  테일윈드는 소스 코드에 선언된 클래스를 기반으로 스타일을 적용하는데, 이 때문에 미리 선언된 클래스가 아니었다면 동적 스타일링이 어려웠다.<br/>
  또한, 클래스의 출현 빈도나 순서와 관계없이 테일윈드에서 정의한 순서에 따라 스타일이 적용되어 내가 의도한 대로 스타일이 적용되지 않는 경우도 더러 있었다.<br/> 
  이러한 문제를 해결하기 위해 인라인 스타일을 사용했지만, 더욱 효과적인 해결책이 있지 않았을까 하는 아쉬움이 남는다.<br/>
  <br/>
  시간적 여유가 없는 상태에서 프로젝트를 작업한 만큼 컨벤션과 성능에 대한 아쉬움이 남는다.<br/> 
  하지만 운 좋게도 좋은 팀원들을 만나 서로 격려하고 의지하였고, 함께 며칠 밤을 지새우며 프로젝트를 완성했다는 경험은 정말 잊지 못할 값진 경험일 것이다. 
</details>

<details>
  <summary>남현준</summary>
  새롭게 next.js나 tailwind css를 사용해보았는데, 가지고 있는 성능과 장점들을 온전히 다 끌어내지 못한 것이 아쉬웠습니다.<br/> 
  <br/> 
  그리고 이번 프로젝트를 진행하며 가독성 좋은 코드 작성하기와 깔끔하게 분리된 컴포넌트 구조 만들기라는 측면에 집중했었는데, 시간이 점차 부족해지다 보니 결국 이를 잘 지키지 못한 페이지도 생기게 된 점이 매우 아쉬움으로 남았습니다.<br/> 
  또, 컴포넌트를 작은 단위로 나누다 보니, 한 페이지를 구성하는 컴포  넌트들의 상하 관계가 지나치게 깊어진 아쉬움도 있었습니다.<br/> 
  <br/> 
  어려운 상황이 많았지만 모든 상황들을 잘 풀어나갈 수 있었던 것은 훌륭하고 멋진 팀원들과 함께 했기 때문입니다.<br/>  
  다툼 한번 없이 서로 응원하고, 도움을 주고 받았던 시간들이 너무 행복했고, 값진 경험이 되었습니다.
</details>

<details>
<summary>이진욱</summary>
  저희 팀은 패키지 여행 서비스인 LET’S 프로젝트를 성공적으로 완료했습니다.<br/>
  이 프로젝트의 목표는 개인 여행 일정 잡는 것을 어려워 하는 세대에게 적합한 패키지 여행 중심의 서비스를 제공하는 것이었습니다.<br/> 
  1달 동안 저희 팀은 이 목표를 달성하기 위해 노력했습니다.<br/>
  <br/>
  프로젝트의 가장 큰 성공은 핵심기능인 패키지 여행상품 비교페이지와 해시태그 검색페이지를 개발하여
  사용자가 쉽고 빠르게 검색또는 비교할 수 있도록 하였다는 점입니다. 이 성공은 기획자와 디자이너, 개발자간의 소통을 통해 가능하게 되었습니다.
  또한, UX적인 개선을 많이하려고 하였습니다.<br/>
  <br/>
  프로젝트 진행 중, 특히 데이터 바인딩과 어떻게 그래프로 잘 보여줄 수 있을지가 저에게 있어 기술적인 도전이였습니다.<br/>
  백엔드에서 제공해주는 API와 상세페이지에서 넘어오는 데이터를 어떻게 잘 가공해서 결제페이지에서 보여줄지가 쉽지않았던것 같습니다.<br/> 
  이를 극복하기위해 API명세를 보고 어떻게 프론트엔드에다가  효율적으로 반영할 수 있는지 고민하고 공부하고 상세페이지에서 넘어오는 데이터와 코드를 분석하는 방안등을 마련하였습니다.<br/>
  <br/>
  이 프로젝트를 통해, 저는 특히 프로젝트 관리와 팀워크의 중요성을 깊이 이해하게 되었습니다. 팀원 각자의 역할이 명확히 정의되고, 효과적인 의사소통이 이루어질 때 프로젝트는 성공으로 이어진다는 것을 배웠습니다.<br/> 
  팀 전체적으로는, 우리는 다양한 기술과 경험을 통합하는 방법을 배웠으며, 이것이 우리의 가장 큰 자산이 되었습니다.<br/>
  <br/>
  이 프로젝트는 다양한 성공 요소를 가지고 있었으며, 많은 교훈을 얻었습니다. 앞으로 저희 팀은 이러한 경험을 바탕으로 더욱 혁신적인 여행 서비스 개발을 위해 노력할 것입니다.
</details>

<details>
<summary>윤지영</summary>
이번 프로젝트에는 유사한 UI들이 많아서 작업 초반, 재사용성, 일관성 등의 측면을 기대하고 공통으로 사용될 컴포넌트들을 여럿 만들었습니다. <br/>
하지만 작업이 계속될수록 컴포넌트 간의 의존성 문제 때문에 코드를 변경하고, 추가하는 데 어려움을 느끼게 되었고, 코드가 갈수록 복잡해지고 가독성이 저하되는 상황이 발생하였습니다. <br/>
이런 현상을 프로젝트 후반부에서야 인지하게 되었고, 컴포넌트를 각각의 책임만을 가질 수 있도록 더 작은 단위로 쪼갰어야 했다는 점을 깨닫게 되었습니다. <br/>
이러한 경험을 통해 초반 컴포넌트 설계의 중요성을 직접 체감할 수 있었으며, 잘 짜여진 팀원들의 코드를 제 코드와 비교해 보며 많은 것들을 배우고, 부족한 부분을 메꿀 수 있었습니다. <br/>
도움이 필요 할 때면 자신이 맡은 역할 외에도 적극적으로 도움을 주고받는 멋진 팀원들과 함께하며 많은 것을 배우며 성장할 수 있는 뜻깊은 시간이었습니다.
</details>




<br><br><br><br><br>
