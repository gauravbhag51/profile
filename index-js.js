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
        if(text>=screenPosition||bottom<window.innerHeight/3.2)
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
window.addEventListener('scroll',scroll_events);
playaudio();
