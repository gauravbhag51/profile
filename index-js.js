function heading_appear(){
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
}



function playaudio(){
    let images=document.querySelectorAll(".shows img");
    var music={
        "friends":"assets/friends.mp3",
        "stranger_things":"",
        "breaking_bad":"",
        "sherlock":"assets/sherlock.mp3",
        "himym":"",
        "chernobyl":"",
        "rick_and_morty":"",
    };
    images.forEach(image=>{
           image.addEventListener("click",()=>{
            let name=image.classList[1];
            console.log(`${music[`${name}`]}`);
            new Audio(`${music[`${name}`]}`).play();
         });
    })
}
window.addEventListener('scroll',heading_appear);
playaudio();
