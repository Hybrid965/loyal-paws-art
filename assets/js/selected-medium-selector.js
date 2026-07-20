const mediumCards = Array.from(
    document.querySelectorAll(".medium-card")
);

const mediumInput = document.getElementById("medium");

function selectMedium(card) {
    mediumCards.forEach(function (mediumCard) {
        mediumCard.classList.remove("selected");
        mediumCard.setAttribute("aria-checked", "false");
        mediumCard.setAttribute("tabindex", "-1");
    });

    card.classList.add("selected");
    card.setAttribute("aria-checked", "true");
    card.setAttribute("tabindex", "0");

    mediumInput.value = card.dataset.value;
}

mediumCards.forEach(function (card, index) {
    // Make the initially selected card focusable
    if (card.classList.contains("selected")) {
        card.setAttribute("tabindex", "0");
    } else {
        card.setAttribute("tabindex", "-1");
    }

    card.addEventListener("click", function () {
        selectMedium(card);
    });

    card.addEventListener("keydown", function (event) {
        let nextIndex;

        if (event.key === "ArrowRight" || event.key === "ArrowDown") {
            nextIndex = (index + 1) % mediumCards.length;
        } else if (
            event.key === "ArrowLeft" ||
            event.key === "ArrowUp"
        ) {
            nextIndex =
                (index - 1 + mediumCards.length) % mediumCards.length;
        } else {
            return;
        }

        event.preventDefault();

        const nextCard = mediumCards[nextIndex];

        selectMedium(nextCard);
        nextCard.focus();
    });
});