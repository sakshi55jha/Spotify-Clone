let currentSongIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let range = document.getElementById("range");
let songId = document.getElementById("1");
let songImage = document.getElementById("songImage");
let songText = document.getElementById("songText");
let desc = document.getElementById("desc");
let playPauseIcon = document.getElementsByClassName("playPauseIcon");
playPauseIcon = Array.from(playPauseIcon);
let repeat = document.getElementById('repeat')

const songs = [
  {
    url: "song1.mp3",
    image: "https://i.scdn.co/image/ab67616d0000485137f65266754703fd20d29854",
    text: "Maan Meri Jaan",
    desc: "king",
    id: 0,
  },
  {
    url: "song2.mp3",
    image: "https://i.scdn.co/image/ab67616d000048515675e83f707f1d7271e5cf8a",
    text: "Believer",
    desc: "Image Dragons",
    id: 1,
  },
  {
    url: "song3.mp3",
    image: "https://i.scdn.co/image/ab67616d0000485192cc21b3b1386ef3c810894d",
    text: "Garmi",
    desc: "Badshah,Neha Kakkar",
    id: 2,
  },
  {
    url: "song4.mp3",
    image: "https://i.scdn.co/image/ab67616d000048517d46ff19532fdba734bfd4e0",
    text: "Jhoome Jo Pathaan",
    desc: "Arjit-Singh",
    id: 3,
  },
  {
    url: "song5.mp3",
    image: "https://i.scdn.co/image/ab67616d00004851852d4ace5ba8cf082b045c38",
    text: "Desires",
    desc: "AP Dhillon",
    id: 4,
  },
  {
    url: "song6.mp3",
    image: "https://i.scdn.co/image/ab67616d000048515b74e703d6ffb2ea16860c86",
    text: "Excuses",
    desc: "AP Dhillon",
    id: 5,
  },
];

let currentSong = new Audio(songs[currentSongIndex].url);
songImage.src = songs[currentSongIndex].image;
songText.innerHTML = "Playing " + songs[currentSongIndex].text;
desc.innerHTML = "Singers:" + songs[currentSongIndex].desc;

masterPlay.addEventListener("click", () => {
  if (currentSong.paused ) {
    currentSong.play();
    masterPlay.classList.remove("bi-play-circle-fill");
    masterPlay.classList.add("bi-pause-circle-fill");
   
  } else {
    currentSong.pause();
    masterPlay.classList.remove("bi-pause-circle-fill");
    masterPlay.classList.add("bi-play-circle-fill");
}
 
  currentSong.addEventListener('ended', () => {
    masterPlay.classList.remove("bi-pause-circle-fill");
    masterPlay.classList.add("bi-play-circle-fill");
  })
 
});

currentSong.addEventListener("timeupdate", function () {
  range.value = (currentSong.currentTime / currentSong.duration) * 100;
});

range.addEventListener("change", function () {
  currentSong.currentTime = (range.value * currentSong.duration) / 100;
});

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("playPauseIcon")).forEach(
    (element) => {
      element.classList.remove("bi-pause-circle-fill");
      element.classList.add("bi-play-circle-fill");
    }
  );
};

Array.from(document.getElementsByClassName("playPauseIcon")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllplays();
      // let currentTime = 0;
      let index = Array.from(
        document.getElementsByClassName("playPauseIcon")
      ).indexOf(e.target);
      if (currentSong.paused) {
        // currentSong.currentTime = currentTime;
        currentSong.src = songs[index].url;
        currentSong.play();
        desc.innerHTML = "Artist: " + songs[index].desc;
        songImage.src = songs[index].image;
        songText.innerHTML = "Playing " + songs[index].text;
        e.target.classList.remove("bi-play-circle-fill");
        e.target.classList.add("bi-pause-circle-fill");
        masterPlay.classList.remove("bi-play-circle-fill");
        masterPlay.classList.add("bi-pause-circle-fill");
      } else {
       currentSong.pause();
        e.target.classList.remove("bi-pause-circle-fill");
        e.target.classList.add("bi-play-circle-fill");
        masterPlay.classList.remove("bi-pause-circle-fill");
        masterPlay.classList.add("bi-play-circle-fill");
     
      }
    
      masterPlay.addEventListener("click", () => {
        if (currentSong.paused) {
          masterPlay.classList.remove("bi-pause-circle-fill");
          masterPlay.classList.add("bi-play-circle-fill");

          playPauseIcon[index].classList.remove("bi-pause-circle-fill");
          playPauseIcon[index].classList.add("bi-play-circle-fill");
        } 
        else {
          currentSong.play()
          masterPlay.classList.remove("bi-play-circle-fill");
          masterPlay.classList.add("bi-pause-circle-fill");

          playPauseIcon[index].classList.remove("bi-play-circle-fill");
          playPauseIcon[index].classList.add("bi-pause-circle-fill");
        }
      });

      currentSong.addEventListener('ended', () => {
        index++;
        if(index>5){
        index = 0;
      }
      currentSong.src = songs[index].url;
      currentSong.play();
      desc.innerHTML = "Artist: " + songs[index].desc;
      songImage.src = songs[index].image;
      songText.innerHTML = "Playing " + songs[index].text;
      // if (e.target.classList.contains('bi-pause-circle-fill')) {
      //   e.target.classList.remove("bi-pause-circle-fill")
      //   e.target.classList.add("bi-play-circle-fill")

      // } 
      // else {
      //   e.target.classList.remove("bi-play-circle-fill")
      //   e.target.classList.add("bi-pause-circle-fill")
      // }
      makeAllplays();
        playPauseIcon[index].classList.remove("bi-play-circle-fill");
            playPauseIcon[index].classList.add("bi-pause-circle-fill");
        // masterPlay.classList.remove("bi-play-circle-fill");
        //     masterPlay.classList.add("bi-pause-circle-fill");



      });

document.getElementById('next').addEventListener('click', ()=>{
  if (index>6) {
    index = 0;
  } else {
    index += 1;
  }
  currentSong.src = songs[index].url;
        currentSong.play();
        desc.innerHTML = "Artist: " + songs[index].desc;
        songImage.src = songs[index].image;
        songText.innerHTML = "Playing " + songs[index].text;
        makeAllplays();
       playPauseIcon[index].classList.remove("bi-play-circle-fill");
       playPauseIcon[index].classList.add("bi-pause-circle-fill");
        masterPlay.classList.remove("bi-play-circle-fill");
        masterPlay.classList.add("bi-pause-circle-fill");
})

document.getElementById('previous').addEventListener('click', ()=>{
  if (index>6) {
    index = 0;
  } else {
    index -= 1;
  }
  currentSong.src = songs[index].url;
        currentSong.play();
        desc.innerHTML = "Artist: " + songs[index].desc;
        songImage.src = songs[index].image;
        songText.innerHTML = "Playing " + songs[index].text;
        makeAllplays();
       playPauseIcon[index].classList.remove("bi-play-circle-fill");
       playPauseIcon[index].classList.add("bi-pause-circle-fill");
        masterPlay.classList.remove("bi-play-circle-fill");
        masterPlay.classList.add("bi-pause-circle-fill");
})


  let isLooped = false;
  function toggleLoop() {
    if (!isLooped) {
      currentSong.loop = true;
      isLooped = true;
      currentSong.play()
      repeat.style.color = "green"
      
    } else {
      currentSong.loop = false;
      isLooped = false;
      repeat.style.color = "white"
      
    }
  }
  repeat.addEventListener('click', toggleLoop);
    });

   
  }
);


// WANT TO FIX MASTERPLAY BTN PROPERLY