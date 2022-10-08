// intialize varible
let songIndex = 1;
let audioElemennt = new Audio('1.mp3');
let masterplay = document.getElementById('masterPlay');
let SongProgressBar = document.getElementById('SongProgressBar');
let songBannerImg = document.getElementById('songBannerImg');

let currSong = document.getElementById('currSong');
let backward = document.getElementById('backward');
let forward = document.getElementById('forward');
let gif = document.getElementById('gif');



// create song Array
let songs = [
    { songname: "Pehla Pyar - kabir singh", path: "1.mp3", cover: "cover1.jpg" },
    { songname: "Mere humsafar", path: "2.mp3", cover: "cover2.jpg" },
    { songname: "Baate Ye Kabhi Na", path: "3.mp3", cover: "cover3.jpg" },
    { songname: "kesariya", path: "4.mp3", cover: "cover4.jpg" },
    { songname: "Tujhe Kitna Chahne Lage", path: "5.mp3", cover: "cover5.jpg" },
    { songname: "Meharbani", path: "6.mp3", cover: "cover6.jpg" },
    { songname: "Phir Bhi Tumko Chaahunga", path: "7.mp3", cover: "cover7.jpg" },
    { songname: "Hamdard - Ek Villain", path: "8.mp3", cover: "cover8.jpg" },
    { songname: "Tu Jaane Na", path: "9.mp3", cover: "cover9.jpg" },
    { songname: "Tera Hone Laga", path: "10.mp3", cover: "cover10.jpg" },
]


const makeallPlay = () => {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((Element) => {
        Element.classList.remove('fa-circle-pause');
        Element.classList.add('fa-circle-play');
    })
}
const makeallpause = () => {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((Element) => {
        Element.classList.remove('fa-circle-play');
        Element.classList.add('fa-circle-pause');
    })
}
// play and pause music
masterplay.addEventListener("click", () => {
    // for playing song
    if (audioElemennt.paused || audioElemennt.currentTime <= 0) {
        audioElemennt.play();

        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        currSong.innerText = songs[songIndex - 1].songname;
        songBannerImg.src = `cover${songIndex}.jpg`;
        // document.getElementById('currSong').innerHTML=songs.songname;
        gif.style.opacity = 1;
        //i am sure that will be here just find what is logic
        // songIndex.classList.remove('fa-circle-play');
        // songIndex.classList.add('fa-circle-pause');

        // songItem.style.backgroundColor='red';

    }
    // for pause song
    else {
        audioElemennt.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
        gif.style.opacity = 0;
        makeallPlay();
    }
})



// listen to event 
audioElemennt.addEventListener("timeupdate", () => {
    progress = parseInt((audioElemennt.currentTime / audioElemennt.duration) * 100);
    SongProgressBar.value = progress;

})
SongProgressBar.addEventListener("change", () => {
    audioElemennt.currentTime = ((SongProgressBar.value * audioElemennt.duration) / 100);
    // duration=(audioElemennt.duration)/60;
    // document.getElementById('end-point').innerText=parseFloat(duration);
})


// to make all button play because at a time one song can be playing

Array.from(document.getElementsByClassName('songItemplay')).forEach((Element) => {
    Element.addEventListener("click", e => {
        makeallPlay();

        if (audioElemennt.paused || audioElemennt.currentTime <= 0) {
            songIndex = parseInt(e.target.id);
            e.target.classList.add('fa-circle-pause');
            currSong.innerText = songs[songIndex - 1].songname;
            audioElemennt.src = `${songIndex}.mp3`;
            songBannerImg.src = `cover${songIndex}.jpg`;
            audioElemennt.currentTime = 0;
            audioElemennt.play();
            // duration=parseFloat((audioElemennt.duration)/60);
            // document.getElementById('end-point').innerText=duration.toFixed(2);
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');

            gif.style.opacity = 1;



        }
        else {
            audioElemennt.pause();
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            masterplay.classList.remove('fa-pause');
            masterplay.classList.add('fa-play');
            gif.style.opacity = 0;
        }

    })
})

//prevous song

//next song
forward.addEventListener("click", () => {
    if (songIndex >= 10) {
        songIndex = 1;
    }
    else {

        songIndex += 1;
    }
    audioElemennt.src = `${songIndex}.mp3`;
    audioElemennt.currentTime = 0;
    audioElemennt.play();
    currSong.innerText = songs[songIndex - 1].songname;
    songBannerImg.src = `cover${songIndex}.jpg`;
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    makeallPlay();
    var check = document.getElementById('songItem${songIndex}');
    console.log(check);
    gif.style.opacity = 1;
});
backward.addEventListener("click", () => {
    if (songIndex <= 1) {
        songIndex = 10;
    }
    else {

        songIndex -= 1;
    }
    audioElemennt.src = `${songIndex}.mp3`;
    audioElemennt.currentTime = 0;
    audioElemennt.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    currSong.innerText = songs[songIndex - 1].songname;
    songBannerImg.src = `cover${songIndex}.jpg`;
    makeallPlay();
    gif.style.opacity = 1;
})

// about section
let about = document.getElementById('about');
about.addEventListener("click", () => {
    alert('Hey...Welcome to Spotify clone. Enjoy our best music collection without any Ads 👌');
})
let home = document.getElementById('home');
home.addEventListener("click", () => {
    alert("You are already on home page ☺️");
})