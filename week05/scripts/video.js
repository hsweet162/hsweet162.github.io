window.onload = function(){
    let video = document.getElementById("myVideo");

    let playBtn = document.getElementById("playBtn");
    playBtn.addEventListener("click",function(){
        video.play();

    });

    let pauseBtn = document.getElementById("pauseBtn");
    pauseBtn.addEventListener("click", function(){
        video.pause();
    });

    let freezeBtn = document.getElementById("pauseBtn");
    freezeBtn.addEventListener("mousedown", function(){
        video.pause();
    });
    freezeBtn.addEventListener("mouseup", function(){
        video.play();
    });
};