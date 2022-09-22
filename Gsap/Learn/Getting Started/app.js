
gsap.registerPlugin(ScrollTrigger);

gsap.to(".square",{
  x: 700, // position to move towards
  duration: 3, // duration or time delay for that specific movement
  scrollTrigger: { // object
    trigger: ".square", // triggers when the .square appears
    start: "top 30%",
    end: "center 20%",
    markers: true,
    toggleClass: "red",
  }
})
