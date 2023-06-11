# wanted-pre-onboarding-frontend

- 이름 : 권범준
- 프로젝트 실행 방법

---

```
git clone https://github.com/kjungit/wanted-pre-onboarding-frontend.git
npm install
npm start
```
---


### 배포링크
- https://todolist-seven-ochre.vercel.app/

---

### 작업내용
- [x] 로그인 `/signin`, 회원가입 `/signup`
  - [x] 이메일 input에 data-testid="email-input" 속성을 부여
  - [x] 패스워드 input에 data-testid="password-input" 속성을 부여
  - [x] 회원가입 button에 data-testid="signup-button" 속성을 부여
  - [x] 로그인 button에 data-testid="signin-button" 속성을 부여
  - [x] 유효성 검사
    - [x] 이메일 조건 : `@` 포함 / 비밀번호 조건: 8자 이상
    - [x] 유효성 검사 미통과시 button `disabled`
  - [x] 회원가입 완료시 로그인 페이지 `/signin` 페이지로 이동
  - [x] 로그인 성공시 JWT 로컬스토리지 저장
  - [x] 로그인 여부에 따른 리다이렉트 처리

- [x] `/todo` 페이지 접속시 투두 리스트 목록 출력
  - [x] 내용 및 완료 여부 포함 / 완료 여부는 `<input type="checkbox" />`
  - [x] todo는 `<li>` 태그 사용
  - [x] 추가 버튼 클릭시 새로운 todo 추가 후 출력 / 새로고침 시 추가한 todo 유지
  - [x] 수정, 삭제버튼 구현
    - [x] 수정 버튼에는 data-testid="modify-button" 속성을 부여
    - [x] 삭제 버튼에는 data-testid="delete-button" 속성을 부여
    - [x] 수정 input창에는 data-testid="modify-input" 속성을 부여
    - [x] 제출버튼에는 data-testid="submit-button" 속성을 부여
    - [x] 취소버튼에는 data-testid="cancel-button" 속성을 부여

---

### 기술스택
- Front: `React`, `TypeScript`, `Tailwind`, `axios`, `react-toastify`
- 배포 : `Vercel`


---
---

## 🖥 프로젝트 소개
---

### 회원가입
<img src="https://github.com/kjungit/wanted-pre-onboarding-frontend/assets/100064540/7307f41f-2315-46d0-be65-622865e68f2f" width="800px">

- 회원가입이 완료되면 로그인 페이지로 이동
- 유효성검사 로직 구현
<br/>

---

### 로그인
<img src="https://github.com/kjungit/wanted-pre-onboarding-frontend/assets/100064540/386b467f-3cf6-4e45-84f2-ba816aa40c5d" width="800px">

- 로그인 후 todo 페이지로 이동
- 유효성검사 로직 구현
<br/>

---

### Todo 등록
<img src="https://github.com/kjungit/wanted-pre-onboarding-frontend/assets/100064540/c139731e-9ba9-4e53-b704-62cd1f478c16" width="800px">

- Todo 등록시 등록한 todo목록 갱신
<br/>

---

### 완료 항목 체크
<img src="https://github.com/kjungit/wanted-pre-onboarding-frontend/assets/100064540/72fc5797-d525-4b9c-b36b-1f21e9567b16" width="800px">

- 완료 항목을 체크하게 되면 수정 API로 완료 여부 등록 후 todo 목록 갱신
<br/>

---

### Todo 내용 수정
<img src="https://github.com/kjungit/wanted-pre-onboarding-frontend/assets/100064540/5ef6996a-9a06-4f94-b3e0-370bda3de4df" width="800px">

- Todo 내용 수정 후 API 호출 및 todo 목록 갱신
<br/>

---

### Todo 아이템 삭제
<img src="https://github.com/kjungit/wanted-pre-onboarding-frontend/assets/100064540/a63fa114-a35f-4b76-add7-7542505b4675" width="800px">

- Todo 개별 삭제 가능
<br/>

---


### 로그인 여부에 따른 리다이렉트
<img src="https://github.com/kjungit/wanted-pre-onboarding-frontend/assets/100064540/b4e17dc8-d019-4f5f-9473-0b6355cc8aca" width="800px">
<img src="https://github.com/kjungit/wanted-pre-onboarding-frontend/assets/100064540/968e2b65-9353-44ef-862b-c1f96bbf3692" width="800px">

- 로그인을 한 상태에 signin, signup 페이지 접근시 todo 페이지로 이동
- 로그인을 하지 않은 상태에 todo 페이지 접근시 signin 페이지로 이동
<br/>

---




