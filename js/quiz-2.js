function quizPlay() {
    if ($("#quizanswer").val() != '') {
        $("#error").css("opacity", "0");
       answer = ($("#quizanswer").val());
       $("#qu" + $("#questcount").val()).val(answer);
       $("#questcount").val(parseInt($("#questcount").val()) + 1);
       if ($("#questcount").val() == 2){


        $("#questuiontext").text("Кто вы по жизни? 2");
        $("#questnum").text("Осталось вопросов 4 из 5");


    } else if ($("#questcount").val() == 3) {


        $("#questuiontext").text("Вилкой в глаз или в жопу два раза? 2");
        $("#questnum").text("Осталось вопросов 3 из 5");


    } else if ($("#questcount").val() == 4) {


        $("#questuiontext").text("Как парвильно называть эльфбар?");
        $("#questnum").text("Осталось вопросов 2 из 5");


    } else if ($("#questcount").val() == 5) {


        $("#questuiontext").text("Сколько см ваш член");
        $("#questnum").text("Осталось вопросов 1см из 5");


    } else if ($("#questcount").val() == 6) {
        $("#questuiontext").text("В ближайшее время с вами свяжется менеДЖЭК.");
        $("#questnum").text("Вы ответили на всю залупу");
        $("#quizbtn").text("Вернуться нахуй");


        $("#quizanswer").css("display", "none");
        $("#error").css("display", "none");
        $("#quizbtn").attr("onclick", "");
        $("#quizform").submit();
        setTimeout(() => {
            $("#quizbtn").attr("href", "./index.php");
        }, 300);
        
        
        
    }
    $("#quizanswer").val('');
    $("#quizanswer").focus();
    } else {
        $("#error").css("opacity", "1");
        $("#quizanswer").focus();
    }

    
}

function php() {
    $("#quizform").submit(function(e) {
        
        e.preventDefault();
        $.ajax({
            url: './quizform.php',
            type: 'POST',
            data: $(this).serialize(),

            success: function (s) { 
            }
        });
    });
}