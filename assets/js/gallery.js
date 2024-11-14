document.addEventListener('DOMContentLoaded', function() {
  const galleryModal = document.getElementById('galleryModal');
  if (galleryModal) {
    const modalImage = galleryModal.querySelector('#galleryModalImage');
    const modalCaption = galleryModal.querySelector('.modal-caption');

    galleryModal.addEventListener('show.bs.modal', function(event) {
      const link = event.relatedTarget;
      modalImage.src = link.dataset.full;
      modalCaption.textContent = link.dataset.caption;
    });

    // Preload images
    document.querySelectorAll('.gallery-item a').forEach(link => {
      const img = new Image();
      img.src = link.dataset.full;
    });
  }
});