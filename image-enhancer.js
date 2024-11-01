document.querySelectorAll('.clickable-image').forEach(img => {
  img.addEventListener('click', () => {
    img.classList.toggle('enlarged');
  });
});