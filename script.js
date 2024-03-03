// toggle kelas aktive
const navbarNav = document.querySelector('.navbar-nav');

//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').oneclick = () => {
  navbarNav.classList.toggle('active');
};

