"use strict";
var darkBtn = document.querySelector("#dark-mode");
var lightBtn = document.querySelector("#light-mode");
var body = document.querySelector("body");
var menuBtn = document.querySelector("#menu");
var isDark = localStorage.getItem("theme");
if (isDark === null || isDark == "dark") {
    document.documentElement.classList.toggle("dark");
}
else {
    lightBtn === null || lightBtn === void 0 ? void 0 : lightBtn.classList.add("hidden");
    darkBtn === null || darkBtn === void 0 ? void 0 : darkBtn.classList.remove("hidden");
    document.documentElement.classList.toggle("light");
}
if (darkBtn && lightBtn) {
    darkBtn.addEventListener("click", function () {
        document.documentElement.classList.toggle("dark");
        lightBtn === null || lightBtn === void 0 ? void 0 : lightBtn.classList.remove("hidden");
        darkBtn === null || darkBtn === void 0 ? void 0 : darkBtn.classList.add("hidden");
        localStorage.setItem("theme", "dark");
    });
    lightBtn.addEventListener("click", function () {
        document.documentElement.classList.toggle("dark");
        lightBtn === null || lightBtn === void 0 ? void 0 : lightBtn.classList.add("hidden");
        darkBtn === null || darkBtn === void 0 ? void 0 : darkBtn.classList.remove("hidden");
        localStorage.setItem("theme", "light");
    });
}
if (menuBtn) {
    menuBtn.addEventListener("click", function (e) {
        console.log("You clicked me!!");
    });
}
