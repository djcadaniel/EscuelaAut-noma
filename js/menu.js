const buttonMenu = document.querySelector('.header__button')
const menu = document.querySelector('.header__menu')
const menuItem1 = document.querySelector('.header__ul--li1')
const menuItem2 = document.querySelector('.header__ul--li2')
const menuItem3 = document.querySelector('.header__ul--li3')
const menuItem4 = document.querySelector('.header__ul--li4')


const ocultar = () =>(
    menu.classList.toggle('visible')
)
buttonMenu.addEventListener('click',ocultar)

const mostrar = ()=>(
    menu.classList.toggle('visible')
)
menuItem1.addEventListener('click', mostrar)
menuItem2.addEventListener('click', mostrar)
menuItem3.addEventListener('click', mostrar)
menuItem4.addEventListener('click', mostrar)


