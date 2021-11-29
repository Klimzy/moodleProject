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
  let taskForm = document.getElementById('taskForm');
  let tasksPointsArray = [];

  for (let i = 1; i < taskForm.length; i += 2) {
    tasksPointsArray.push(new TaskPoint(taskForm[i + 1].value, taskForm[i].checked));
  }
  return tasksPointsArray;
}
