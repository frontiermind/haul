import { gsap } from "gsap";
import {  ScrollTrigger } from "gsap/ScrollTrigger";

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
        repeat: -1,
      });

      tl.from(".js-logo-img", {
        ease: "power4.out",
        duration: 1,
        xPercent: -100,
        stagger: 0.15,
      })
        .from(
          ".js-visual-txt",
          {
            ease: "power4.out",
            duration: 1,
            yPercent: 100,
          },
          "-=1.2",
        )
        .from(
          ".js-nav-txt",
          {
            ease: "power4.out",
            duration: 1,
            yPercent: 100,
          },
          "-=1.2",
        );


        gsap.registerPlugin(ScrollTrigger);
        const topCompanyWidth = document.querySelector('.top-company__main').clientWidth;
        const topCompanyIcon = document.querySelector(".top-company__icon").clientWidth;
        console.log(topCompanyIcon);
        const topTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".top-company",
            start: "top top",
            end: "+=1500",
            scrub: true,
            pin: true,
          },
        });
        topTl.fromTo(
          ".top-company__icon",
          {
            x: (topCompanyWidth - topCompanyIcon) / 2,
          },
          { x: 0, ease: "Power4.out" },
        );
        topTl.fromTo(
          ".top-company__txt",
          {
            x: 100,
            opacity: 0
          },
          { x: 0 ,opacity: 1, ease: "Power4.out" },
        );
        topTl.to(".top-company__txt", {
          x: -100,
          opacity: 0,
        });
        topTl.fromTo(
          ".top-company__subTxt",
          {
            x: 100,
            opacity: 0
          },
          { x: 0 ,opacity: 1, ease: "Power4.out" },
        );
    }
}