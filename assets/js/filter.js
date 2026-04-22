/*global console*/

// Assign the variable to gallery-grid
let gallery = document.getElementById("gallery-grid");


// Update the portrait number depending whats selected
function updateGalleryCount() {
  const visibleItems = gallery.querySelectorAll("li:not(.hidden)").length;
  document.getElementById("gallery-count").textContent =
    `Showing ${visibleItems} Portraits`;
}

// Fetch the json
fetch("assets/json/portraits.json")
  .then((response) => response.json())
  .then(function (portraits) {

    // Loop through the portraits, build & assign petType and name
    portraits.forEach(function (portrait) {
      let li = document.createElement("li");
      li.className = "fadein";
      li.setAttribute("data-petType", portrait.petType);
      li.innerHTML = `
        <div class="gallery-card-thumb">
          <img src="${portrait.src}" alt="${portrait.alt}" />
        </div>
        <div class="gallery-card-info">
          <span class="gallery-card-name">${portrait.name}</span>
          <span class="gallery-card-medium-tag">${portrait.label}</span>
        </div>
      `;
      li.addEventListener("click", function () {
        openLightbox(
          portrait.src,
          portrait.alt,
          portrait.name,
          portrait.label,
          portrait.description
        );
      });
      gallery.appendChild(li);
    });

    applyFilter("all");
    updateGalleryCount();

  })
  .catch((err) => console.error("Failed to load JSON:", err));


// Filter function
function applyFilter(petType) {
  let cards = gallery.querySelectorAll("li");

  cards.forEach(function (card) {
    let match = (petType === "all")
      || (card.getAttribute("data-petType") === petType);

    if (match) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

// Buttons
let buttons = document.querySelectorAll(".filter-btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let selected = button.getAttribute("data-filter");
    applyFilter(selected);
    updateGalleryCount();

    // Update active state on buttons
    buttons.forEach(function (btn) { btn.classList.remove("active"); });
    button.classList.add("active");
  });
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxName = document.getElementById("lightbox-name");
const lightboxLabel = document.getElementById("lightbox-label");
const lightboxDesc = document.getElementById("lightbox-desc");
const lightboxClose = document.getElementById("lightbox-close");

function openLightbox(src, alt, name, label, description) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightboxName.textContent = name;
  lightboxLabel.textContent = label;
  lightboxDesc.textContent = description;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox) { closeLightbox(); }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") { closeLightbox(); }
});