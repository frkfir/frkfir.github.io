document.addEventListener('DOMContentLoaded', function () {
  const homeButton = document.getElementById('home-button');
  const aboutButton = document.getElementById('about-button');
  const projectsButton = document.getElementById('projects-button');
  const homeSection = document.getElementById('header-section');
  const aboutSection = document.getElementById('resume-section');
  const projectsSection = document.getElementById('projects-section');

  homeButton.addEventListener('click', function () {
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  aboutButton.addEventListener('click', function () {
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

  projectsButton.addEventListener('click', function () {
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Navigation logic specific to projects.html
document.addEventListener('DOMContentLoaded', function () {
  const isProjectsPage = window.location.pathname.includes('projects.html');

  if (isProjectsPage) {
    const homeButtons = document.querySelectorAll('#home-button');
    const projectsButtons = document.querySelectorAll('#projects-button');
    const aboutButtons = document.querySelectorAll('#about-button');

    homeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.href = '../index.html';
      });
    });

    projectsButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.href = '../index.html#projects-section';
      });
    });

    aboutButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        window.location.href = '../index.html#resume-section';
      });
    });
  }
});




// document.addEventListener("DOMContentLoaded", () => {
//   const headerContainer = document.getElementById("header-placeholder");

//   if (headerContainer) {
//     fetch("header.html")
//       .then((res) => res.text())
//       .then((html) => {
//         headerContainer.innerHTML = html;
//       });
//   }
// });

// Skills circle progress animation
document.addEventListener('DOMContentLoaded', function () {
  const skills = document.querySelectorAll('.js-btn-1, .js-btn-2, .js-btn-3, .js-btn-4, .js-btn-5, .js-btn-6, .js-btn-7, .js-btn-8, .js-btn-9');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate'); // Apply animation to the intersecting element only
        observer.unobserve(entry.target);     // Unobserve only the intersecting element
      }
    });
  }, { threshold: 0.5 }); // Added threshold for better control of when it triggers

  skills.forEach(skill => observer.observe(skill));
});

// Circle progress numbers animation
document.addEventListener('DOMContentLoaded', function () {
  const animatedElements = document.querySelectorAll('.progress-container, .metric-item, .result-card, .pain-point-card, .feature-item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('progress-container')) {
          animateCircle(entry.target); // Animate circular progress bar
        }

        // Handle number animations inside progress indicators and standalone metrics
        const numberElement = entry.target.querySelector('.progress-text-number, .metric-value, .result-text-number, .percentage-number, .feature-percentage-number');
        if (numberElement) {
          const finalValue = parseFloat(numberElement.innerText.replace(/[^0-9.-]/g, '')); // Extract numeric value only
          animateCounter(numberElement, finalValue);
        }

        observer.unobserve(entry.target); // Stop observing after animation starts
      }
    });
  }, { threshold: 0.5 });

  animatedElements.forEach(element => observer.observe(element));

  // Function to animate circular progress stroke
  function animateCircle(element) {
    element.classList.add('animate');
  }

  // Function to animate numerical values smoothly
  function animateCounter(element, targetValue) {
    let startValue = 0;
    let duration = 800;

    // Adjust step size dynamically based on value type
    let stepTime = Math.max(duration / targetValue, 20);
    let increment = targetValue < 10 ? 0.2 : 1; // Increase step size for multipliers

    function updateCounter() {
      if (startValue < targetValue) {
        startValue += increment; // Faster increments for small numbers
        element.innerHTML = formatNumber(startValue, element.innerText);
        setTimeout(updateCounter, stepTime);
      } else {
        element.innerHTML = element.innerText; // Ensure final format stays correct
      }
    }
    updateCounter();
  }


  // Helper function to format numbers while keeping original suffixes (% or x)
  function formatNumber(value, originalText) {
    if (originalText.includes('%')) {
      return `${Math.round(value)}<span class="small-label">%</span>`;
    } else if (originalText.includes('x')) {
      return `${value.toFixed(1)}x`;
    } else {
      return Math.round(value);
    }
  }
});

// Scroll animation fad in
document.addEventListener('DOMContentLoaded', function () {
  const timelineWrapperObserver = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
      // If I want to show the animation multiple time I need to add this "else"
      /*else  {
          entry.target.classList.remove('show');
      }*/
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => timelineWrapperObserver.observe(el));
});

document.addEventListener('DOMContentLoaded', function () {
  const navigationBar = document.querySelector('.header-navigations-btn');

  if (navigationBar) {
    window.addEventListener('scroll', function () {
      // Check if the user has scrolled down at all
      if (window.scrollY > 0) {
        navigationBar.classList.add('scrolled');
      } else {
        navigationBar.classList.remove('scrolled');
      }
    });
  }
});


// Diffrent content for each project on projects.html
window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');

  const allProjects = [
    { id: 'primo-project', type: 'primo' },
    { id: 'cohub-project', type: 'cohub' },
    { id: 'amud-anan-project', type: 'amudAanan' },
  ];

  allProjects.forEach(project => {
    const el = document.getElementById(project.id);
    if (!el) return;

    if (type === project.type) {
      el.style.display = 'block'; // Show the matching section
    } else {
      el.remove(); // Remove others completely from the DOM
    }
  });
});



// DATA ANALYSIS load animation
document.addEventListener('DOMContentLoaded', function () {
  // Function to animate the charts
  function animateCharts() {
    const insightsGrid = document.querySelector('.insights-grid');
    if (!insightsGrid) {
      return;
    }
    // Remove animation class
    insightsGrid.classList.remove('animated');
    // Force reflow
    void insightsGrid.offsetWidth;
    // Add animation class back
    insightsGrid.classList.add('animated');
  }


  // Initial animation
  setTimeout(animateCharts, 300);

  // Reset animation button
  // document.getElementById('reset-animation').addEventListener('click', animateCharts);

  // Add click event to cards
  document.querySelectorAll('.insight-card').forEach(card => {
    card.addEventListener('click', animateCharts);
  });
});

// Results load animation
document.addEventListener('DOMContentLoaded', function () {
  // Function to animate the results charts
  function animateResultsCharts() {
    const resultsGrid = document.querySelector('.results-grid');
    if (!resultsGrid) {
      return; // Exit the function, preventing the error
    }
    // Remove animation class
    resultsGrid.classList.remove('animated');
    // Force reflow
    void resultsGrid.offsetWidth;
    // Add animation class back
    resultsGrid.classList.add('animated');
  }


  // Initial animation with a slight delay to ensure DOM is fully loaded
  setTimeout(animateResultsCharts, 500);

  // Reset animation button
  const replayButton = document.getElementById('replay-results-animation');
  if (replayButton) {
    replayButton.addEventListener('click', animateResultsCharts);
  }

  // Add click event to result cards for interactive replay
  document.querySelectorAll('.result-card').forEach(card => {
    card.addEventListener('click', animateResultsCharts);
  });

  // Animate on scroll if IntersectionObserver is available
  if ('IntersectionObserver' in window) {
    const resultsSection = document.querySelector('.results-section');

    const resultsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateResultsCharts();
          // Optional: Stop observing after first animation
          // resultsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    if (resultsSection) {
      resultsObserver.observe(resultsSection);
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Clear animation keys for this page
  Object.keys(sessionStorage).forEach(key => {
    if (key.startsWith('sectionPartialBgAnimated_')) {
      sessionStorage.removeItem(key);
    }
  });

  function animateSectionBgOnScroll() {
    document.querySelectorAll('.project-page-section.challenge, .project-page-section.solution').forEach((section, idx) => {
      const bg = section.querySelector('.section-partial-bg');
      if (!bg) return;
      const key = 'sectionPartialBgAnimated_' + idx;
      if (sessionStorage.getItem(key) === 'true') return;
      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
      if (inView) {
        bg.classList.add('slide-in');
        sessionStorage.setItem(key, 'true');
      }
    });
  }

  window.addEventListener('scroll', animateSectionBgOnScroll);
  animateSectionBgOnScroll();
});



document.addEventListener('DOMContentLoaded', function () {
  function animateBars(selector, delay = 0) {
    const bars = document.querySelectorAll(selector);
    bars.forEach((bar, index) => {
      const targetWidth = bar.getAttribute('data-width');
      bar.style.width = '0%'; // ensure initial state

      setTimeout(() => {
        bar.style.transition = 'width 1s ease';
        bar.style.width = targetWidth;
      }, delay + index * 100);
    });
  }

  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;

        if (target.matches('.pain-points-grid')) {
          animateBars('.progress-fill');
        } else if (target.matches('.feature-list')) {
          animateBars('.feature-fill', 100);
        } else if (target.matches('.platform-comparison')) {
          animateBars('.metric-fill', 200);
        }

        observer.unobserve(target);
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.3
  });

  // observer.observe(document.querySelector('.pain-points-grid'));
  // observer.observe(document.querySelector('.feature-list'));
  // observer.observe(document.querySelector('.platform-comparison'));

  const painPoints = document.querySelector('.pain-points-grid');
  const featureList = document.querySelector('.feature-list');
  const platformComparison = document.querySelector('.platform-comparison');

  if (painPoints) observer.observe(painPoints);
  if (featureList) observer.observe(featureList);
  if (platformComparison) observer.observe(platformComparison);

});
