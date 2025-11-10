# Empowering Indigenous & Local Languages

Website for the Namibian National Action Plan for International Decade of Indigenous Languages (NNAP-IDIL).

## Getting Started

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm start
```

The website will be available at `http://localhost:3000`

### Development Mode (with auto-reload)

```bash
npm run dev
```

## Project Structure

```
├── index.html              # Main homepage
├── css/                    # Stylesheets
│   ├── styles.css         # Main stylesheet
│   ├── languages.css      # Languages page styles
│   ├── policies.css       # Policies page styles
│   └── statements.css     # Statements page styles
├── js/                     # JavaScript files
│   └── script.js          # Main JavaScript functionality
├── images/                 # Image assets
│   ├── InternationalIDILLogoTransparent.png
│   ├── marula-tree.png
│   ├── ministry.png
│   ├── Map.jpg
│   ├── Ouma2.jpg
│   ├── People.jpg
│   └── ... (other images)
├── pages/                  # Additional pages
│   ├── languages.html     # Languages page
│   ├── policies.html      # Policies page
│   └── statements.html    # Statements page
├── server.js              # Express server
├── package.json           # Node.js dependencies
└── README.md              # This file
```

## Features

- Modern, responsive design
- Smooth animations and transitions
- Fixed navigation with dropdown menus
- Interactive slideshow on homepage
- Embedded YouTube videos
- Mobile-friendly layout
- Organized folder structure

## Pages

- **Home** (`index.html`) - Main landing page with slideshow
- **Languages** (`pages/languages.html`) - Information about Namibian languages
- **Policies** (`pages/policies.html`) - Policy documents and articles
- **Statements** (`pages/statements.html`) - Video statements and ministry information

## Deployment

To deploy this website, you can use platforms like:
- Heroku
- Vercel
- Netlify
- Railway
- DigitalOcean

Make sure to set the PORT environment variable if required by your hosting platform.

## Development

The website uses:
- HTML5
- CSS3 with animations
- Vanilla JavaScript
- Node.js/Express for local development server
