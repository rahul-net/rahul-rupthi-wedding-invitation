// @ts-nocheck
// Original JavaScript logic from the single-file website, migrated to TypeScript
// with behaviour preserved exactly. Functions used by the original inline
// onclick handlers are exposed on window by initInvitation().
declare const gsap: any;

export function initInvitation(): void {
  if ((window as any).__invitationInitialized) return;
  (window as any).__invitationInitialized = true;

  // Gallery consumer (added 2026-10-25): the hidden admin panel writes
  // gallery.json to rahul-net/Wedding-Invitation. Load it here, in place,
  // so this converted site shows the same admin gallery as the single-file
  // site. Any failure keeps the built-in 3 images. CORS: GitHub Pages
  // serves Access-Control-Allow-Origin: *.
  (async function loadRemoteGallery() {
    try {
      const res = await fetch('https://rahul-net.github.io/Wedding-Invitation/gallery.json?t=' + Date.now(), { cache: 'no-store' });
      if (!res.ok) return;
      const data = await res.json();
      const imgs = (data && data.images) || [];
      const slides = document.querySelectorAll('.slide img');
      for (let i = 0; i < slides.length && i < imgs.length; i++) {
        if (imgs[i] && imgs[i].url) (slides[i] as HTMLImageElement).src = imgs[i].url;
      }
    } catch (e) { /* offline / no gallery.json: keep defaults */ }
  })();

        const audio = document.getElementById('bgMusic');
        const VISITOR_LOG_URL =
"https://script.google.com/macros/s/AKfycbzY-Cqgksve3QyLf8qiJwOtS_3KDgSLpGrZUGIBlJzRQT6YFX3yfCiZ5eecQ0ykYepY/exec";
        const apiKey = ""; // API Key handled by environment

        let snowStarted = false;
        
       function typeStoryText() {
    const target =
        document.getElementById("storyText");

    if (!target) return;

    if (target.dataset.started === "true") return;

    target.dataset.started = "true";

    const text =
        "আমাদের পরিচয়ের সেই সুন্দর দিনটি আজ এক নতুন অধ্যায়ে পদার্পণ করছে। আমাদের এই পথচলায় আপনার আশীর্বাদ ও উপস্থিতি কামনা করি।";

    let index = 0;

    function type() {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;
            setTimeout(type, 55);
        }
    }

    type();
}

function typeBlessingText() {
    const target =
        document.getElementById("blessingText");

    if (!target) return;

    if (target.dataset.started === "true") return;

    target.dataset.started = "true";

    const text =
        "Your presence is the greatest gift. Blessings are more than enough ❤️";

    let index = 0;

    function type() {
        if (index < text.length) {
            target.textContent += text.charAt(index);
            index++;
            setTimeout(type, 45);
        }
    }

    type();
}

function openInvite() {

    const intro = document.getElementById('entrance');

    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";

        document.getElementById('main-content').style.display = 'block';
        document.getElementById('musicBtn').style.display = 'flex';

        gsap.to('#main-content', { opacity: 1, duration: 1.2 });

        audio.play().catch(() => {});
        initScratch();
        initSlides();
        startCountdown();
        logVisitor();

        // 👇 এইটাই missing ছিল
        if (!snowStarted) {
            setInterval(createSnow, 700);
            snowStarted = true;
        }

    }, 800);
}

        function toggleMusic() {
            if(audio.paused) { audio.play(); document.getElementById('musicBtn').innerText = "🔊"; }
            else { audio.pause(); document.getElementById('musicBtn').innerText = "🔇"; }
        }

        function startCountdown() {
            const weddingDate = new Date("July 06, 2026 00:00:00").getTime();
            setInterval(() => {
                const now = new Date().getTime();
                const diff = weddingDate - now;
                document.getElementById('days').innerText = String(Math.floor(diff / (1000*60*60*24))).padStart(2, '0');
                document.getElementById('hours').innerText = String(Math.floor((diff % (1000*60*60*24)) / (1000*60*60))).padStart(2, '0');
                document.getElementById('mins').innerText = String(Math.floor((diff % (1000*60*60)) / (1000*60))).padStart(2, '0');
                document.getElementById('secs').innerText = String(Math.floor((diff % (1000*60)) / 1000)).padStart(2, '0');
            }, 1000);
        }

        function initScratch() {
            const canvas = document.getElementById('scratch-canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 300; canvas.height = 160;
            ctx.fillStyle = '#c5a059';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#0b1a15';
            ctx.font = 'bold 12px Montserrat';
            ctx.textAlign = 'center';
            ctx.fillText('SCRATCH TO REVEAL', 150, 85);

            let isDrawing = false;
            let scratchedCount = 0;

            const handleScratch = (x, y) => {

    /* Hide finger guide after first scratch */
    const guide =
    document.querySelector(".scratch-guide");

    if(guide){
        guide.style.opacity = "0";
        guide.style.transition = "0.4s ease";

        setTimeout(() => {
            guide.style.display = "none";
        }, 400);
    }

    ctx.globalCompositeOperation =
    'destination-out';

    ctx.beginPath();

    ctx.arc(x, y, 25, 0, Math.PI * 2);

    ctx.fill();

    scratchedCount++;

    if(scratchedCount > 60){
        showModal();
    }
};

            const getPos = (e) => {
                const rect = canvas.getBoundingClientRect();
                const cx = (e.touches ? e.touches[0].clientX : e.clientX);
                const cy = (e.touches ? e.touches[0].clientY : e.clientY);
                return { x: cx - rect.left, y: cy - rect.top };
            };

            canvas.addEventListener('mousedown', () => isDrawing = true);
            canvas.addEventListener('touchstart', (e) => { isDrawing = true; e.preventDefault(); }, {passive: false});
            window.addEventListener('mouseup', () => isDrawing = false);
            window.addEventListener('touchend', () => isDrawing = false);
            canvas.addEventListener('mousemove', (e) => { if(isDrawing) handleScratch(getPos(e).x, getPos(e).y); });
            canvas.addEventListener('touchmove', (e) => { if(isDrawing) { e.preventDefault(); handleScratch(getPos(e).x, getPos(e).y); } }, {passive: false});
        }

        function initSlides() {
            const slides = document.querySelectorAll('.slide');
            let current = 0;
            setInterval(() => {
                slides[current].classList.remove('active');
                current = (current + 1) % slides.length;
                slides[current].classList.add('active');
            }, 3500);
        }

        // --- AI Wish Logic ---
        async function generateAIWish() {
            const topic = document.getElementById('aiInput').value || "beautiful";
            const btn = document.getElementById('aiBtn');
            btn.innerText = "Writing..."; btn.disabled = true;
            try {
                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: `Write a very short, warm wedding wish for Rahul and Rupthi. Theme: ${topic}. Max 15 words.` }] }]
                    })
                });
                const data = await response.json();
                const wish = data.candidates?.[0]?.content?.parts?.[0]?.text;
                if(wish) document.getElementById('guestMsg').value = wish.trim();
            } catch (err) { alert("AI Wish generator is currently sleeping. Write something from heart!"); }
            finally { btn.innerText = "Generate Wedding Wish"; btn.disabled = false; }
        }

        // --- WhatsApp Logic ---
        function sendToWhatsApp() {
            const name = document.getElementById('guestName').value;
            const status = document.getElementById('guestStatus').value;
            const target = document.getElementById('waTarget').value;
            const msg = document.getElementById('guestMsg').value;
            const phone = target === 'groom' ? '2482591997' : '8801825178887';
            
            if(!name) return alert("অনুগ্রহ করে আপনার নাম লিখুন");
            
            const fullText = `Wedding RSVP\nName: ${name}\nStatus: ${status}\nMessage: ${msg}`;
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(fullText)}`, '_blank');
        }

        function showModal() {
            const m = document.getElementById('msg-modal');
            if(m.dataset.shown) return;
            m.style.display = 'block';
            gsap.to(m, { opacity: 1, scale: 1, duration: 0.5 });
            m.dataset.shown = "true";
        }
        function closeModal() { gsap.to('#msg-modal', { opacity: 0, scale: 0.8, onComplete: () => document.getElementById('msg-modal').style.display='none' }); }
        
        let visitStartTime = Date.now();
let maxScrollDepth = 0;
let clickEvents = [];

function trackClick(name) {
    if (!clickEvents.includes(name)) {
        clickEvents.push(name);
    }
}

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    if (docHeight > 0) {
        const percent =
            Math.round((scrollTop / docHeight) * 100);

        if (percent > maxScrollDepth) {
            maxScrollDepth = percent;
        }
    }
    
    const story =
    document.getElementById("story");

if (story) {
    const rect = story.getBoundingClientRect();

    if (rect.top < window.innerHeight - 120) {
        typeStoryText();
    }
}

const blessings =
    document.getElementById("blessings");

if (blessings) {
    const rect =
        blessings.getBoundingClientRect();

    if (rect.top < window.innerHeight - 120) {
        typeBlessingText();
    }
}

});

async function sendVisitorLog(sessionEnded = "No") {
    try {
        const ua = navigator.userAgent;

        let browser = "Unknown";
        let os = "Unknown";

        if (ua.includes("Chrome")) browser = "Chrome";
        else if (ua.includes("Firefox")) browser = "Firefox";
        else if (ua.includes("Safari")) browser = "Safari";

        if (ua.includes("Android")) os = "Android";
        else if (ua.includes("iPhone")) os = "iPhone";
        else if (ua.includes("Windows")) os = "Windows";
        else if (ua.includes("Mac")) os = "Mac";

        const ipRes =
            await fetch("https://api.ipify.org?format=json");

        const ipData =
            await ipRes.json();

        const totalSeconds =
            Math.floor((Date.now() - visitStartTime) / 1000);

        const minutes =
            Math.floor(totalSeconds / 60);

        const seconds =
            totalSeconds % 60;

        const timeSpent =
            minutes + "m " + seconds + "s";

        await fetch(VISITOR_LOG_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "text/plain"
            },
            body: JSON.stringify({
                ip: ipData.ip,
                timeSpent: timeSpent,
                scrollDepth: maxScrollDepth + "%",
                browser: browser,
                os: os,
                device: ua,
                resolution:
                    screen.width + "x" + screen.height,
                language:
                    navigator.language,
                timezone:
                    Intl.DateTimeFormat()
                        .resolvedOptions()
                        .timeZone,
                referrer:
                    document.referrer || "Direct",
                url:
                    location.href,
                touch:
                    ('ontouchstart' in window)
                        ? "Yes"
                        : "No",
                clickEvents:
                    clickEvents.join(", "),
                sessionEnd:
                    sessionEnded
            })
        });

    } catch (e) {
        console.log(e);
    }
}

function logVisitor() {
    sendVisitorLog("No");
}

window.addEventListener("pagehide", function () {
    sendVisitorLog("Yes");
});
        
        function createSnow() {
    const petal = document.createElement("div");

    petal.classList.add("petal");

    const petals = ["🌸", "🌺"];

    petal.innerText =
        petals[Math.floor(Math.random() * petals.length)];

    petal.style.left =
        Math.random() * window.innerWidth + "px";

    const size =
        Math.random() * 10 + 10;

    petal.style.fontSize =
        size + "px";

    const duration =
        Math.random() * 6 + 8;

    petal.style.animation =
        `fall ${duration}s linear forwards`;

    petal.style.opacity =
        Math.random() * 0.5 + 0.5;

    const bottomArea = document.querySelector(".bottom-petals");

if (bottomArea && window.scrollY > 2500) {
    bottomArea.appendChild(petal);
} else {
    document.getElementById("main-content").appendChild(petal);
}

setTimeout(() => {
    petal.remove();
}, duration * 1000);
}

        
        // Disable right click
document.addEventListener("contextmenu", e => e.preventDefault());

// Disable copy
document.addEventListener("copy", e => e.preventDefault());

// Disable cut
document.addEventListener("cut", e => e.preventDefault());

// Disable select (extra safety)
document.addEventListener("selectstart", e => e.preventDefault());

// Disable common devtools shortcuts
document.addEventListener("keydown", function(e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I","J","C"].includes(e.key)) ||
        (e.ctrlKey && e.key === "U")
    ) {
        e.preventDefault();
    }
});
        window.addEventListener("scroll", () => {

    /* Top Button */
    document.getElementById("topBtn").style.display =
    window.scrollY > 200 ? "block" : "none";

    /* Share Button */
    const shareBox =
    document.querySelector(".share-floating");

    const scrollTop =
    window.pageYOffset;

    const viewportHeight =
    window.innerHeight;

    const fullHeight =
    document.documentElement.scrollHeight;

    if(scrollTop + viewportHeight >= fullHeight - 250){

        shareBox.classList.add("show-share");

    }else{

        shareBox.classList.remove("show-share");
    }

});

function scrollToTop() {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
}
        function openLuxuryMenu(){
    document
    .getElementById("luxuryPopup")
    .classList.add("active");

    document.body.style.overflow = "hidden";
}

function closeLuxuryMenu(){
    document
    .getElementById("luxuryPopup")
    .classList.remove("active");

    document.body.style.overflow = "auto";
}
        function copyInviteLink(){

    navigator.clipboard.writeText(
    "https://rahul-net.github.io/rahul-rupthi-wedding-invitation/"
    );

        }
        async function uploadGuestPhotos() {
    const input = document.getElementById("guestPhotos");
    const status = document.getElementById("uploadStatus");

    if (!input.files.length) {
        status.innerText = "Please select photos first.";
        return;
    }

    status.innerText = "Preparing upload...";

    const files = Array.from(input.files);

    for (const file of files) {
        if (!file.type.startsWith("image/")) {
            status.innerText = "Only image files allowed.";
            return;
        }

        if (file.size > 25 * 1024 * 1024) {
    status.innerText = "Each image must be below 25MB.";
    return;
}
    }

    try {
        for (let i = 0; i < files.length; i++) {
            status.innerText = `Optimizing & uploading ${i + 1} of ${files.length}...`;

            const file = files[i];

            const optimizedFile = await compressImage(file);
const base64 = await toBase64(optimizedFile);

            await fetch("https://script.google.com/macros/s/AKfycbybIHFolkAUsydnObTyU6j5KBpfzIHIdfMfz6Wj1fBCJpCfpffyEXloi6nNLHvvv_tbPQ/exec", {
                method: "POST",
                body: JSON.stringify({
                    name: file.name,
                    mimeType: file.type,
                    data: base64
                })
            });
        }

        status.innerText = "Upload successful ❤️";
        input.value = "";

    } catch (e) {
        status.innerText = "Upload failed. Try again.";
        console.error(e);
    }
}

async function compressImage(file) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const reader = new FileReader();

        reader.onload = function(e) {
            img.src = e.target.result;
        };

        reader.onerror = reject;

        img.onload = function() {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            let width = img.width;
            let height = img.height;

            const maxWidth = 1600;

            if (width > maxWidth) {
                height = height * (maxWidth / width);
                width = maxWidth;
            }

            canvas.width = width;
            canvas.height = height;

            ctx.drawImage(img, 0, 0, width, height);

            canvas.toBlob(
                (blob) => {
                    resolve(blob);
                },
                file.type.includes("png") ? "image/png" : "image/jpeg",
0.8
            );
        };

        img.onerror = reject;

        reader.readAsDataURL(file);
    });
}

function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
            resolve(reader.result.split(",")[1]);
        };

        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
        
    
// ===== Hidden Gallery Admin (added 2026-10-25) =====
// Gallery data lives in the PUBLIC repo rahul-net/Wedding-Invitation:
//   gallery.json  -> https://rahul-net.github.io/Wedding-Invitation/gallery.json
//   gallery/gallery-1.jpg etc. -> same Pages base.
// Visitors (website, converted React site and this APK when online) fetch
// gallery.json and fall back to the 3 built-in images if the fetch fails.
// The admin's GitHub token is stored ONLY in this browser/device's
// localStorage (key below). It is never written into the page source,
// never into gallery.json, and never sent anywhere except api.github.com.
// A simple password in HTML could not update the site for everyone, and
// anyone reading the source could see it, so the token route is used.
(function () {
  'use strict';
  var OWNER = 'rahul-net';
  var REPO = 'Wedding-Invitation';
  var BRANCH = 'main';
  var PAGES_BASE = 'https://rahul-net.github.io/Wedding-Invitation/';
  var GALLERY_URL = PAGES_BASE + 'gallery.json';
  var TOKEN_KEY = 'wedding_admin_gh_token';
  var API = 'https://api.github.com/repos/' + OWNER + '/' + REPO + '/contents/';
  var OUT_W = 800, OUT_H = 1000; // 4:5, the locked gallery ratio

  var DEFAULTS = [
    'https://images.unsplash.com/photo-1777554800812-3dff04d85db0?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1777554972735-c23d34f58a81?auto=format&fit=crop&w=800&q=80',
    'CP1.jpg'
  ];

  function $(id) { return document.getElementById(id); }
  function getToken() { try { return localStorage.getItem(TOKEN_KEY) || ''; } catch (e) { return ''; } }
  function setToken(t) { try { localStorage.setItem(TOKEN_KEY, t); } catch (e) {} }
  function clearToken() { try { localStorage.removeItem(TOKEN_KEY); } catch (e) {} }

  // ----- Visitor gallery: update the 3 existing slide <img> in place -----
  // In-place update keeps the original slideshow timer (which captured the
  // original slide nodes) working. No slide is ever rebuilt here.
  async function loadRemoteGallery() {
    try {
      var res = await fetch(GALLERY_URL + '?t=' + Date.now(), { cache: 'no-store' });
      if (!res.ok) return;
      var data = await res.json();
      var imgs = (data && data.images) || [];
      var slides = document.querySelectorAll('.slide img');
      for (var i = 0; i < slides.length && i < imgs.length; i++) {
        if (imgs[i] && imgs[i].url) slides[i].src = imgs[i].url;
      }
    } catch (e) { /* offline / no gallery.json yet: keep built-in images */ }
  }

  // ----- Login: PIN gate, then token (one-time setup) -----
  // The PIN itself is NOT stored in this code, only its SHA-256 hash.
  // A 4-digit PIN is a convenience gate, not strong security: the real
  // protection is the GitHub token, which lives only on the admin device.
  // A visitor without that token cannot upload, even if they open the panel.
  var PIN_HASH = '0985b889a1fe4f4e1fb925061ac6fb2247f10875f5fcbe63eec2ab55ed68970e';
  var pinVerified = false;
  async function sha256Hex(str) {
    var buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.prototype.map.call(new Uint8Array(buf), function (b) { return ('00' + b.toString(16)).slice(-2); }).join('');
  }
  function openAdminLogin() {
    pinVerified = false;
    $('admin-pin').value = '';
    $('admin-token-wrap').style.display = 'none';
    $('admin-login-status').textContent = getToken()
      ? 'Saved token found on this device. Enter your PIN to continue.'
      : 'Enter your PIN. No token is saved yet, so the token field will appear once after the PIN.';
    $('admin-login-modal').style.display = 'block';
  }
  function closeAdminLogin() { $('admin-login-modal').style.display = 'none'; pinVerified = false; }

  async function gh(path, method, body) {
    var token = getToken();
    var opts = {
      method: method || 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    };
    if (body) { opts.headers['Content-Type'] = 'application/json'; opts.body = JSON.stringify(body); }
    return fetch(API + path, opts);
  }
  async function ghJson(path) {
    var res = await gh(path);
    if (res.status === 404) return null;
    if (!res.ok) throw new Error('GitHub error ' + res.status);
    return res.json();
  }
  function decodeContent(item) {
    if (!item || !item.content) return null;
    try { return JSON.parse(atob(item.content.replace(/\n/g, ''))); } catch (e) { return null; }
  }
  function encodeContent(obj) {
    var s = JSON.stringify(obj, null, 2) + '\n';
    return btoa(unescape(encodeURIComponent(s)));
  }
  function blobToBase64(blob) {
    return new Promise(function (resolve, reject) {
      var r = new FileReader();
      r.onload = function () { resolve(r.result.split(',')[1]); };
      r.onerror = reject;
      r.readAsDataURL(blob);
    });
  }

  var gallerySha = null;
  var currentGallery = null;

  async function connectAdmin() {
    var status = $('admin-login-status');
    // Step 1: PIN gate. Step 2 (only if no token is saved yet): token setup.
    if (!pinVerified) {
      var pin = $('admin-pin').value.trim();
      if (!pin) { status.textContent = 'Please enter your PIN.'; return; }
      try {
        if (await sha256Hex(pin) !== PIN_HASH) { status.textContent = 'Wrong PIN.'; return; }
      } catch (e) { status.textContent = 'PIN check needs a secure page. Please open the site over https.'; return; }
      pinVerified = true;
      if (getToken()) {
        // Token already on this device: PIN alone is enough from here.
      } else {
        $('admin-token-wrap').style.display = 'block';
        status.textContent = 'PIN correct. Paste your GitHub token once, then tap Continue again.';
        return;
      }
    }
    var token = getToken() || $('admin-token').value.trim();
    if (!token) { status.textContent = 'Please paste a GitHub token first.'; return; }
    setToken(token);
    status.textContent = 'Checking token…';
    try {
      var me = await fetch('https://api.github.com/user', {
        headers: { 'Authorization': 'Bearer ' + token, 'Accept': 'application/vnd.github+json' }
      });
      if (!me.ok) throw new Error('Token rejected (HTTP ' + me.status + '). Check the token and its Contents permission.');
      var user = await me.json();
      var item = await ghJson('gallery.json');
      if (item) { gallerySha = item.sha; currentGallery = decodeContent(item); }
      if (!currentGallery || !currentGallery.images) {
        currentGallery = { images: DEFAULTS.map(function (u, i) {
          return { url: u.indexOf('http') === 0 ? u : PAGES_BASE + u, mode: 'default', slot: i + 1 };
        })};
      }
      status.textContent = 'Connected as @' + (user.login || 'admin') + '.';
      closeAdminLogin();
      renderAdminPanel();
      $('admin-panel-modal').style.display = 'block';
    } catch (e) {
      status.textContent = 'Failed: ' + e.message + ' Paste a new token below and tap Continue again.';
      $('admin-token-wrap').style.display = 'block';
      $('admin-token').value = '';
    }
  }
  function logoutAdmin() {
    clearToken();
    $('admin-panel-modal').style.display = 'none';
    $('admin-login-status').textContent = 'Token removed from this device.';
  }

  // ----- Crop editor state: one editor object per slot -----
  var editors = [null, null, null];
  function makeEditor(slotIndex) {
    return {
      slot: slotIndex, img: null, imgUrl: '', mode: 'full', zoom: 1,
      dx: 0, dy: 0, dragging: false, startX: 0, startY: 0, startDx: 0, startDy: 0
    };
  }
  function editorEls(i) {
    return {
      preview: $('admin-crop-' + i), img: $('admin-crop-img-' + i),
      zoom: $('admin-zoom-' + i), status: $('admin-slot-status-' + i)
    };
  }
  function drawPreview(ed) {
    var els = editorEls(ed.slot);
    if (!ed.img) { els.img.style.display = 'none'; return; }
    els.img.style.display = 'block';
    if (ed.mode === 'full') {
      // Full photo, no cut: blurred same-photo background + contained photo.
      els.preview.style.backgroundImage = 'url(' + ed.imgUrl + ')';
      els.preview.style.backgroundSize = 'cover';
      els.preview.style.backgroundPosition = 'center';
      els.preview.style.filter = '';
      els.img.style.objectFit = 'contain';
      els.img.style.transform = 'none';
      els.img.style.width = '100%';
      els.img.style.height = '100%';
      els.img.style.filter = 'none';
    } else {
      els.preview.style.backgroundImage = 'none';
      els.img.style.objectFit = 'cover';
      els.img.style.width = '100%';
      els.img.style.height = '100%';
      els.img.style.transform = 'translate(' + ed.dx + 'px,' + ed.dy + 'px) scale(' + ed.zoom + ')';
    }
    // Blur is applied to a separate background layer via CSS class on preview
    els.preview.classList.toggle('admin-full-bg', ed.mode === 'full');
  }
  function setEditorImage(ed, imgEl, url) {
    ed.img = imgEl; ed.imgUrl = url; ed.zoom = 1; ed.dx = 0; ed.dy = 0;
    drawPreview(ed);
    maybeCenterOnFace(ed);
  }
  async function maybeCenterOnFace(ed) {
    // Best effort only: Chrome's FaceDetector, when available, centres the
    // crop on the first detected face. Any failure silently keeps centre.
    try {
      if (!window.FaceDetector || !ed.img) return;
      var det = new FaceDetector({ fastMode: true });
      var faces = await det.detect(ed.img);
      if (faces && faces.length && faces[0].boundingBox) {
        var b = faces[0].boundingBox;
        var fx = (b.x + b.width / 2) / ed.img.naturalWidth;
        var fy = (b.y + b.height / 2) / ed.img.naturalHeight;
        var els = editorEls(ed.slot);
        var rect = els.preview.getBoundingClientRect();
        // In fill mode the image is cover-scaled; shift so the face lands
        // near the centre of the frame. Clamped in renderCanvas anyway.
        ed.dx = Math.round((0.5 - fx) * rect.width * 0.6);
        ed.dy = Math.round((0.5 - fy) * rect.height * 0.6);
        drawPreview(ed);
      }
    } catch (e) {}
  }
  function renderCanvas(ed) {
    return new Promise(function (resolve, reject) {
      if (!ed.img) return reject(new Error('No image chosen for this slot.'));
      var c = document.createElement('canvas');
      c.width = OUT_W; c.height = OUT_H;
      var ctx = c.getContext('2d');
      var iw = ed.img.naturalWidth, ih = ed.img.naturalHeight;
      if (ed.mode === 'full') {
        // Blurred cover background, then the whole photo contained on top.
        // Nothing is cut: face and body always stay inside the frame.
        ctx.filter = 'blur(24px) brightness(0.75)';
        var bs = Math.max(OUT_W / iw, OUT_H / ih);
        ctx.drawImage(ed.img, (OUT_W - iw * bs) / 2, (OUT_H - ih * bs) / 2, iw * bs, ih * bs);
        ctx.filter = 'none';
        var cs = Math.min(OUT_W / iw, OUT_H / ih);
        ctx.drawImage(ed.img, (OUT_W - iw * cs) / 2, (OUT_H - ih * cs) / 2, iw * cs, ih * cs);
      } else {
        // Fill mode: preview transform, converted back to a source crop.
        // Preview container is 4:5, so the same math as the live gallery.
        var els = editorEls(ed.slot);
        var rect = els.preview.getBoundingClientRect();
        var pw = rect.width || 300, ph = rect.height || 375;
        var base = Math.max(pw / iw, ph / ih);
        var scale = base * ed.zoom;
        var cropW = pw / scale, cropH = ph / scale;
        var cx = (iw - cropW) / 2 - ed.dx / scale;
        var cy = (ih - cropH) / 2 - ed.dy / scale;
        cx = Math.max(0, Math.min(iw - cropW, cx));
        cy = Math.max(0, Math.min(ih - cropH, cy));
        ctx.drawImage(ed.img, cx, cy, cropW, cropH, 0, 0, OUT_W, OUT_H);
      }
      c.toBlob(function (b) { b ? resolve(b) : reject(new Error('Could not render image.')); }, 'image/jpeg', 0.85);
    });
  }

  function renderAdminPanel() {
    var wrap = $('admin-slots');
    wrap.innerHTML = '';
    for (var i = 0; i < 3; i++) {
      if (!editors[i]) editors[i] = makeEditor(i);
      var ed = editors[i];
      var cur = (currentGallery.images[i] && currentGallery.images[i].url) || DEFAULTS[i];
      var div = document.createElement('div');
      div.className = 'admin-slot';
      div.innerHTML =
        '<p class="admin-slot-title">Gallery photo ' + (i + 1) + '</p>' +
        '<p class="admin-slot-current">Current: <a href="' + cur + '" target="_blank" rel="noopener">view current</a></p>' +
        '<div class="admin-crop" id="admin-crop-' + i + '">' +
          '<img id="admin-crop-img-' + i + '" alt="Crop preview ' + (i + 1) + '">' +
        '</div>' +
        '<input type="file" accept="image/*" class="admin-file" id="admin-file-' + i + '">' +
        '<input type="text" placeholder="Or paste an image URL" class="admin-url" id="admin-url-' + i + '">' +
        '<label class="admin-label">Mode: ' +
          '<select id="admin-mode-' + i + '">' +
            '<option value="full">Full photo, no cut (blurred background)</option>' +
            '<option value="fill">Fill frame, drag to position</option>' +
          '</select></label>' +
        '<label class="admin-label">Zoom (fill mode): ' +
          '<input type="range" min="1" max="2.5" step="0.05" value="1" id="admin-zoom-' + i + '"></label>' +
        '<button class="admin-save-btn" id="admin-save-' + i + '">Save this photo for everyone</button>' +
        '<button class="admin-reset-btn" id="admin-reset-' + i + '">Back to original photo</button>' +
        '<p class="admin-slot-status" id="admin-slot-status-' + i + '"></p>';
      wrap.appendChild(div);
      (function (ed2, idx) {
        var els = editorEls(idx);
        // Drag to position (fill mode). Touch uses pointer events.
        els.preview.addEventListener('pointerdown', function (ev) {
          if (ed2.mode !== 'fill' || !ed2.img) return;
          ed2.dragging = true; ed2.startX = ev.clientX; ed2.startY = ev.clientY;
          ed2.startDx = ed2.dx; ed2.startDy = ed2.dy;
          els.preview.setPointerCapture(ev.pointerId);
        });
        els.preview.addEventListener('pointermove', function (ev) {
          if (!ed2.dragging) return;
          ed2.dx = ed2.startDx + (ev.clientX - ed2.startX);
          ed2.dy = ed2.startDy + (ev.clientY - ed2.startY);
          drawPreview(ed2);
        });
        ['pointerup', 'pointercancel'].forEach(function (t) {
          els.preview.addEventListener(t, function () { ed2.dragging = false; });
        });
        els.zoom.addEventListener('input', function () { ed2.zoom = parseFloat(els.zoom.value); drawPreview(ed2); });
        $('admin-mode-' + idx).addEventListener('change', function (ev) { ed2.mode = ev.target.value; drawPreview(ed2); });
        $('admin-file-' + idx).addEventListener('change', function (ev) {
          var f = ev.target.files && ev.target.files[0];
          if (!f) return;
          var url = URL.createObjectURL(f);
          var im = new Image();
          im.onload = function () { setEditorImage(ed2, im, url); editorEls(idx).status.textContent = 'Preview ready. Check face and body, then Save.'; };
          im.onerror = function () { editorEls(idx).status.textContent = 'Could not read that image.'; };
          im.src = url;
        });
        $('admin-url-' + idx).addEventListener('change', function (ev) {
          var url = ev.target.value.trim();
          if (!url) return;
          var im = new Image();
          im.crossOrigin = 'anonymous';
          im.onload = function () { setEditorImage(ed2, im, url); editorEls(idx).status.textContent = 'Preview ready. Note: some hosts block canvas export; if Save fails, upload the file instead.'; };
          im.onerror = function () { editorEls(idx).status.textContent = 'Could not load that URL.'; };
          im.src = url;
        });
        $('admin-save-' + idx).addEventListener('click', function () { saveSlot(idx); });
        $('admin-reset-' + idx).addEventListener('click', function () { resetSlot(idx); });
      })(ed, i);
    }
  }

  async function saveSlot(idx) {
    var ed = editors[idx];
    var status = editorEls(idx).status;
    if (!ed || !ed.img) { status.textContent = 'First choose a photo for this slot (upload or URL).'; return; }
    status.textContent = 'Rendering 4:5 photo…';
    try {
      var blob = await renderCanvas(ed);
      var b64 = await blobToBase64(blob);
      var path = 'gallery/gallery-' + (idx + 1) + '.jpg';
      status.textContent = 'Uploading photo…';
      var existing = await ghJson(path);
      var putBody = { message: 'Admin: update gallery photo ' + (idx + 1), content: b64, branch: BRANCH };
      if (existing) putBody.sha = existing.sha;
      var put = await gh(path, 'PUT', putBody);
      if (!put.ok) throw new Error('Photo upload failed (HTTP ' + put.status + '). Check the token Contents permission.');
      status.textContent = 'Publishing gallery…';
      // Re-read gallery.json sha so concurrent edits do not clash.
      var gItem = await ghJson('gallery.json');
      if (gItem) { gallerySha = gItem.sha; currentGallery = decodeContent(gItem) || currentGallery; }
      if (!currentGallery.images) currentGallery.images = [];
      var pageUrl = PAGES_BASE + path;
      currentGallery.images[idx] = { url: pageUrl, mode: ed.mode, slot: idx + 1, updatedAt: new Date().toISOString() };
      // Fill any missing slots with defaults so the gallery always has 3.
      for (var k = 0; k < 3; k++) {
        if (!currentGallery.images[k]) currentGallery.images[k] = { url: DEFAULTS[k].indexOf('http') === 0 ? DEFAULTS[k] : PAGES_BASE + DEFAULTS[k], mode: 'default', slot: k + 1 };
      }
      var gBody = { message: 'Admin: update gallery.json (photo ' + (idx + 1) + ')', content: encodeContent(currentGallery), branch: BRANCH };
      if (gallerySha) gBody.sha = gallerySha;
      var gPut = await gh('gallery.json', 'PUT', gBody);
      if (!gPut.ok) throw new Error('Gallery publish failed (HTTP ' + gPut.status + ').');
      var gNew = await gPut.json();
      gallerySha = gNew.content.sha;
      status.textContent = 'Saved for everyone. The site updates within a couple of minutes (Pages cache).';
      await loadRemoteGallery();
      renderAdminPanel();
    } catch (e) {
      status.textContent = 'Failed: ' + e.message;
    }
  }

  async function resetSlot(idx) {
    var status = editorEls(idx).status;
    status.textContent = 'Restoring original photo…';
    try {
      var gItem = await ghJson('gallery.json');
      if (gItem) { gallerySha = gItem.sha; currentGallery = decodeContent(gItem) || currentGallery; }
      if (!currentGallery.images) currentGallery.images = [];
      var def = DEFAULTS[idx];
      currentGallery.images[idx] = { url: def.indexOf('http') === 0 ? def : PAGES_BASE + def, mode: 'default', slot: idx + 1 };
      var gBody = { message: 'Admin: restore gallery photo ' + (idx + 1), content: encodeContent(currentGallery), branch: BRANCH };
      if (gallerySha) gBody.sha = gallerySha;
      var gPut = await gh('gallery.json', 'PUT', gBody);
      if (!gPut.ok) throw new Error('Restore failed (HTTP ' + gPut.status + ').');
      gallerySha = (await gPut.json()).content.sha;
      status.textContent = 'Restored to the original photo.';
      await loadRemoteGallery();
      renderAdminPanel();
    } catch (e) {
      status.textContent = 'Failed: ' + e.message;
    }
  }

  // Wire the logo + modals directly: initInvitation runs after React has
  // mounted, so a DOMContentLoaded listener here might never fire.
  (function () {
    var logo = $('admin-logo-btn');
    if (logo) logo.addEventListener('click', openAdminLogin);
    var c = $('admin-connect-btn'); if (c) c.addEventListener('click', connectAdmin);
    var cl = $('admin-login-close'); if (cl) cl.addEventListener('click', closeAdminLogin);
    var pc = $('admin-panel-close'); if (pc) pc.addEventListener('click', function () { $('admin-panel-modal').style.display = 'none'; });
    var lo = $('admin-logout-btn'); if (lo) lo.addEventListener('click', logoutAdmin);
  })();
  loadRemoteGallery();
})();


  (window as any).openInvite = openInvite;
  (window as any).toggleMusic = toggleMusic;
  (window as any).generateAIWish = generateAIWish;
  (window as any).sendToWhatsApp = sendToWhatsApp;
  (window as any).closeModal = closeModal;
  (window as any).trackClick = trackClick;
  (window as any).scrollToTop = scrollToTop;
  (window as any).openLuxuryMenu = openLuxuryMenu;
  (window as any).closeLuxuryMenu = closeLuxuryMenu;
  (window as any).copyInviteLink = copyInviteLink;
  (window as any).uploadGuestPhotos = uploadGuestPhotos;
}
