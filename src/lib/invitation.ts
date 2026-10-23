// @ts-nocheck
// Original JavaScript logic from the single-file website, migrated to TypeScript
// with behaviour preserved exactly. Functions used by the original inline
// onclick handlers are exposed on window by initInvitation().
declare const gsap: any;

export function initInvitation(): void {
  if ((window as any).__invitationInitialized) return;
  (window as any).__invitationInitialized = true;

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
