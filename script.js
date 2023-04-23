console.log("Welcome to Musify");

//variables
let songindex=0;
let audioElement = new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myprogressbar');




let songs = [
    {songname: "name of the song", filepath: "pathofthesong", coverpath:"covers/1.jpg"},
    {songname: "name of the song", filepath: "pathofthesong", coverpath:"covers/1.jpg"},
    {songname: "name of the song", filepath: "pathofthesong", coverpath:"covers/1.jpg"},
    {songname: "name of the song", filepath: "pathofthesong", coverpath:"covers/1.jpg"},
    {songname: "name of the song", filepath: "pathofthesong", coverpath:"covers/1.jpg"},
    {songname: "name of the song", filepath: "pathofthesong", coverpath:"covers/1.jpg"}
]



//audioElement.play();
//pause/play
masterPlay.addEventListener('click',()=>{
   if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play;
   }
}
)
//Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{

    console.log('timeupdate');
    //update seekbar

}
)

