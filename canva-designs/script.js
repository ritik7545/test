document.addEventListener('DOMContentLoaded', function() {
    const projectImages = document.querySelectorAll('.project-item img');
    const body = document.body;

    projectImages.forEach(img => {
        img.addEventListener('click', function() {
            // Create overlay
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');

            // Create full-size image container
            const fullImageContainer = document.createElement('div');
            fullImageContainer.classList.add('full-image-container');

            // Create full-size image element
            const fullImage = document.createElement('img');
            fullImage.src = this.src;
            fullImage.alt = this.alt;

            fullImageContainer.appendChild(fullImage);
            overlay.appendChild(fullImageContainer);
            body.appendChild(overlay);

            // Prevent scrolling on the body when overlay is active
            body.style.overflow = 'hidden';

            // Close overlay when clicked outside the image or on the overlay itself
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay || e.target === fullImageContainer) {
                    body.removeChild(overlay);
                    body.style.overflow = ''; // Restore scrolling
                }
            });
        });
    });
}); 