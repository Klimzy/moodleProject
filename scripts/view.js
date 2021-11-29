'use strict';

function init() {
  let createAnswerBlockButton = document.getElementById('createAnswerBlockButton');
  createAnswerBlockButton.addEventListener('click', createAnswerBlock);

  let resetFormButton = document.getElementById('resetFormButton');
  resetFormButton.addEventListener('click', cleanForm);


  let createTaskButton = document.getElementById('onSubmitButton');
  createTaskButton.addEventListener('click', createTask);

  // let saveMoodleFormatTasksButton = document.getElementById('saveMoodleFormatTasksButton');
  // saveMoodleFormatTasksButton.addEventListener('click', convertToMoodleFormatTasks)

  createAnswerBlock();
  createAnswerBlock();

}




function createAnswerBlock() {


  let answerBlock = document.createElement('div');
  answerBlock.className = 'answerBlock';

  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox';

  let inputAnswer = document.createElement('input');
  inputAnswer.type = 'text';
  inputAnswer.placeholder = ' Ответ №' + (document.querySelectorAll('.answerBlock').length + 1);
  inputAnswer.required = true;
  inputAnswer.className = 'textInput';
  inputAnswer.value = 'Ответ ' + (document.querySelectorAll('.answerBlock').length + 1)



  answerBlock.append(checkbox, inputAnswer);
  document.forms[0].append(answerBlock);


}

function cleanForm() {
  document.getElementById('inputQuestion').value = '';

  let a = document.querySelectorAll('.answerBlock');
  for (let i = 0; i < a.length; i++) {
    a[i].remove()
  }

  createAnswerBlock();
  createAnswerBlock();
}

function createTask() {


  tasksArray.push(new Task(getQuestion(), getTaskPoints()));

  tasksArray[tasksArray.length - 1].displayTask();

  cleanForm();
}


// function convertTasksToMoodleFormat(){
//
// }





window.onload = init;
