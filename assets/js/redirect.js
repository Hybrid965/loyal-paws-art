let seconds = 10;
let countdownEl = document.getElementById("countdown");

let timer = setInterval(function () {
    seconds -= 1;
    countdownEl.textContent = seconds;
    if (seconds <= 0) {
        clearInterval(timer);
        window.location.href = "https://hybrid965.github.io/loyal-paws-art/index.html";
    }
}, 1000);