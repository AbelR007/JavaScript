
gsap.registerPlugin(ScrollTrigger);

gsap.to(".text",{
  scrollTrigger : {
    trigger: ".text",

    start: "top top",
    end: "400% top",

    pin: true,

    markers: true,
  }
})
