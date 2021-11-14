'use strict'



window.onload = init;

function init() {
  let createNewAnswerBlockButton = document.getElementById('createNewAnswerAreaButton');
  createNewAnswerBlockButton.addEventListener('click', addNewAnswerBlock);

  addNewAnswerBlock();
}


function addNewAnswerBlock() {
  let blockedAnswerBlock = document.getElementById('blockedAnswerBlock');

  let answerBlock = document.createElement('div');
  answerBlock.className = 'answerBlock';

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  let answer = document.createElement('input');
  answer.type = 'text';
  answer.value = 'helo';
  answer.name = 'nameAnswerInput';
  answer.placeholder = 'Answer';
  answer.required = true;

  answerBlock.append(checkbox, answer);
  blockedAnswerBlock.before(answerBlock);

}



let mainForm = document.mainForm.nameAnswerInput;

console.log(mainForm);
