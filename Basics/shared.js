var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');

var closeButtons = document.querySelectorAll('.modal__actions');

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}

for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', () => {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
  });
}

backdrop.addEventListener('click', () => {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
});
