
let welcomeAnimation = async () => { 
    return new Promise((resolve, reject) => {
    setTimeout(() => {

       
            let video = document.createElement("video")

            video.setAttribute("class", "bgVideo")
            video.setAttribute("loop", "")
            video.setAttribute("autoplay", "")
            video.setAttribute("muted", "")
            video.innerHTML = `<source src="hack.mp4" type="video/mp4">`
            document.body.appendChild(video)
            document.body.setAttribute("background", "transparent")
            resolve(5)
        }, 5000)
        
    }, )
}
welcomeAnimation()


let awaitFun = async ()=>{
    let a = await welcomeAnimation()
   setTimeout(() => {
    
    if(a == 5){
        location.href = "hacker.html"
    }
   }, 3000);
}
awaitFun()

