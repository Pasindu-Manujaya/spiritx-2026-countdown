const countdown = () => {
  // Set target date: March 1, 2026 at 00:00:00
  // Use configured date from localStorage if available
  const savedDate = localStorage.getItem("spiritxDate");
  const targetDate = savedDate
    ? new Date(savedDate).getTime()
    : new Date("2026-03-01T00:00:00").getTime();

  const now = new Date().getTime();
  const diff = targetDate - now;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const messageEl = document.getElementById("message");

  if (diff <= 0) {
    document.getElementById("countdown").style.display = "none";
    messageEl.innerHTML = "🎉 SpiritX 2026 is Live! 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
};

// Update countdown every 1 second
setInterval(countdown, 1000);
countdown();
