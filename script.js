console.log("Welcome to Musify");

//variables
let songindex=0;
let audioElement = new Audio('songname.mp3');
let masterPlay=document.getElementById('masterPlay');
let songs = [
    {songname: "name of the song", filepath: "pathofthesong", coverpath:"covers/1.jpg"},
    {songname: "name of the song", filepath: "pathofthesong", coverpath:"covers/1.jpg"},
    {songname: "name of the song", filepath: "pathofthesong", coverpath:"covers/1.jpg"},
    {songname: "name of the song", filepath: "pathofthesong", coverpath:"covers/1.jpg"},
    {songname: "name of the song", filepath: "pathofthesong", coverpath:"covers/1.jpg"},
    {songname: "name of the song", filepath: "pathofthesong", coverpath:"covers/1.jpg"}
]



//audioElement.play();

//Listen to Events
document.addEventListener('time')

