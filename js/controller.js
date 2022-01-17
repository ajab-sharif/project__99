const menu = document.querySelector('.nav__humburger');
const overlay = document.querySelector('.overlayHide');
const navMbl = document.querySelector('.nav__mobile');
menu.addEventListener('click', function () {
    this.classList.toggle('nav__open');
    overlay.classList.toggle('overlay');
    overlay.style.display = 'block';
    navMbl.classList.toggle('nav__mbl');
    navMbl.style.display = "block";
});
overlay.addEventListener('click', function () {
    menu.classList.remove('nav__open');
    navMbl.classList.remove('nav__mbl');
    overlay.classList.remove('overlay');
});
navMbl.addEventListener('click', function (e) {
    const click = e.target.attributes.href;
    if (!click) return;
    if (click.value !== '#') return;
    console.log(click);
    console.log('ok');
    menu.classList.remove('nav__open');
    navMbl.classList.remove('nav__mbl');
    overlay.classList.remove('overlay');
    console.log('ok');
})
console.log(navMbl);