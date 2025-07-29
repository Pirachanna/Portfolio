import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';

const AppEffects = () => {
  useEffect(() => {

    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const header = document.querySelector('header');

    const toggleMenu = () => {
      menuIcon?.classList.toggle('bx-x');
      navbar?.classList.toggle('active');
    };

    if (menuIcon) {
      menuIcon.addEventListener('click', toggleMenu);
    }

    const onScroll = () => {
      const top = window.scrollY;

      navLinks.forEach(link => link.classList.remove('active'));

      sections.forEach(section => {
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
          const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
          if (activeLink) activeLink.classList.add('active');
        }
      });

      header?.classList.toggle('sticky', top > 100);

      menuIcon?.classList.remove('bx-x');
      navbar?.classList.remove('active');
    };

    window.addEventListener('scroll', onScroll);
    onScroll();

    const sr = ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200,
    });

    sr.reveal('.home-content, .heading', {
      origin: 'top',
      distance: '60px',
      duration: 1500,
      delay: 100,
      opacity: 0,
      scale: 0.95,
      easing: 'ease-out',
    });

    sr.reveal('.home-content h1, .about-img', {
      origin: 'left',
      distance: '70px',
      duration: 1700,
      delay: 150,
      opacity: 0,
    });

    sr.reveal('.home-content p, .about-content, .home-img', {
      origin: 'right',
      distance: '70px',
      duration: 1700,
      delay: 200,
      opacity: 0,
    });

    sr.reveal('.container .services-list', {
      origin: 'bottom',
      distance: '40px',
      duration: 1000,
      interval: 150,
      opacity: 0,
      scale: 0.9,
      easing: 'ease-in-out',
    });

    sr.reveal('.skills-wrapper', {
      duration: 1000,
      delay: 100,
      opacity: 0,
      scale: 0.95,  // slightly smaller at start
      easing: 'ease-out',
    });

    sr.reveal('.portfolio-heading', {
      origin: 'top',
      distance: '50px',
      duration: 1400,
      delay: 100,
      opacity: 0,
      scale: 0.95,
    });

    sr.reveal('.portfolio-container', {
      origin: 'bottom',
      distance: '60px',
      duration: 1200,
      scale: 0.9,
      interval: 200,
      delay: 200,
    });

    sr.reveal('.contact form', {
      origin: 'left',
      distance: '60px',
      duration: 1400,
      delay: 150,
      opacity: 0,
      easing: 'ease-in-out',
    });

    const typed = new Typed('.multiple-text', {
      strings: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (menuIcon) menuIcon.removeEventListener('click', toggleMenu);
      typed.destroy();
    };
  }, []);

  return null;
};

export default AppEffects;
