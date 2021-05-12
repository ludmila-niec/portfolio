import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function slideIntro(elem) {
  return gsap.from(elem, {
    opacity: 0,
    y: 200,
    duration: 2,
    ease: "power4.out",
  });
}

function slideCircle(elem) {
  return gsap.from(elem, {
    opacity: 0,
    rotation: 90,
    duration: 2,
  });
}

export function animateIntro(heading, circle) {
  const tl = gsap.timeline();
  tl.add(slideIntro(heading), 1.2);
  tl.add(slideCircle(circle), "-=1.5");
}

// scrolltrigger
export function animateScrollSection(title, circle, container) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: title,
      start: "top center",
      end: "+=200px",
      scrub: 1,
      toggleActions: "restart pause reverse pause",
      snap: {
        snapTo: "labels",
        duration: { min: 1, max: 3 },
        delay: 0.2,
      },
    },
  });
  tl.addLabel("start")
    .to(title, { y: 20 })
    .addLabel("circle")
    .to(circle, { rotation: 45, y: -20 }, "-=0.5");
}
