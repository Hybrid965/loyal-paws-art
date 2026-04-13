# Loyal Paws Art

## Purpose
Loyal Paws Art is a commission enquiry website created for Gordon Burkert, a local pet portrait artist based in Evesham who works in oil, pencil and charcoal. Gordon currently has no online presence and relies entirely on word of mouth to reach new clients, meaning anyone who hasn't heard of him through a personal connection has no way to find him or see his work.

The site gives Gordon a professional platform to showcase his portfolio and receive commission enquiries. It is aimed at three audiences: pet owners wanting a bespoke portrait, people searching for a meaningful and personal gift, and those wanting to commemorate a pet they have lost.

The goal is that a visitor can arrive at the site, browse Gordon's work, understand the process and pricing, and submit an enquiry.

## User Stories
### As a pet owner wanting a commission
- I want to browse examples of the artists work so that I can decide whether his style suits what I have in mind before making contact.
- I want to understand the commission process and pricing upfront so that I know what to expect before I commit to anything.
### As a gift buyer
- I want to find out how commissioning a portrait works so that I can confidently purchase one as a gift without needing specialist knowledge.
- I want to see clear pricing so that I can decide whether a portrait fits my budget before getting in touch.
### As someone memorialising a lost pet
- I want to feel confident that the artist handles this type of commission with care so that I trust him with something that means a lot to me.
- I want a straightforward way to describe my pet and submit an enquiry so that the process feels manageable at a difficult time.
### As the Artist
- I want to display my portfolio online so that potential clients can find and evaluate my work without needing a personal referral.
- I want to receive structured commission enquiries through the site so that I have all the information I need before responding to a client.

## UX Design
### Strategy Plane
- **Target Audience**: Pet owners wanting a bespoke portrait, gift buyers looking for something personal and meaningful, people memorialising a lost pet, and the artist himself.
- **User Needs**: Clear visibility of the artist's style and portfolio, upfront pricing and process information, and a simple way to submit a commission enquiry.
- **Rationale**: The project gives Gordon a professional online presence to replace word-of-mouth discovery, centred around three clear actions: browse the work, understand the process, and get in touch.

### Scope Plane
- **Project Requirements**: A fully responsive three-page website featuring intuitive navigation, anchor links to key sections, and a structured commission enquiry form.
- **Content Requirements**: A portfolio gallery of completed works, artist biography, size and pricing cards, customer testimonials, and a commission enquiry form.

### Structure Plane
- **Information Hierarchy**: The homepage leads with the hero and a clear CTA, followed by the artist biography, size and pricing cards, testimonials, and a second CTA to commission. Portfolio and Commission pages are reached from the navbar.
- **Interaction Feedback**: The active page link is highlighted in the navbar. Hover states on links and buttons use the a white background to confirm interactivity.
- **User Control**: All interactions are user-initiated. There are no auto-playing elements or unsolicited pop-ups.

### Skeleton Plane
- **Wireframes**: Initial layouts were designed for all pages to plan the placement of headers, images, and navigation menus.
    - 📄 [Home](docs/wireframes/home.png)
    - 📄 [Portfolio](docs/wireframes/portfolio.png)
    - 📄 [Commission](docs/wireframes/commission.png)

- **Layout Changes**: 
- **Navigation Design**: A fixed navigation bar ensures that primary resources are easy to find and accessible across all screen sizes.
### Surface Plane
- **Colour Palette**: The palette has three core tones with a warm accent. 
Ivory and dark ivory form the base of the site, keeping it light and uncluttered.
Charcoal provides structure and contrast for text and key UI elements. 
The dusty rose runs through the site as a warm accent, used sparingly on interactive elements, hover states and the CTA sections. 
The near black is reserved exclusively for the hero background, making the opening section distinct from the rest of the page.

| Colour           | Hex       | Usage                                       |
| ---------------- | --------- | ------------------------------------------- |
| Ivory            | `#FAF7F2` | Main Page background                        |
| Dark Ivory       | `#F0EBE3` | Section background (Mediums)                |
| Charcoal Mid     | `#5A5555` | Text colour                                 |
| Charcoal         | `#2C2828` | Section Background (Testimonials), Headings |
| Near Black       | `#1A1717` | Hero background                             |
| Dusty Rose Dark  | `#A87878` | Hover states for links                      |
| Dusty Rose       | `#C9A0A0` | Commission CTA banner background            |
| Dusty Rose Light | `#E8D0D0` | Text accents                                |
- **Font**: 
    - Cormorant Garamond - used for all display text: headings, the logo, card titles, quotes, prices 
    - Jost - used for all body text: navigation links, labels, buttons, descriptions and form fields.
- **Accessibility & Imagery** : All images include descriptive alt text. Semantic HTML elements are used throughout to provide a clear document structure for screen readers. ARIA labels have been used to further aid screen readers.

## Features

### Across All Pages

- **Navigation Bar**:  
The navigation bar is fixed to the top of the page and remains visible as the user scrolls. It includes the site logo on the left and three page links on the right: Home, Portfolio, and Commission. The active page link is highlighted to show the user where they are. On smaller screens the navbar collapses to keep the layout clean.

    - [Navbar screenshot](docs/features/navbar.png)

- **Footer**:  
The footer appears on every page and contains the site logo and tagline, page navigation links, social media links to Instagram and Facebook, and a copyright notice.

    - [Footer screenshot](docs/features/footer.png)


### Home Page

- **Hero Section**: 
The hero is the first thing a visitor sees. It features a full-width dark background with a headline, a short description of Gordon's work, and two CTA buttons - one linking to the commission page and one anchoring down to the portfolio gallery. The contrast between the near-black hero and the rest of the page makes the opening section visually distinct.

    - [Hero screenshot](docs/features/home-hero.png)

- **Artist Biography**:  
Below the hero, a two-column section introduces Gordon. It covers his background, his approach to commissions. This section is aimed at building trust with visitors who have arrived without a personal referral.

    - [Artist bio screenshot](docs/features/artist-bio.png)

- **Size and Pricing Cards**:  
Three cards display the available portrait sizes (A1, A3, A4), each with an example image, a brief description, a starting price, and an enquire button linking to the commission page. The A4 card is marked as most popular. This section lets visitors understand their options and pricing before committing to an enquiry.

    - [Pricing cards screenshot](docs/features/pricing-cards.png)

- **Testimonials Section**: 
Three customer testimonials are displayed against a dark charcoal background, each with a five-star rating, review text, and the customer's name and location. 

    - [Testimonials screenshot](docs/features/testimonials.png)

- **Commission CTA Banner**:  
A full-width dusty rose banner near the bottom of the page prompts visitors to commission a portrait. 

    - [CTA banner screenshot](docs/features/cta-banner.png)


### Portfolio Page
TBD

### Commission Page
TBD

## Current Development
If you would like to see the features to be added in the future visit the Project board: https://github.com/users/Hybrid965/projects/2

## Future Development

## Testing

### Current and Resolved Bugs
1. Home
2. Portfolio 
3. Commission

- 1.1 - **Resolved** - In mobile views you can scroll to the right of the screen
    - Evidence: 🐛 [Bug - 1.1](docs/bugs/bug1.1.png)
    - Resolution: Added - Overflow x to the html and body tags
    - Commit: b4eed54
    - Date reported: 09/04/2026
    - Date fixed: 09/04/2026
- 1.2 - **Resolved** - Fixing previous bug caused the nav bar to become unstuck
    - Evidence: 🐛 [Bug - 1.2](docs/bugs/bug1.2.png)
    - Resolution: Removed overflow from html tag, changed header to position fixed instead of sticky
    - Commit: 6005608
    - Date reported: 09/04/2026
    - Date fixed:09/04/2026
- 1.3 - **Resolved** - Padding of the button is missaligning the rest of the nav bar
    - Evidence: 🐛 [Bug - 1.3](docs/bugs/bug%201.3.png)
    - Resolution: Removed the commission ID for each css sheet and added the hover class to remove the button. 
    - Commit: ff4e0c9
    - Date reported: 13/04/2026
    - Date fixed: 13/04/2026


## Deployment

### How was this site deployed?
This site was deployed to GitHub Pages using the following steps:

1. Navigate to the repository on GitHub
2. Click on the **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under **Source**, select **Deploy from a branch**
5. Under **Branch**, select **main**
6. Click **Save**
7. The site was then published and accessible via the link `https://hybrid965.github.io/loyal-paws-art/`

### How can I clone this repository?
To run this project locally:

1. Navigate to the repository on GitHub
2. Click the green **Code** button
3. Copy the HTTPS URL
4. Open your terminal and run:
```
git clone https://github.com/Hybrid965/loyal-paws-art.git
```

## Credits

### Content
- **Logo**: https://www.flaticon.com/authors/logisstudio
- **Favicon**: https://www.flaticon.com/authors/logisstudio

### Media

### Code
**Intersection Observer API**: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
### Fonts

---