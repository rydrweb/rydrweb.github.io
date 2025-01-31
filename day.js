function updateDay() {
    const day = document.getElementById('Day');
    const now = new Date();
    const hours = now.getDay().toString().padStart(2, '0');
    clock.textContent = `${day}`;
}

updateClock();

setInterval(updateClock, 1000);
