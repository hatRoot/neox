// Animación al hacer scroll
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
// Obtener el campo de búsqueda y las secciones a buscar
const searchInput = document.querySelector('.search-input');
const sections = document.querySelectorAll('.seccion'); // Secciones a filtrar

// Función que se ejecuta cuando el usuario escribe algo en el campo de búsqueda
searchInput.addEventListener('keyup', () => {
  const query = searchInput.value.toLowerCase(); // Convierte la búsqueda a minúsculas para hacerla insensible a mayúsculas

  sections.forEach(section => {
    const sectionText = section.textContent.toLowerCase(); // Obtiene el texto de la sección en minúsculas

    // Si la búsqueda coincide con el texto de la sección, la muestra; si no, la oculta
    if (sectionText.includes(query)) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
});
