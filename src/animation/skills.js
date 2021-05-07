import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function showSkills(front, back, tools) {
  let tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.from(front, { opacity: 0, y: 100 });
  tl.from(back, { opacity: 0, x: -100 });
  tl.from(tools, { opacity: 0, x: 100 }, "-=1");
}

export function animateSkills(trigger, front, back, tools) {
  gsap.from([front, back, tools], {
    scrollTrigger: {
      trigger: trigger,
      start: "top 100%",
      end: "+=600",
      scrub: 1,
      onEnter: () => showSkills(front, back, tools),
    },
  });
}
