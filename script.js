// THEME TOGGLE
const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.onclick = () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  toggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
};

// TYPING ANIMATION (NAME ONLY)
const nameText = "Tharindu Thennakoon";
let i = 0;
const el = document.getElementById("typing-name");

function type() {
  if (i < nameText.length) {
    el.textContent += nameText.charAt(i);
    i++;
    setTimeout(type, 120);
  }
}
type();

// DOWNLOAD PDF
function downloadPDF() {
  window.print();
}

// BACK TO TOP
const backBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

backBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
