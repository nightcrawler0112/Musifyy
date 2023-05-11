console.log("Welcome to Musify");

//variables
let songindex=0;
let audioElement = new Audio('playlist/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myprogressbar');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('SongItem'));





let songs = [
    {songname: "O Bedardeya", filepath: "playlist/1.mp3", coverpath:"covers/1.jpg"},
    {songname: "Kesariya Tera", filepath: "playlist/2.mp3", coverpath:"covers/2.jpg"},
    {songname: "Yaar Ve", filepath: "playlist/3.mp3", coverpath:"covers/3.jpg"},
    {songname: "Ab Tere Bin Jee Lenge HUM", filepath: "playlist/4.mp3", coverpath:"covers/4.jpg"},
    {songname: "Deva Deva", filepath: "playlist/5.mp3", coverpath:"covers/5.jpg"},
    {songname: "Lambiyaan Si Judaiyaan", filepath: "playlist/6.mp3", coverpath:"covers/6.jpg"},
    {songname: "Lambiyaan Si Judaiyaan-2", filepath: "playlist/7.mp3", coverpath:"covers/7.jpg"},
]

songItems.forEach((element,i)=>{
    //console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;

}
)



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

   // console.log('timeupdate');
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeallplays();
        masterSongName.innerText = songs[songindex].songname;
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`playlist/${songindex+1}.mp3`;
        masterSongName.innerText = songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songindex<=0){
        songindex = 0
    }
    else{
        songindex -= 1;
    }
    audioElement.src = `playlist/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songindex>=5){
        songindex = 0
    }
    else{
        songindex += 1;
    }
    audioElement.src = `playlist/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

