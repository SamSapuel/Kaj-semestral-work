<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/video.css">
    <title>♂Video♂</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="./js/menu.js"></script>
</head>
<body>
    <header>
        <div class="container">
            <img id="header_icon" src="./images/icon.svg" alt="icon"/>
            <nav id="menusha">
                <a href="index.html">Home</a>
                <a href="video.html">♂Video♂</a>
                <a href="about.html">About Us</a>
            </nav>
            <a id="menu-opener" onclick="menu()">Menu</a>
            <input id="menu-cond" value="0" hidden/>
        </div>
    </header>
    <div class = "wrapper">
        <div class = "full-screen">
            <div class = "full-screen_body">
                <div class = "full-screen_title">Every saga has a beginning...</div>
                <div class = "full-screen_text">Even CTU can't change it</div>
            </div>
            <video autoplay muted loop preload="auto" class = "full-screen_video">
                <source type = "video/mp4" src = "/videos/beginning.mp4">
            </video>
        </div>
        <div class = "content">
            <div class = "content_container">
                <p>Thats not a quiz page, but something better</p>
                <p>Thats not a quiz page, but something better</p>
                <p>Thats not a quiz page, but something better</p>
                <p>Thats not a quiz page, but something better</p>
                <p>Thats not a quiz page, but something better</p>
                <p>Thats not a quiz page, but something better</p>
                <p>Thats not a quiz page, but something better</p>
                <p>Thats not a quiz page, but something better</p>
                <p>Thats not a quiz page, but something better</p>
                <p>Thats not a quiz page, but something better</p>
                <p>Thats not a quiz page, but something better</p>
            </div>
        </div>
    </div>
</body>
</html>