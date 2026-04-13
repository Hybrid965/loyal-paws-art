// Set the data array
let portraits = [
  {
    id: 1,
    petType: 'dog',
    label: 'dog drawing',
    name: 'Bob',
    src: 'assets/images/dog1.jpg',
    alt: 'Pencil drawing of Bob'
  },
  { 
    id: 2, 
    petType: 'dog', 
    label: 'dog drawing',
    name: 'Bob',
    src: 'assets/images/dog2.jpg',
    alt: 'Pencil drawing of Bob'
  },
  { 
    id: 3, 
    petType: 'dog', 
    label: 'dog drawing',
    name: 'Bob',
    src: 'assets/images/dog3.jpg',
    alt: 'Pencil drawing of Bob'
  },
  { 
    id: 4, 
    petType: 'dog', 
    label: 'dog drawing',
    name: 'Bob',
    src: 'assets/images/dog4.jpg',
    alt: 'Pencil drawing of Bob'
  },
  { 
    id: 5, 
    petType: 'dog', 
    label: 'dog drawing',
    name: 'Bob',
    src: 'assets/images/dog5.jpg',
    alt: 'Pencil drawing of Bob'
  },
  { 
    id: 6, 
    petType: 'dog', 
    label: 'dog drawing',
    name: 'Bob',
    src: 'assets/images/dog6.jpg',
    alt: 'Pencil drawing of Bob'
  },
  { 
    id: 7, 
    petType: 'dog', 
    label: 'dog drawing',
    name: 'Bob',
    src: 'assets/images/dog7.jpg',
    alt: 'Pencil drawing of Bob'
  },
  { 
    id: 8, 
    petType: 'dog', 
    label: 'dog drawing',
    name: 'Bob',
    src: 'assets/images/dog8.jpg',
    alt: 'Pencil drawing of Bob'
  },
  { 
    id: 9, 
    petType: 'dog', 
    label: 'dog drawing',
    name: 'Bob',
    src: 'assets/images/dog9.jpg',
    alt: 'Pencil drawing of Bob'
  },
    { 
    id: 10, 
    petType: 'dog', 
    label: 'dog drawing',
    name: 'Bob',
    src: 'assets/images/dog10.jpg',
    alt: 'Pencil drawing of Bob'
  },
    { 
    id: 11, 
    petType: 'dog', 
    label: 'dog drawing',
    name: 'Bob',
    src: 'assets/images/dog11.jpg',
    alt: 'Pencil drawing of Bob'
  },
    { 
    id: 12, 
    petType: 'dog', 
    label: 'dog drawing',
    name: 'Bob',
    src: 'assets/images/dog12.jpg',
    alt: 'Pencil drawing of Bob'
  },
    { 
    id: 13, 
    petType: 'dog', 
    label: 'dog drawing',
    name: 'Bob',
    src: 'assets/images/dog13.jpg',
    alt: 'Pencil drawing of Bob'
  },
    { 
    id: 14, 
    petType: 'cat', 
    label: 'cat drawing',
    name: 'Bob',
    src: 'assets/images/cat1.jpg',
    alt: 'Pencil drawing of Bob'
  },
    { 
    id: 15, 
    petType: 'cat', 
    label: 'cat drawing',
    name: 'Bob',
    src: 'assets/images/cat2.jpg',
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