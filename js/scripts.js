"use strict";

// Бургер-меню
let hamburger = document.querySelector(".hamburger");
let navbar = document.querySelector(".navbar");
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    navbar.classList.toggle("is-open");
});

// Статус пункта меню во время прокрутки страницы
const links = document.querySelectorAll('.menu-link');
const sections = document.querySelectorAll('.section');

function changeLinkState() {
    let index = sections.length;
    while (--index && window.scrollY + 50 < sections[index].offsetTop) { }
    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);