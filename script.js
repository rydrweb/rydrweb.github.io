// Function to update the clock
function updateClock() {
  const clockElement = document.getElementById("clock");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  clockElement.textContent = timeString;
}

// Call updateClock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to display time immediately

// Buttons and links (you can change the href to your desired links)
document.getElementById('button1').onclick = function() {
  window.location.href = 'https://example.com'; // Replace with your link
};
document.getElementById('button2').onclick = function() {
  window.location.href = 'https://example.com'; // Replace with your link
};
document.getElementById('button3').onclick = function() {
  window.location.href = 'https://example.com'; // Replace with your link
};
document.getElementById('button4').onclick = function() {
  window.location.href = 'https://example.com'; // Replace with your link
};
document.getElementById('button5').onclick = function() {
  window.location.href = 'https://example.com'; // Replace with your link
};
