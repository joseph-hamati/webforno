/* Small site script for FORNO
   - slider (auto-advance)
   - QR generation (Google Chart API quick generator)
   - injects QR into #qr-box and toggles modal on button
   - Config: change QR_TARGET to the hosted URL of your menu (PDF or page)
*/
(function(){
  // Year
  const YEAR = document.getElementById('year');
  if(YEAR) YEAR.textContent = new Date().getFullYear();

  // CONFIG: update this to your hosted menu URL when ready
  const QR_TARGET = 'menu.html'; // link to the digital menu page

  // QR generator using Google Chart API (simple & no dependency)
  function makeQR(url, size=300){
    const img = document.createElement('img');
    const s = Math.max(120, Math.min(size, 600));
    img.src = 'https://chart.googleapis.com/chart?chs=' + s + 'x' + s + '&cht=qr&chl=' + encodeURIComponent(url) + '&chld=L|1';
    img.alt = 'QR code linking to the menu';
    img.width = 120; img.height = 120;
    img.style.display = 'block';
    img.style.width = '100%';
    img.style.height = 'auto';
    img.loading = 'lazy';
    return img;
  }

  // Inject QR into #qr-box
  function injectQR(){
    const box = document.getElementById('qr-box');
    if(!box) return;
    box.innerHTML = '';
    const qrImg = makeQR(QR_TARGET);
    box.appendChild(qrImg);
    // Animate QR appearance
    box.animate([
      {opacity:0,transform:'scale(0.8)'},
      {opacity:1,transform:'scale(1)'}
    ],{duration:600,easing:'ease-out'});
  }

  // Simple slider: cycles slides by toggling aria-hidden
  function initSlider(){
    const slider = document.querySelector('[data-slider]');
    if(!slider) return;
    const slides = Array.from(slider.querySelectorAll('.slide'));
    if(slides.length < 2) return;
    let current = 0;
    slides.forEach((s,i)=> s.setAttribute('aria-hidden', i===current ? 'false' : 'true'));
    setInterval(()=>{
      const prev = current;
      current = (current+1) % slides.length;
      slides[prev].setAttribute('aria-hidden','true');
      slides[current].setAttribute('aria-hidden','false');
    }, 5000);
  }

  // Optional: clicking the menu image opens the full-size menu in a new tab
  function initMenuImageClick(){
    const menuImg = document.querySelector('[data-menu]');
    if(!menuImg) return;
    menuImg.style.cursor = 'pointer';
    menuImg.addEventListener('click', ()=>{
      const link = document.getElementById('menu-full');
      if(link) link.click();
    });
  }

  // Button to open QR area (on small screens)
  function initQRButton(){
    const btn = document.getElementById('open-qr');
    const box = document.getElementById('qr-box');
    if(!btn || !box) return;
    btn.addEventListener('click', ()=>{
      // On small screens, open the QR image in a new tab for easier scanning
      if(window.matchMedia('(max-width:640px)').matches){
        const link = document.getElementById('menu-full');
        if(link) window.open(link.href, '_blank');
        return;
      }
      // On desktop, scroll the QR into view and briefly highlight
      box.scrollIntoView({behavior:'smooth',block:'center'});
      box.animate([
        {boxShadow:'0 8px 22px rgba(0,0,0,0.08)'},
        {boxShadow:'0 18px 48px rgba(0,0,0,0.14)'}
      ],{duration:420,iterations:1,easing:'ease-out'});
    });
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    injectQR();
    initSlider();
    initMenuImageClick();
    initQRButton();
  });
})();
