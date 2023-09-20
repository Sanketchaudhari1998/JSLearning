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