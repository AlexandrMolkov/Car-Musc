import Swiper, {Navigation,EffectFlip,Autoplay} from 'swiper';


    const mainSlider = new Swiper('.main-slider', {
        modules: [Navigation,Autoplay],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 3,
        spaceBetween: 24,
        speed: 300,
        slidesPerGroup: 3,

        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: 'false',
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.main-slider-next',
            prevEl: '.main-slider-prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 24,
                slidesPerGroup: 1
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 24,
                slidesPerGroup: 2
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 24,
                slidesPerGroup: 3
            },
        },
    })
    const advantagesSlider = new Swiper('.advantages__slider', {
        modules: [Navigation,EffectFlip,Autoplay],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 300,
        effect: 'flip',

        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: 'false',
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.advantages-slider-next',
            prevEl: '.advantages-slider-prev',
        },
    })
    const advantages2Slider = new Swiper('.advantages__slider2', {
        modules: [Navigation,EffectFlip,Autoplay],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 300,
        effect: 'flip',

        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: 'false',
            stopOnLastSlide: false,
        },

        navigation: {
            nextEl: '.advantages2-slider-next',
            prevEl: '.advantages2-slider-prev',
        },
    })
    const services1Slider = new Swiper('.services__slider-1', {
        modules: [Navigation],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 4,
        spaceBetween: 24,
        speed: 300,


        breakpoints: {
            1: {
                slidesPerView: 1,
                spaceBetween: 24
            },
            375: {
                slidesPerView: 1.5,
                spaceBetween: 24
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 24
            },
            1200: {
                slidesPerView: 4
            }, 
        },
        navigation: {
            nextEl: '.services1-slider-next',
            prevEl: '.services1-slider-prev',
        },
    })
    const services2Slider = new Swiper('.services__slider-2', {
        modules: [Navigation],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 4,
        spaceBetween: 24,
        speed: 300,


        breakpoints: {
            1: {
                slidesPerView: 1,
                spaceBetween: 24
            },
            375: {
                slidesPerView: 1.5,
                spaceBetween: 24
            },
            768: {
                slidesPerView: 2.5,
                spaceBetween: 24
            },
            1200: {
                slidesPerView: 4
            }, 
        },
        navigation: {
            nextEl: '.services2-slider-next',
            prevEl: '.services2-slider-prev',
        },
    })
    const worksSlider = new Swiper('.works__slider', {
        modules: [Navigation],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 2,
        spaceBetween: 0,
        speed: 300,

        breakpoints: {
            320: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 2
            },
        },


        navigation: {
                nextEl: '.works-slider-next',
                prevEl: '.works-slider-prev',
            },
    })