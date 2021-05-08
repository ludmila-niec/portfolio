import { gsap } from "gsap";

function fadeInLinks(links) {
  gsap.from(links, { duration: 1, opacity: 0, x: 100, stagger: 0.2 });
}

export function showLinks(links, trigger) {
  const linkList = gsap.utils.toArray(links);
  gsap.from(linkList, {
    scrollTrigger: {
      trigger: trigger,
      start: "top center",
      end: "+=500px",
      onEnter: () => fadeInLinks(linkList),
    },
  });
}
