console.log("gsap");

// Create a new timeline instance
var tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.out" } }); // Set default duration and easing

// Header animation
tl.from("header", {
  y: -30,
  opacity: 0,
  delay: 0.2,
});

// Interactive text animation
tl.from("#interactiveText", {
  y: -30,
  opacity: 0,
});

// Turning text animation
tl.from("#TurningText", {
  y: -30,
  opacity: 0,
});

// Intro text animation
tl.from("#introText", {
  y: -30,
  opacity: 0,
});

// Import GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate #about section with a delay
gsap.from("#about", {
  y: -30,
  opacity: 0,
  duration: 0.4,
  delay: 0.6, // Added delay specifically for #about
  scrollTrigger: {
    trigger: "#about",
    start: "top 85%", // Trigger when the top of the #about section reaches 75% of the viewport
  },
});

// Animate box1
gsap.from("#aboutHeader", {
  y: 30,
  opacity: 0,
  duration: 0.4,
  delay: 0.6,
  scrollTrigger: {
    trigger: "#box1",
    start: "top 70%", // Trigger when the top of the #box1 section reaches 70% of the viewport
  },
});

// Animate box1
gsap.from("#box1", {
  y: 30,
  opacity: 0,
  duration: 0.4,
  delay: 0.4,
  scrollTrigger: {
    trigger: "#box1",
    start: "top 70%", // Trigger when the top of the #box1 section reaches 70% of the viewport
  },
});

// Animate box2
gsap.from("#box2", {
  y: 30,
  opacity: 0,
  duration: 0.4,
  delay: 0.6,
  scrollTrigger: {
    trigger: "#box2",
    start: "top 70%", // Trigger when the top of the #box2 section reaches 70% of the viewport
  },
});

// Animation for the Projects section
gsap.from("#projects", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#projects",
    start: "top 80%", // Trigger when the top of the #projects section reaches 80% of the viewport
  },
});

// Animation for each project box
const projectBoxes = document.querySelectorAll(".projectBox");
projectBoxes.forEach((box) => {
  gsap.from(box, {
    y: 30,
    opacity: 0,
    scrollTrigger: {
      trigger: box,
      start: "top 80%", // Trigger when the top of each box reaches 80% of the viewport
      toggleActions: "play none none reverse", // Play animation when scrolling down, reverse when scrolling back up
    },
  });
});

// Animation for the Skills section
gsap.from("#skills", {
  opacity: 0,
  scrollTrigger: {
    trigger: "#skills",
    start: "top 80%", // Trigger when the top of the #skills section reaches 80% of the viewport
  },
});

// Animation for each skill box
const skillBoxes = document.querySelectorAll("#skill-box > div");
skillBoxes.forEach((box) => {
  gsap.from(box, {
    y: 30,
    opacity: 0,
    scrollTrigger: {
      trigger: box,
      start: "top 80%", // Trigger when the top of each box reaches 80% of the viewport
      toggleActions: "play none none reverse", // Play animation when scrolling down, reverse when scrolling back up
    },
  });
});

// Animation for the Contact section
gsap.from("#contact", {
  opacity: 0,
  y: 30,
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%", // Trigger when the top of the #contact section reaches 80% of the viewport
  },
});

// Animation for the heading and subheading
gsap.from("#contact h2, #contact h3", {
  opacity: 0,
  y: 20,
  stagger: 0.2, // Stagger the animation for a nice effect
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%", // Trigger when the top of the #contact section reaches 80% of the viewport
    // markers: true, // Optional: Set to false in production
  },
});

// Animation for the button
gsap.from("#contact a", {
  opacity: 0,
  scale: 0.8,
  scrollTrigger: {
    trigger: "#contact",
    start: "top 80%", // Trigger when the top of the #contact section reaches 80% of the viewport
    // markers: true, // Optional: Set to false in production
  },
});
