// Adding interactivity to the reveal form button and cancel form button
// Also adding blur and disabling tab for any elements behind the form.

const showFormBtn = document.querySelector('.show-form-button');
const showFormBtnWrapper = document.querySelector('.show-form-button-wrapper');
const hideFormBtn = document.querySelector('.request-form__hide-button');
const reqFormWrapper = document.querySelector('.request-form');
const submitFormBtn = document.querySelector('.request-form__submit-button')
const blurOverlay = document.querySelector('.blur-overlay');
const footer = document.querySelector('#page-footer');
const header = document.querySelector('#page-header');
const anchors = document.querySelectorAll('a')


showFormBtn.addEventListener('click', () => {
  reqFormWrapper.classList.add('display-flex');
  header.classList.add('page-blur');
  blurOverlay.classList.add('page-blur');
  footer.classList.add('page-blur');
  header.setAttribute('tabindex', '-1');
  for( const anchor of anchors) {
    anchor.setAttribute('tabindex', '-1');
    anchor.style.pointerEvents = 'none';
  };
  showFormBtnWrapper.setAttribute('tabindex', '-1');
  showFormBtn.setAttribute('tabindex', '-1');
  footer.setAttribute('tabindex', '-1');
});

hideFormBtn.addEventListener('click', () => {
  reqFormWrapper.classList.remove('display-flex');
  header.classList.remove('page-blur');
  blurOverlay.classList.remove('page-blur');
  footer.classList.remove('page-blur');
  header.setAttribute('tabindex', '0');
  for( const anchor of anchors) {
    anchor.setAttribute('tabindex', '0');
    anchor.style.pointerEvents = 'auto';
  };
  showFormBtn.setAttribute('tabindex', '-1');
  showFormBtnWrapper.setAttribute('tabindex', '0');
  footer.setAttribute('tabindex', '0');
});

submitFormBtn.addEventListener('click', () => {
  reqFormWrapper.classList.remove('display-flex');
  header.classList.remove('page-blur');
  blurOverlay.classList.remove('page-blur');
  footer.classList.remove('page-blur');
});

