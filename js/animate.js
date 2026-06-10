gsap.registerPlugin(ScrollTrigger);

// Animacion para el texto del header.
const phraseContainer = document.querySelector('.phraseContainer');
const phraseText = document.querySelector('.phraseText');

const phrasePadding = parseFloat(window.getComputedStyle(phraseContainer).paddingLeft) * 2;

gsap.to(phraseText, {
    x: () => -(phraseText.offsetWidth - window.innerWidth + phrasePadding),
    ease: "none",
    scrollTrigger: {
        trigger: "header",
        start: "top top",
        end: "+=100",
        speed: 2,
        scrub: true,
        pin: true,
        invalidateOnRefresh: true
    }
});
