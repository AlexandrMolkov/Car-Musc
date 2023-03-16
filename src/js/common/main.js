import {burgInit, burgResize} from './burger.js'
//import anime from 'animejs/lib/anime.es.js';
import '../libs/inputmask.js'
import AOS from 'aos';


document.addEventListener('DOMContentLoaded', () => {


    //  smooth scroll
    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
            e.preventDefault()
        
            const blockID = anchor.getAttribute('href').substring(1)
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




    window.addEventListener('resize', () =>  {
        document.body.classList.remove(`lock`)
        burgResize()
    });


  
    document.querySelector('.achievements__read-more')?.addEventListener('click', e => {
        const btn = e.target
        btn.classList.toggle('active')
        if (btn.classList.contains(('active'))) {
            e.target.innerText = 'Скрыть'
        } else {
            e.target.innerText = 'показать ещё'
        }
        
    })


    ///////// input mask

    const inputTel = document.querySelector('input[type="tel"]')
    const maskTel = new Inputmask('+7 (999) 999-99-99')
    maskTel.mask(inputTel)



    ////////// animations
    
    AOS.init();



})




