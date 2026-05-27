// Intersection Observer API used to detect when elements enter the viewport
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

const revealElements = document.querySelectorAll(
    ".fadein"
);

revealElements.forEach(function (el) {
    el.classList.add("fade");
});


if (window.IntersectionObserver !== undefined) { 
    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
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