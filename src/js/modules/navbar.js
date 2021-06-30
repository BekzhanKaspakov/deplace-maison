const body = document.getElementsByTagName('body')[0]
const btn = document.querySelector('#navToggleBtn')
const navBar = document.querySelector('#navbarToggle')
btn.addEventListener('click', () => {
    (btn.getAttribute('aria-expanded') === "false")
    ? btn.setAttribute('aria-expanded', true)
    : btn.setAttribute('aria-expanded', false)
    btn.classList.toggle('active')
    btn.classList.toggle('close-menu-icon')
    navBar.classList.toggle('d-none')
    body.classList.toggle('no_overflow')
})