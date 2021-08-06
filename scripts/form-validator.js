"use strict";

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const contentTypeInput = document.getElementById('content-type');
const contentTitleInput = document.getElementById('content-title');
const contentDescriptionInput = document.getElementById('content-description');

const requiredElements = [nameInput, contentTypeInput, contentTitleInput];


const validateInput = (element, testCondition) => {
  const errorElement = element.nextElementSibling;

  if (testCondition) {
    errorElement.classList.remove('hidden');
    element.classList.add('input-error');
  } else {
    errorElement.classList.add('hidden');
    element.classList.remove('input-error');
  } 

};

requiredElements.forEach(element => {
  element.addEventListener('keyup', (event) => {
    const content = event.target.value;
    const testCondition = !content;

    validateInput(element, testCondition);
  });
});




emailInput.addEventListener('keyup', (event) => {
  const content = event.target.value;

  // validação de e-mail com regex
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const testCondition = !content || !re.test(content);
  
  validateInput(emailInput, testCondition);
});

