import generateHomePage from './modules/homeTab';
import generateHeader from './modules/header';
import generateMenuPage from './modules/menuTab';
import generateContactPage from './modules/contactTab';

//------------------functions for startup--------------
function generatePageDiv(){
  let content = document.getElementById('content');
  let page = document.createElement('div');
  page.className = "company-motto-container";
  page.id = "pageContainer";
  content.appendChild(page);
}

function createEventListeners(){
  const homeBttn = document.getElementById('Home');
  const menuBttn = document.getElementById('Menu');
  const contactBttn = document.getElementById('Contact');

  homeBttn.addEventListener('click', ()=> generateHomePage(document.getElementById("pageContainer")));
  menuBttn.addEventListener('click' , ()=> generateMenuPage(document.getElementById("pageContainer")));
  contactBttn.addEventListener('click', ()=> generateContactPage(document.getElementById("pageContainer")));
}


function init(){
  generateHeader(document.getElementById("content"));
  generatePageDiv();
  generateHomePage(document.getElementById("pageContainer"));
  createEventListeners();
}

init();