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
> 2. jQuery 라이브러리 서비스를 제공하는 CDN(Content Delivery Network) 호스트를 연결해서 이용하는 것
