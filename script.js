let currentSong = new Audio();
let currentSongIndex = 0;
let songName = [];

function formatTime(seconds) {
  let mins = Math.floor(seconds / 60);
  let secs = Math.floor(seconds % 60);
  if (secs < 10) secs = "0" + secs;
  return `${mins}:${secs}`;
}

async function getSongs() {
  let A = await fetch("http://127.0.0.1:3000/songs/");
  let reponse = await A.text();
  let div = document.createElement("div");
  div.innerHTML = reponse;
  let as = div.getElementsByTagName("a");
  let songsArr = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songsArr.push(element.href);
      songName.push(element.href.split(".")[4].replaceAll("%20", " "));
    }
  }
  return songsArr;
}

async function main() {
  let songs = await getSongs();
  document.querySelectorAll("#cards, .cards").forEach((cardContainer) => {
    cardContainer.addEventListener("click", function (EVENT) {
      let current = EVENT.target;

      while (current && current !== this) {
        if (current.parentElement === this && current.id) {
          currentSongIndex = parseInt(current.id);
          let ID = currentSongIndex;

          console.log("Song id", ID);
          console.log("Song", songName[ID]);

          currentSong.src = songs[ID];
          currentSong.play();
          play.src = "pause.svg";

          document.querySelector(".song-name").innerHTML = songName[ID];

          currentSong.addEventListener("timeupdate", () => {
            if (!isNaN(currentSong.duration) && currentSong.duration > 0) {
              document.querySelector(".play-bar-circle").style.left =
                (currentSong.currentTime / currentSong.duration) * 100 + "%";
              document.querySelector(".fill").style.width =
                (currentSong.currentTime / currentSong.duration) * 100 + "%";

              if(currentSong.currentTime === currentSong.duration){
                play.src = "play.svg";
              }
            }

            document
              .querySelector(".seek-bar")
              .addEventListener("click", (e) => {
                let seekBar = e.currentTarget;
                let clickPosition = e.offsetX;
                let barWidth = seekBar.getBoundingClientRect().width;
                let percentage = clickPosition / barWidth;
                let newTime = percentage * currentSong.duration;

                if (!isNaN(currentSong.duration)) {
                  currentSong.currentTime = newTime;
                  document.querySelector(".play-bar-circle").style.left =
                    percentage * 100 + "%";
                  document.querySelector(".fill").style.width =
                    percentage * 100 + "%";
                }
              });

            
            document.querySelector(".song-time").innerHTML =
              formatTime(currentSong.currentTime) +
              "/" +
              formatTime(currentSong.duration);
          });

          play.addEventListener("click", () => {
            if (currentSong.paused) {
              currentSong.play();
              play.src = "pause.svg";
            } else {
              currentSong.pause();
              play.src = "play.svg";
            }
          });

          return ID;
        }
        current = current.parentElement;
      }
    });
  });

next.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songName.length;
  currentSong.src = songs[currentSongIndex];
  document.querySelector(".song-name").innerHTML = songName[currentSongIndex];
  currentSong.load();
  currentSong.play().then(() => {
    play.src = "pause.svg";
  }).catch(err => {
    console.log("Autoplay prevented:", err);
  });
});

previous.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songName.length) % songName.length;
  currentSong.src = songs[currentSongIndex];
  document.querySelector(".song-name").innerHTML = songName[currentSongIndex];
  currentSong.load();
  currentSong.play().then(() => {
    play.src = "pause.svg";
  }).catch(err => {
    console.log("Autoplay prevented:", err);
  });
});

document.querySelector(".volume-container").getElementsByTagName("input")[0].addEventListener("change", (e)=>{
  currentSong.volume = parseInt(e.target.value)/100
  console.log("Volume",e.target.value)
})

document.querySelector(".volume-mute").addEventListener("click", (e)=>{
      console.log(e)
})

}

main();
