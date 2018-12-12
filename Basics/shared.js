var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
var closeButtons = document.querySelectorAll('.modal__actions');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}

if (closeButtons) {
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', () => {
      if (modal) {
        modal.style.display = 'none';
      }
      backdrop.style.display = 'none';
    });
  }
}

backdrop.addEventListener('click', () => {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
  mobileNav.style.display = 'none';
});

toggleButton.addEventListener('click', () => {
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
});
