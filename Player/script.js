let Progress = document.getElementById("Progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function () {
  Progress.max = song.duration;
  Progress.value = song.currentTime;
};

function playPause() {
  if (song.paused) {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  } else {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  }
}

song.addEventListener("timeupdate", function () {
  Progress.value = song.currentTime;
});

Progress.addEventListener("input", function () {
  song.currentTime = Progress.value;
});

Progress.addEventListener("change", function () {
  if (!song.paused) {
    song.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }
});
