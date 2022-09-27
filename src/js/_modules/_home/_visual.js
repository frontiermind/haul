import {
    gsap
} from "gsap";

export default class {

    /**
     * constructor
     */
    constructor() {}


    /**
     * init
     */
    init() {
        const tl = gsap.timeline({
            repeat: -1
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

        }, "-=1.2").from(".js-nav-txt", {
            ease: "power4.out",
            duration: 1,
            yPercent: 100,

        }, "-=1.2")
    }
}