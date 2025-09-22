const welcomePage = document.querySelector('.welcome-page');
const welcomePageButton = document.querySelector('.welcome-main-page-button');
const mainPage = document.querySelector('.main-page');
const goBackButton = document.querySelector('.go-back-button');
const goMainButton = document.querySelector('.go-main-button');
const goBack2Button = document.querySelector('.go-main2-button');
const chemicalNameLink = document.querySelector('.search-by-chemical-name-link');
const taskLink = document.querySelector('.search-by-task-link');
const searchbychemicalnamePage = document.querySelector('.search-by-chemical-name-page');
const input = document.querySelector('.search-input');
const message = document.querySelector('.message');
const searchButton = document.querySelector('.search-button');
const card = document.querySelector('.info-card');
const chemicalName = document.querySelector('.chemical-name');
const majorComponent = document.querySelector('.major-component');
const riskLevel = document.querySelector('.risk-level');
const searchbytaskPage = document.querySelector('.search-by-task-page');
const searchbytaskInput = document.querySelector('.search-by-task-input');
const searchbytaskMessage = document.querySelector('.search-by-task-message');
const searchbytaskButton = document.querySelector('.search-by-task-button');

welcomePageButton.addEventListener('click', () => {
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

chemicalNameLink.addEventListener('click', () => {
  mainPage.classList.add('hidden');
  setTimeout(() => {
    mainPage.style.display = 'none';
    searchbychemicalnamePage.style.display = 'block';
    searchbychemicalnamePage.classList.remove('hidden');
  }, 300);
});

taskLink.addEventListener('click', () => {
  mainPage.classList.add('hidden');
  setTimeout(() => {
    mainPage.style.display = 'none';
    searchbytaskPage.style.display = 'block';
    searchbytaskPage.classList.remove('hidden');
  }, 300);
});

goMainButton.addEventListener('click', () => {
 searchbychemicalnamePage.classList.add('hidden');
  setTimeout(() => {
    searchbychemicalnamePage.style.display = 'none';
    mainPage.style.display = 'block';
    mainPage.classList.remove('hidden');
  }, 300);
});

goBack2Button.addEventListener('click', () => {
 searchbytaskPage.classList.add('hidden');
  setTimeout(() => {
    searchbytaskPage.style.display = 'none';
    mainPage.style.display = 'block';
    mainPage.classList.remove('hidden');
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

searchbytaskButton.addEventListener('click', function () {
  const query = searchbytaskInput.value.trim();
  if (query === '') {
    searchbytaskMessage.textContent = 'Kindly input a task';
  } else {
    searchbytaskMessage.textContent = '';
  }
});