console.log("Welcome to Musify");

//variables
let songindex=0;
let audioElement = new Audio('playlist/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myprogressbar');




let songs = [
    {songname: "name of the song", filepath: "playlist/1.mp3", coverpath:"images\song1.jpg"},
    {songname: "name of the song", filepath: "playlist/1.mp3", coverpath:"images\song1.jpg"},
    {songname: "name of the song", filepath: "playlist/1.mp3", coverpath:"images\song1.jpg"},
    {songname: "name of the song", filepath: "playlist/1.mp3", coverpath:"images\song1.jpg"},
    {songname: "name of the song", filepath: "playlist/1.mp3", coverpath:"images\song1.jpg"},
    {songname: "name of the song", filepath: "playlist/1.mp3", coverpath:"images\song1.jpg"},
]



//audioElement.play();
//pause/play
masterPlay.addEventListener('click',()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

   }

   else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');

   }
}
)
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{

    console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

