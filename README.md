# Loyal Paws Art

## Live Demo
Click below to see the live site
- https://hybrid965.github.io/loyal-paws-art/

## Purpose

Loyal Paws Art is a commission enquiry website created for Gordon Burkert, a pet portrait artist based in Evesham who works in pastel and pencil.

Before this project, Gordon had no dedicated online presence and relied mainly on word of mouth to reach new clients. This meant that potential customers who had not heard of him through a personal connection had no simple way to find him, view his artwork, understand his prices, or submit a commission enquiry.

The purpose of the website is to give Gordon a professional online platform where visitors can:

- view examples of his pastel and pencil pet portraits
- understand the available sizes, starting prices and commission process
- submit a structured enquiry with the details Gordon needs to provide a personalised response
- upload reference photos to support their commission request

The site is aimed at three main user groups:

- pet owners wanting a bespoke portrait
- gift buyers looking for a meaningful and personal present
- people wanting to commemorate a pet they have lost

The goal is that a visitor can arrive at the site, quickly understand Gordon's work, browse the portfolio, review the pricing and process, and submit an enquiry with confidence.

## User Stories

### As a pet owner wanting a commission

- I want to browse examples of Gordon's pastel and pencil portraits so that I can decide whether his style suits what I have in mind.
- I want to understand the commission process and starting prices upfront so that I know what to expect before making contact.

### As a gift buyer

- I want to understand how commissioning a pet portrait works so that I can confidently order one as a gift.
- I want clear size and pricing information so that I can decide whether a portrait fits my budget before submitting an enquiry.

### As someone memorialising a lost pet

- I want the site to feel warm, respectful and reassuring so that I can trust the artist with a commission that has personal meaning.
- I want a straightforward enquiry form so that I can describe the pet, choose a preferred medium and upload reference photos without the process feeling difficult.

### As the artist

- I want to display my portfolio online so that potential clients can find and evaluate my work without needing a personal referral.
- I want to receive structured commission enquiries so that I have the key information I need before responding to a client.

## UX Design

### Strategy Plane

- **Target Audience**: Pet owners, gift buyers, people memorialising a lost pet, and the artist receiving enquiries.
- **User Needs**: Visitors need to see the artist's style clearly, understand the available pastel and pencil commission options, view pricing information, and submit an enquiry easily.
- **Project Rationale**: The project gives Gordon a professional online presence that replaces reliance on word-of-mouth discovery. The site is centred around three clear user journeys: browse the artwork, understand the commission options, and submit an enquiry.

### Scope Plane

The project was designed as a focused front end website rather than a full e-commerce platform.

#### Project Requirements

- A responsive multi-page website.
- Clear navigation between Home, Portfolio and Commission pages.
- A portfolio gallery showing Gordon's pet portrait work.
- A commission enquiry form with validation.
- JavaScript interactivity to improve usability.
- A custom 404 page to guide users back to the main site.
- Deployment to GitHub Pages.

#### Content Requirements

- Artist introduction.
- Pastel and pencil artwork examples.
- Size and pricing information.
- Testimonials.
- Commission process guidance.
- Enquiry form with photo upload support.

#### Out of Scope

The following features were considered out of scope for this version:

- online payment
- user accounts
- e-commerce checkout
- booking calendar
- blog/news section
- customer dashboard

The site is intentionally focused on showcasing Gordon's work and capturing commission enquiries rather than completing transactions online.

### Structure Plane

The information architecture was planned so that users can make a decision in a natural order:

1. See what the artist offers.
2. Learn who the artist is.
3. View portrait sizes and starting prices.
4. Browse examples of completed artwork.
5. Understand the commission process.
6. Submit an enquiry.

The homepage introduces the artist and directs users towards either the portfolio or the commission page. The portfolio page focuses on browsing artwork, while the commission page focuses on the process, pricing and enquiry form.

#### Information Hierarchy

- The homepage begins with a strong hero section and clear calls to action.
- The artist biography builds trust early in the page.
- Pricing cards provide quick comparison between available sizes.
- Testimonials provide social proof.
- Portfolio content is separated onto its own page to keep browsing focused.
- The commission page groups process, pricing and form content together so users can act once they are ready.

#### Interaction Feedback

- The active navigation link shows the current page.
- Buttons and links include hover states.
- The mobile navigation opens and closes through a burger menu.
- Gallery filters visually indicate the selected filter.
- The gallery count updates when filters are applied.
- The lightbox confirms which portrait has been selected.
- Form validation displays feedback if required fields are missing or invalid.
- Successful form submission gives the user a confirmation message.
- Failed uploads or submission errors are reported to the user.

#### User Control

All main interactions are user-initiated. The site does not use autoplay media, aggressive pop-ups or unexpected overlays. Users choose when to open the mobile menu, filter the gallery, open a portrait in the lightbox, upload images or submit the form.

The 404 page includes both an automatic redirect and a manual button, giving users control if they do not want to wait for the countdown.

### Skeleton Plane

Wireframes were created in Balsamiq before development to plan the placement of navigation, page sections, images, text and interactive features.

- [Home Wireframe](docs/wireframes/home.png)  
  The homepage wireframe planned a hero-first layout with a headline and dual calls to action, followed by an artist biography section, size and pricing cards, testimonials, and a final commission call-to-action banner.

- [Portfolio Wireframe](docs/wireframes/portfolio.png)  
  The portfolio wireframe planned a gallery page with a hero section, filter controls, portrait count, image grid, and a commission call-to-action banner.

- [Commission Wireframe](docs/wireframes/commission.png)  
  The commission wireframe planned a page with a hero, a numbered process section, pricing information and a structured enquiry form.

During development, the original wireframes were followed closely, but some changes were made to improve usability and better match the final project requirements.

### Surface Plane

The visual design was created to feel warm, calm and personal while still looking professional. This suited the subject matter because pet portraits are often emotional purchases, especially when they are bought as memorial pieces or meaningful gifts.

#### Colour Palette

| Colour | Hex | Usage |
| --- | --- | --- |
| Ivory | `#FAF7F2` | Main page background |
| Dark Ivory | `#F0EBE3` | Section background |
| Charcoal Mid | `#5A5555` | Body text |
| Charcoal | `#2C2828` | Headings and dark sections |
| Near Black | `#1A1717` | Hero and footer background |
| Dusty Rose Dark | `#A87878` | Hover states and accents |
| Dusty Rose | `#C9A0A0` | CTA banner background |
| Dusty Rose Light | `#E8D0D0` | Text accents |

The ivory background keeps the site soft and uncluttered. Charcoal gives the site strong readability and structure. Dusty rose is used as a warm accent for calls to action and interactive elements.

#### Typography

- **Cormorant Garamond** is used for display text, including headings, logo text, card titles, testimonial quotes and prices.
- **Jost** is used for body content, navigation, buttons, labels, descriptions and form fields.

This pairing gives the site an elegant, handmade feel while keeping body text readable.

#### Accessibility and Imagery

- Semantic HTML is used throughout the project.
- Images include descriptive alt text.
- ARIA labels are used where they improve clarity for assistive technologies.
- Form fields use labels and validation feedback.
- Colour contrast was considered when combining text and backgrounds.
- The site avoids automatic audio, video or disruptive pop-ups.
- The lightbox can be closed with the Escape key as well as through visible controls.

## Design Evolution

Several changes were made during development to improve usability, accessibility and the quality of the final product.

### Home Page

- Added clearer calls to action to direct users towards either the portfolio or the commission page.
- Added pricing cards based on size so users can quickly understand the available portrait options.
- Added a "Most Popular" badge to guide users towards a common choice.
- Refined the homepage content so that it consistently refers to Gordon's work as pastel and pencil pet portraits.

### Portfolio Page

- Added a lightbox overlay so users can inspect the detail of Gordon's portrait work more closely.
- Changed the filter approach from medium-based filtering to animal-type filtering. This better supports users who want to find examples similar to their own pet.
- Built the gallery dynamically from `portraits.json` using the Fetch API. This makes the portfolio easier to maintain because new portraits can be added to the data file rather than hardcoded into the HTML.

### Commission Page

- Replaced the original photo description field with a multiple image upload input.
- Added Cloudinary support so users can upload reference photos as part of their enquiry.
- Added validation and error feedback to prevent incomplete or invalid submissions.
- Added supporting information beside the form to reassure users about response times, sketch previews and sensitive memorial commissions.

### 404 Page

- Added a custom 404 page for users who navigate to a non-existent URL.
- Added a countdown timer using `setInterval`.
- Added a manual "Back to Home" button.
- Redirects users back to the homepage without requiring browser navigation buttons.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Fetch API
- Intersection Observer API
- EmailJS
- Cloudinary
- Balsamiq
- Git and GitHub
- GitHub Pages

## Asynchronous JavaScript

This project uses asynchronous JavaScript in two main areas.

### Portfolio Gallery

The portfolio gallery uses the Fetch API to request portrait data from `portraits.json`. The gallery is only rendered after the data has been retrieved successfully.

If the fetch request fails, the error is handled so that the user is not left with a broken interface.

### Commission Form

The commission form allows users to upload multiple reference photos. Each selected image is uploaded to Cloudinary independently.

`Promise.all()` is used to wait until all image uploads have completed before the form data is passed to EmailJS. This prevents the enquiry email from being sent before the uploaded image URLs are ready.

If a Cloudinary upload fails, the error is caught and the user is notified before the enquiry is submitted. This prevents incomplete enquiries from being sent to the artist.

## Features

### Across All Pages

#### Navigation Bar

The navigation bar is fixed to the top of the page and remains visible as the user scrolls. It includes the site logo and links to Home, Portfolio and Commission.

The current page is highlighted so users know where they are. On smaller screens, the navigation collapses into a burger menu.

- [Navbar screenshot](docs/features/navbar.png)

#### Footer

The footer appears on every page and includes the site logo, tagline, navigation links, social links and copyright information.

- [Footer screenshot](docs/features/footer.png)

#### Fade-in Animations

Key sections animate into view as the user scrolls. This is handled using the Intersection Observer API, which adds a `.fadein` class when elements enter the viewport.

### Home Page

#### Hero Section

The hero section introduces Loyal Paws Art and explains that Gordon creates pastel and pencil pet portraits. It includes two calls to action: one to begin a commission enquiry and one to view the portfolio.

- [Hero screenshot](docs/features/home-hero.png)

#### Artist Biography

The biography section introduces Gordon and explains his approach to creating personal pet portraits.

- [Artist bio screenshot](docs/features/artist-bio.png)

#### Size and Pricing Cards

Three cards display the available portrait sizes, starting prices and enquiry buttons. The A4 option is highlighted as the most popular choice.

- [Pricing cards screenshot](docs/features/pricing-cards.png)

#### Testimonials

The testimonials section uses customer quotes to build trust and show that previous clients have been happy with Gordon's work.

- [Testimonials screenshot](docs/features/testimonials.png)

#### Commission CTA Banner

A full-width call-to-action banner encourages users to move from browsing to submitting an enquiry.

- [CTA banner screenshot](docs/features/cta-banner.png)

### Portfolio Page

#### Hero Section

The portfolio hero introduces the gallery and encourages users to browse examples of Gordon's completed pastel and pencil portraits.

- [Portfolio hero screenshot](docs/features/portfolio-hero.png)

#### Filter Bar

The filter bar lets users filter portraits by animal type. Filters include:

- All
- Dog
- Cat
- Horse

A live count updates to show how many portraits are currently displayed.

- [Filter bar screenshot](docs/features/filter-bar.png)

#### Gallery Grid

The gallery grid is rendered dynamically from `portraits.json`. Each portrait card displays the pet's name, image and medium tag.

- [Gallery grid screenshot](docs/features/gallery-grid.png)

#### Lightbox

Clicking a portrait opens a larger view in a lightbox. The lightbox displays the selected portrait, pet name, medium and description.

The lightbox can be closed by:

- clicking the close button
- clicking outside the image area
- pressing the Escape key

Keyboard focus is managed while the lightbox is open.

- [Lightbox screenshot](docs/features/lightbox.png)

#### Portfolio CTA Banner

A call-to-action banner encourages users who have viewed the gallery to commission their own portrait.

- [Portfolio CTA screenshot](docs/features/cta-banner.png)

### Commission Page

#### Hero Section

The commission hero introduces the enquiry page and sets the expectation that users can submit their details and receive a response from Gordon.

- [Commission hero screenshot](docs/features/commission-hero.png)

#### Commission Process

The process section explains the steps involved in commissioning a portrait. This helps users understand what will happen after they make an enquiry.

- [Process steps screenshot](docs/features/process-steps.png)

#### Pricing Section

The pricing section explains the two available portrait mediums:

- **Pastel Portraits** starting from £250
- **Pencil Portraits** starting from £150

Each card includes turnaround time, available sizes and finish details. A note explains that final pricing may depend on size, number of subjects and background complexity.

- [Pricing screenshot](docs/features/commission-pricing.png)

#### Commission Enquiry Form

The enquiry form collects the details Gordon needs to provide a personalised response.

Fields include:

- customer name
- email address
- pet name
- pet type
- preferred medium
- preferred size
- portrait description
- optional reference photo uploads

Required fields are validated before submission. If validation fails, the user is shown an error summary. If the submission succeeds, the user receives confirmation.

The form uses EmailJS to send the enquiry and Cloudinary to handle uploaded reference photos.

- [Enquiry form screenshot](docs/features/commission-form.png)
- [Failed validation example](docs/features/form-validation.png)

#### Form Sidebar

The sidebar provides reassurance around response times, sketch previews and memorial commissions.

- [Form sidebar screenshot](docs/features/form-sidebar.png)

### 404 Page

A custom 404 page is shown when a user navigates to a non-existent URL. The page includes a countdown timer and redirects the user to the homepage after 10 seconds.

A "Back to Home" button is also provided.

- [404 screenshot](docs/features/404.png)

## Current Development

Future feature planning is tracked using the GitHub project board:

https://github.com/users/Hybrid965/projects/2

## Future Development

- **Lightbox Previous and Next Controls**  
  Add arrow controls so users can move through gallery images without closing the lightbox.

- **Additional Gallery Filters**  
  Add medium-based filtering so users can filter by Pastel and Pencil as well as by animal type.

- **Expanded Testimonials**  
  Add a dedicated reviews page or integrate external reviews as Gordon's client base grows.

- **Blog or Work-in-Progress Section**  
  Add a section for progress updates, finished portraits and behind-the-scenes content.

- **Online Payments**  
  Consider adding payment functionality in a future version if Gordon wants the site to move beyond enquiry capture.

## Testing

### Testing Approach

There are two main approaches to testing a web application: automated testing and manual testing.

**Automated testing** uses scripts or testing frameworks to run predefined checks against code automatically. It is useful for applications with complex logic, repeated functions or large codebases where manual checks would be time-consuming.

**Manual testing** involves a developer or tester interacting directly with the application to check that it behaves as expected. It is useful for projects where the focus is on layout, visual behaviour, user journeys and responsiveness.

For this project, manual testing was chosen as the most appropriate approach because Loyal Paws Art is a focused front end website with visual and interaction-based features, including navigation, filtering, a lightbox and a form.

A small amount of automated testing was completed to enforce that the users stories have been achieved.

Validation tools and Lighthouse were also used to check code quality, accessibility and performance.

## Automated Testing

Automated browser testing was added using [Playwright](https://playwright.dev/) to provide repeatable regression testing for the website's main features and user journeys.

The tests run against a locally hosted version of the website using Chromium. This helps confirm that the pages, JavaScript functionality, accessibility controls and form validation continue to work after future changes.

### Automated Test Coverage

| Test | Expected result | Result |
|---|---|---|
| Homepage loading | The homepage loads and displays the main heading | Pass |
| Portfolio navigation | The homepage portfolio CTA opens the portfolio page | Pass |
| Portfolio JSON loading | Portrait cards are loaded from the JSON file | Pass |
| Portfolio filtering | Selecting the Dog filter displays only dog portraits | Pass |
| Portfolio lightbox | Clicking a portrait opens the lightbox | Pass |
| Lightbox keyboard control | Pressing `Escape` closes the lightbox | Pass |
| Empty form validation | Submitting an empty commission form displays validation errors | Pass |
| Medium keyboard selection | Arrow keys switch between Pastel and Pencil | Pass |
| Medium form value | The hidden medium input updates when the selected medium changes | Pass |
| File type validation | Files other than JPG, PNG and WebP are rejected | Pass |
| File quantity validation | Uploading more than five photographs is rejected | Pass |
| File size validation | Photographs larger than 10MB are rejected | Pass |
| Custom 404 page | The page-not-found message and countdown are displayed | Pass |
| 404 redirect | The user is redirected safely back to the website homepage | Pass |

### Running the Tests

Node.js and npm must be installed before running the automated tests.

Install the project dependencies:

```bash
npm install
```

Install the Chromium browser used by Playwright:

```bash
npx playwright install chromium
```

Run all automated tests:

```bash
npm test
```

### Test Files

The automated tests are separated by page and functionality:

```text
tests/
├── 404.spec.js
├── commission.spec.js
├── home.spec.js
└── portfolio.spec.js
```

The Playwright configuration is stored in:

```text
playwright.config.js
```

The npm dependencies and test commands are stored in:

```text
package.json
```

### Test Outcome

All Playwright tests passed successfully.

The automated tests confirm that the website's key user journeys remain functional, including:

- Navigation
- Portfolio rendering
- Portfolio filtering
- Lightbox interaction
- Keyboard accessibility
- Form validation
- Upload validation
- Custom 404 redirection

The automated tests do not send genuine EmailJS enquiries or upload files to Cloudinary. These external integrations were tested separately through manual functional testing.

### Automated Test Evidence

The screenshot below shows the successful Playwright test run.

[Automated test results](docs/testing/automated-testing.png)

## Manual Testing
### HTML Validation

All HTML pages were tested using the W3C Nu HTML Checker.

- **index.html** - No errors  
  [Index validated](docs/testing/index.html-validated.png)

- **portfolio.html** - No errors  
  [Portfolio validated](docs/testing/portfolio.html-validated.png)

- **commission.html** - No errors  
  [Commission validated](docs/testing/commission.html-validated.png)

### CSS Validation

CSS files were tested using the W3C CSS Validator.

- **index-styles.css** - No errors  
  [Index CSS validated](docs/testing/styles.css-validated.png)

- **portfolio.css** - No errors  
  [Portfolio CSS validated](docs/testing/portfolio.css-validated.png)

- **commission-styles.css** - No errors  
  [Commission CSS validated](docs/testing/commission-styles.css-validated.png)

### JavaScript Validation

JavaScript files were tested using JSLint.

- **burger.js** - No errors  
  [Burger JS validated](docs/testing/burger-js-validated.png)

- **fadeIn.js** - No errors  
  [FadeIn JS validated](docs/testing/fadein-js-validated.png)

- **filter.js** - No errors  
  [Filter JS validated](docs/testing/filter-js-validated.png)

- **formValidation.js** - No errors  
  [Form validation JS validated](docs/testing/formvalidation-js-validated.png)

- **selectedMediumSelector.js** - No errors  
  [Selected medium selector JS validated](docs/testing/selectedmediumselector-js-validated.png)

- **redirect.js** - No errors  
  [Redirect JS validated](docs/testing/redirect-js-validated.png)

### Lighthouse Testing

Each page was audited using Chrome DevTools Lighthouse in an incognito window to avoid interference from extensions. Audits were run in desktop mode.

#### index.html

- Performance: 94
- Accessibility: 93
- Best Practices: 96
- SEO: 91

[Lighthouse score](docs/testing/lighthouse-index.png)

#### portfolio.html

- Performance: 81
- Accessibility: 93
- Best Practices: 100
- SEO: 91

[Lighthouse score](docs/testing/lighthouse-portfolio.png)

#### commission.html

- Performance: 99
- Accessibility: 97
- Best Practices: 100
- SEO: 91

[Lighthouse score](docs/testing/lighthouse-commission.png)

#### 404.html

- Performance: 100
- Accessibility: 87
- Best Practices: 100
- SEO: 91

[Lighthouse score](docs/testing/lighthouse-404.png)

### Functional Testing

| Test | Expected Result | Result |
| --- | --- | --- |
| Click logo in navbar | Navigates to `index.html` | Pass |
| Click Home link | Navigates to `index.html` | Pass |
| Click Portfolio link | Navigates to `portfolio.html` | Pass |
| Click Commission link | Navigates to `commission.html` | Pass |
| Active nav link displays | Current page is highlighted | Pass |
| Open burger menu | Mobile nav panel opens | Pass |
| Close burger menu | Mobile nav panel closes | Pass |
| Click overlay | Nav panel and overlay close | Pass |
| Click "View Portfolio" CTA | Navigates to portfolio page | Pass |
| Click "Commission a Portrait" CTA | Navigates to commission page | Pass |
| Click pricing card enquiry button | Navigates to commission page | Pass |
| Footer internal links | Navigate to correct pages | Pass |
| Footer social links | Open in a new tab | Pass |
| Gallery filter: All | All portraits display and count updates | Pass |
| Gallery filter: Dog | Dog portraits display and count updates | Pass |
| Gallery filter: Cat | Cat portraits display and count updates | Pass |
| Gallery filter: Horse | Horse portraits display and count updates | Pass |
| Click gallery card | Lightbox opens with correct portrait data | Pass |
| Close lightbox button | Lightbox closes | Pass |
| Press Escape in lightbox | Lightbox closes | Pass |
| Click outside lightbox image | Lightbox closes | Pass |
| Submit empty form | Error summary is displayed | Pass |
| Submit invalid email | Email validation error is displayed | Pass |
| Select medium card | Card highlights and hidden input updates | Pass |
| Upload photo | File is accepted and included in submission | Pass |
| Submit valid form | Enquiry sends through EmailJS and success message displays | Pass |
| Navigate to non-existent URL | 404 page displays with countdown and redirect | Pass |
| Use browser back/forward buttons | Site remains functional | Pass |
| Trigger EmailJS failure | User is shown an error message | Pass |
| Trigger Cloudinary failure | Error is caught and user is notified | Pass |
| Check console after user actions | No internal errors are generated | Pass |

### Responsiveness Testing

| Device Size | Expected Result | Result |
| --- | --- | --- |
| Desktop | Full navbar visible, content aligned, images display at full size | Pass |
| Tablet | Layout adapts correctly and images scale | Pass |
| Mobile | Navbar collapses to burger menu and content stacks vertically | Pass |

Evidence:

- [Desktop test](docs/testing/desktop-test.png)
- [Tablet test](docs/testing/tablet-test.png)
- [Mobile test](docs/testing/mobile-test.png)

### Browser Testing

| Browser | Expected Result | Result |
| --- | --- | --- |
| Chrome | Layout, navigation and images display correctly | Pass |
| Edge | Layout, navigation and images display correctly | Pass |
| Firefox | Layout, navigation and images display correctly | Pass |

Evidence:

- [Chrome test](docs/testing/desktop-test.png)
- [Edge test](docs/testing/desktop-browser-test-edge.png)
- [Firefox test](docs/testing/desktop-browser-test-firefox.png)

### User Story Validation

| User Story | Evidence |
| --- | --- |
| As a pet owner, I want to browse examples of the artist's work. | [Portfolio Gallery](docs/features/gallery-grid.png) |
| As a pet owner, I want to understand the commission process and pricing upfront. | [Process Steps](docs/features/process-steps.png) |
| As a gift buyer, I want to understand how commissioning a portrait works. | [Process Steps](docs/features/process-steps.png) |
| As a gift buyer, I want clear pricing before getting in touch. | [Pricing Cards](docs/features/pricing-cards.png) |
| As someone memorialising a pet, I want to feel confident the artist handles this with care. | [Form Sidebar](docs/features/form-sidebar.png) |
| As someone memorialising a pet, I want a straightforward way to submit an enquiry. | [Enquiry Form](docs/features/commission-form.png) |
| As the artist, I want to display my portfolio online. | [Portfolio Gallery](docs/features/gallery-grid.png) |
| As the artist, I want to receive structured enquiries. | [Enquiry Form](docs/features/commission-form.png) |

## Current and Resolved Bugs

### 1. Home Page

#### 1.1 - Resolved

- **Bug**: In mobile views, the page could be scrolled horizontally.
- **Evidence**: [Bug 1.1](docs/bugs/bug1.1.png)
- **Resolution**: Added `overflow-x: hidden` to the `html` and `body` tags.
- **Commit**: `b4eed54`
- **Date Reported**: 09/04/2026
- **Date Fixed**: 09/04/2026

#### 1.2 - Resolved

- **Bug**: Fixing the previous bug caused the navigation bar to stop sticking to the top of the page.
- **Evidence**: [Bug 1.2](docs/bugs/bug1.2.png)
- **Resolution**: Removed `overflow` from the `html` tag and changed the header to `position: fixed`.
- **Commit**: `6005608`
- **Date Reported**: 09/04/2026
- **Date Fixed**: 09/04/2026

#### 1.3 - Resolved

- **Bug**: Button padding misaligned the navigation bar.
- **Evidence**: [Bug 1.3](docs/bugs/bug1.3.png)
- **Resolution**: Removed the commission ID from each CSS sheet and added the hover class to remove the conflicting button styling.
- **Commit**: `ff4e0c9`
- **Date Reported**: 13/04/2026
- **Date Fixed**: 13/04/2026

#### 1.4 - Resolved

- **Bug**: Linter errors and syntax warnings in the burger menu script.
- **Evidence**: [Bug 1.4](docs/bugs/bug1.4.png)
- **Resolution**: Changed quotes to double quotes and replaced arrow functions with standard functions.
- **Commit**: `d6f871b`
- **Date Reported**: 21/04/2026
- **Date Fixed**: 21/04/2026

#### 1.5 - Resolved

- **Bug**: Invalid syntax in the fade-in script.
- **Evidence**: [Bug 1.5](docs/bugs/bug1.5.png)
- **Resolution**: Refactored the Intersection Observer check and standardised internal strings.
- **Commit**: `d6f871b`
- **Date Reported**: 21/04/2026
- **Date Fixed**: 21/04/2026

#### 1.6 - Resolved

- **Bug**: HTML validation errors in `index.html`.
- **Evidence**: [Bug 1.6](docs/bugs/bug1.6.png)
- **Resolution**: Removed trailing slashes from void elements.
- **Commit**: `3a9c203`
- **Date Reported**: 22/04/2026
- **Date Fixed**: 22/04/2026

#### 1.7 - Resolved

- **Bug**: CSS validation errors in `styles.css`.
- **Evidence**: [Bug 1.7](docs/bugs/bug1.7.png)
- **Resolution**: Removed an unused width rule from `.reviewer`.
- **Commit**: `f20fcd3`
- **Date Reported**: 23/04/2026
- **Date Fixed**: 23/04/2026

#### 1.8 - Resolved

- **Bug**: Burger menu links overflowed onto the page.
- **Evidence**: [Bug 1.8](docs/bugs/bug1.8.png)
- **Resolution**: Adjusted the `navlinks a` width rule to stop the overflow.
- **Commit**: `1138d28`
- **Date Reported**: 04/05/2026
- **Date Fixed**: 05/05/2026

### 2. Portfolio Page

#### 2.1 - Resolved

- **Bug**: The lightbox image was cut off due to height restrictions.
- **Evidence**: [Bug 2.1](docs/bugs/bug2.1.png)
- **Resolution**: Adjusted the height rules for images inside the lightbox.
- **Commit**: `aee4802`
- **Date Reported**: 21/04/2026
- **Date Fixed**: 21/04/2026

#### 2.2 - Resolved

- **Bug**: JSLint errors in the filter script.
- **Evidence**: [Bug 2.2](docs/bugs/bug2.2.png)
- **Resolution**: Converted arrow functions to standard functions, split long lines, and declared `console` as a known global.
- **Commit**: `0c69a1f`
- **Date Reported**: 22/04/2026
- **Date Fixed**: 22/04/2026

#### 2.3 - Resolved

- **Bug**: HTML validation errors in `portfolio.html`.
- **Evidence**: [Bug 2.3](docs/bugs/bug2.3.png)
- **Resolution**: Removed trailing slashes and replaced the empty lightbox image `src` with a transparent placeholder so JavaScript could update it when the lightbox opens.
- **Commit**: `259a934`
- **Date Reported**: 22/04/2026
- **Date Fixed**: 22/04/2026

### 3. Commission Page

#### 3.1 - Resolved

- **Bug**: Form content was misaligned.
- **Evidence**: [Bug 3.1](docs/bugs/bug3.1.png)
- **Resolution**: Centred the aside and removed padding in the 1000px media query.
- **Commit**: `cfbd707`
- **Date Reported**: 13/04/2026
- **Date Fixed**: 13/04/2026

#### 3.2 - Resolved

- **Bug**: Form submission error.
- **Evidence**: [Bug 3.2](docs/bugs/bug3.2.png)
- **Resolution**: Updated the form validation code, updated the event listener, and added Cloudinary support for file uploads.
- **Commit**: `4071d8d`
- **Date Reported**: 21/04/2026
- **Date Fixed**: 21/04/2026

#### 3.3 - Resolved

- **Bug**: The commission form only sent a single image to the artist.
- **Evidence**: [Bug 3.3](docs/bugs/bug3.3.png)
- **Resolution**: Refactored the form submission logic in `formValidation.js` to support multiple file uploads. Replaced the single-file Cloudinary fetch with a `Promise.all()` loop and joined the returned URLs into one formatted string.
- **Commit**: `7ab8a6a`
- **Date Reported**: 21/04/2026
- **Date Fixed**: 21/04/2026

#### 3.4 - Resolved

- **Bug**: W3C validation and accessibility errors.
- **Evidence**: [Bug 3.4](docs/bugs/bug3.4.png)
- **Resolution**: Removed trailing slashes from void elements, preserved the section element for document structure, added `aria-label="Commission Enquiry Form"`, and replaced the medium selector label structure with `aria-labelledby`.
- **Commit**: `5e91b4c`
- **Date Reported**: 21/04/2026
- **Date Fixed**: 21/04/2026

#### 3.5 - Resolved

- **Bug**: JSLint errors in the form validation script.
- **Evidence**: [Bug 3.5](docs/bugs/bug3.5.png)
- **Resolution**: Converted arrow functions to standard functions, broke long lines into multiple lines, added missing semicolons, standardised quotes, and declared required globals.
- **Commit**: `9793a62`
- **Date Reported**: 22/04/2026
- **Date Fixed**: 22/04/2026

#### 3.6 - Resolved

- **Bug**: JSLint errors in the selected medium script.
- **Evidence**: [Bug 3.6](docs/bugs/bug3.6.png)
- **Resolution**: Converted arrow functions to standard functions.
- **Commit**: `bc92208`
- **Date Reported**: 22/04/2026
- **Date Fixed**: 22/04/2026

### Known Bugs

There are no known bugs remaining in the project at the time of submission.

## Deployment

### How the Site Was Deployed

This site was deployed to GitHub Pages using the following steps:

1. Navigate to the repository on GitHub.
2. Click the **Settings** tab.
3. In the left sidebar, click **Pages**.
4. Under **Source**, select **Deploy from a branch**.
5. Under **Branch**, select `main`.
6. Click **Save**.
7. GitHub Pages builds and publishes the site.

The deployed site is available at:

```text
https://hybrid965.github.io/loyal-paws-art/
```

### How to Clone the Repository

To run the project locally:

1. Navigate to the repository on GitHub.
2. Click the green **Code** button.
3. Copy the HTTPS URL.
4. Open a terminal.
5. Run:

```bash
git clone https://github.com/Hybrid965/loyal-paws-art.git
```

### 404 Page Deployment

A custom `404.html` file is included in the root of the repository. GitHub Pages serves this page automatically when a user navigates to a non-existent URL.

The page includes a countdown timer and redirects the user to the homepage after 10 seconds.

## Version Control

Git and GitHub were used throughout the project.

Commits were made at the completion of individual features and fixes so that the development process could be followed clearly. Commit messages were written descriptively to explain the purpose of each change.

Examples of version-controlled work include:

- initial page structure
- responsive navigation
- homepage styling
- portfolio gallery
- gallery filtering
- lightbox functionality
- commission form validation
- Cloudinary upload support
- EmailJS submission handling
- 404 page redirect
- validation fixes
- bug fixes

This supports a clear development history and helps demonstrate how the final application was built over time.

## Credits

### Content

- **Logo**: https://www.flaticon.com/authors/logisstudio
- **Favicon**: https://www.flaticon.com/authors/logisstudio

### Media

All portrait photography and artwork displayed in the gallery is the original work of Gordon Burkert and is used with his permission.

### Code and Services

- **Intersection Observer API**: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API  
  Used to trigger fade-in animations as elements enter the viewport.

- **EmailJS**: https://www.emailjs.com  
  Used to send commission enquiry form submissions directly to the artist.

- **Cloudinary**: https://cloudinary.com  
  Used to handle uploaded reference photos before passing image URLs to EmailJS.

All external dependencies are attributed through the README and comments in the relevant source files.

### Fonts

- **Cormorant Garamond**: https://fonts.google.com
- **Jost**: https://fonts.google.com

### Tools

- **Balsamiq**: https://balsamiq.com  
  Used to create wireframes during the design phase.

