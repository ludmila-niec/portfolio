import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function fadeInLinks(title, links) {
  const tl = gsap.timeline();
  tl.from(title, { opacity: 0, x: 50 }).from(links, { duration: 1, opacity: 0, x: 100, stagger: 0.2 });
}

export function showLinks(title, links, trigger) {
  const linkList = gsap.utils.toArray(links);
  gsap.from(linkList, {
    scrollTrigger: {
      trigger: trigger,
      start: "top center",
      end: "+=500px",
      onEnter: () => fadeInLinks(title, linkList),
    },
  });
}
