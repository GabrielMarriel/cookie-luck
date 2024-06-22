const page1 = document.querySelector('.page-1');
const page2 = document.querySelector('.page-2');
const page1button = document.querySelector('.page-1 button');
const page2button = document.querySelector('.page-2 button');
const page2P = document.querySelector('.text-2');

page1button.addEventListener('click', handleClick);
page2button.addEventListener('click', handleResetClick);

var array = ["Se alguém está tão cansado que\n não possa te dar um sorriso,\ndeixa-lhe o teu","Àgua mole, pedra dura, tanto\n bate até que fura","Aiolé, Aiolé, fui na casa do\n mestre André"]


function handleClick(event){
  let i = (Math.floor(Math.random() * 3))
  page2P.innerText = `${array[i]}`
  page1.classList.add('hide');
  page2.classList.remove('hide');
}
function handleResetClick(event){
  page1.classList.remove('hide');
  page2.classList.add('hide');
}

