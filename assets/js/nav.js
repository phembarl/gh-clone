const items = document.querySelector('.nav-items');
const toggler = document.querySelector('.toggle-btn');

const classToggle = () => {
  items.classList.toggle('toggle-show');
};

toggler.addEventListener('click', classToggle);
