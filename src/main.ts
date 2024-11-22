import { animate, inView, stagger } from 'motion';

document.addEventListener('DOMContentLoaded', () => {
  // == Hero Section == // 
  const heroSection = document.querySelector('.hero') as HTMLElement;
  const heroBackground = heroSection.querySelector('.hero-background') as HTMLElement;
  const heroPicture = heroSection.querySelector('.hero-picture') as HTMLElement;
  const heroTitle = heroSection.querySelector('.hero-content-title') as HTMLElement;
  const heroContentText = heroSection.querySelector('.hero-content-text') as HTMLElement;
  const elementsHeroToAnimate = [heroBackground, heroPicture, heroTitle, heroContentText];

  // == Infos Section == //
  const infoSection = document.querySelector('.infos-container') as HTMLElement;
  const infoContent = infoSection.querySelector('.infos-content') as HTMLElement;
  const infoPicture = infoSection.querySelector('.infos-content-picture') as HTMLElement;

  // == Pictures Section == //
  const pictureSection = document.querySelector('.pictures-container') as HTMLElement;
  const pictureLeft = pictureSection.querySelector('.pictures-left') as HTMLElement;
  const contentRight = pictureSection.querySelector('.pictures-right') as HTMLElement;
  const pictureRight = pictureSection.querySelector('.pictures-right-right') as HTMLElement;
  const contentTextRight = pictureSection.querySelector('.pictures-content') as HTMLElement;

  // == Common == //
  const mediaQuery = window.matchMedia("(min-width: 1024px)");

  // Animate hero section
  if (mediaQuery.matches) {
    // Animate each child element with stagger
    animate(elementsHeroToAnimate, { 
        opacity: [0, 1], x: [-100, 0]} as any,
      { duration: 0.5, easing: 'ease', delay: stagger(0.3) } as any
    );
  } else {
    animate(elementsHeroToAnimate, { 
      opacity: [0, 1], y: [100, 0]} as any, 
      { duration: 0.5, easing: 'ease', delay: stagger(0.3) } as any
    );
  }

  // Animate infos section
  if (mediaQuery.matches) { 
    inView(infoSection,() => { 
      animate([infoContent, infoPicture], { 
        opacity: [0, 1], y: [50, 0] },
      { duration: 0.5, easing: "ease", delay: stagger(0.3) } as any)
    });
  } else {
    // Mobile scroll-triggered animation
    inView(infoPicture, () => {
      animate(infoPicture, { 
        opacity: [0, 1], x: [-200, 0] },
        { duration: 0.5, easing: "ease" } as any
      );
    });

    inView(infoContent, () => {
      animate(infoContent, { 
        opacity: [0, 1], x: [200, 0] },
        { duration: 0.5, easing: "ease" } as any
      );
    });
  }

  // Animate pictures section
  if (mediaQuery.matches) {
    inView(pictureLeft, () => {      
      animate(pictureLeft, { 
        opacity: [0, 1], x: [-200, 0] },
        { duration: 0.5, easing: "ease" } as any
      );
    });
    inView(contentRight, () => {
      animate(pictureRight, { 
        opacity: [0, 1], y: [-100, 0] },
        { duration: 0.5, easing: "ease" } as any
      );

      animate(contentTextRight, {
        opacity: [0, 1], y: [-100, 0], zIndex: -1},
        { duration: 0.5, delay: 0.3, easing: "ease", } as any
      );
    });
  } else {
    inView(pictureLeft, () => {      
      animate(pictureLeft, { 
        opacity: [0, 1], x: [-50, 0] },
        { duration: 0.5, easing: "ease" } as any
      );
    });
    inView(contentRight, () => {
      animate(pictureRight, { 
        opacity: [0, 1], y: [-50, 0] },
        { duration: 0.5, easing: "ease" } as any
      );

      animate(contentTextRight, {
        opacity: [0, 1], y: [-100, 0], zIndex: -1},
        { duration: 0.5, delay: 0.3, easing: "ease", } as any
      );
    });
  }
});