

function loadingfunction(){
    let boxnum=Math.floor(Math.random()*5);
    let animation=Math.floor(Math.random()*2)*-1;
    while(boxnum==0||animation==0)
    {
        boxnum=Math.floor(Math.random()*5);
        animation=Math.floor(Math.random()*2)*-1;
    }
    boxmove=document.querySelector(`.box${boxnum}`);
    let boxreplace;
    
    if(boxnum==1)
    {
        animation=1;
        boxreplace=document.querySelector(`.box${boxnum+1}`);
    }
    else if(boxnum==4){
        animation=-1;
        boxreplace=document.querySelector(`.box${boxnum-1}`);
    }
    else{
        if(animation==1)
        {
            boxreplace=document.querySelector(`.box${boxnum+1}`);
        }
        else
        {
            boxreplace=document.querySelector(`.box${boxnum-1}`);
        }
    }
    if(animation==1)
    {
        boxmove.style.animation="move1 2s 1";
        boxreplace.style.animation="move2 0.67s 1 1.33s";
    }
    else{
        boxmove.style.animation="move3 2s 1";
        boxreplace.style.animation="move4 0.67s 1 1.33s";
    }
}
boxes=document.querySelectorAll(".box");
boxes.forEach(box=>{
    box.addEventListener("animationend",()=>{box.style.animation="";})
})

loadingfunction();

setInterval(loadingfunction,2050);


let count=0;
let index=0;
let letter="";
let reverse=0;
window.addEventListener("load",()=>
{
    let preload=document.querySelector(".loader");
    preload.classList.add("fadeOut");
    let body=document.querySelector(".home_body");
    body.classList.remove("fadeOut");
    let count=0;
    index=0;
    letter="";
    reverse=0;
})


let playingmusic={0:""};
function scroll_events(){
    var headings=document.querySelectorAll(".disappear");
    headings.forEach(heading=>{
        text=heading.getBoundingClientRect().top;
        bottom=heading.getBoundingClientRect().bottom;
        var screenPosition=window.innerHeight/1.3;
        if(text<screenPosition)
        {
            heading.classList.add("appear");
        }
        if(text>=screenPosition||bottom<window.innerHeight/3)
        {
            heading.classList.remove("appear");
        }
    });
    let images=document.querySelectorAll(".shows img");
    images.forEach(image=>{
        if(curaudio==image.classList[1])
        {
        positiontop=image.getBoundingClientRect().top;
        positionbottom=image.getBoundingClientRect().bottom;
        var screenPosition=window.innerHeight;
        if(positiontop>=screenPosition || positionbottom<=0)
        {
            if(playingmusic[0]!="")
            {
                playingmusic[0].pause();
                playingmusic[0]="";
            }
        }
    }
      });


      let heading=document.querySelector(".typing");
      headingtop=heading.getBoundingClientRect.top;
      headingbottom=heading.getBoundingClientRect.bottom;
      if(headingtop<window.innerHeight)
      {
      typing();
      }
}
let curaudio="";
function playaudio(){
    let images=document.querySelectorAll(".shows img");
    var music={
        "friends":"assets/friends.mp3",
        "stranger_things":"assets/stranger_things.mp3",
        "breaking_bad":"assets/breaking_bad.mp3",
        "sherlock":"assets/sherlock.mp3",
        "himym":"assets/himym.mp3",
        "chernobyl":"assets/chernobyl.mp3",
        "rick_and_morty":"assets/rick_and_morty.mp3",
    };
    images.forEach(image=>{
           image.addEventListener("click",()=>{
               if(playingmusic[0]!="")
               {
                   playingmusic[0].pause();
                   playingmusic[0]="";
               }
            let name=image.classList[1];
            curaudio=name;
            console.log(`${music[`${name}`]}`);
            playingmusic[0]=new Audio(`${music[`${name}`]}`);
            playingmusic[0].play();
         });
    })
}


// TYPING EFFECT
let intros=["Welcome, dear reader...   ","","I am Gaurav Bhagchandani.   ","I gaze at the aura of stars and contemplate upon our existence.   "];
let introline=document.querySelector(".typing");
(function typing(){
    if(reverse==0)
    {
    letter=intros[count].slice(0,++index);
    introline.textContent=letter;
    }
    if(index===intros[count].length+1)
    {
        reverse=1;
        (function reversetyping(){
            letter=intros[count].slice(0,--index);
            introline.textContent=letter;
            if(index!=0)
            {
            setTimeout(reversetyping,75);
            }
            if(index==0)
            {
                reverse=0;
                count++;
                count%=intros.length;
            }
        })();
    }
    setTimeout(typing,150);
})();

window.addEventListener('scroll',scroll_events);
playaudio();
