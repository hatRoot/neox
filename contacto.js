const secciones = document.querySelectorAll('.seccion');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

secciones.forEach(seccion => {
  observer.observe(seccion);
});
