const fullSize = document.querySelector(".full-size");
const background = document.querySelector(".bg");

const dur = 0.4;
gsap.utils.toArray('.item img').forEach(img => {
  img.addEventListener('click', () => {
    
    gsap.set(img.parentNode, { height: gsap.getProperty(img.parentNode, "height") });

			const state = Flip.getState(img),
				    isOpen = img.classList.toggle('opened');

			gsap.set(img, { xPercent: isOpen ? -80 : 0 });

			Flip.from(state, {
        duration: 0.6,
        fade: true,
        absolute: true,
        toggleClass: "flipping",
        ease: "power2.inOut"
      });
  });
});