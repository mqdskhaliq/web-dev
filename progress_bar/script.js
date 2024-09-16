document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('circle');
    const radius = circle.getAttribute('r');
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference;

    circle.style.transition = 'stroke-dashoffset 2s ease';
  });
  