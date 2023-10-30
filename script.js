let menuBtn = document.querySelector('#menu-btn'); 
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {

    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');

}

window.onscroll = () => {

    menuBtn.classList.remove('bx-x');
    menuBar.classList.remove('active');
}

ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-bio h1', { origin:'left'});
ScrollReveal().reveal('.home-bio p', { origin: 'right'});
