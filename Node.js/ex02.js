
        var output = '';

        for (var i = 0; i <= 10; i++) {
           for(j = 0; j < i; j++) {
                output += "*"
        }
        setTimeout(function() {
            console.log();
        }, 2000);
    }

    console.log(output);
    