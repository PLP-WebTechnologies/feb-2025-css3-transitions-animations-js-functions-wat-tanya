// Function to check if a preference is stored in localStorage
function checkUserPreference() {
    // Check if the user preference for animation is already stored
    const isAnimationEnabled = localStorage.getItem('animationEnabled');
    
    // If preference exists, apply it
    if (isAnimationEnabled === 'true') {
        document.getElementById('statusMessage').innerText = 'Animation is enabled!';
    } else {
        document.getElementById('statusMessage').innerText = 'Animation is disabled.';
    }
}

// Function to toggle animation preference
function toggleAnimationPreference() {
    const isAnimationEnabled = localStorage.getItem('animationEnabled') === 'true';
    const newPreference = !isAnimationEnabled;
    
    // Store the new preference in localStorage
    localStorage.setItem('animationEnabled', newPreference);
    
    // Update status message
    checkUserPreference();
}

// Apply animation when the button is clicked
function handleButtonClick() {
    const button = document.getElementById('animateButton');
    
    // Check if animation is enabled
    const isAnimationEnabled = localStorage.getItem('animationEnabled') === 'true';
    
    if (isAnimationEnabled) {
        button.classList.add('shake-animation');
        
        // Remove animation class after animation completes
        setTimeout(() => {
            button.classList.remove('shake-animation');
        }, 500);
    }
}

// Event listeners
document.getElementById('animateButton').addEventListener('click', handleButtonClick);
document.getElementById('animateButton').addEventListener('dblclick', toggleAnimationPreference);

// On page load, check user preference and set up the status message
window.onload = checkUserPreference;
