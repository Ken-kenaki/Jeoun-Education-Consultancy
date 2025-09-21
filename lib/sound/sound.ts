export const playNotificationSound = () => {
  try {
    // Try to play your custom sound first
    const audio = new Audio('/notification.wav');
    audio.play().catch(error => {
      console.log('Custom sound play failed, falling back to beep:', error);
      // Fallback to beep sound if custom sound fails
      fallbackBeep();
    });
  } catch (e) {
    console.log('Custom sound failed, falling back to beep:', e);
    // Fallback to beep sound if custom sound fails
    fallbackBeep();
  }
};

const fallbackBeep = () => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    gainNode.gain.value = 0.1;
    
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.1);
  } catch (e) {
    console.log('Could not play fallback sound:', e);
  }
};