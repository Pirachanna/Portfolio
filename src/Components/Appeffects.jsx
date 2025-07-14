import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js';

const AppEffects = () => {
  useEffect(() => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    const toggleMenu = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    };

    if (menuIcon) menuIcon.addEventListener('click', toggleMenu);

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    const onScroll = () => {
      let top = window.scrollY;

      sections.forEach(sec => {
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            const activeLink = document.querySelector(`header nav a[href*=${id}]`);
            if (activeLink) activeLink.classList.add('active');
          });
        }
      });

      const header = document.querySelector('header');
      if (header) header.classList.toggle('sticky', window.scrollY > 100);

      menuIcon?.classList.remove('bx-x');
      navbar?.classList.remove('active');
    };

    window.addEventListener('scroll', onScroll);

    // ScrollReveal animations
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading, .sub-title', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .container, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    // Typed.js setup
    const typed = new Typed('.multiple-text', {
      strings: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
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
