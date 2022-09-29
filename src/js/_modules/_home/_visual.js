import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

export default class {

    /**
     * constructor
     */
    constructor() {}


    /**
     * init
     */
    init() {
        gsap.registerPlugin(ScrollTrigger);
        const topCompanyWidth = document.querySelector('.top-company__main').clientWidth
        const topCompanyIcon = document.querySelector('.top-company__icon').clientWidth

        const tl = gsap.timeline({});
        const line = document.querySelector(".js-line")
        const lineTotalLength = line.getTotalLength();

        gsap.set(line, {
            strokeDasharray: lineTotalLength,
            strokeDashoffset: lineTotalLength,
        });

        tl.from(".js-logo-img", {
                ease: "power4.out",
                duration: 1,
                xPercent: -100,
                stagger: 0.15,
            }).from(".js-visual-txt", {
                ease: "power4.out",
                duration: 1,
                yPercent: 100,

            }, "-=1.2")
            .from(".js-nav-txt", {
                ease: "power4.out",
                duration: 1,
                yPercent: 100,

            }, "-=1.2")
            .to(line, {
                duration: 2,
                ease: "power1.out",
                strokeDashoffset: 0,
            }, "-=0.5")


        const topTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.top-company',
                start: 'top top',
                end: '+=3000',
                scrub: 1.5,
                pin: true,
            },
        })

        topTl.fromTo('.top-company_icon_logo', {
            x: (topCompanyWidth - topCompanyIcon) / 2
        }, {
            x: 0,
            ease: 'Power4.out'
        })
        topTl.fromTo('.top-company__txt', {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            ease: 'Power4.out'
        })
        topTl.to('.top-company__txt', {
            x: -100,
            opacity: 0,
            delay: 1.2
        })
        topTl.fromTo('.top-company__middleTxt', {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            ease: 'Power4.out'
        })
        topTl.fromTo('.top-company_icon_bottom_svg', {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'Power4.out'
        }, '<')

        topTl.to('.top-company_icon_logo>svg', {
            display: 'none',
            x: -300,
            opacity: 0,
            delay: 1.2,
            ease: 'Power4.out'
        })
        topTl.to('.top-company_icon_bottom_svg', {
            display: 'none',
            opacity: 0,
            ease: 'Power4.out'
        }, '<')
        topTl.to('.top-company__middleTxt', {
            x: -300,
            opacity: 0,
            ease: 'Power4.out'
        }, '<')

        topTl.fromTo('.top-company_icon_loop', {
            display: 'none',
            opacity: 0
        }, {
            display: 'flex',
            opacity: 1,
            ease: 'Power4.out'
        }, '-=0.08')
        topTl.fromTo('.top-company_icon_loop__right', {
            x: '-100%',
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            ease: 'Power4.out'
        })
        topTl.fromTo('.top-company_icon_loop__line .l1', {
            strokeDashoffset: 2000
        }, {
            strokeDashoffset: 0,
            ease: 'Power4.out'
        })
        topTl.fromTo('.top-company_icon_loop__line .i1', {
            opacity: 0
        }, {
            opacity: 1,
            ease: 'Power4.out'
        }, '<')

        topTl.fromTo('.top-company_icon_loop__line .l2', {
            strokeDashoffset: 2000
        }, {
            strokeDashoffset: 0,
            ease: 'Power4.out'
        }, '-=0.45')
        topTl.fromTo('.top-company_icon_loop__line .i2', {
            opacity: 0
        }, {
            opacity: 1,
            ease: 'Power4.out'
        }, '<')

        topTl.fromTo('.top-company_icon_loop__line .l3', {
            strokeDashoffset: 2000
        }, {
            strokeDashoffset: 0,
            ease: 'Power4.out'
        }, '-=0.45')
        topTl.fromTo('.top-company_icon_loop__line .i3', {
            opacity: 0
        }, {
            opacity: 1,
            ease: 'Power4.out'
        }, '<')

        topTl.fromTo('.top-company_icon_loop__line .l4', {
            strokeDashoffset: 2000
        }, {
            strokeDashoffset: 0,
            ease: 'Power4.out'
        }, '-=0.45')
        topTl.fromTo('.top-company_icon_loop__line .i4', {
            opacity: 0
        }, {
            opacity: 1,
            ease: 'Power4.out'
        }, '<')

        topTl.fromTo('.top-company_icon_loop__line .i5', {
            opacity: 0
        }, {
            opacity: 1,
            ease: 'Power4.out'
        }, '-=0.45')
        topTl.fromTo('.top-company_icon_loop__line .text', {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'Power4.out'
        })
        topTl.fromTo('.top-company__bottomTxt', {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            ease: 'Power4.out'
        }, '<')

        topTl.to('.top-company__group, .top-company__icon', {
            display: 'none',
            x: -300,
            opacity: 0,
            delay: 1.2,
            ease: 'Power4.out'
        })

        topTl.fromTo('.top-company__circle', {
            display: 'none',
            x: 300,
            opacity: 0
        }, {
            display: 'block',
            x: 0,
            opacity: 1,
            ease: 'Power4.out'
        })
        topTl.fromTo('.top-company__circle .t1', {
            y: 80,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'Power4.out'
        })
        topTl.fromTo('.top-company__circle .t2', {
            x: -80,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            ease: 'Power4.out'
        }, '<')
        topTl.fromTo('.top-company__circle .t3', {
            y: -80,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'Power4.out'
        }, '<')
        topTl.fromTo('.top-company__circle .t4', {
            x: 80,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            ease: 'Power4.out'
        }, '<')



    }


}