import {burgInit, burgResize} from './burger.js'
import '../libs/swiper-bundle.min.js'


document.addEventListener('DOMContentLoaded', () => {


    //  smooth scroll
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substring(1)
        console.log(document.getElementById(blockID))
        if(document.getElementById(blockID)) {
            document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            })
        }

        })
    }


    // burger
    burgInit()

/////////////////// popup

document.querySelectorAll('.account-reg').forEach( b => {
    b.addEventListener('click', (e) => {
    document.getElementById('popupreg')
        .classList.add('visible')
        document.body.classList.add(`lock`)
    })
})
document.querySelectorAll('.account-auth').forEach( b => {
    b.addEventListener('click', (e) => {
    document.getElementById('popupauth')
        .classList.add('visible')
        document.body.classList.add(`lock`)
    })
})

document.querySelectorAll('.popup-registration').forEach(modal => {
    modal.addEventListener('click', e => {
        e.target.classList.remove('visible')
        if(!document.querySelector('.header__mobile-menu').classList.contains('show') && e.target.classList.contains('popup-registration')){
            document.body.classList.remove(`lock`)
        }
        
        })
})



document.querySelectorAll('.popup-registration__exit-button')
    .forEach( b => {    
        b.addEventListener('click', (e) => {
            e.target.closest('.popup-registration')
            .classList.remove('visible')
            if(!document.querySelector('.header__mobile-menu').classList.contains('show')){
                document.body.classList.remove(`lock`)
            }
        })
    })







    window.addEventListener('resize', () =>  {
        document.body.classList.remove(`lock`)
        burgResize()
        document.getElementById('popupreg').classList.remove('visible')
        document.getElementById('popupauth').classList.remove('visible')
    });




    ////////////// swiper

    const swiper = new Swiper('.main-slider', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 3,
        spaceBetween: 24,
        speed: 300,
        slidesPerGroup: 3,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

  
})




