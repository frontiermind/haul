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
    constructor() {
        this.header = document.querySelector('.js-header');
        this.menu = document.querySelector('.js-menu');
        this.headerTriggers = document.querySelectorAll('.js-header-trigger');
    }

    /**
     * init
     */
    init() {
        this.setEvent();
    }

    /**
     * setEvent
     */
    setEvent() {
        gsap.registerPlugin(ScrollTrigger);
        let mm = gsap.matchMedia();

        this.headerTriggers.forEach((trigger) => {
            trigger.addEventListener('click', () => {
                this.header.classList.toggle("is-active")
                return false;
            });
        })

        const header = this.header
        const menu = this.menu

        mm.add("(min-width: 768px)", () => {
            gsap.from(header, {
                yPercent: -100,
                scrollTrigger: {
                    trigger: "#mission",
                    start: "top center",
                    toggleActions: "play none none reverse",
                }
            })
            gsap.from(menu, {
                scrollTrigger: {
                    trigger: "#mission",
                    start: "top center",
                    toggleActions: "none none none reverse",
                }
            })
        })
    }
}