"use strict"

export const burgInit = () => {
    const blur = document.querySelector('.blur')

    document.addEventListener('click', (e) => {
        if(e.target.classList.contains('blur')){
            document.querySelectorAll(`.burg`)
                .forEach( b => {
                    b.classList.remove(`open`)
                    document.body.classList.remove(`lock`)
                    blur.classList.remove('blur_active')
                    document.querySelector(b.dataset.target).classList.remove(`show`)
                })
        }
})

document.querySelectorAll(`.burg`)
    .forEach( b => {
        const inner = document.createElement('div')
        inner.classList.add('burg__icon')
        b.append(inner)
        document.querySelector(b.dataset.target).classList.add(`nav-burg`)

        document.querySelector(b.dataset.target).addEventListener('click', e => {
            if(e.target.classList.contains('nav__link')) {
                hideMobileMenu()
            }
        })

        b.addEventListener('click', (e) => {
            if(e.target.closest('.burg')) {
                const burg = e.target.closest('.burg')
                burg.classList.toggle(`open`)
                blur.classList.add('blur_active')
                document.querySelector(burg.dataset.target).classList.toggle(`show`)

                if (document.querySelector(burg.dataset.target).classList.contains(`show`))
                {
                    document.body.classList.add(`lock`)
                } else{
                    document.body.classList.remove(`lock`)
                    blur.classList.remove('blur_active')
                }
            }
        })
    })
}


const hideMobileMenu = () => {
    document.body.classList.remove(`lock`)
    document.querySelector(document.querySelector(`.burg`).dataset.target).classList.remove(`show`)
    document.querySelector(`.burg`).classList.remove(`open`)
    document.querySelector('.blur').classList.remove('blur_active')
}


export const burgResize = () => {
    //if(window.innerWidth > 1024) {
        hideMobileMenu()
      //}
}

