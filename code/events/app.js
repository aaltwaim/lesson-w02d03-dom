console.log("events")
const eventType = 'click';
const myButton = document.querySelector('button');

const myCallback = function(event){
    console.log("the Button was clicked"+event);
}
myButton.addEventListener(eventType,myCallback)

const darkButton = document.querySelector('.dark')

const changeToDarkTheme = function(){
   // const heading = document.querySelector('h2.dark')
   document.body.style.backgroundColor='black';
   document.body.style.color='white';
}
darkButton.addEventListener("click",changeToDarkTheme)

const lightButton = document.querySelector('.light')

const changeToLightTheme = function(){
   // const heading = document.querySelector('h2.dark')
   document.body.style.backgroundColor='white';
   document.body.style.color='black';
}
lightButton.addEventListener("click",changeToLightTheme)

const postTweetButton = document.querySelector(".post");

const createTweet= function(){
    const input = document.querySelector("input");
    const content = input.value;


    const newPara = document.createElement('p');
    newPara.innerText= content;

    const newTweetDiv = document.querySelector('.newTweets')
    newTweetDiv.appendChild(newPara);
}
postTweetButton.addEventListener('click', createTweet)


const colorInput = document.querySelector('input.color');

const onColorChange = function(){
    document.body.style.background = colorInput.value;

}

colorInput.addEventListener("change",onColorChange);

let clickCount =0

const clickCounterButton = document.querySelector('button.click')
const onClick = function(){
clickCount+=1;
const targetDiv = document.querySelector(".clickCount")
targetDiv.innerText = clickCount;

}
clickCounterButton.addEventListener('click',onClick)

const billImage = document.querySelector(".bill");
const nickImage = document.querySelector(".nick");

const doubleImageSize = function(){
    this.style.width='600px'

}

billImage.addEventListener('click', doubleImageSize)
nickImage.addEventListener('click', doubleImageSize)