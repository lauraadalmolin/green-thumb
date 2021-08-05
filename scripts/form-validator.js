"use strict";

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const contentTypeInput = document.getElementById('content-type');
const contentTitleInput = document.getElementById('content-title');
const contentDescriptionInput = document.getElementById('content-description');

const requiredElements = [nameInput, emailInput, contentTypeInput, contentTitleInput];


const checkIfContentIsEmpty = (event, element) => {
  const errorElement = document.createElement('span');
  errorElement.classList.add('input-error__message');
  errorElement.textContent = 'Esse campo é obrigatório!';
  
  const content = event.target.value;
  const parent = element.parentNode;
  const lastChild = parent.lastChild;

  if (!content && lastChild.tagName !== 'SPAN') {
    element.classList.add('input-error');
    parent.appendChild(errorElement);
  } 
  
  if (content && lastChild.tagName === 'SPAN') {
    element.classList.remove('input-error');
    parent.removeChild(parent.lastChild);
  } 
};

requiredElements.forEach(element => {
  element.addEventListener('keyup', (event) => {
    checkIfContentIsEmpty(event, element);
  });
});


