FORNO — Complete Website with Digital Menu

📁 Files created:
- `index.html` — Main landing page (hero, about, gallery, testimonials, contact)
- `styles.css` — Main site styling (Cosy Club-inspired design)
- `script.js` — Slider, QR generation, interactions
- `menu.html` — Separate digital menu page with full menu content
- `menu-styles.css` — Menu page styling (matches main site)
- `menu-script.js` — QR modal and interactions for menu page
- `README.md` — This file

🎨 Design
- Inspired by Cosy Club (cosyclub.co.uk): premium, warm, elegant
- Color palette: Gold, olive green, warm brown, cream
- Fonts: Playfair Display (headers), Inter (body)
- Fully responsive for mobile and desktop

📋 Menu Structure
The `menu.html` page includes:
- Wood-Fired Pizzas (5 items)
- Fresh Ciabatta Sandwiches (4 items)
- Traditional Pasta (4 items)
- Drinks (Italian wines, prosecco, sodas, coffee)
- Dolci & Desserts (Tiramisu, Panna Cotta, Gelato)

Each menu item displays:
- Item name
- Price (in JOD)
- Description

🔗 QR Codes
- Main site: QR code links to `menu.html` (the digital menu page)
- Menu page: Separate QR code in a modal, also links to `menu.html` for sharing

🖼️ Images
- `menu.jpg` — displays in hero slider and gallery
- `image1.jpg` — displays in hero slider
- `image2.jpg` — displays in about section and gallery

Images placement for GitHub Pages
- Place your images inside an `images/` folder at the root of this site (next to `index.html`). Example:
	- `images/menu.jpg`
	- `images/image1.jpg`
	- `images/image2.jpg`
  
This ensures the files are included when you push the repository to GitHub and served correctly by GitHub Pages.

Recommended repository structure for GitHub Pages

Place these files and folders at the *root* of your repository (upload the contents of `WebSite1`, not the parent folder):

	/index.html
	/menu.html
	/styles/styles.css
	/styles/menu-styles.css
	/scripts/script.js
	/scripts/menu-script.js
	/images/menu.jpg
	/images/image1.jpg
	/images/image2.jpg

Notes:
- Filenames on GitHub Pages are case-sensitive — make sure `image1.jpg` matches the exact case used in your HTML.
- Keep links relative (e.g. `href="menu.html"`, `src="images/menu.jpg"`) so the site works on Pages.
- After pushing, wait ~10–30 seconds and refresh your Pages URL.

How to View
1. Open `index.html` in your browser to see the main landing page
2. Click "View Menu" or "Scan QR Menu" to go to the digital menu page
3. On the menu page, click the QR button to see and share the QR code

Customization
- Edit menu items in `menu.html` to match your actual offerings
- Update prices and descriptions as needed
- To change QR target, edit `QR_TARGET` in `script.js` (currently: 'menu.html')
- To change colors, edit CSS variables in `:root` in both `styles.css` and `menu-styles.css`
- To add more menu categories, copy a `<section class="menu-category">` block in `menu.html`

Mobile-Friendly
- Both pages are fully responsive
- QR on menu page works great on mobile
- Touch-friendly buttons and links
- Optimized image loading with lazy loading

Next Steps
- Host the site on a web server (so QR codes work with real URLs)
- Replace placeholder contact info with real details
- Update menu items to match your actual offerings
- Add real images if desired (currently using your provided images)
