'use  strict'

let tasksArray = [];

class TaskPoint {
  constructor(answer, isRight) {
    this.answer = answer;
    this.isRight = isRight;
  }

  displayTaskPoint() {
    console.log(this.isRight + ' ' + this.answer);
  }

  isRightCount() {
    if (this.isRight) return true
  }

  oneCorrAnswerFormat() {
    if (this.isRight) {
      return '=' + this.answer;
    } else return '~' + this.answer;

  }

  manyCorrAnswersFormat(weight) {
    if (this.isRight) {
      return "~%%" + 10 + weight + "% " + this.answer; // КОСТЫЛЬ ЕБАНЫЙ. 
    } else return '~%0% ' + this.answer;
  }

}

class Task {
  constructor(question, correctAnswCounter, tasksPointsArray) {
    this.question = question;
    this.correctAnswCounter = correctAnswCounter;
    this.tasksPointsArray = tasksPointsArray;

  }


  displayTask() {
    console.log(this.question);
    console.log('Кол-во верных ответов:' + this.correctAnswCounter);

    for (let i = 0; i < this.tasksPointsArray.length; i++) {
      this.tasksPointsArray[i].displayTaskPoint();
    }
  }

  oneCorrectAnswerTaskToMoodle() {
    let text = this.question + '{' + '\n';

    for (let i = 0; i < this.tasksPointsArray.length; i++) {
      text += this.tasksPointsArray[i].oneCorrAnswerFormat() + '\n';
    }
    text += '}' + '\n\n';
    return text;
  }


  manyCorrectAnswersTaskToMoodle() {
    let text = this.question + '{' + '\n';

    let weight = Math.trunc(100 / this.correctAnswCounter);

    for (let i = 0; i < this.tasksPointsArray.length; i++) {
      if (i == this.tasksPointsArray.length - 1) {
        weight += 100 % weight;
        text += this.tasksPointsArray[i].manyCorrAnswersFormat(weight) + '\n';
        continue;
      }
      text += this.tasksPointsArray[i].manyCorrAnswersFormat(weight) + '\n';


    }

    text += '}' + '\n\n';
    return text;


  }


}


function getQuestion() {
  return document.getElementById('inputQuestion').value;
}

function getTaskPoints() {
  let tasksBlocks = document.querySelectorAll('.answerBlock');
  let tasksPointsArray = [];

  for (let i = 0; i < tasksBlocks.length; i++) {
    let answer = tasksBlocks[i].querySelector('.textInput').value;
    let isRight = tasksBlocks[i].querySelector('.checkbox').checked;

    tasksPointsArray.push(new TaskPoint(answer, isRight))
  }

  return tasksPointsArray;
}

function countCorrAnswers() {
  checkboxesArr = document.querySelectorAll('.checkbox');
  let correctAnswCounter = 0;

  for (let i = 0; i < checkboxesArr.length; i++) {
    if (checkboxesArr[i].checked == true) {
      correctAnswCounter++;
    }
  }
  return correctAnswCounter;
}

function addTaskToTaskArray() {
  let form = document.getElementById('taskForm');

  formRemoveError(form);
  if (checkboxValidate(form) && textInputValidate(form)) {
    tasksArray.push(new Task(getQuestion(), countCorrAnswers(), getTaskPoints()));
    alert('Вопрос создан');
    tasksArray[tasksArray.length - 1].displayTask();
  }
}

function convertToMoodleFormat() {

}

function saveTasks() {
  let type = 'data:text/plain;charset=UTF-8, ';
  let text = '';

  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].correctAnswCounter == 1) {
      text += tasksArray[i].oneCorrectAnswerTaskToMoodle();
    } else {
      text += tasksArray[i].manyCorrectAnswersTaskToMoodle();
    }
  }


  let res = type + text;

  console.log(res);
  document.getElementById('saveTest').href = res;
}
