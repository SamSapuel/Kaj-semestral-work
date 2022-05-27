<?php

$token = "5217685306:AAGGc7WnP8Hl1UqCSQxhvkNK-rJZr5gzAVU";
$chat_id = "-1001670278162";

if ($_POST['act'] == 'order') {
    $base = ("HELLO BRO");
    $bq1 = ('Answer 1: ');
    $qu1 = ($_POST['question1']);
    $bq2 = ('Answer 2: ');
    $qu2 = ($_POST['question2']);
    $bq3 = ('Answer 3: ');
    $qu3 = ($_POST['question3']);
    $bq4 = ('Answer 4: ');
    $qu4 = ($_POST['question4']);
    $basePhone = ('Answer 5: ');
    $qu5 = ($_POST['question5']);
    $msg = ($base . "%0A" . $bq1 . $qu1 . "%0A" . $bq2 . $qu2. "%0A" . $bq3 . $qu3. "%0A" . $bq4 . $qu4 . "%0A" . $basePhone . $qu5);

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$msg}","r");

//    if ($sendToTelegram) {
//        alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
//    }

//А здесь сообщение об ошибке при отправке
//    else {
//        alert('Что-то пошло не так. ПОпробуйте отправить форму ещё раз.');
//    }
}

?>