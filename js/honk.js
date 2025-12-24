// Honk player functionality
let currentHonk = 'honk1';
let audio = null;
let audioCache = {};

// Initialize audio and set up event listeners
function init() {
    // Preload all honk sounds
    audioCache.honk1 = new Audio('sound/honk1.mp3');
    audioCache.honk2 = new Audio('sound/honk2.mp3');
    audioCache.honk3 = new Audio('sound/honk3.mp3');
    
    // Set honk1 as default
    audio = audioCache.honk1;
    updateDisplay();
    
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
    
    // Switch to preloaded audio
    audio = audioCache[honkName];
    
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
