// Adding interactivity to the reveal form button and cancel form button

const showFormBtn = document.querySelector('.show-form-button');
const hideFormBtn = document.querySelector('.request-form__hide-button');
const reqFormWrapper = document.querySelector('.request-form');
const submitFormBtn = document.querySelector('request-form__submit-form')
const blurOverlay = document.querySelector('.blur-overlay');
const footer = document.querySelector('#page-footer');
const header = document.querySelector('#page-header');


showFormBtn.addEventListener('click', () => {
  reqFormWrapper.classList.add('display-flex');
  header.classList.add('page-blur');
  blurOverlay.classList.add('page-blur');
  footer.classList.add('page-blur');
});

hideFormBtn.addEventListener('click', () => {
  reqFormWrapper.classList.remove('display-flex');
  header.classList.remove('page-blur');
  blurOverlay.classList.remove('page-blur');
  footer.classList.remove('page-blur');
});

submitFormBtn.addEventListener('click', () => {
  reqFormWrapper.classList.remove('display-flex');
  header.classList.remove('page-blur');
  blurOverlay.classList.remove('page-blur');
  footer.classList.remove('page-blur');
});

