// Search functionality
const search = document.getElementById("search");
const songs = document.querySelectorAll(".song");

search.addEventListener("keyup", function () {

    const value = search.value.toLowerCase();

    songs.forEach(song => {

        const title = song.querySelector("h3").textContent.toLowerCase();
        const artist = song.querySelector("p").textContent.toLowerCase();

        if (title.includes(value) || artist.includes(value)) {
            song.style.display = "flex";
        } else {
            song.style.display = "none";
        }

    });

});

// Play selected song
function playSong(index) {

    // Save selected song index
    localStorage.setItem("selectedSong", index);

    // Redirect to music player
    window.location.href = "index.html";

}