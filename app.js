const navToggle = document.getElementById('navi')
const navBox = document.getElementById('navbox')


navToggle.addEventListener('click', () => {
    navBox.classList.toggle('active')
})