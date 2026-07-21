/*jslint long*/
/*global window, document, setInterval, clearInterval*/

let seconds = 10;
let countdownEl = document.getElementById("countdown");
let timer;

let pathParts = window.location.pathname
    .split("/")
    .filter(Boolean);

let homePath = (
    window.location.hostname.endsWith("github.io")
        ? "/" + pathParts[0] + "/"
        : "/"
);

timer = setInterval(function () {
    seconds -= 1;
    countdownEl.textContent = seconds;

    if (seconds <= 0) {
        clearInterval(timer);
        window.location.href = homePath;
    }
}, 1000);