const welcomePage = document.querySelector('.welcome-page');
const button = document.querySelector('.welcome-main-page-button');
const mainPage = document.querySelector('.main-page');
const goBackButton = document.querySelector('.go-back-button');
const searchButton = document.querySelector('.search-button');
const card = document.querySelector('.info-card');
const input = document.querySelector('.search-input');
const message = document.querySelector('.message');
const chemicalName = document.querySelector('.chemical-name');
const majorComponent = document.querySelector('.major-component');
const riskLevel = document.querySelector('.risk-level');

button.addEventListener('click', () => {
  welcomePage.classList.add('hidden');
  setTimeout(() => {
    welcomePage.style.display = 'none';
    mainPage.style.display = 'block';
    mainPage.classList.remove('hidden');
  }, 300);
});

goBackButton.addEventListener('click', () => {
  mainPage.classList.add('hidden');
  setTimeout(() => {
    mainPage.style.display = 'none';
    welcomePage.style.display = 'block';
    welcomePage.classList.remove('hidden');
  }, 300);
});

/*
searchButton.addEventListener('click', function () {
  const query = input.value.trim();
  if (query === '') {
    message.textContent = 'Kindly input a chemical name';
    card.classList.add('hidden');
  } else {
    message.textContent = '';
    card.classList.remove('hidden');
  }
});
*/

/*
searchButton.addEventListener('click', () => {
  card.classList.remove('hidden');
});
*/

searchButton.addEventListener('click', () => {
  const value = input.value.trim().toLowerCase();

  if (!value) {
    message.textContent = 'Kindly input a chemical name';
    card.classList.add('hidden');
    return;
  }

  const found = chemicals.find(chemical => chemical.name.toLowerCase() === value);
  if (found) {
    chemicalName.textContent = found.name;
    majorComponent.textContent = found.component;
    riskLevel.textContent = found.risk;
    message.textContent = '';
    card.classList.remove('hidden');
  } else {
    message.textContent = 'Chemical not found. Please try another name.';
    card.classList.add('hidden');
  }
});