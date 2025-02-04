document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById('navbar');
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100){
            navbar.classList.remove("trasparent");
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
            navbar.classList.add("trasparent");
        }
    });
});