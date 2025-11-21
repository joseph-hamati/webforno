/* Menu Page Script  QR generation and interactions */
(function(){
  // Get the current page URL for QR linking
  const MENU_URL = window.location.href; // full URL to menu.html
  const QR_SIZE = 200;

  // Generate QR code image using Google Chart API
  function generateQR(url, size){
    const img = document.createElement('img');
    img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=' + size + 'x' + size + '&data=' + encodeURIComponent(url);
    img.alt = 'QR code for FORNO menu';
    img.width = size;
    img.height = size;
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    img.style.borderRadius = '8px';
    img.loading = 'lazy';
    return img;
  }

  // Initialize QR button & modal behavior
  function initQRButton(){
    const btn = document.getElementById('qr-trigger');
    const modal = document.getElementById('qr-modal');
    const display = document.getElementById('qr-display');
    const closeBtn = modal ? modal.querySelector('.qr-close') : null;

    if(!btn || !modal || !display) return;

    // Generate QR on first open to save resources
    let qrGenerated = false;

    function openModal(){
      // On very small screens, show as full page sheet (CSS handles layout)
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden'; // prevent background scroll
      if(!qrGenerated){
        display.innerHTML = '';
        display.appendChild(generateQR(MENU_URL, QR_SIZE));
        qrGenerated = true;
      }
    }

    function closeModal(){
      modal.style.display = 'none';
      document.body.style.overflow = ''; // restore scrolling
    }

    btn.addEventListener('click', openModal);
    if(closeBtn) closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside content
    modal.addEventListener('click', (e)=>{
      if(e.target === modal) closeModal();
    });

    // Close on ESC
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') closeModal();
    });
  }

  // Smooth scroll for anchor links
  function initSmoothScroll(){
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e)=>{
        const href = anchor.getAttribute('href');
        if(href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth'});
      });
    });
  }

  // Inject year and year-based message
  function initDynamicContent(){
    const year = new Date().getFullYear();
    const yearSpans = document.querySelectorAll('[data-year]');
    yearSpans.forEach(span => span.textContent = year);
  }

  // Reveal menu items with a subtle staggered animation on load
  function revealMenuItems(){
    const items = Array.from(document.querySelectorAll('.menu-items .menu-item'));
    items.forEach((it, i)=>{
      setTimeout(()=>{
        it.classList.add('visible');
      }, i * 80);
    });
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    initQRButton();
    initSmoothScroll();
    initDynamicContent();
    revealMenuItems();
  });
})();


