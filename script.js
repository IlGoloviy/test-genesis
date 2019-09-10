const enterContentOne = document.querySelector('.enter-content-one');
const enterContentTwo = document.querySelector('.enter-content-two');
const enterContentFour = document.querySelector('.enter-content-four');

// first window
const blockEnter = document.querySelector('#enter');
const startBtn = document.querySelector('.btn-next-start');
const footer = document.querySelector('#footer');

startBtn.addEventListener('click', () => {
  blockEnter.className += ' enter-step_two';
  footer.className += ' footer-step_two';

  enterContentOne.style.display = 'none';
  enterContentTwo.style.display = 'block';
});

// two window
const variant1 = document.querySelector('.variant1');
const variant2 = document.querySelector('.variant2');
const variant3 = document.querySelector('.variant3');
const btnTwoA = document.querySelector('#a-1');
const btnTwoB = document.querySelector('#b-1');
const btnTwoC = document.querySelector('#c-1');
const btnNextTwo = document.querySelector('.btn-next-step_two');

btnTwoA.addEventListener('click', () => {
  btnNextTwo.style.display = 'block';
  
  btnTwoA.className += ' btn-step_two-active';
  btnTwoB.className = 'btn-step_two';
  btnTwoC.className = 'btn-step_two';

  variant1.style.display = 'flex';
  variant2.style.display = 'none';
  variant3.style.display = 'none';
});

btnTwoB.addEventListener('click', () => {
  btnNextTwo.style.display = 'block';

  btnTwoB.className += ' btn-step_two-active';
  btnTwoA.className = 'btn-step_two';
  btnTwoC.className = 'btn-step_two';
  
  variant3.style.display = 'none';
  variant2.style.display = 'flex';
  variant1.style.display = 'none';
});

btnTwoC.addEventListener('click', () => {
  btnNextTwo.style.display = 'block';
  
  btnTwoC.className += ' btn-step_two-active';
  btnTwoA.className = 'btn-step_two';
  btnTwoB.className = 'btn-step_two';

  variant3.style.display = 'flex';
  variant2.style.display = 'none';
  variant1.style.display = 'none';
});

btnNextTwo.addEventListener('click', () => {
  variant3.style.display = 'none';
  variant2.style.display = 'none';
  variant1.style.display = 'none';

  blockEnter.className += ' enter-step_four';

  enterContentTwo.style.display = 'none';
  enterContentFour.style.display = 'block';
});

// four window
const maleVal = document.querySelector('#male');
const femaleVal = document.querySelector('#female');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const agePlus18 = document.querySelector('#age18');
const finishBtn = document.querySelector('#finish');
const form = document.querySelector('#registration');
const man = document.querySelector('#man');
const wooman = document.querySelector('#wooman');

man.addEventListener('click', () => {
  man.setAttribute('class', 'sex-active');
  wooman.removeAttribute('class');
})

wooman.addEventListener('click', () => {
  wooman.setAttribute('class', 'sex-active');
  man.removeAttribute('class');
})

form.addEventListener('change', () => {
  let sex = false;
  if (maleVal.checked || femaleVal.checked) sex = true;
  let age = agePlus18.checked;
  let nameVal = name.value;
  let emailVal = email.value;
  let passVal = password.value;

  if (nameVal != '' && emailVal != '' && passVal != '' && sex && age) {
    finishBtn.removeAttribute('disabled');
    finishBtn.className += ' finish-active';
  } else {
    finishBtn.setAttribute('disabled', 'disabled');
    finishBtn.className = 'finish';
  }
});

// form.addEventListener('submit', () => {
//   let nameVal = name.value;
//   let emailVal = email.value;
//   let passVal = password.value;

//   if (nameVal == '') name.setAttribute('placeholder', 'Введите свое имя');
//   if (emailVal == '') email.setAttribute('placeholder', 'Неверный формат email');
//   if (passVal == '') password.setAttribute('placeholder', 'Придумайте новый пароль');
// });