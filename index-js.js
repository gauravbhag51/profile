let playingmusic={0:""};
function scroll_events(){
    var headings=document.querySelectorAll(".h1-animated");
    headings.forEach(heading=>{
        text=heading.getBoundingClientRect().top;
        var screenPosition=window.innerHeight/1.3;
        if(text<screenPosition)
        {
            heading.classList.add("h1-appear");
        }
        if(text>=window.innerHeight)
        {
            heading.classList.remove("h1-appear");
        }
    })
    let images=document.querySelectorAll(".shows img");
    images.forEach(image=>{
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
      });
}

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
            console.log(`${music[`${name}`]}`);
            playingmusic[0]=new Audio(`${music[`${name}`]}`);
            playingmusic[0].play();
         });
    })
}
window.addEventListener('scroll',scroll_events);
playaudio();
