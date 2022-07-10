/* Sticky Navigation Bar behavior defined */
window.addEventListener('scroll', (e)=> {
    const nav = document.querySelector('.navbar');
    if(window.pageYOffset>30){
        nav.classList.add("floatingNav");
    } else {
        nav.classList.remove("floatingNav");
    }
});