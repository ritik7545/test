document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'images/1.png',
        'images/1.jpg',
        'images/2.png',
        'images/3.jpg',
        // 'images/logo.webp'
    ];

    const dynamicImage = document.getElementById('dynamic-image');
    let currentIndex = 0;
    let autoUpdateInterval;

    // Function to update the image with fade effect
    function updateImage(index) {
        dynamicImage.classList.add('fade');
        setTimeout(() => {
            dynamicImage.src = images[index];
            dynamicImage.classList.remove('fade');
        }, 300);
    }

    // Function to change image (used by arrow buttons)
    window.changeImage = function(direction) {
        // Clear the auto-update interval when manually changing images
        clearInterval(autoUpdateInterval);
        
        currentIndex = (currentIndex + direction + images.length) % images.length;
        updateImage(currentIndex);
        
        // Restart auto-update
        startAutoUpdate();
    };

    // Function to start auto-update
    function startAutoUpdate() {
        autoUpdateInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage(currentIndex);
        }, 3000); // Change image every 3 seconds
    }

    // Initialize the carousel
    if (dynamicImage) {
        // Set initial image
        currentIndex = Math.floor(Math.random() * images.length);
        dynamicImage.src = images[currentIndex];
        
        // Start auto-update
        startAutoUpdate();
    }
});
