/* Lightbox functionality replaced with Bootstrap 5 Modal functionality */

document.addEventListener('DOMContentLoaded', function () {
    // Select all gallery items that should trigger the modal
    const galleryItems = document.querySelectorAll('.gallery-item a');

    galleryItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            // Get the target image URL from the clicked thumbnail
            const imageUrl = this.getAttribute('href');
            const modal = document.querySelector('#lightboxModal');
            const modalImg = modal.querySelector('.modal-body img');

            // Set the modal image source to the selected image
            modalImg.setAttribute('src', imageUrl);

            // Show the modal
            const bootstrapModal = new bootstrap.Modal(modal);
            bootstrapModal.show();
        });
    });

    // Event listener for when the modal is closed, to clear the image source
    const modal = document.querySelector('#lightboxModal');
    modal.addEventListener('hidden.bs.modal', function () {
        const modalImg = modal.querySelector('.modal-body img');
        modalImg.setAttribute('src', ''); // Clear image to prevent flashing
    });
});
