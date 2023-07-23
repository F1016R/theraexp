const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  const overlay = item.querySelector('.overlay');
  const overlayText = item.querySelector('.overlay-text');
  const imgAlt = item.querySelector('img').alt;

  overlayText.textContent = imgAlt;

  item.addEventListener('mouseenter', () => {
    overlay.style.opacity = '1';
  });

  item.addEventListener('mouseleave', () => {
    overlay.style.opacity = '0';
  });
});
