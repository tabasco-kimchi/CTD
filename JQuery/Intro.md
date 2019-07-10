# jQuery Tutorial

### jQuery is a JavaScript Library.
--------------------------

jQuery gratly simplifies js programming.

***"Write less, Do more"***

```html
<!DOYTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
</script>
<script>
$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});
</script>
</head>
<body>

<p>if you click on me, I will disappear.</p>
<p>Click me away.</p>
<p>click me too.</p>

</body>
</html>
```

# jQuery Introduction

### <u>The purpose of jQuery is to make it easier to use JavaScript on your website</u>

<br>
<br>

## how to use jQuery

> 1. 직접 jQuery를 다운받아 이용하는 방법<br>
- www.jquery.com에서 다운로드 받고, script의 속성값으로 파일 경로를 지정.

> 2. jQuery 라이브러리 서비스를 제공하는 CDN(Content Delivery Network) 호스트를 연결해서 이용하는 것
- 역시 script에 src 속성값으로 jQuery 라이브러리 서비스를 제공하는 CDN 서버를 연결해서 이용. HTML 문서의 head 부분에 작성.
