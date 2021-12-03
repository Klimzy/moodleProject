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
  inputAnswer.className = 'textInput _required';
  inputAnswer.value = 'Ответ ' + (document.querySelectorAll('.answerBlock').length + 1)



  answerBlock.append(checkbox, inputAnswer);
  document.querySelector('.buttonBlock').before(answerBlock);
}

function cleanForm() {
  let form = document.getElementById('taskForm');
  formRemoveError(form);

  document.getElementById('inputQuestion').value = '';

  let a = document.querySelectorAll('.answerBlock');
  for (let i = 0; i < a.length; i++) {
    a[i].remove()
  }


  createAnswerBlock();
  createAnswerBlock();
}

function createTask() {
  let form = document.getElementById('taskForm');

    formRemoveError(form);
    if(checkboxValidate(form) && textInputValidate(form)){
    tasksArray.push(new Task(getQuestion(), getTaskPoints()));
    tasksArray[tasksArray.length - 1].displayTask();
  }
}


// function convertTasksToMoodleFormat(){
//
// }





window.onload = init;
