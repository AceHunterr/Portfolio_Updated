import AOS from 'aos';
import Typed from 'typed.js';
import imagesLoaded from 'imagesloaded';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import gsap from 'gsap';

(function() {
  "use strict";

  
  // const lenis = new Lenis()

  // lenis.on('scroll', (e) => {
  //   console.log(e)
  // })

  // lenis.on('scroll', ScrollTrigger.update)

  // gsap.ticker.add((time)=>{
  //   lenis.raf(time * 1000)
  // })

  // gsap.ticker.lagSmoothing(0)
  /**
   * Header toggle
   */


  const headerToggleBtn = document.querySelector('.header-toggle');

  function headerToggle() {
    document.querySelector('#header').classList.toggle('header-show');
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }
  headerToggleBtn.addEventListener('click', headerToggle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.header-show')) {
        headerToggle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */


  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      mirror: true
    });

    // Detect scroll direction and toggle classes accordingly
    let lastScrollTop = 0;
    window.addEventListener("scroll", function() {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Scrolling down
        document.querySelectorAll('.aos-element').forEach(function(el) {
          el.classList.add('aos-animate-scroll-down');
          el.classList.remove('aos-animate-scroll-up');
        });
      } else {
        // Scrolling up
        document.querySelectorAll('.aos-element').forEach(function(el) {
          el.classList.remove('aos-animate-scroll-down');
          el.classList.add('aos-animate-scroll-up');
        });
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
  }
  window.addEventListener('load', aosInit);

  // function aosInit() {
  //   AOS.init({
  //     duration: 600,
  //     easing: 'ease-in-out',
  //     once: true,
  //     mirror: true
  //   });
  // }
  // window.addEventListener('load', aosInit);

  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Initiate Pure Counter
   */
  // new PureCounter();

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);


  // Resume Button
  const magneto = document.querySelector('.magneto');
  const magnetoText = document.querySelector('.magneto .text');
  
  const activateMagneto = (event) => {
      let boundBox = magneto.getBoundingClientRect();
      const magnetoStrength = 40;
      const magnetoTextStrength = 80;
      const newX = ((event.clientX - boundBox.left) / magneto.offsetWidth) - 0.5;
      const newY = ((event.clientY - boundBox.top) / magneto.offsetHeight) - 0.5;
  
      gsap.to(magneto, {
          duration: 1,
          x: newX * magnetoStrength * 10,
          y: newY * magnetoStrength * 10,
          ease: 'power4.out'
      });
      gsap.to(magnetoText, {
          duration: 1,
          x: newX * magnetoTextStrength,
          y: newY * magnetoTextStrength,
          ease: 'power4.out'
      });
  }
  
  const resetMagneto = (event) => {
      gsap.to(magneto, {
          duration: 1,
          x: 0,
          y: 0,
          ease: 'elastic.out'
      });
      gsap.to(magnetoText, {
          duration: 1,
          x: 0,
          y: 0,
          ease: 'elastic.out'
      });
  }
  
  magneto.addEventListener('mousemove', activateMagneto);
  magneto.addEventListener('mouseleave', resetMagneto);


document.addEventListener('DOMContentLoaded', () => {
    const downloadButton = document.getElementById('downloadBtn');

    downloadButton.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1aaXIvnLJd3d05Y4kIxQJoCpZ-PVZUkVn'; // Google Drive direct download link
        link.download = 'Mehul_Resume.pdf'; // The default filename for the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

})();