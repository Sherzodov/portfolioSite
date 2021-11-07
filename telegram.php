<?php
$name = $_POST['name'];
$title = $_POST['title'];
$number = $_POST['number'];
$massage = $_POST['massage'];
$token = "2089656487:AAELNY69i2TNxFVOrhohRtq4FGYcvWolDac";
$chat_id = "-724780333";

$arr = array(
    "Name: " => $name,
    "Title: " => $title,
    "number: " => $number,
    "massage: " => $massage,
);
foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b>".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot2089656487:AAELNY69i2TNxFVOrhohRtq4FGYcvWolDac/sendMassage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    header('Location: thanks.html');
} else {
    echo "error";
}
?>