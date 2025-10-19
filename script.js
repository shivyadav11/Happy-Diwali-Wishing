// const audio = document.getElementById('diwaliAudio');
// const surpriseButton = document.getElementById('surpriseButton');
// const surpriseMessage = document.getElementById('surpriseMessage');
// const soundToggle = document.getElementById('soundToggle');

// window.onload = () => {
//   audio.volume = 0.4;
//   audio.play().catch(() => {
    
//   });
// };

// surpriseButton.addEventListener('click', () => {
//   surpriseMessage.style.opacity = '0'; 
//   setTimeout(() => {
//     surpriseMessage.textContent = "श्री महालक्ष्म्यै नमः ॥ या देवी सर्वभूतेषु लक्ष्मी रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥";
//     surpriseMessage.style.animation = 'fadeInText 1s ease forwards';
//   }, 100);
// });



// soundToggle.addEventListener('click', () => {
//   if (audio.paused) {
//     audio.play();
//     soundToggle.textContent = 'Pause Music';
//   } else {
//     audio.pause();
//     soundToggle.textContent = 'Play Music';
//   }
// });
const audio = document.getElementById('diwaliAudio');
const surpriseButton = document.getElementById('surpriseButton');
const surpriseMessage = document.getElementById('surpriseMessage');
const soundToggle = document.getElementById('soundToggle');

// Naya surprise audio
const surpriseAudio = new Audio('Om Mahalaxmi Namo Namah - Mantra.mp3');  // Aap apna audio file/path daalein

window.onload = () => {
  audio.volume = 0.4;
  audio.play().catch(() => {
    // Auto-play might be blocked by browser
  });
};

surpriseButton.addEventListener('click', () => {
  audio.pause(); // Existing music ko rok do

  surpriseAudio.play(); // Naya surprise music chalu karo

  surpriseMessage.style.opacity = '0'; // Reset animation
  setTimeout(() => {
    surpriseMessage.textContent = "श्री महालक्ष्म्यै नमः ॥ या देवी सर्वभूतेषु लक्ष्मी रूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥]";
    surpriseMessage.style.animation = 'fadeInText 1s ease forwards';
  }, 100);
});

soundToggle.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    soundToggle.textContent = 'Wishing OFF';
  } else {
    audio.pause();
    soundToggle.textContent = 'Play Music';
  }
});
