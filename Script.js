let song=new Audio("4.mpeg.mp3");
let masterBtn=document.getElementById("masterBtn");
let gif=document.getElementById("gif");
let range=document.getElementById("range");
let upperAudio=document.querySelectorAll(".audio");
let songName=document.getElementById("songName");

masterBtn.addEventListener("click",function(){
    if(song.paused || song.currentTime<=0){
    song.play()
masterBtn.classList.remove("fa-circle-play");
masterBtn.classList.add("fa-circle-pause");
gif.style.opacity="1";

setInterval(function(){
    let percentage=(song.currentTime/song.duration)*100;
    console.log(percentage);
    range.value=percentage;

},1000)


}else{
    song.pause();
    masterBtn.classList.add("fa-circle-play");
    masterBtn.classList.remove("fa-circle-pause");
    gif.style.opacity="0";
}
})

range.addEventListener("click",function(){
      song.currentTime=(range.value*song.duration)/100;
})

upperAudio.forEach(function(element){
    element.addEventListener("click",function(e){
        console.log(element);

        if(element.classList[2] == "fa-circle-play"){
        element.classList.remove("fa-circle-play");
        element.classList.add("fa-circle-pause");

        songName.innerText=element.parentElement.previousElementSibling.innerText;

        let index=e.target.id;
        console.log(index);
        song.src=`Songs/${index}.mpeg.mp3`;
        song.play();
        range.value=0;
        song.currentTime=0;
        console.log(song);
        gif.style.opacity="1";
        masterBtn.classList.remove("fa-circle-play");
        masterBtn.classList.add("fa-circle-pause");
        }else{
            song.pause();
            element.classList.add("fa-circle-play");
         element.classList.remove("fa-circle-pause");

        }

    })
})
