// ==============================
// SONG LIST
// ==============================

const songs = [
    {
        title: "Baby Now That I Found You",
        artist: "Ella Bright",
        src: "songs/song1.mp3",
        cover: "images/cover1.jpeg"
    },
    {
        title: "Heartbreak Anniversary",
        artist: "Giveon",
        src: "songs/song2.mp3",
        cover: "images/cover2.jpeg"
    },
    {
        title: "Blank Space",
        artist: "Taylor Swift",
        src: "songs/song3.mp3",
        cover: "images/cover3.jpeg"
    }
];

// ==============================
// GET HTML ELEMENTS
// ==============================

const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const progress = document.getElementById("progress");
const current = document.getElementById("current");
const duration = document.getElementById("duration");

const volume = document.getElementById("volume");

// ==============================
// CURRENT SONG
// ==============================

let index = parseInt(localStorage.getItem("selectedSong"));

if (isNaN(index)) {
    index = 0;
}

let isPlaying = false;

// ==============================
// LOAD SONG
// ==============================

function loadSong(songIndex) {

    audio.src = songs[songIndex].src;
    cover.src = songs[songIndex].cover;
    title.textContent = songs[songIndex].title;
    artist.textContent = songs[songIndex].artist;

    progress.value = 0;
}

// ==============================
// PLAY SONG
// ==============================

function playSong() {

    audio.play();

    isPlaying = true;

    playBtn.innerHTML = '<i class="fas fa-pause"></i>';

    cover.style.animation = "spin 8s linear infinite";
}

// ==============================
// PAUSE SONG
// ==============================

function pauseSong() {

    audio.pause();

    isPlaying = false;

    playBtn.innerHTML = '<i class="fas fa-play"></i>';

    cover.style.animation = "none";
}

// ==============================
// PLAY / PAUSE
// ==============================

playBtn.addEventListener("click", () => {

    if (isPlaying) {

        pauseSong();

    } else {

        playSong();

    }

});

// ==============================
// NEXT SONG
// ==============================

nextBtn.addEventListener("click", () => {

    index++;

    if (index >= songs.length) {

        index = 0;

    }

    localStorage.setItem("selectedSong", index);

    loadSong(index);

    playSong();

});

// ==============================
// PREVIOUS SONG
// ==============================

prevBtn.addEventListener("click", () => {

    index--;

    if (index < 0) {

        index = songs.length - 1;

    }

    localStorage.setItem("selectedSong", index);

    loadSong(index);

    playSong();

});

// ==============================
// UPDATE PROGRESS
// ==============================

audio.addEventListener("timeupdate", () => {

    if (!isNaN(audio.duration)) {

        progress.max = audio.duration;

        progress.value = audio.currentTime;

        current.textContent = formatTime(audio.currentTime);

        duration.textContent = formatTime(audio.duration);

    }

});

// ==============================
// SEEK SONG
// ==============================

progress.addEventListener("input", () => {

    audio.currentTime = progress.value;

});

// ==============================
// VOLUME
// ==============================

volume.addEventListener("input", () => {

    audio.volume = volume.value;

});

// ==============================
// AUTOPLAY NEXT
// ==============================

audio.addEventListener("ended", () => {

    index++;

    if (index >= songs.length) {

        index = 0;

    }

    localStorage.setItem("selectedSong", index);

    loadSong(index);

    playSong();

});

// ==============================
// FORMAT TIME
// ==============================

function formatTime(time) {

    if (isNaN(time)) return "0:00";

    let minutes = Math.floor(time / 60);

    let seconds = Math.floor(time % 60);

    if (seconds < 10) {

        seconds = "0" + seconds;

    }

    return minutes + ":" + seconds;
}

// ==============================
// LOAD FIRST SONG
// ==============================

loadSong(index);