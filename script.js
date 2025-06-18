// Function to maximize/minimize sliders
function maximizeSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    const allSliders = document.querySelectorAll('.slider');
    
    // Remove maximized class from all sliders
    allSliders.forEach(s => {
        if (s.id !== sliderId) {
            s.classList.remove('maximized');
            s.style.display = s.classList.contains('maximized') ? 'flex' : 'none';
        }
    });
    
    // Toggle maximized class for clicked slider
    slider.classList.toggle('maximized');
    
    // Show/hide other sliders based on maximized state
    allSliders.forEach(s => {
        if (s.id !== sliderId) {
            s.style.display = slider.classList.contains('maximized') ? 'none' : 'flex';
        }
    });
}

// Search functionality
document.getElementById('search-bar').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Close maximized slider when clicking outside
document.addEventListener('click', function(e) {
    const sliders = document.querySelectorAll('.slider.maximized');
    sliders.forEach(slider => {
        if (!slider.contains(e.target) && !e.target.classList.contains('more-btn')) {
            slider.classList.remove('maximized');
        }
    });
});

// Modal logic for Full Wave Bridge Rectifier
const rectifierCard = document.getElementById('rectifier-card');
const rectifierModal = document.getElementById('rectifier-modal');
const closeRectifierModal = document.getElementById('close-rectifier-modal');

if (rectifierCard && rectifierModal && closeRectifierModal) {
    rectifierCard.onclick = function() {
        rectifierModal.style.display = 'block';
    };
    closeRectifierModal.onclick = function() {
        rectifierModal.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target === rectifierModal) {
            rectifierModal.style.display = 'none';
        }
    };
} 