

// let currentSelectedWorkCategory = "Education";
let localStorage = {};
let currentOnClickThreeDotsState = {};
let application = 'giniFmV2';
var fileName = 'giniFmV2App';
let prevSelectedEleId = '';


console.log("============= file : giniFmV2.client.controller.js =============");

function onLoadedVideoData(){
    console.log("5555555555555555555555555555555555555555555555555555555555555555555555555");

    document.querySelector(".vjs-control-bar").style.display = "flex !important";
}

function setupCustomAudioPlayer(url){
  console.log("33333333333333333333333333333333333333333333333333333333333333333");
  let audioUrl = '';
  if(url === null){
      audioUrl = "https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3";
  }else{
    audioUrl = url;
  }
  const audioPlayer = document.querySelector(".audio-player");
  const audio = new Audio(audioUrl);

  audio.addEventListener(
    "loadeddata",
    () => {
      audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
        audio.duration
      );
      audio.volume = .75;
    },
    false
  );

  //click on timeline to skip around
  const timeline = audioPlayer.querySelector(".timeline");
  timeline.addEventListener("click", e => {
    const timelineWidth = window.getComputedStyle(timeline).width;
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
    audio.currentTime = timeToSeek;
  }, false);

  //click volume slider to change volume
  const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
  volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
  }, false)

  //check audio percentage and update time accordingly
  setInterval(() => {
    const progressBar = audioPlayer.querySelector(".progress");
    progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
    audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
      audio.currentTime
    );
  }, 500);

  //toggle between playing and pausing on button click
  const playBtn = audioPlayer.querySelector(".controls .toggle-play");
  playBtn.addEventListener(
    "click",
    () => {
      if (audio.paused) {
        playBtn.classList.remove("play");
        playBtn.classList.add("pause");
        audio.play();
      } else {
        playBtn.classList.remove("pause");
        playBtn.classList.add("play");
        audio.pause();
      }
    },
    false
  );

  audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
    const volumeEl = audioPlayer.querySelector(".volume-container .volume");
    audio.muted = !audio.muted;
    if (audio.muted) {
      volumeEl.classList.remove("icono-volumeMedium");
      volumeEl.classList.add("icono-volumeMute");
    } else {
      volumeEl.classList.add("icono-volumeMedium");
      volumeEl.classList.remove("icono-volumeMute");
    }
  });

  //turn 128 seconds into 2:08
  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
  }
}

function onClickCustomYtplayerCloseBtn(){
    console.log("======= on click onClickCustomYtplayerCloseBtn btn =======");
    document.getElementById("customYtPlayer").style.display = "none";
    document.getElementById(prevSelectedEleId).style.boxShadow = "none";
    customVideoToAudioPlayer.stopVideo();
}
