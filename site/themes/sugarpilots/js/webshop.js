"use strict";
document.addEventListener("scroll", showSidenav);


window.addEventListener('DOMContentLoaded', () => {
    console.log("hej");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const sectionName = entry.target.getAttribute('id');
            if (entry.isIntersecting > 0) {
                console.log(sectionName);
                document.querySelector(`a[href="#${sectionName}"]`).classList.add(`active`);
            } else {
                document.querySelector(`a[href="#${sectionName}"]`).classList.remove(`active`);
            }
        });
    });
    document.querySelectorAll('.section').forEach((target) => {
        observer.observe(target);
    });
});

function showSidenav() {
    console.log("function læst");
    const scrollY = window.pageYOffset;
    const nav = document.querySelector(".webshop-sidenav");

    scrollY >= 365 ? nav.classList.add("show-sidenav") : "";
    scrollY < 365 ? nav.classList.remove("show-sidenav") : "";
}