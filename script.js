document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Scroll to the target section
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Adjust the scroll position to center it on the screen
            const headerOffset = document.querySelector('header').offsetHeight; // Get the height of the header
            const elementPosition = targetSection.getBoundingClientRect().top; // Get the target section position
            const offsetPosition = elementPosition + window.scrollY - (window.innerHeight / 2) + (targetSection.offsetHeight / 2); // Calculate the offset position

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // Smooth scroll
            });
        });
    });
});


function initializeImageZoom() {
    const productImages = document.querySelectorAll('.product-card img');
    let zoomedImage = null;
  
    function createZoomOverlay(img) {
      zoomedImage = document.createElement('div');
      zoomedImage.className = 'zoomed-image';
      const imgClone = img.cloneNode();
      zoomedImage.appendChild(imgClone);
      document.body.appendChild(zoomedImage);
      
      setTimeout(() => {
        zoomedImage.classList.add('active');
      }, 10);
    }
  
    function removeZoomOverlay() {
      zoomedImage.classList.remove('active');
      setTimeout(() => {
        document.body.removeChild(zoomedImage);
        zoomedImage = null;
      }, 300);
    }
  
    productImages.forEach(img => {
      img.addEventListener('click', () => {
        if (!zoomedImage) {
          createZoomOverlay(img);
          zoomedImage.addEventListener('click', removeZoomOverlay);
        }
      });
    });
  }
  
  // Call the function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initializeImageZoom);
