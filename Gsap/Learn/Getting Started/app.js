
gsap.registerPlugin(ScrollTrigger);

// GSAP time!
gsap.to(".square",{
  x: 700, // position to move towards
  duration: 3, // duration or time delay for that specific movement
  
  scrollTrigger: { // object

    trigger: ".square", // triggers when the .square appears
    
    // Start & End of the element, can be seen when used markers
    start: "top 80%",
    end: "top 30%",

    // performs actions as you... onEnter, onLeave, onEnterBack, onLeaveBack
    toggleActions: "restart none none none",

    // Used to pin elements from start till end
    pin: true,

    // Allows movement of element with scroll bar movement
    scrub: 4,

    // Mostly used by developers for understanding purposes
    markers: true
  }
})
