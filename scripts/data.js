let tasksArray = [];
let moodleFormatTasksArray = [];

class TaskPoint {
  constructor(answer, isRight) {
    this.answer = answer;
    this.isRight = isRight;
  }

  displayTaskPoint() {
    console.log(this.isRight + ' ' + this.answer);
  }

  createOneCorrAnswerFormat() {
    if (this.isRight) {
      return '=' + this.answer;
    } else return '~' + this.answer;

  }

}

class Task {
  constructor(question, tasksPointsArray) {
    this.question = question;
    this.tasksPointsArray = tasksPointsArray;
  }


  displayTask() {
    console.log(this.question);

    for (let i = 0; i < this.tasksPointsArray.length; i++) {
      this.tasksPointsArray[i].displayTaskPoint();
    }
  }

  questionToMoodleForat(){
    return this.question + '{';
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
