let gallery = document.getElementById('gallery-grid');

// Fetch the json
fetch('assets/json/portraits.json')
  .then(response => response.json())
  .then(portraits => {

    // Loop through the portraits, build & assign petType and name
    portraits.forEach(function (portrait) {
      let li = document.createElement('li');
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
      gallery.appendChild(li);
    });

    applyFilter('all');

  })
  .catch(err => console.error("Failed to load JSON:", err));


// Filter function
function applyFilter(petType) {
  let cards = gallery.querySelectorAll('li');

  cards.forEach(function (card) {
    let match = (petType === 'all') || (card.getAttribute('data-petType') === petType);

    if (match) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

// Buttons
let buttons = document.querySelectorAll('.filter-btn');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    let selected = button.getAttribute('data-filter');
    applyFilter(selected);

    // Update active state on buttons
    buttons.forEach(function (btn) { btn.classList.remove('active'); });
    button.classList.add('active');
  });
});