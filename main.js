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
