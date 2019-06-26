// const timeoutCallback = function(){
//     console.log("TimeOut")
// }
 
// const clockTick = function(){
//     console.log("Tick")
// }
// const timer = setInterval(clockTick,1000)


// setTimeout(timeoutCallback,1000)

//setTimeout(fadeNickAway,1000);

const fadeNickAway= function(){
    const nick = document.querySelector('.nick');
    const currentOpacityAsString =   getComputedStyle(nick).opacity
    //console.log(currentOpacityAsString)
    const currentOpacity = parseFloat(currentOpacityAsString);
    let newOpacity = currentOpacity -0.01;
    nick.style.opacity= newOpacity;
    if(currentOpacity>=0){
        setTimeout(fadeNickAway,50);
    }
}
setTimeout(fadeNickAway,1000);