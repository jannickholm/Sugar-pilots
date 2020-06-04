"use strict";
document.addEventListener("scroll", showSidenav);

window.addEventListener('DOMContentLoaded', () => {

    if(document.querySelector(".webshop-sidenav")) {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const sectionName = entry.target.getAttribute('id');
            if (entry.isIntersecting > 0) {
                document.querySelectorAll(".webshop-sidenav .links li a").forEach(link => link.classList = "");
                document.querySelector(`a[href="#${sectionName}"]`).classList.add(`active`);
            } else {
                document.querySelector(`a[href="#${sectionName}"]`).classList.remove(`active`);
            }
        });
    });
    document.querySelectorAll('.section').forEach((target) => {
        observer.observe(target);
    });
}
});

function showSidenav() {
    if(document.querySelector(".webshop-sidenav")) {
    const scrollY = window.pageYOffset;
    const nav = document.querySelector(".webshop-sidenav");
    scrollY >= 365 ? nav.classList.add("show-sidenav") : nav.classList.remove("show-sidenav");
    }
}
