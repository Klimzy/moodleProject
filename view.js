'use strict';

function init() {
  let createAnswerBlockButton = document.getElementById('createAnswerBlockButton');
  createAnswerBlockButton.addEventListener('click', createAnswerBlock);

  let resetFormButton = document.getElementById('resetFormButton');
  resetFormButton.addEventListener('click', cleanForm);
}




function createAnswerBlock(){
  let blockedAnswerBlock = document.getElementById('blockedAnswerBlock');

  let answerBlock = document.createElement('div');
  answerBlock.className = 'answerBlock';

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  let inputAnswer = document.createElement('input');
  inputAnswer.type = 'text';
  inputAnswer.placeholder = 'Ответ';
  inputAnswer.required = true;



  answerBlock.append(checkbox, inputAnswer);
  blockedAnswerBlock.before(answerBlock);
  }

  function cleanForm() {
  let a = document.querySelectorAll('.answerBlock');
    for (let i = 0; i < a.length; i++) {
      a[i].remove()
    }
  }

window.onload = init;
