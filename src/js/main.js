const openDrawerBtn = document.querySelector('.open-drawer-btn');
const drawer = document.querySelector('.drawer');
const closeDrawerBtn = document.querySelector('.close-drawer-btn');
const body = document.body;

openDrawerBtn.addEventListener('click', () => {
    drawer.style.right = 0
})

closeDrawerBtn.addEventListener('click', () => {
    drawer.style.right = '-60%'
})

body.addEventListener('click', (e) => {
    if (e.target !== drawer && e.target !== openDrawerBtn){
        drawer.style.right = '-60%'
    }
})

function toggleDarkMode() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});