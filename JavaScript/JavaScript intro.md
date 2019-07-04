# JavaScript 개요

- 웹 페이지에 동적인 동작을 추가 하기 위해 사용되는 스크립트형 프로그래밍 언어
- 웹 페이지에서 HTML은 문서 내용을, CSS는 문서 스타일을, JS는 문서의 동작을 구현
- 사용자와 상호작용 할 수 있는 웹페이지 구현
- 웹 브라우저는 한번 출력하면 바꿀 수 없는데 그것을 바꿀 수 있는게 자바스크립트

> 우클릭 > 검사 > element=tag
> night , day 버튼을 클릭했을 때 element 의 바디 스타일 태그가 바뀜을 확인
> javascript -> button click -> javascript coded -> body tag 에 스타일 속성이 추가되면서 바디 스타일을 바꿔주는 것이다.<br>
자바스크립트가 html을 제어하는 언어다.<br>
웹페이지를 동적으로 구현할 수 있게 만드는 것이다.

> 

> JavaScript 로 할 수 있는것?
- 웹 페이지 HTML 수정
document.getElementById(“target”).innerHTML(“<h1>바뀐 타이틀</h1>”);
- 특정 HTML 태그의 속성값 변경
document.getElementById(“target”).src = “new_image.jpg”;
- 특정 HTML 태그의 스타일 변경
document.getElementById(“target”).style.fontSize = “24px”;
- 이벤트 처리 (마우스 클릭 이벤트 등)
<button onclick=”alert(‘버튼 눌러짐’)”>버튼</button>


## Javascript 언어의 특징
- 인터프리터 언어
- 동적 타입 지원(유연함,변수에 숫자/문자, 함수, 등 flexible)
- 객체 기반
- 함수형 프로그래밍 지원

## JavvaScript의 장점
- 서버 부하 감소 : 클라이언트에서 Javascript로 1차적인 입력 검사를 수행하면 불필요한 서버와의 통신을 줄일 수 있음
- 상용자 상호작용 향상 : 사용자의 행동에 따라 즉각적인 반응을 서버 도움없이 처리 가능

## Javascript 실행 흐름

## JavaScript 의 작성 위치
- &lt;script&gt; 태그 안에 작성
- - &lt;head&gt;의 &lt;script&gt; 태그
- - &lt;body&gt;의 &lt;script&gt; 태그

- Inline 작성
<br>
태그의 이벤트 속성 (onclick=”function();”)

- - 링크 태그의 href 속성
```
<a href=”javascript:function()”>함수실행</a>
```

외부 파일 작성
 js/script.js 파일 작성 후 
 ```
 <script src=”js/script.js>
 로 문서에 포함
 ```


## JavaScript를 HTML에서 구현하는 방법

- &lt;script&gt; 태그를 통해서
- event를 통해서 (ex onclick 속성)
- function 을 불러와서 