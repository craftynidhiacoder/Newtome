

window.onload = function() {
    console.log('Welcome to Spotify');

//Initialize the Variables
// let songIndex = 0;
let audioElement = new Audio('./1.mp3');
let masterPlay = document.getElementById('masterPlay');
console.log(masterPlay);
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Starboy", filePath: "./1.mp3", coverPath:"The_Weeknd_-_Starboy.png"},
    {songName: "Blinding Lights", filePath: "./2.mp3", coverPath:"ab67616d0000b2738863bc11d2aa12b54f5aeb36.jfif"},
    {songName: "Love Me Harder", filePath: "./3.mp3", coverPath:"d8a799c-6b24fb04-28c0-4833-9e87-713e6e80602c.png"},
    {songName: "One Right Now", filePath: "./4.mp3", coverPath:"artworks-0lcMAYATG5MQXfvW-HdHkvQ-t500x500.jpg"},
    {songName: "Save Your Tears", filePath: "./5.mp3", coverPath:"artworks-vWXn69sQ3VLn0Uuo-gX6Y4Q-t500x500.jpg"},
    {songName: "Take My Breath", filePath: "./6.mp3", coverPath:"the-weeknd-take-my-breath-Cover-Art.png"},
    {songName: "You Right", filePath: "./7.mp3", coverPath:"venessa-kaiser-zxzx.jpg"}
]

songItems.forEach((element, i)=>{
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

 // audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
}  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
}
} 
)
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // Update Seekbar 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = `${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
  };