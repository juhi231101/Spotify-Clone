console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let playGif = document.getElementById("playGif");
let playingSong = document.getElementById("playingSong");
let songs = [
  {
    songName: "On My Way",
    songPath: "songs/1.mp3",
    coverPath: "images/cover1.webp",
  },
  {
    songName: "Faded",
    songPath: "songs/2.mp3",
    coverPath: "images/cover1.webp",
  },
  {
    songName: "Alone",
    songPath: "songs/3.mp3",
    coverPath: "images/cover1.webp",
  },
  {
    songName: "Darkside",
    songPath: "songs/4.mp3",
    coverPath: "images/cover1.webp",
  },
  {
    songName: "Alone, Pt.ll",
    songPath: "songs/5.mp3",
    coverPath: "images/cover1.webp",
  },
  {
    songName: "Diamond Heart",
    songPath: "songs/6.mp3",
    coverPath: "images/cover1.webp",
  },
  {
    songName: "Ignite",
    songPath: "songs/7.mp3",
    coverPath: "images/cover1.webp",
  },
  {
    songName: "Lily",
    songPath: "songs/8.mp3",
    coverPath: "images/cover1.webp",
  },
];

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();

    document.getElementById(index).classList.remove("fa-play");
    document.getElementById(index).classList.add("fa-pause");

    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    playGif.style.opacity = 1;
  } else {
    document.getElementById(index).classList.remove("fa-pause");
    document.getElementById(index).classList.add("fa-play");
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    playGif.style.opacity = 0;
  }
});
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  console.log(progress);
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    myProgressBar.value * (audioElement.duration / 100);
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.add("fa-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      songIndex = parseInt(e.target.id);
      index = e.target.id;
      makeAllPlay();
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
      audioElement.src = `songs/${songIndex}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      playingSong.innerHTML = songs[songIndex - 1].songName;
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
      playGif.style.opacity = 1;
    });
  }
);
document.getElementById("prev").addEventListener("click", () => {
  if (songIndex <= 1) {
    songIndex = 8;
  } else {
    songIndex -= 1;
  }
  let index = songIndex.toString();
  makeAllPlay();
  document.getElementById(index).classList.remove("fa-play");
  document.getElementById(index).classList.add("fa-pause");

  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  playingSong.innerHTML = songs[songIndex - 1].songName;
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
  playGif.style.opacity = 1;
});
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 8) {
    songIndex = 1;
  } else {
    songIndex += 1;
  }
  let index = songIndex.toString();
  makeAllPlay();
  document.getElementById(index).classList.remove("fa-play");
  document.getElementById(index).classList.add("fa-pause");

  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  playingSong.innerHTML = songs[songIndex - 1].songName;
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
  playGif.style.opacity = 1;
});
audioElement.addEventListener("ended", () => {
  if (songIndex >= 8) {
    songIndex = 1;
  } else {
    songIndex += 1;
  }
  let index = songIndex.toString();
  makeAllPlay();
  document.getElementById(index).classList.remove("fa-play");
  document.getElementById(index).classList.add("fa-pause");

  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  playingSong.innerHTML = songs[songIndex - 1].songName;
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
  playGif.style.opacity = 1;
});
