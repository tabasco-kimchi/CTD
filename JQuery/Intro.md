# jQuery Tutorial

### jQuery is a JavaScript Library.
--------------------------

jQuery gratly simplifies js programming.

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
