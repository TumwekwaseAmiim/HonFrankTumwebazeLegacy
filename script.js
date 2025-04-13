// Animate the supporter count from 0 to 102
document.addEventListener("DOMContentLoaded", () => {
  const countElement = document.querySelector(".supporter-count");
  let count = 0;
  const target = 102;

  const interval = setInterval(() => {
    if (count < target) {
      count++;
      countElement.textContent = `🟢 ${count} Supporters and Growing!`;
    } else {
      clearInterval(interval);
    }
  }, 30); // speed of counting
});
