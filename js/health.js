// Audio Modal Functions
function openAudioModal() {
    const modal = document.getElementById('audioModal');
    const audioPlayer = document.getElementById('audioPlayer');
    modal.style.display = 'block';
    audioPlayer.play();
}

function closeAudioModal() {
    const modal = document.getElementById('audioModal');
    const audioPlayer = document.getElementById('audioPlayer');
    modal.style.display = 'none';
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('audioModal');
    if (event.target == modal) {
        closeAudioModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAudioModal();
    }
});
