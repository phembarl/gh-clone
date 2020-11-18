const repoOptions = document.querySelector('.plus');
const repoMenu = document.querySelector('.repo-menu-container');
const profileOptions = document.querySelector('.avi');
const profileMenu = document.querySelector('.profile-menu-container');

repoOptions.addEventListener('click', () => {
  repoMenu.classList.toggle('active');
});

window.onclick = event => {
  if (repoMenu.contains(event.target) || repoOptions.contains(event.target)) {
  } else {
    repoMenu.classList.remove('active');
  }

  if (
    profileMenu.contains(event.target) ||
    profileOptions.contains(event.target)
  ) {
  } else {
    profileMenu.classList.remove('active');
  }
};

profileOptions.addEventListener('click', e => {
  profileMenu.classList.toggle('active');
});
