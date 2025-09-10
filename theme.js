/* ---------------- THEME HANDLING --------------- */

const body = document.body;
const toggleBtn = document.getElementById("theme-toggle");

// apply theme function
function applyTheme(theme) {
  body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  if (theme) {
    toggleBtn.checked = theme === "dark";
  }

  // vibration
  if (navigator.vibrate) {
    if (theme === "light") {
      navigator.vibrate(50);
    } else {
      navigator.vibrate([100, 50, 100,200]);
    }
  }
}

// Detect system preference
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

// saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
  toggleBtn.checked = savedTheme === "dark";
} else {
  applyTheme(prefersDark.matches ? "dark" : "light");
}

// Update theme automatically if system preference changes
prefersDark.addEventListener("change", (event) => {
  if (!localStorage.getItem("theme")) {
 
    applyTheme(event.matches ? "dark" : "light");
  }
});

toggleBtn.addEventListener("change", function () {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
});

document.body.addEventListener("dblclick", function () {
  const target = event.target;

  if (
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT" ||
    target.closest("label") ||
    target.tagName === "BUTTON" 
  ) {
    return;
  }
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
});

document.addEventListener("keydown", function (event) {
  const active = document.activeElement;

  if (
    active.tagName === "INPUT" ||
    active.tagName === "TEXTAREA" ||
    active.tagName === "SELECT"
  ) {
    return;
  }
  if (
    event.key === "d" ||
    event.key === "D" ||
    event.key === "l" ||
    event.key === "L"
  ) {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(newTheme);
  }
});

