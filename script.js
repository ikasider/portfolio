function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom >= 0
    );
  }

  function animateProgressBars() {
    document.querySelectorAll('.progress').forEach(progress => {
      if (isInViewport(progress) && !progress.classList.contains('animated')) {
        const target = progress.getAttribute('data-percent');
        progress.style.width = target;
        progress.classList.add('animated');
      }
    });
  }

  window.addEventListener('scroll', animateProgressBars);
  window.addEventListener('load', animateProgressBars);
