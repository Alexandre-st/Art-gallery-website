import { animate, stagger } from 'motion';

document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.querySelector('.hero') as HTMLElement;
  const heroBackground = heroSection.querySelector('.hero-background') as HTMLElement;
  const heroPicture = heroSection.querySelector('.hero-picture') as HTMLElement;
  const heroTitle = heroSection.querySelector('.hero-content-title') as HTMLElement;
  const heroContentText = heroSection.querySelector('.hero-content-text') as HTMLElement;

  const mediaQuery = window.matchMedia("(min-width: 1024px)");
  const elementsToAnimate = [heroBackground, heroPicture, heroTitle, heroContentText];

  if (mediaQuery.matches) {
    // Animate each child element with stagger
    animate(
      elementsToAnimate, { 
        opacity: [0, 1], x: [-100, 0]} as any,
      { duration: 0.5, easing: 'ease', delay: stagger(0.3) } as any
    );
  } else {
    animate(elementsToAnimate, { 
      opacity: [0, 1], y: [100, 0]} as any, 
      { duration: 0.5, easing: 'ease', delay: stagger(0.3) } as any
  );
  }
});