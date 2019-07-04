# web browser control

```html
<body style="background-color:black; color:white;">
```

- CSS 속성 알기
- Style 속성을 주기 위해서 속성을 주고자하는 태그가 누구인가를 바디 태그라는 것을
- -  웹 브라우저에게 알려주는 방법을 자바스크립트로 어떻게 하는지~

- js로 사용하고자하는 태그를 선택하는 방법

<br>

## CSS 기초 : style 선택자
------------------------

```html
<head>
<style>
/* CSS에서 .은 클래스, #은 id */
    .js{
        font-weight: bold;
        color:red;
    }

    #first{
        color:green;
    }

    span{
        color:blue;
    }
    </style>
</head>
    <body>
        <p>
            <span id="first" class="js">JavaScript</span>
            JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, <span>many</span>
            
            non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.
        </p>
```


> Class 는 무언가를 그룹핑하는 것.(학과) : 그룹핑 하고 싶은 것을 같은 이름의 클래스로 지정하는 것

> id 는 한 가지 대상을 식별한다.(학번) / <br>
한 번만 사용할 수 있다. <br>
class 선택자가 더 포괄적이고 ID 선택자가 무언가를 더 정확하게 타겟팅 하는 것.

> Class 선택자를 통해서 포괄적인 스타일을 지정하고, 예외적으로 적용하고 싶은 것은 id 선택자를 통해서 스타일을 적용한다.
So, 둘이 같이 적용이 되었을 때는 ID의 속성이 Class 속성에 우선한다.

## ***<u>ID > Class > Tag 속성의 순으로 우선순위 스타일이 적용된다</u>***

***선택자가 중요한 것은 , 그 속성을 누구에게 적용할 수 있는가를 타겟팅 하는 것이 중요하기 때문이다.***