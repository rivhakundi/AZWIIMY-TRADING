Project Overview
This repository contains the complete website for Azwiimy Trading Enterprise, a small retail business specializing in traditional foods and grains. The website serves as an online presence to expand customer reach, showcase products, and streamline operations while preserving cultural heritage.

Live Demo


Features
Responsive Design: Works seamlessly on desktop, tablet, and mobile devices

Product Showcase: Display of traditional grains (Boyne Roller Mabele) with detailed descriptions

Online Ordering System: Shopping cart functionality with delivery/pickup options

Business Information: Complete details about the company, mission, and values

Contact Form: Easy communication channel for customer enquiries

Interactive Map: Location mapping for the physical store in Tshilamba Mutale

FAQ Section: Answers to common customer questions

Technology Stack
Frontend: HTML5, CSS3

Maps: Leaflet.js (OpenStreetMap)

Hosting: Shared hosting with SSL certificate

Domain: www.azwiimytrading.co.za

Project Structure

azwiimy-website/
├── index.html              # Main homepage file
├── assets/                 # Folder for images and other media
│   ├── images/            # Product photos and logos
│   └── icons/             # Additional icons if needed
├── css/                   # Stylesheets (if separated)
├── js/                    # JavaScript files (if separated)
└── README.md              # This file
Setup Instructions
Local Development
Clone or download this repository

Open index.html in a web browser to view the website locally

For full functionality, deploy to a web server with PHP support for form processing

Web Hosting Deployment
Purchase shared hosting and domain name (www.azwiimytrading.co.za)

Upload all files to your web server via FTP or file manager

Set up SSL certificate for secure connections

Configure email for contact form submissions

WordPress/WooCommerce Migration (Future Phase)
Install WordPress on your hosting account

Install WooCommerce plugin

Migrate design to a WordPress theme

Set up products in WooCommerce

Configure payment gateways

Customization Guide
Updating Business Information
Edit the following sections in index.html:

Company address in Contact section

Phone numbers and email addresses

Business hours

Product prices and descriptions

Adding New Products
Locate the products section in the HTML

Duplicate the product card structure

Update product name, description, price, and icon

Changing Colors and Styling
Modify the CSS variables at the top of the style section:

css
:root {
    --primary: #8B4513;      /* Main brand color */
    --secondary: #D2691E;    /* Secondary color */
    --accent: #CD853F;       /* Accent color */
    --light: #F5DEB3;        /* Light background */
    --dark: #5D4037;         /* Dark text color */
}
Updating the Map Location
Edit the coordinates in the JavaScript section:

javascript
// Coordinates for Tshilamba Mutale (approximate)
const tshilamba = [-22.65, 30.35];
Browser Support
This website supports:

Chrome (latest)

Firefox (latest)

Safari (latest)

Edge (latest)

Mobile browsers (iOS Safari, Chrome Mobile)

Performance Considerations
Images should be optimized for web use

Consider implementing lazy loading for images

Minify CSS and JavaScript for production

SEO Recommendations
Add meta descriptions and title tags

Implement structured data for products

Create XML sitemap

Set up Google Analytics

Register with Google My Business

Maintenance
Regular content updates (monthly)

Browser compatibility checks

Security updates for any backend components

Backup strategy implementation

Contact Information
For questions about this website:

Business: Azwiimy Trading Enterprise

Email: info@azwiimytrading.co.za

Phone: +27 825002833

Location: Tshilamba Mutale 0956, Limpopo Province, South Africa

License
This website design is created for Azwiimy Trading Enterprise. All rights reserved.

Acknowledgments
Icons by Font Awesome

Maps by GoogleMaps

Images from chrome

Inspired by traditional African design elements

