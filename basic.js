window.onload = function () {
  alert('WELCOME')
}
function changeTitle(newTitle) {
  let title = document.querySelector('title')
  title.innerText = newTitle
}
function addClassToHeading() {
  let h1 = document.querySelector('h1')
  h1.classList.add('myHeading')
}
function changePcontent() {
  let paragraph = document.querySelectorAll('div p')
  for(i=0;i<paragraph.length;i++){
    paragraph[i].innerText='The text to be changed'
  }
}
function changeUrls() {
  let links = document.querySelector('a')
  links.setAttribute('href', 'https://www.google.com');
}
function addToTheSecond(content) {
  let List = document.querySelector('#secondList')
  let newItem = document.createElement('li')
  newItem.innerText = content
  List.appendChild(newItem)
}
function addParagraph() {
  let newParagraph = document.createElement('p')
  let oldParagraph = document.querySelectorAll('div')
  newParagraph.innerText = 'Something to be Added'
  for(i=0;i<oldParagraph.length;i++){
    oldParagraph[i].appendChild(newParagraph)
  }
}
function firstUlDisappear() {
  let ul = document.querySelectorAll('#firstList li')
  for(i=0;i<ul.length;i++){
    ul[i].style.visibility = 'hidden'
  }
}
function paintItGreen() {
  let ul = document.querySelectorAll('#lists ul li')
  for(i=0;i<ul.length;i++){
    ul[i].style.backgroundColor = 'green'
  }
}
// ​ let clrs = ['white','red','green','blue','orange','yellow']
// function makeItClickable() {
//     let random = Math.floor(Math.rand()*clrs.length)
//     let heading = document.getElementsByTagName('h1')
//     heading.style.color = colors[random]
// }
function addNewTask(){
  let content = document.getElementById('newTask').value
  let newItem = document.createElement('li')
  newItem.innerText = content
  let taskList = document.getElementById('myTaskList')
  console.log(taskList)
  console.log(newItem)
  taskList.appendChild(newItem)
  // content=''
}