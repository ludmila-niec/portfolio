import { gsap } from "gsap";

// export function animateLoading(base, elem1, elem2) {
//   const tl = gsap.timeline({ duration: 0.8 });
//   gsap.set([base, elem1, elem2], { width: 100, x: "100vw" });
//   tl.to(base, { width: "100%", x: 0 })
//     .to(elem1, { width: "100%", x: 0 }, "-=0.5")
//     .to(elem2, { width: "100%", x: 0 }, "-=0.2")
//     .to([base, elem1, elem2], { width: 0 });
// }

export function loadingEffect(base, color1, color2) {
  const tl = gsap.timeline();
  tl.to(color1, {
    duration: 0.3,
    yPercent: -100,
  })
    .to(
      color2,
      {
        keyframes: [
          { delay: 0.4, duration: 0.3, yPercent: -50 },
          {
            duration: 0.2,
            yPercent: -100,
            height: "100vh",
            ease: "power.out",
          },
        ],
      },
      "+0.2"
    )
    .to(base, { yPercent: -100, duration: 0.3 });
}
