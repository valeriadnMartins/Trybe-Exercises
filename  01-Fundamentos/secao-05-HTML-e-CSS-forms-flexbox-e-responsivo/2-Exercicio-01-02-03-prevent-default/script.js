

<a href="www.betrybe.com" target="_blank" id="href">TRYBE</a>;
<input type="text" id="input-text"/>;
<input type="checkbox" id="input-checkbox" />; 


// SELETORES
const inputText = document.querySelector("#input-text");
inputText.addEventListener('keypress', (event) => {
    const character = event.key;
    if (character !== 'a') {
      event.preventDefault();
    }
  });

const inputCheckbox = document.querySelector("#input-checkbox");
inputCheckbox.addEventListener('click', (event) => {
    event.preventDefault();
  });

const hrefLink = document.querySelector("#href");

hrefLink.addEventListener('click', (event) => {
    event.preventDefault();
  });