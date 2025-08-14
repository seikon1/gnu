// 현재 연도 표시
document.getElementById("year").textContent = new Date().getFullYear();

// 다크/라이트 수동 토글
const btn = document.getElementById("themeToggle");
btn.addEventListener("click", () => {
  const dark = document.documentElement.classList.toggle("manual-dark");
  if (dark) {
    document.documentElement.style.setProperty("--bg", "#0f1115");
    document.documentElement.style.setProperty("--fg", "#eaeef5");
    document.documentElement.style.setProperty("--muted", "#9aa4b2");
    document.documentElement.style.setProperty("--primary", "#7aa2ff");
    document.documentElement.style.setProperty("--card", "#151923");
    document.documentElement.style.setProperty("--border", "#242a36");
  } else {
    document.documentElement.style.removeProperty("--bg");
    document.documentElement.style.removeProperty("--fg");
    document.documentElement.style.removeProperty("--muted");
    document.documentElement.style.removeProperty("--primary");
    document.documentElement.style.removeProperty("--card");
    document.documentElement.style.removeProperty("--border");
  }
});
