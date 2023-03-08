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

  const player = document.getElementById('play');
  let currentSongIndex = 0;
  let currentSong = new Audio(songs[currentSongIndex].url);
  const element = document.querySelector('.content');
  let songImage = document.getElementById("songImage");
  let repeat = document.getElementById("repeat");
  let masterPlay = document.getElementById("masterPlay");
let songText = document.getElementById("songText");
let desc = document.getElementById("desc");


  element.addEventListener('click', function(event) {
    // Check if the clicked element is the play button
    if  (event.target.classList.contains('bi-play-circle-fill') && event.target.id === 'play')  {
      bottomWrapper.style.display = 'block';
      event.target.classList.remove('bi-play-circle-fill');
      event.target.classList.add('bi-pause-circle-fill');
      masterPlay.classList.remove('bi-play-circle-fill');
      masterPlay.classList.add('bi-pause-circle-fill');
      currentSong.play();
      songImage.src = songs[currentSongIndex].image;
songText.innerHTML = "Playing " + songs[currentSongIndex].text;
desc.innerHTML = "Singer:" + songs[currentSongIndex].desc;
    }
    else if (event.target.classList.contains('bi-pause-circle-fill')) {
    currentSong.pause()
      event.target.classList.remove('bi-pause-circle-fill');
      event.target.classList.add('bi-play-circle-fill');
      masterPlay.classList.remove('bi-pause-circle-fill');
      masterPlay.classList.add('bi-play-circle-fill');
    }
    else {
      // Redirect to new page
      window.open("my playlist.html",  '_self');
    }

   
  });

  masterPlay.addEventListener("click", () => {
    if (currentSong.paused ) {
      currentSong.play();
      masterPlay.classList.remove("bi-play-circle-fill");
      masterPlay.classList.add("bi-pause-circle-fill");
      player.classList.remove("bi-play-circle-fill");
      player.classList.add("bi-pause-circle-fill");
     
    } else {
      currentSong.pause();
      masterPlay.classList.remove("bi-pause-circle-fill");
      masterPlay.classList.add("bi-play-circle-fill");
      player.classList.remove("bi-pause-circle-fill");
      player.classList.add("bi-play-circle-fill");
  }
   
  });

  currentSong.addEventListener("timeupdate", function () {
    range.value = (currentSong.currentTime / currentSong.duration) * 100;
  });
  
  range.addEventListener("change", function () {
    currentSong.currentTime = (range.value * currentSong.duration) / 100;
  });
  

  currentSong.addEventListener('ended', ()=> {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
      currentSongIndex = 0;
    }
    currentSong.src = songs[currentSongIndex].url;
   currentSong.play();
   songImage.src = songs[currentSongIndex].image;
   songText.innerHTML = "Playing " + songs[currentSongIndex].text;
   desc.innerHTML = "Singer:" + songs[currentSongIndex].desc;
  });


  document.getElementById('next').addEventListener('click', ()=>{
    if (currentSongIndex>songs.length) {
      currentSongIndex = 0;
    } else {
      currentSongIndex += 1;
    }
    currentSong.src = songs[currentSongIndex].url;
          currentSong.play();
          desc.innerHTML = "Artist: " + songs[currentSongIndex].desc;
          songImage.src = songs[currentSongIndex].image;
          songText.innerHTML = "Playing " + songs[currentSongIndex].text;
  })
  document.getElementById('previous').addEventListener('click', ()=>{
    if (currentSongIndex>songs.length) {
      currentSongIndex = 0;
    } else {
      currentSongIndex -= 1;
    }
    currentSong.src = songs[currentSongIndex].url;
          currentSong.play();
          desc.innerHTML = "Artist: " + songs[currentSongIndex].desc;
          songImage.src = songs[currentSongIndex].image;
          songText.innerHTML = "Playing " + songs[currentSongIndex].text;
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
    


