# Loyal Paws Art

## Purpose
Loyal Paws Art is a commission enquiry website created for Gordon Burkert, a local pet portrait artist based in Evesham who works in pastel and pencil. Gordon currently has no online presence and relies entirely on word of mouth to reach new clients, meaning anyone who hasn't heard of him through a personal connection has no way to find him or see his work.

The site gives Gordon a professional platform to showcase his portfolio and receive commission enquiries. It is aimed at three audiences: pet owners wanting a bespoke portrait, people searching for a meaningful and personal gift, and those wanting to commemorate a pet they have lost.

The goal is that a visitor can arrive at the site, browse Gordon's work, understand the process and pricing, and submit an enquiry.

## User Stories
### As a pet owner wanting a commission
- I want to browse examples of the artist's work so that I can decide whether his style suits what I have in mind before making contact.
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
- **Interaction Feedback**: The active page link is highlighted in the navbar. Hover states on links and buttons use a white background to confirm interactivity.
- **User Control**: All interactions are user-initiated. There are no auto-playing elements or unsolicited pop-ups.

### Skeleton Plane
- **Wireframes**: Initial layouts were designed for all pages to plan the placement of headers, images, and navigation menus.
    - 📄 [Home](docs/wireframes/home.png)
    - 📄 [Portfolio](docs/wireframes/portfolio.png)
    - 📄 [Commission](docs/wireframes/commission.png)

- **Navigation Design**: A fixed navigation bar ensures that primary resources are easy to find and accessible across all screen sizes.

### Surface Plane
- **Colour Palette**: The palette has three core tones with a warm accent.
Ivory and dark ivory form the base of the site, keeping it light and uncluttered.
Charcoal provides structure and contrast for text and key UI elements.
The dusty rose runs through the site as a warm accent, used sparingly on interactive elements, hover states and the CTA sections.
The near black is reserved exclusively for the hero background, making the opening section distinct from the rest of the page.

| Colour           | Hex       | Usage                                       |
| ---------------- | --------- | ------------------------------------------- |
| Ivory            | `#FAF7F2` | Main page background                        |
| Dark Ivory       | `#F0EBE3` | Section background (Mediums)                |
| Charcoal Mid     | `#5A5555` | Text colour                                 |
| Charcoal         | `#2C2828` | Section background (Testimonials), Headings |
| Near Black       | `#1A1717` | Hero background                             |
| Dusty Rose Dark  | `#A87878` | Hover states for links                      |
| Dusty Rose       | `#C9A0A0` | Commission CTA banner background            |
| Dusty Rose Light | `#E8D0D0` | Text accents                                |

- **Font**:
    - Cormorant Garamond - used for all display text: headings, the logo, card titles, quotes, prices.
    - Jost - used for all body text: navigation links, labels, buttons, descriptions and form fields.
- **Accessibility & Imagery**: All images include descriptive alt text. Semantic HTML elements are used throughout to provide a clear document structure for screen readers. ARIA labels have been used to further aid screen readers.

## Design Evolution
During the development process, several adjustments were made to the initial designs to improve user experience and accessibility.

### Home
- **User Guidance**: Added a "Most Popular" badge and specific CTA buttons to the pricing cards, adjusted the card descriptions and the amount there are. 

### Portfolio
- **Advanced Viewing**: Implemented a Lightbox overlay to allow users to inspect the fine details of the pastel and pencil portraits.

### Commission
- **Interactive Form**: Integrated Cloudinary API support for multiple photo uploads, providing a more professional and modern interface than the original sketch.

## Features

### Across All Pages

- **Navigation Bar**:
The navigation bar is fixed to the top of the page and remains visible as the user scrolls. It includes the site logo on the left and three page links on the right: Home, Portfolio, and Commission. The active page link is highlighted to show the user where they are. On smaller screens the navbar collapses into a slide-in panel, toggled by a burger button.

    - [Navbar screenshot](docs/features/navbar.png)

- **Footer**:
The footer appears on every page and contains the site logo and tagline, page navigation links, social media links to Instagram and Facebook, and a copyright notice.

    - [Footer screenshot](docs/features/footer.png)

- **Fade-in Animations**:
Key sections and content blocks animate into view as the user scrolls down the page. This is handled using the Intersection Observer API, which applies a `.fadein` class to trigger CSS transitions when elements enter the viewport.

### Home Page

- **Hero Section**:
The hero is the first thing a visitor sees. It features a full-width dark background with a headline, a short description of Gordon's work, and two CTA buttons - one linking to the commission page and one to the portfolio gallery. The contrast between the near-black hero and the rest of the page makes the opening section visually distinct.

    - [Hero screenshot](docs/features/home-hero.png)

- **Artist Biography**:
Below the hero, a two-column section introduces Gordon. It covers his background and his approach to commissions.

    - [Artist bio screenshot](docs/features/artist-bio.png)

- **Size and Pricing Cards**:
Three cards display the available portrait sizes (A5, A4, A3), each with an example image, a brief description, a starting price, and an enquire button linking to the commission page. The A4 card is marked as most popular.

    - [Pricing cards screenshot](docs/features/pricing-cards.png)

- **Testimonials Section**:
Three customer testimonials are displayed against a dark charcoal background, each with a five-star rating, review text, and the customer's name and location.

    - [Testimonials screenshot](docs/features/testimonials.png)

- **Commission CTA Banner**:
A full-width dusty rose banner near the bottom of the page prompts visitors to commission a portrait, with a button linking to the Commission page.

    - [CTA banner screenshot](docs/features/cta-banner.png)

### Portfolio Page

- **Hero Section**:
A full-width hero introduces the page and a brief description of the gallery. It invites visitors to filter by animal type to explore the range of Gordon's work.

    - [Portfolio hero screenshot](docs/features/portfolio-hero.png)

- **Filter Bar**:
Above the gallery grid, a filter bar allows visitors to narrow the displayed portraits by animal type. Filter buttons are provided for All, Dog, Cat, and Horse. A live count updates to reflect the number of portraits currently shown. The active filter button is highlighted to indicate the current selection.

    - [Filter bar screenshot](docs/features/filter-bar.png)

- **Gallery Grid**:
Portrait cards are dynamically rendered from a `portraits.json` data file using the Fetch API. Each card displays the portrait image, the pet's name, and a medium tag indicating whether the piece is a pastel or pencil work. Clicking a card opens the lightbox.

    - [Gallery grid screenshot](docs/features/gallery-grid.png)

- **Lightbox**:
Clicking any gallery card opens a full-screen lightbox overlay. The lightbox displays a larger version of the selected image alongside the pet's name, medium tag, and a short description. It can be closed via the close button, by clicking outside the image, or by pressing the Escape key. Keyboard navigation is supported, and focus is trapped within the lightbox while it is open.

    - [Lightbox screenshot](docs/features/lightbox.png)

- **Commission CTA Banner**:
A CTA section at the bottom of the page mirrors the one on the homepage, prompting visitors who have browsed the gallery to take the next step and commission a portrait.

    - [Portfolio CTA screenshot](docs/features/cta-banner.png)

### Commission Page

- **Hero Section**:
A full-width hero introduces the page and a short description of the process. It sets expectations clearly: fill in the form, and Gordon will be in touch within 48 hours.

    - [Commission hero screenshot](docs/features/commission-hero.png)

- **The Process**:
A four-step process section outlines what happens after an enquiry is submitted. The steps are: Receive a quote, Send an enquiry, Approve & confirm, and Artwork delivered. Each step is displayed in a numbered card with a short description.

    - [Process steps screenshot](docs/features/process-steps.png)

- **Pricing Section**:
Two pricing cards detail the cost and specifications for each medium. The Pastel Portrait starts from £250 and the Pencil Portrait starts from £150, each listing turnaround times, available sizes, and finish details. A note below the cards explains that final pricing depends on size, number of subjects, and background complexity.

    - [Pricing screenshot](docs/features/commission-pricing.png)

- **Commission Enquiry Form**:
The enquiry form collects all the information Gordon needs to respond with a personalised quote. Fields include the customer's name and email address, the pet's name, pet type, preferred medium, preferred size, a free-text description of the portrait, and an optional photo upload supporting multiple images. Required fields are marked and validated before submission. On submission the form is handled via EmailJS, which sends the enquiry directly to Gordon. An error summary is displayed if validation fails.

    - [Enquiry form screenshot](docs/features/commission-form.png)
    - [Failed Validation example](docs/features/form-validation.png)

- **Form Sidebar**:
Alongside the form, an aside panel reassures visitors with three key points: Gordon's 48-hour response time, that a sketch preview is included before the final piece begins, and that memorial commissions for lost pets are handled with sensitivity and care.

    - [Form sidebar screenshot](docs/features/form-sidebar.png)

## Current Development
If you would like to see the features to be added in the future visit the Project board: https://github.com/users/Hybrid965/projects/2

## Future Development
 
- **Lightbox Keyboard Navigation** — Previous and next arrow controls to allow users to cycle through gallery images without closing and reopening the lightbox.
- **Additional Gallery Filters** — Extend the portfolio filter bar to allow filtering by medium (Pastel / Pencil) as well as by animal type, giving visitors more control over what they browse.
- **Expanded Testimonials** — A dedicated reviews page or integration with Google Reviews to surface a broader range of customer feedback as Gordon's client base grows.
- **Blog** — A section showing works in progress and finished pieces before delivery, to build trust with new visitors and give the site regularly updated content.

## Testing
### Testing Approach
 
There are two main approaches to testing a web app: automated and manual.
 
**Automated testing** uses scripts or testing frameworks (such as Jest) to run predefined checks against the code automatically. It is best suited to applications with complex logic, repeated functions, or large codebases where running checks by hand would be time-consuming.
 
**Manual testing** involves a developer or tester interacting directly with the application to check that it behaves as expected. It is better suited to smaller projects where the focus is on layout, visual behaviour, user interaction, and responsiveness. Manual testing also allows for better judgement, such as whether a transition feels smooth or a layout looks correct at a given screen size.
 
For this project, manual testing was chosen as the most appropriate approach. Loyal Paws Art is a three-page static front end site with focused interactivity, a gallery filter, lightbox, and commission form. The behaviour being tested is primarily visual and interaction-based. Each feature was tested systematically across devices and browsers at each stage of development, with results documented below.

### HTML Validation
All three pages were tested using the [W3C Nu HTML Checker](https://validator.w3.org/).

- **index.html** - No errors 
    - [Index validated](docs/testing/index.html-validated.png)
- **portfolio.html** - No errors 
    - [Portfolio validated](docs/testing/portfolio.html-validated.png)
- **commission.html** - No errors 
    - [Commission validated](docs/testing/commission.html-validated.png)

### CSS Validation
CSS was tested using the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
 
- **index-styles.css** - No errors 
    - [Index CSS validated](docs/testing/index-css-validated.png)
- **portfolio.css** - No errors 
    - [Portfolio CSS validated](docs/testing/portfolio-css-validated.png)
- **commission-styles.css** - No errors 
    - [Commission CSS validated](docs/testing/commission-css-validated.png)

### JS Validation
JS was tested using the [JS Lint Validator](https://www.jslint.com/)
- **burger.js** - No errors 
    - [burger js validated](docs/testing/burger-js-validated.png)
- **fadeIn.js** - No errors 
    - [fadeIn JS validated](docs/testing/fadeIn-js-validated.png)
- **filter.js** - No errors 
    - [Filter JS validated](docs/testing/filter-js-validated.png)
- **formValidation.js** - No errors 
    - [Form Validation JS validated](docs/testing/formValidation-js-validated.png)
- **selectedMediumSelector.js** - No errors 
    - [Selected Medium Selector JS validated](docs/testing/selectedMediumSelector-js-validated.png)

### Functional Testing
- Clicking logo in navbar → Navigates to index.html ✅
- Clicking Home nav link → Navigates to index.html ✅
- Clicking Portfolio nav link → Navigates to portfolio.html ✅
- Clicking Commission nav link → Navigates to commission.html ✅
- Active nav link highlighted → Current page link styled differently ✅
- Clicking overlay → Nav panel and overlay close ✅
- Clicking "View Portfolio" CTA → Navigates to portfolio.html ✅
- Clicking "Commission a Portrait" CTA → Navigates to commission.html ✅
- Clicking "Enquire here" on pricing cards → Navigates to commission.html ✅
- Footer navigation links → Each link navigates to the correct page ✅
- Footer Instagram link → Opens Instagram in a new tab ✅
- Footer Facebook link → Opens Facebook in a new tab ✅
- Gallery filter - All → All portrait cards displayed, count updates ✅
- Gallery filter - Dog → Only dog portraits shown, count updates ✅
- Gallery filter - Cat → Only cat portraits shown, count updates ✅
- Gallery filter - Horse → Only horse portraits shown, count updates ✅
- Clicking a gallery card → Lightbox opens with correct image, name and description ✅
- Closing lightbox via close button → Lightbox closes ✅
- Closing lightbox via Escape key → Lightbox closes ✅
- Closing lightbox by clicking outside the image → Lightbox closes ✅
- Submitting form with empty required fields → Validation errors shown in error summary ✅
- Submitting form with invalid email → Validation error shown on email field ✅
- Selecting a medium card → Card highlights and hidden input value updates ✅
- Uploading a photo → File accepted and attached to submission ✅
- Submitting a valid completed form → Enquiry sent via EmailJS, success message shown ✅

### Responsiveness Testing
- **Desktop** - Full navbar visible, images at full size 
    - [Desktop](docs/testing/desktop-test.png) ✅
- **Tablet** - Full navbar visible, images scale correctly 
    - [Tablet](docs/testing/tablet-test.png) ✅
- **Mobile** - Navbar collapses to burger menu, images scale to full width 
    - [Mobile](docs/testing/mobile-test.png) ✅

### Browser Testing
- **Chrome** - Layout, navigation and images all display correctly 
    - [Chrome](docs/testing/desktop-browser-test-chrome.png) ✅
- **Edge** - Layout, navigation and images all display correctly 
    - [Edge](docs/testing/desktop-browser-test-edge.png) ✅
- **Firefox** - Layout, navigation and images all display correctly 
    - [Firefox](docs/testing/desktop-browser-test-firefox.png) ✅

### User Story Validation
 
- "As a pet owner, I want to browse examples of the artist's work" 
    - [Portfolio Gallery](docs/features/gallery-grid.png)
- "As a pet owner, I want to understand the commission process and pricing upfront" 
    - [Process Steps](docs/features/process-steps.png)
- "As a gift buyer, I want to find out how commissioning a portrait works" 
    - [Process Steps](docs/features/process-steps.png)
- "As a gift buyer, I want to see clear pricing so I can decide if it fits my budget" 
    - [Pricing Cards](docs/features/pricing-cards.png)
- "As someone memorialising a pet, I want to feel confident the artist handles this with care" 
    - [Form Sidebar](docs/features/form-sidebar.png)
- "As someone memorialising a pet, I want a straightforward way to submit an enquiry" 
    - [Enquiry Form](docs/features/commission-form.png)
- "As the artist, I want to display my portfolio so clients can find and evaluate my work" 
    - [Portfolio Gallery](docs/features/gallery-grid.png)
- "As the artist, I want to receive structured enquiries with all the information I need" 
    - [Enquiry Form](docs/features/commission-form.png)

## Current and Resolved Bugs
### 1. Home
- **1.1 - Resolved** - In mobile views the page can be scrolled horizontally
    - **Evidence**: 🐛 [Bug - 1.1](docs/bugs/bug1.1.png)
    - **Resolution**: Added `overflow-x: hidden` to the `html` and `body` tags
    - **Commit**: `b4eed54`
    - **Date reported**: 09/04/2026
    - **Date fixed**: 09/04/2026
- **1.2 - Resolved** - Fixing the previous bug caused the navigation bar to become unstuck
    - **Evidence**: 🐛 [Bug - 1.2](docs/bugs/bug1.2.png)
    - **Resolution**: Removed `overflow` from the `html` tag and changed the header to `position: fixed` instead of `sticky`
    - **Commit**: `6005608`
    - **Date reported**: 09/04/2026
    - **Date fixed**: 09/04/2026
- **1.3 - Resolved** - Button padding was misaligning the rest of the navigation bar
    - **Evidence**: 🐛 [Bug - 1.3](docs/bugs/bug%201.3.png)
    - **Resolution**: Removed the commission ID from each CSS sheet and added the hover class to remove the button styling
    - **Commit**: `ff4e0c9`
    - **Date reported**: 13/04/2026
    - **Date fixed**: 13/04/2026
- **1.4 - Resolved** - Linter errors and syntax warnings in burger script
    - **Evidence**: 🐛 [Bug - 1.4](docs/bugs/bug1.4.png)
    - **Resolution**: Changed quotes to double quotes, replaced arrow functions with standard function.
    - **Commit**: `d6f871b`
    - **Date reported**: 21/04/2026
    - **Date fixed**: 21/04/2026
- **1.5 - Resolved** - Invalid syntax in fadein script
    - **Evidence**: 🐛 [Bug - 1.5](docs/bugs/bug1.5.png)
    - **Resolution**: Refactored the `in` operator check to use `undefined` (`window.IntersectionObserver !== undefined`). Changed all internal strings to double quotes.
    - **Commit**: `d6f871b`
    - **Date reported**: 21/04/2026
    - **Date fixed**: 21/04/2026
- **1.6 - Resolved** - HTML validation errors in index.html
    - **Evidence**: 🐛 [Bug - 1.5](docs/bugs/bug1.6.png)
    - **Resolution**: Removed trailing slashes.
    - **Commit**: `3a9c203`
    - **Date reported**: 22/04/2026
    - **Date fixed**: 22/04/2026

## 2. Portfolio
- **2.1 - Resolved** - Lightbox cuts off image due to height restrictions
    - **Evidence**: 🐛 [Bug - 2.1](docs/bugs/bug2.1.png)
    - **Resolution**: Readjusted the height on images inside the lightbox
    - **Commit**: `aee4802`
    - **Date reported**: 21/04/2026
    - **Date fixed**: 21/04/2026
- **2.2 - Resolved** - JSLint errors in filter script
    - **Evidence**: 🐛 [Bug - 2.2](docs/bugs/bug2.2.png)
    - **Resolution**: Converted complex arrow function to normal function. Split up longer lines into multiple lines. Added `/*global console*/` to declare `console` as a known global.
    - **Commit**: `0c69a1f`
    - **Date reported**: 22/04/2026
    - **Date fixed**: 22/04/2026
- **2.3 - Resolved** - HTML validation errors in portfolio.html
    - **Evidence**: 🐛 [Bug - 2.3](docs/bugs/bug2.3.png)
    - **Resolution**: Removed trailing slashes. Replaced empty `src=""` on the lightbox `<img>` with a tranparent placeholder(`data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=`) to satisfy the validator while allowing JavaScript to replace the `src` at runtime when the lightbox opens.
    - **Commit**: `259a934`
    - **Date reported**: 22/04/2026
    - **Date fixed**: 22/04/2026


## 3. Commission
- **3.1 - Resolved** - Form content was misaligned
    - **Evidence**: 🐛 [Bug - 3.1](docs/bugs/bug3.1.png)
    - **Resolution**: Centred the aside and removed padding in the 1000px media query
    - **Commit**: `cfbd707`
    - **Date reported**: 13/04/2026
    - **Date fixed**: 13/04/2026
- **3.2 - Resolved** - Form submission error
    - **Evidence**: 🐛 [Bug - 3.2](docs/bugs/bug3.2.png)
    - **Resolution**: Updated the form validation code, updated the event listener, and added Cloudinary support for file uploads
    - **Commit**: `4071d8d`
    - **Date reported**: 21/04/2026
    - **Date fixed**: 21/04/2026
- **3.3 - Resolved** - Commission form only sending a single image to the artist
    - **Evidence**: 🐛 [Bug - 3.3](docs/bugs/bug3.3.png)
    - **Resolution**: Refactored the form submission logic in `formValidation.js` to support multiple file uploads. Replaced the single-file Cloudinary fetch with a `Promise.all()` loop that iterates through the array. Added logic to join the resulting URLs into a single formatted string (`photoLinkString`).
    - **Commit**: `7ab8a6a`
    - **Date reported**: 21/04/2026
    - **Date fixed**: 21/04/2026
- **3.4 - Resolved** - W3C Validation syntax and accessibility errors
    - **Evidence**: 🐛 [Bug - 3.4](docs/bugs/bug3.4.png.png)
    - **Resolution**: 
        1. Removed trailing slashes from void elements (`link`, `input`).
        2. Maintained the `<section>` element for the commission form to preserve document structure. Resolved the "Section lacks heading" warning by implementing an `aria-label="Commission Enquiry Form"`.
        3. Replaced the `label for` attribute for the medium selector with a `<p>` tag and `aria-labelledby`.
    - **Commit**: `5e91b4c`
    - **Date reported**: 21/04/2026
    - **Date fixed**: 21/04/2026
- **3.5 - Resolved** - JSLint errors in form validation script
    - **Evidence**: 🐛 [Bug - 3.5](docs/bugs/bug3.5.png)
    - **Resolution**: Converted complex arrow functions to normal function. Broke long lines into multiple lines. Added missing semicolons. Converted single quotes to double quotes. Extracted Cloudinary URL into a `const` to reduce line length. Added `/*global console, emailjs, alert*/` to declare globals. Added `/*jslint long*/` to suppress unavoidable line length warning on the Cloudinary URL.
    - **Commit**: `9793a62`
    - **Date reported**: 22/04/2026
    - **Date fixed**: 22/04/2026
- **3.6 - Resolved** - JSLint errors in selected medium script
    - **Evidence**: 🐛 [Bug - 3.6](docs/bugs/bug3.6.png)
    - **Resolution**: Converted all arrow functions to normal functions.
    - **Commit**: `bc92208`
    - **Date reported**: 22/04/2026
    - **Date fixed**: 22/04/2026

## Deployment

### How was this site deployed?
This site was deployed to GitHub Pages using the following steps:

1. Navigate to the repository on GitHub
2. Click on the **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under **Source**, select **Deploy from a branch**
5. Under **Branch**, select **main**
6. Click **Save**
7. The site was then published and is accessible at `https://hybrid965.github.io/loyal-paws-art/`

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
- **Intersection Observer API**: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- **EmailJS**: https://www.emailjs.com - used to handle commission enquiry form submissions

### Fonts
- **Cormorant Garamond & Jost**: https://fonts.google.com

---