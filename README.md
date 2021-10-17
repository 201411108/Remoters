# Remoters

> 2021년 6월 19일 ~ 6월 21일<br>
> Front-end 직무 기술 과제 제출용 repository

<h3 align='center'>Preview</h3>
<p align='center'>
  <img src='./profile_image.gif'/>
</p>

## Stack
<p>
  <img src="https://img.shields.io/static/v1?label=&message=React&color=61DAFB&logo=react&logoColor=FFFFFF"/>
  <img src="https://img.shields.io/static/v1?label=&message=Typescript&color=3178C6&logo=typescript&logoColor=FFFFFF"/>
</p>

## Features

1. `React-router`를 활용한 페이지 이동 기능
   * `/` : Home 페이지 경로, `/company` : Company 페이지 경로
2. API 호출을 통한 데이터 렌더링
  ```javascript
    useEffect(() => {
            if(todayJobs.length === 0) {
                getJobs();
            }
        })

    const getJobs = async () => {
        try {
            const res = await fetch('api_url')
                              .then(response => response.json())
            setTodayJobs(res.todayJobs)
            setWeeklyJobs(res.weeklyJobs)
            setIsLodaing(false)
        } catch (error) {
            // error handling
        }
    }
  ```
  * 직업 정보에 해당되는 값을 최초 렌더링 시 API로부터 받아 화면에 표시
  * 호출한 API 값을 `res` 변수에 할당 후 `state`에 저장
  * `useEffect`를 통해 컴포넌트 렌더링 시 해당정보를 가져옴
3. 우측 하단에 고정된 '위로가기' 기능 버튼
   * `window.scrollTo` : 클릭 시 화면 최상단으로 이동
   * `position: fixed; z-index: 9999;` : 화면 이동에 관계없이 항상 우측 하단에 고정
4. 직업 카드 클릭 시 펼쳐지는 애니메이션 효과 적용(미완성, 보완 예정)
   * 평소에는 보이지 않고 직업 카드 클릭 시 해당 카드에 대한 정보가 표시됨.
   * 펼쳐지는 애니메이션은 적용되었으나 *접히는 애니메이션이 적용되지 않음*.
5. 가변 그리드를 활용한 반응형 웹 페이지 구현(미완성, 보완 예정)
   * PC용 브라우저에 대해 가변 그리드를 활용해 반응형으로 구현하려고 시도
   * 태블릿, 모바일에 대응하는 반응형 웹 페이지를 구현하지 못하였음.
