function textInputValidate(form) {
  let requiredTextInputs = form.querySelectorAll('._required');
  let emptyInputs = 0;

  for (let i = 0; i < requiredTextInputs.length; i++) {
    if (requiredTextInputs[i].value == '') {
      formAddError(requiredTextInputs[i]);
      emptyInputs++;
    }
  }

  if (emptyInputs > 0) {
    alert('Одно из полей незаполнено')
    return false;
  }


  return true;

}


function checkboxValidate(form) {
  let checkboxes = form.querySelectorAll('.checkbox');
  let checkboxesFalseCounter = 0;

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == false) {
      checkboxesFalseCounter++;
    }
  }

  if (checkboxesFalseCounter === 0) {
    alert('Все вопросы являются верными');
    return false;
  } else if (checkboxesFalseCounter === checkboxes.length) {
    alert('Ни один вопрос не явлляется верным');
    return false;
  }

  return true;
}



function formAddError(element) {
  element.classList.add('_error');
}

function formRemoveError(form) {
  for (let i = 0; i < form.length; i++) {
    let element = form[i];
    element.parentElement.classList.remove('_error');
    element.classList.remove('_error');
  }
}
