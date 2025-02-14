const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');

// Play/Pause button functionality
playPauseBtn.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Mute/Unmute button functionality
muteBtn.addEventListener('click', function() {
    if (video.muted) {
        video.muted = false;
        muteBtn.textContent = 'Mute';
    } else {
        video.muted = true;
        muteBtn.textContent = 'Unmute';
    }
});


const vid = document.getElementById('myVid');
const playPausBtn = document.getElementById('playPausBtn');
const mutBtn = document.getElementById('mutBtn');

// Play/Pause button functionality
playPausBtn.addEventListener('click', function() {
    if (vid.paused) {
        vid.play();
        playPausBtn.textContent = 'Pause';
    } else {
        vid.pause();
        playPausBtn.textContent = 'Play';
    }
});

// Mute/Unmute button functionality
mutBtn.addEventListener('click', function() {
    if (vid.muted) {
        vid.muted = false;
        mutBtn.textContent = 'Mute';
    } else {
        vid.muted = true;
        mutBtn.textContent = 'Unmute';
    }
});

const vide = document.getElementById('myVide');
const playPauBtn = document.getElementById('playPauBtn');
const muBtn = document.getElementById('muBtn');

// Play/Pause button functionality
playPauBtn.addEventListener('click', function() {
    if (vide.paused) {
        vide.play();
        playPauBtn.textContent = 'Pause';
    } else {
        vide.pause();
        playPauBtn.textContent = 'Play';
    }
});

// Mute/Unmute button functionality
muBtn.addEventListener('click', function() {
    if (vide.muted) {
        vide.muted = false;
        muBtn.textContent = 'Mute';
    } else {
        vide.muted = true;
        muBtn.textContent = 'Unmute';
    }
});

