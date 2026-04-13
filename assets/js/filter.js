// Set the data array
let portraits = [
  {
    id: 1,
    petType: 'dog',
    label: 'dog drawing',
    name: 'Bob',
    src: 'assets/images/placeholder.png',
    alt: 'Pencil drawing of Bob'
  },
  { 
    id: 2, 
    petType: 'dog', 
    label: 'dog drawing',
    name: 'Bob',
    src: 'assets/images/placeholder.png',
    alt: 'Pencil drawing of Bob'
  },
  { 
    id: 3, 
    petType: 'dog', 
    label: 'dog drawing',
    name: 'Bob',
    src: 'assets/images/placeholder.png',
    alt: 'Pencil drawing of Bob'
  },
  { 
    id: 4, 
    petType: 'cat', 
    label: 'cat drawing',
    name: 'Bob',
    src: 'assets/images/placeholder.png',
    alt: 'Pencil drawing of Bob'
  },
  { 
    id: 5, 
    petType: 'cat', 
    label: 'cat drawing',
    name: 'Bob',
    src: 'assets/images/placeholder.png',
    alt: 'Pencil drawing of Bob'
  },
  { 
    id: 6, 
    petType: 'cat', 
    label: 'cat drawing',
    name: 'Bob',
    src: 'assets/images/placeholder.png',
    alt: 'Pencil drawing of Bob'
  },
  { 
    id: 7, 
    petType: 'horse', 
    label: 'horse drawing',
    name: 'Bob',
    src: 'assets/images/placeholder.png',
    alt: 'Pencil drawing of Bob'
  },
  { 
    id: 8, 
    petType: 'horse', 
    label: 'horse drawing',
    name: 'Bob',
    src: 'assets/images/placeholder.png',
    alt: 'Pencil drawing of Bob'
  },
  { 
    id: 9, 
    petType: 'horse', 
    label: 'horse drawing',
    name: 'Bob',
    src: 'assets/images/placeholder.png',
    alt: 'Pencil drawing of Bob'
  },
];

let gallery = document.getElementById('gallery-grid');

// Loop through the portraits & assign petType and name
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

// Run on page load to show all cards by default
applyFilter('all');