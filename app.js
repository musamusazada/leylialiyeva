gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".full").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: "center center",
    pin: true,
    pinSpacing: false,
    scrub: 1,
    snap: 1,
  });
});
