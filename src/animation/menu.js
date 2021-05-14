import { gsap } from "gsap";

export function showMenu(container) {
  return gsap.from(container, {
    xPercent: 100,
    duration: 0.8,
    ease: "power2.inOut",
  });
}

export function showMenuLinks(classname) {
  return gsap.from(classname, { delay: 0.5, x: 100, opacity: 0, stagger: 0.2 });
}

export function hideMenuLinks(classname) {
  return gsap.to(classname, { x: 100, opacity: 0, stagger: 0.2 });
}
