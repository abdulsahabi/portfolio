let darkBtn = document.querySelector<HTMLButtonElement>("#dark-mode");
let lightBtn = document.querySelector<HTMLButtonElement>("#light-mode");
let body = document.querySelector<HTMLBodyElement>("body");
let menuBtn = document.querySelector<HTMLButtonElement>("#menu");

let isDark = localStorage.getItem("theme");

if (isDark === null || isDark == "dark") {
  document.documentElement.classList.toggle("dark");
} else {
  lightBtn?.classList.add("hidden");
  darkBtn?.classList.remove("hidden");
  document.documentElement.classList.toggle("light");
}

if (darkBtn && lightBtn) {
  darkBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    lightBtn?.classList.remove("hidden");
    darkBtn?.classList.add("hidden");
    localStorage.setItem("theme", "dark");
  });

  lightBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    lightBtn?.classList.add("hidden");
    darkBtn?.classList.remove("hidden");
    localStorage.setItem("theme", "light");
  });
}

if (menuBtn) {
  menuBtn.addEventListener("click", (e: MouseEvent) => {
    console.log("You clicked me!!");
  });
}
