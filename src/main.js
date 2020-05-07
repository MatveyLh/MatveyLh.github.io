import '../css/style.css';
import CompanyLogo from '../img/logo.png';
import EarthLogo from '../img/earth2.png';
import RocketLogo from '../img/rocket.png';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import ReviewsLogo from '../img/reviews.png';

let logo = document.querySelector('.logo-company');
logo.innerHTML = `<img src="${CompanyLogo}">`;



let earthImage = document.querySelector('.content');
earthImage.style = `background-image: url(${EarthLogo}); background-repeat: no-repeat; background-position: right 0px top 0%;; background-size: 50%;`;

const anchors = document.querySelectorAll('#navigation > a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

let rocket = document.querySelector('.rocket');
rocket.innerHTML = `<img src="${RocketLogo}">`;

let reviews = document.querySelectorAll('.item');
for (let i of reviews) {
    i.innerHTML += `<img src="${ReviewsLogo}">`;
}

$(document).ready(function () {

    $('.feedback').owlCarousel({
        items: 1,
        nav: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 6000,
        loop: false,
        navText: ['<img src="../img/prev.png">','<img src="../img/next.png">'],
    });

    $('.cases-carousel').owlCarousel({
        items: 1,
        nav: true,
        /*autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 6000,*/
        loop: true,
        navText: ['<img src="../img/prev.png">','<img src="../img/next.png">'],
    });
});