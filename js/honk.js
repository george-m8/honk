// Honk player functionality
let currentHonk = 'honk1';
let audio = null;

// Initialize audio and set up event listeners
function init() {
    // Load honk1 by default
    loadHonk('honk1');
    
    // Honk button click handler
    document.getElementById('honk-button').addEventListener('click', playHonk);
    
    // Dropdown item handlers
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const honkName = this.dataset.value;
            loadHonk(honkName);
        });
    });
    
    // Keyboard shortcuts (1, 2, 3)
    document.addEventListener('keydown', function(e) {
        if (e.key === '1') {
            loadHonk('honk1');
        } else if (e.key === '2') {
            loadHonk('honk2');
        } else if (e.key === '3') {
            loadHonk('honk3');
        }
    });
}

// Load a honk sound
function loadHonk(honkName) {
    currentHonk = honkName;
    
    // Stop current audio if playing
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    
    // Create new audio instance
    audio = new Audio(`sound/${honkName}.mp3`);
    
    // Update display
    updateDisplay();
}

// Play the current honk
function playHonk() {
    if (audio) {
        // Stop and reset if already playing
        audio.pause();
        audio.currentTime = 0;
        
        // Play from start
        audio.play();
    }
}

// Update the "now playing" display
function updateDisplay() {
    const output = document.getElementById('output1');
    const honkNumber = currentHonk.replace('honk', '');
    output.textContent = `honk ${honkNumber}`;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
