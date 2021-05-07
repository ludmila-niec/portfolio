import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function animateDivider(divider) {
  gsap.to(divider, {
    scrollTrigger: {
      trigger: divider,
      start: "top bottom",
      end: "+=500px",
      scrub: 1,
    },
    y: 30,
  });
}

