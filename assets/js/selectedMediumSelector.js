const mediumCards = document.querySelectorAll(".medium-card");

mediumCards.forEach(card => {
    card.addEventListener("click", () => {
        // Remove selected from all cards
        mediumCards.forEach(c => {
            c.classList.remove("selected");
            c.setAttribute("aria-checked", "false");
        });

        // Select the clicked card
        card.classList.add("selected");
        card.setAttribute("aria-checked", "true");

        // Update the hidden input
        document.getElementById("medium").value = card.dataset.value;
    });
});