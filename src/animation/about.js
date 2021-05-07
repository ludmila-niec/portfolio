import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function slideTitleBorder(target, trigger) {
  gsap.to(target, {
    scrollTrigger: {
      trigger: trigger,
      start: "top center",
      scrub: true,
      toggleActions: "restart pause reverse pause",
    },
    x: -60,
    duration: 2,
  });
}

export function animateSection(title, img, content, container) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top center",
      end: "+=500px",
      scrub: 1,
      snap: {
        snapTo: "labels",
        duration: { min: 1, max: 3 },
        delay: 0.5,
      },
    },
  });
  tl.addLabel("start")
    .from(title, { opacity: 0, y: 100 })
    .addLabel("img")
    .from(img, { opacity: 0, x: -50 }, "-=0.5")
    .addLabel("paragraph")
    .from(content, { opacity: 0, x: 50, duration: 2 }, "-=1");
}


