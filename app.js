// O que vc vai altera em el dom ?

const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const fowardBtn = document.getElementById('forward');

const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');

const currentTime =  document.getElementById('current time');
const duration = document.getElementById ('durationEl');

const title = document.getElementById ("title");
const artist = document.getElementById ("artist")
const imgMusic = document.querySelector ("img")

let isPlaying = false; 
// Music
const songs = [
    {
        name: "relaxing-1",
        displayName: "Chillax",
        artist: "Francisco Alvear",

       
    },
    {
        name: "relaxing-2",
        displayName: "Staring at the Night Sky",
        artist: "Alejandro Magaña",


    },
    {
        name: "relaxing-3",
        displayName: "Nature Meditation",
        artist: "Arulo",

    },
    {
        name: "relaxing-4",
        displayName: "Nield Grohm-4",
        artist: "Eugenio Mininni",

       
    },
    {
        name: "relaxing-5",
        displayName: "Nield Grohm-4",
        artist: "Eugenio Mininni",

       
    },
]

//Functionality

function playSong() {
    isPlaying = true ;
    music.play(); 
    playBtn.classList.replace("fa-play-circle", "fa-pause");

}

function pauseSong() {
    isPlaying = false;
    music.pause();
    playBtn.classList.replace( "fa-pause","fa-play-circle");
}
//Play or Pause

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));


//Update the Dom 

function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.name;
    music.src = `SongsRelaxing/${song.name}.mp3` ;
    imgMusic.src = `img-relaxing/${song.name}.jpg`;
    
}
let indexSong = 0;
// Events 
function prevSong () {
    indexSong--;
    if (indexSong = -1){
        indexSong = songs-length - 1 ;
    }
    loadSong(songs[indexSong]);
    playSong();
}

function nextSong () {
    indexSong++;
    if (indexSong > songs.length -1) {
        indexSong = 0;
    }
    loadSong(songs[indexSong]);
    playSong();

    
}
//Progress Bar 
function updatedProgressBar(e) {
    if(isPlaying) {
    const {duration,currentTime} = e.target;
        //console.log(duration,currentTime);
        //update width 
    const progressPercent = (currentTime/duration) *100;
        // console.log(progressPercent);
    progress.style.width = `${progressPercent}%`;
    //Duration 
    const durationInMinutes = Math.floor(duration/60);
    console.log('min:', durationInMinutes);
    let durationSeconds = Math.floor(duration % 60);
    if (durationSeconds < 10) {
        durationSeconds = `0${durationSeconds}`;
    }
    console.log('seconds:', durationSeconds);
    let totalDuration =  durationInMinutes + ':' + durationSeconds;
    console.log(`${durationInMinutes}:${durationSeconds}`);
    }
}

prevBtn.addEventListener("click", prevSong);
fowardBtn.addEventListener("click", nextSong);
music.addEventListener('timeupdate', updatedProgressBar)