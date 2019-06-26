// console.log("hi")
// const heading = document.querySelector("h1");
// console.log(heading);
// const paragraph = document.querySelector("p");
// console.log(paragraph);
// const image = document.querySelector(".bill");
// console.log(image);
// const firstListItem = document.querySelector("li");
// const secondListItem = document.querySelector("li#second");
// console.log(firstListItem,secondListItem);
// const allListItems = document.querySelectorAll("li");
// //console.log(allListItems);
// for(let i=0; i<allListItems.length;i++){
//     const currentListItem= allListItems[i];
//     console.log(currentListItem);
// }
// const allParagraph = document.querySelectorAll("p");
// console.log(allParagraph);
// const img = document.querySelector("img");
// const src = img.getAttribute("src");
// const alt = img.getAttribute("alt");


// console.log(src+alt);
// const aTag = document.querySelector("a");
// const href = aTag.getAttribute("href");
// console.log(href)

// const img = document.querySelector("img");
// const currentSrc = img.getAttribute("src");
// img.setAttribute("src","https://placecage.com/400/400");


// const aTag = document.querySelector("a");
// aTag.setAttribute("href","https://duckduckgo.com")
// aTag.setAttribute("target","_blank")


// const heading = document.querySelector("h1");
// console.log(heading.innerText);

// heading.innerText= "Changed by JS";

// heading.innerText+= "!!!"


// aTag.innerHTML= "This is a <h2>Link</h2>"
// aTag.innerHTML+="!!!"

// const unorderedList = document.querySelector('ul')
// console.log(unorderedList.innerText)
// console.log(unorderedList.innerHTML)

// const input =document.querySelector("input");
// const currentValue = input.value;
// console.log(currentValue);

// input.value ="Hello From JS"
// const heading = document.querySelector("h1")

// const styles = getComputedStyle(heading);

// console.log(styles.color)
// console.log(styles.fontSize)

// const aTag = document.querySelector("a")
// const aTagStyles = getComputedStyle(aTag);

// console.log(aTagStyles.color)
// console.log(aTagStyles.display)
// console.log(aTagStyles.fontSize)
// console.log(aTagStyles.textDecoration)
// //console.log(aTagStyles)

// const image = document.querySelector("img")

// const imageStyle = getComputedStyle(image);

// console.log(imageStyle.border+"!!")
// console.log(imageStyle.width)
// console.log(imageStyle.height)
// console.log(imageStyle.borderRadius)

const heading = document.querySelector("h1");
heading.style.color = "hotpink"
heading.style.backgroundColor = 'green'
heading.style.fontSize = "100px"
const image =document.querySelector('img')
image.style.width = "200px"
image.style.height="400px"
image.style.border=" 50px pink solid"

const newHeading = document.createElement("h1")
newHeading.innerText= "Created by JS"
const targetDiv = document.querySelector("div.dynamic")

targetDiv.appendChild(newHeading)

const newImg = document.createElement('img')

newImg.setAttribute('src','https://placecage.com/300/300')
newImg.style.border = '4px dashed purple'
document.body.append(newImg);

const tweet =" This is a tweet!"
const author = "Abdullah"
const content = `${tweet}, posted by ${author}`
const newParagraph = document.createElement('p');
newParagraph.innerText= content;
newParagraph.style.color='blue';
const newTweetsDiv = document.querySelector('.newTweets')
newTweetsDiv.appendChild(newParagraph);
