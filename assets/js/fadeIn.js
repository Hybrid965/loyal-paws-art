const revealElements = document.querySelectorAll(
  '.fadein'
);
 
revealElements.forEach(function (el) {
  el.classList.add('fade');
});
 
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
 
  revealElements.forEach(function (el) {
    observer.observe(el);
  });
} 


