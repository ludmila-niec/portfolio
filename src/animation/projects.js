import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function animateTitle(title, line, container) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top bottom",
      end: "+=300",
      scrub: 1,
      snap: {
        snapTo: "labels",
        duration: { min: 1, max: 3 },
        delay: 0.2,
      },
    },
  });
  tl.addLabel("start")
    .from(title, { opacity: 0, x: 100 })
    .addLabel("line")
    .from(line, { opacity: 0, width: 0, x: -50 }, "-=0.5")
    .addLabel("paragraph");
}

// export function animateLoading(trigger, container, color1, color2) {
//   gsap.set([container, color1, color2], { width: 100, x: "100vw" });
//   let tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: trigger,
//       start: "top bottom",
//       end: "+=500",
//       scrub: 1,
//       markers: true,
//       snap: {
//         snapTo: "labels",
//         duration: { min: 1, max: 3 },
//         delay: 0.2,
//       },
//     },
//   });

//   tl.addLabel("start")
//     .to(container, { width: "100%", x: 0 })
//     .addLabel("color blue")
//     .to(color1, { width: "100%", x: 0 }, "-=0.5")
//     .addLabel("color lilac")
//     .to(color2, { width: "100%", x: 0 }, "-=0.2")
//     .addLabel("remove colors")
//     .to([container, color1, color2], { width: 0 });
// }

export function fadeInProject(projectArray) {
  projectArray.forEach((project) => {
    gsap.from(project, {
      scrollTrigger: {
        trigger: project,
        start: "top bottom",
        end: "+=500",
        scrub: 1,
        toggleActions: "start pause complete reset",
      },
      opacity: 0,
      y: 50,
    });
  });
}

