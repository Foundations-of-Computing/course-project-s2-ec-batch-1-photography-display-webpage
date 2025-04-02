// Lightbox Functionality
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.box-img img');
    
    images.forEach(image => {
        image.addEventListener('click', () => {
            // Create the lightbox container
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            
            // Create the lightbox image element
            const lightboxImg = document.createElement('img');
            lightboxImg.src = image.src;  // Set the image source
            
            // Append the image to the lightbox
            lightbox.appendChild(lightboxImg);
            
            // Add close functionality
            lightbox.addEventListener('click', () => {
                lightbox.remove();  // Remove the lightbox when clicked
            });
            
            // Append the lightbox to the body
            document.body.appendChild(lightbox);
        });
    });
});
