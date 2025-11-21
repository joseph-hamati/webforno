FORNO Website — Quick Start Guide

🚀 How to Use

1. OPEN THE MAIN SITE
   - Open: index.html in your browser
   - This shows the landing page with hero, about, gallery, testimonials, contact

2. NAVIGATE TO THE MENU
   You can reach the digital menu page in three ways:
   
   A) Click "View Menu" button in hero section
   B) Click "Scan QR Menu" button (shows QR code that links to menu)
   C) Click "View menu" link in the Gallery Featured section (menu card)
   D) Click on the menu image in the Digital Menu section
   E) Scan the QR code from the main page

3. ON THE MENU PAGE
   - Browse all menu items organized by category
   - Each item shows name, price, and description
   - Click "QR" button in header to see a shareable QR code
   - Click "← Back to FORNO" to return to main site

4. QR CODES
   - Main site QR (in Digital Menu section): Links to menu.html
   - Menu page QR (click QR button): Also links to menu.html, easy to share
   - Great for customers to bookmark or share with friends

📱 Mobile Experience
   - Everything is fully responsive
   - Touch-friendly buttons and spacing
   - QR codes work perfectly on mobile devices
   - Menu pages are easy to read on small screens

🎨 Design Features
   - Sticky header with smooth scrolling
   - Hover animations on cards and buttons
   - Smooth QR modal with fade-in effect
   - Professional color palette (gold, olive, brown, cream)
   - Premium typography (Playfair Display + Inter)

📝 Menu Content
   The menu includes sample items for:
   - Wood-Fired Pizzas (Margherita, Prosciutto, 4 Formaggi, etc.)
   - Fresh Ciabatta Sandwiches (Prosciutto & Mozzarella, Eggplant, etc.)
   - Traditional Pasta (Cacio e Pepe, Pappardelle Ragù, etc.)
   - Drinks (Italian wines, Prosecco, sodas, coffee)
   - Desserts (Tiramisu, Panna Cotta, Gelato)

   👉 EDIT THIS: Open menu.html and change items, prices, descriptions to match your real menu

🔧 Customization Tips

   CHANGE MENU ITEMS:
   - Edit menu.html
   - Find a <div class="menu-item"> block
   - Change <h4> for item name, <span class="price"> for price, <p> for description

   CHANGE COLORS:
   - Edit styles.css (main site) or menu-styles.css (menu page)
   - Update :root CSS variables at the top:
     --gold, --olive, --brown, --cream, --accent

   CHANGE RESTAURANT INFO:
   - Edit "Amman, Jordan" in index.html and menu.html
   - Edit "+962 XXX XXX XXX" phone number
   - Edit hours "10:00 AM – 11:00 PM"

   ADD MORE MENU CATEGORIES:
   - In menu.html, copy a <section class="menu-category"> block
   - Paste it before </div> (before the closing container)
   - Change category name and add menu items

🌐 Deploying Online
   When you host the site online:
   1. Upload all files to your web server
   2. The QR codes will work with full URLs
   3. Customers can share links directly
   4. Menu page will be fully accessible

📞 Support Info
   - Images are located in parent folder (menu.jpg, image1.jpg, image2.jpg)
   - All CSS is embedded in dedicated stylesheet files
   - JavaScript is minimal (no dependencies needed)
   - All files use relative paths (easy to move around)

✨ What Makes It Premium
   - Cosy Club-inspired design aesthetic
   - Smooth animations and transitions
   - Professional typography and spacing
   - Responsive grid layouts
   - Elegant color palette
   - QR code integration (modern & convenient)
   - Clean, semantic HTML structure
   - Fast-loading, optimized assets
