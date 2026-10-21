
const themeBtn = document.getElementById("themeBtn");
const copyBtn = document.getElementById("copyBtn");
const message = document.getElementById("message");

// Ganti tema
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  themeBtn.textContent = isLight ? "🌙" : "☀️";
});

// Salin username
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("@rakaprtm");
    message.textContent = "Username berhasil disalin!";
  } catch {
    message.textContent = "Username: @rakapr tm".replace(" ", "");
  }

  setTimeout(() => {
    message.textContent = "";
  }, 2500);
});

// Tahun otomatis
document.getElementById("year").textContent =
  new Date().getFullYear();

// Jam lokal
function updateClock() {
  document.getElementById("clock").textContent =
    new Date().toLocaleTimeString("id-ID", {
      timeZone: "Asia/Makassar",
      hour12: false
    });
}

updateClock();
setInterval(updateClock, 1000);
