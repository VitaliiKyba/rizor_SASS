// import { gsap } from "node_modules/gsap/dist/gsap.js";
// import { TextPlugin } from "node_modules/gsap/dist/TextPlugin.js";
// import { ScrollTrigger } from "node_modules/gsap/dist/ScrollTrigger.js";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

let t1 = new TimelineMax();

t1.fromTo(".logo", 1, { x: -500 }, { x: 0 }, "+=1");

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".box",
      start: "center 650",
      end: "bottom 350",
      //markers: true,
      scrub: true,
      //pin: true,
    },
  })
  .from(".colorhead", { y: innerWidth * -1, rotate: 360 })
  .from(".colordescription", { x: innerWidth * 1 })
  .from(".gsapimg", {
    y: innerHeight * 1,
    rotate: 360,
  });
