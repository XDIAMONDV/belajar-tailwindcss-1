const hambugerMenu = document.getElementById('hambuger-menu');

hambugerMenu.addEventListener('click', () => {
    const menu = document.getElementById('menu')
    menu.classList.toggle('hidden')
})

menu.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})