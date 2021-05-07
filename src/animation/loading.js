import { gsap } from "gsap";
const tl = gsap.timeline({ duration: 0.8 });

export function animateLoading(base, elem1, elem2) {
  gsap.set([base, elem1, elem2], { width: 100, x: "100vw" });
  tl.to(base, { width: "100%", x: 0 })
    .to(elem1, { width: "100%", x: 0 }, "-=0.5")
    .to(elem2, { width: "100%", x: 0 }, "-=0.2")
    .to([base, elem1, elem2], { width: 0 });
}
