
console.log('======== getElementById() ==========');
const elementCssTopic = document.getElementById("cssTopics");
console.log(elementCssTopic.innerHTML);
elementCssTopic.innerHTML = "CSS IMP Topics";
console.log('======== getElementsByClassName() ==========');

const topicsElements = document.getElementsByClassName('topics');
console.log(topicsElements[0].innerHTML);
console.log(topicsElements[1].innerHTML);

console.log('======== querySelector() ==========');
const element= document.querySelector('#selector');
console.log(element.innerHTML);

const elementJsTopics = document.querySelector('.jsTopic');
console.log(elementJsTopics.innerHTML);
// console.log(elementJsTopics[1].innerHTML);
// console.log(elementJsTopics[2].innerHTML);

console.log('======== querySelectorAll() ==========');
const allElementsJsTopics = document.querySelectorAll('.jsTopic');
for (let index = 0; index < allElementsJsTopics.length; index++) {
    const element = allElementsJsTopics[index].innerHTML;
    console.log(element);  
}
// Changing the attribute using JS
const elementFollowMe = document.querySelector('#linkedIn');
elementFollowMe.setAttribute('href', "https://www.linkedin.com/login");

// Creating the new element
const elementLi = document.createElement('li');
const elementTextNode = document.createTextNode("ES6 features");
elementLi.appendChild(elementTextNode);
const elementJsTopicList = document.querySelector('#jsTopicList');
elementJsTopicList.appendChild(elementLi);

// Remove element
const elementControlFlow = document.querySelector('#controlFlow');
const elementJsTopic = document.querySelector('#jsTopicList');
elementJsTopic.removeChild(elementControlFlow);

// Applying css
const elementListHeading = document.querySelector('#listHeading');
elementListHeading.style.color = 'red';
// fontFamily

//Event Handling
function youClickedMe(){
    console.log('Hey you clicked me...');
    alert('You clicked me...');
}

const elementSelector = document.querySelector('#selector');
elementSelector.addEventListener('click', ()=>{
    alert('Hey I am selector and you clicked me. let me hit you back');
});
elementSelector.addEventListener('mouseover', ()=>{
    elementSelector.style.color = 'blue';
});