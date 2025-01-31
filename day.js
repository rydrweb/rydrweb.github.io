const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date().getDay();
console.log(`${days[today]}`);

// If you want to display it on your webpage:
document.getElementById("dayDisplay").textContent = `${days[today]}`;

