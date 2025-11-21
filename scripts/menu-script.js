/* Menu Page Script — QR generation and interactions */
(function(){
  // Get the current page URL for QR linking
  const MENU_URL = window.location.href; // full URL to menu.html
  const QR_SIZE = 250;

  // Generate QR code image using Google Chart API
  function generateQR(url, size){
    const img = document.createElement('img');
    img.src = 'https://chart.googleapis.com/chart?chs=' + size + 'x' + size + '&cht=qr&chl=' + encodeURIComponent(url) + '&chld=L|1';
    img.alt = 'QR code for FORNO menu';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    img.loading = 'lazy';
    return img;
  }

  // Initialize QR button
  function initQRButton(){
    const btn = document.getElementById('qr-trigger');
    const modal = document.getElementById('qr-modal');
    const display = document.getElementById('qr-display');

    if(!btn || !modal || !display) return;

    // Generate QR on first click to save resources
    let qrGenerated = false;

    btn.addEventListener('click', ()=>{
      modal.style.display = 'flex';
      if(!qrGenerated){
        display.innerHTML = '';
        display.appendChild(generateQR(MENU_URL, QR_SIZE));
        qrGenerated = true;
      }
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e)=>{
      if(e.target === modal) modal.style.display = 'none';
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

  // FORNO Digital Menu — QR Modal Logic

  document.getElementById('qr-trigger').onclick = function() {
    var modal = document.getElementById('qr-modal');
    modal.style.display = 'flex';
    var qrDisplay = document.getElementById('qr-display');
    var url = window.location.href;
    var qrUrl = 'https://chart.googleapis.com/chart?cht=qr&chs=180x180&chl=' + encodeURIComponent(url);
    qrDisplay.innerHTML = '<img src="' + qrUrl + '" alt="QR code for this menu" style="width:180px;height:180px;border-radius:12px;box-shadow:0 2px 8px rgba(75,58,47,0.10);">';
  };

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      var modal = document.getElementById('qr-modal');
      if (modal && modal.style.display !== 'none') {
        modal.style.display = 'none';
      }
    }
  });

  document.addEventListener('DOMContentLoaded', ()=>{
    initQRButton();
    initSmoothScroll();
    initDynamicContent();
  });
})();
