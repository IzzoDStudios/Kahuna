/* =====================
   Fade In Animation
   ===================== */
const scrollFadeInAnimation = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible")
            scrollFadeInAnimation.unobserve(entry.target)
        }
    });
}, {threshold:0.3,})

document.querySelectorAll(".scrollFadeIn").forEach(element => {
    scrollFadeInAnimation.observe(element)
})
