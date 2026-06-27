const hamburger=document.querySelector('.hamburger');
const nav=document.querySelector('nav');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    
    const clickedInsideNav = nav.contains(e.target);
    const clickedHamburger = hamburger.contains(e.target);

    if (!clickedInsideNav && !clickedHamburger) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        overlay.classList.remove('active');
    }

});