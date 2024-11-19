
/* Updated JavaScript for Bootstrap 5 compatibility */

document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");

    galleryItems.forEach((item) => {
        item.addEventListener("click", function () {
            const imgSrc = this.querySelector("img").getAttribute("src");

            // Create Bootstrap modal
            const modalHtml = `
                <div class="modal fade" id="galleryModal" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body">
                                <img src="${imgSrc}" alt="Gallery Image" class="img-fluid" />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>`;

            // Append modal to body and show
            document.body.insertAdjacentHTML("beforeend", modalHtml);
            const modalElement = document.getElementById("galleryModal");
            const modal = new bootstrap.Modal(modalElement);
            modal.show();

            // Clean up after modal is hidden
            modalElement.addEventListener("hidden.bs.modal", function () {
                modalElement.remove();
            });
        });
    });
});
