// assets/js/theme.js
const html = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved === "light") html.classList.remove("dark");
// Tombol toggle...
