
// public/js/main.js

"use strict";

// Initialize Lucide icons
lucide.createIcons();

// DOM elements
const darkBtn = document.getElementById("dark-mode");
const lightBtn = document.getElementById("light-mode");
const menuBtn = document.getElementById("menu");
const closeBtn = document.getElementById("close");
const sidebar = document.getElementById("sidebar");
const myImage = document.getElementById("my-image");
const html = document.documentElement;

// Theme toggle functionality
const setTheme = (theme) => {
  if (theme === "dark") {
    html.classList.add("dark");
    lightBtn.classList.remove("hidden");
    darkBtn.classList.add("hidden");
  } else {
    html.classList.remove("dark");
    lightBtn.classList.add("hidden");
    darkBtn.classList.remove("hidden");
  }
  localStorage.setItem("theme", theme);
};

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  setTheme("light");
} else {
  // Default to dark theme or saved dark theme
  setTheme("dark");
}

darkBtn.addEventListener("click", () => setTheme("light"));
lightBtn.addEventListener("click", () => setTheme("dark"));

// Sidebar menu functionality
menuBtn.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
});

// Optional: Image hover effect
if (myImage) {
  myImage.addEventListener("mouseenter", () => {
    myImage.src = "./public/assets/my image 2.jpg";
  });
  myImage.addEventListener("mouseleave", () => {
    myImage.src = "./public/assets/my image 1.jpg";
  });
}
