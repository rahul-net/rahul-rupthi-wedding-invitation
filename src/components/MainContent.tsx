// Preserved verbatim from the original single-file website (see original/index.html).
// Markup is rendered as-is to guarantee exact design preservation.
export const MainContentHtml = `<!-- Main Content -->
    <div id="main-content">
        <!-- Home Section -->
        <section id="home" class="section">
            <!-- Ganesh Blessing -->
<div class="ganesh-blessing">

    <img
src="ganeshGold.png"
alt="Lord Ganesha"
class="ganesh-img"
loading="eager"
fetchpriority="high"
decoding="async">

    <p class="ganesh-text gold-shine">
        Om Shree Ganeshay Namah
    </p>

</div>
            <h1 class="names gold-shine">Rahul & Rupthi</h1>
            <h3>Wedding Ceremony</h3>
            <div class="divider"></div>
            
            <div class="timer-container">
                <div class="t-box"><span class="t-num" id="days">00</span><span class="t-lbl">Days</span></div>
                <div class="t-box"><span class="t-num" id="hours">00</span><span class="t-lbl">Hrs</span></div>
                <div class="t-box"><span class="t-num" id="mins">00</span><span class="t-lbl">Min</span></div>
                <div class="t-box"><span class="t-num" id="secs">00</span><span class="t-lbl">Sec</span></div>
            </div>
            <p style="font-size: 0.8rem; letter-spacing: 4px; color: var(--gold-light);">JULY 06, 2026</p>
        </section>

        <!-- Add to Calendar -->
<section id="calendar" style="margin-top:25px;">
    <h3>Add to Calendar</h3>
    <div class="divider"></div>

    <div class="calendar-box">

        <!-- Dress Code Event -->
        <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Dress%20Code%20Ceremony%20-%20Rahul%20%26%20Rupthi&dates=20260705T190000/20260705T220000&location=Raj%20Hotel%2C%20Chittagong&details=Traditional%20Ethnic%20Wear%20(Pastel%20Gold%2FGreen)" 
        target="_blank" class="calendar-btn">
            🎉 Dress Code (5 July • 7PM)
        </a>
        

        <!-- Wedding Event -->
        <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding%20Ceremony%20-%20Rahul%20%26%20Rupthi&dates=20260706T001000/20260706T020000&location=Raj%20Hotel%2C%20Chittagong&details=Main%20Wedding%20Ceremony" 
        target="_blank" class="calendar-btn">
            💍 Wedding (6 July • 12:10AM)
        </a>
        

        <!-- Reception Event -->
        <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Reception%20-%20Rahul%20%26%20Rupthi&dates=20260708T120000/20260708T150000&location=Raj%20Hotel%2C%20Chittagong&details=Reception%20Lunch" 
        target="_blank" class="calendar-btn">
            🍽 Reception (8 July • 12PM)
        </a>

    </div>
</section>

        <!-- Our Story -->
        <section id="story" class="section">
            <h3>Our Story</h3>
            <div class="divider"></div>
            <div style="background: var(--glass); padding: 30px; border-radius: 20px; border: 1px solid rgba(197, 160, 89, 0.2); text-align: left;">
                <p
    id="storyText"
    style="font-size: 0.95rem; line-height: 1.8; color: #eee; font-style: italic; min-height: 90px;">
</p>
                <div style="text-align: right; margin-top: 15px; color: var(--gold); font-family: 'Great Vibes'; font-size: 1.5rem;">
                    — Love, Rahul & Rupthi
                </div>
            </div>
        </section>

        <!-- Gallery Section -->
        <section id="gallery" class="section">
            <h3>Gallery</h3>
            <div class="divider"></div>
            <div class="slideshow">
                <div class="slide active"><img src="https://images.unsplash.com/photo-1777554800812-3dff04d85db0?auto=format&fit=crop&w=800&q=80" alt="Rahul & Rupthi 1"></div>
                <div class="slide"><img src="https://images.unsplash.com/photo-1777554972735-c23d34f58a81?auto=format&fit=crop&w=800&q=80" alt="Rahul & Rupthi 2"></div>
                <div class="slide"><img src="CP1.jpg" alt="Rahul & Rupthi 3"></div>
            </div>
        </section>

        <!-- Wedding Details (বস্ত্রালঙ্কার ৫ই জুলাই) -->
        <section id="details" class="section">
            <h3>Wedding Details</h3>
            <div class="divider"></div>
            <div style="text-align: left; background: var(--glass); padding: 25px; border-radius: 15px; border: 1px solid rgba(197,160,89,0.2);">
                <div style="margin-bottom: 25px;">
                    <p style="color: var(--gold); font-weight: bold; font-size: 0.8rem; text-transform: uppercase;">বস্ত্রালঙ্কার (Dress Code)</p>
                    <p style="font-size: 1.1rem; margin-top: 5px;">৫ জুলাই, ২০২৬ • সন্ধ্যা ৭:০০</p>
                    <p style="font-size: 0.85rem; opacity: 0.7;">Traditional Ethnic Wear (Pastel Gold/Green)</p>
                </div>
                <div style="margin-bottom: 25px;">
                    <p style="color: var(--gold); font-weight: bold; font-size: 0.8rem; text-transform: uppercase;">বিবাহ লগ্ন</p>
                    <p style="font-size: 1.1rem; margin-top: 5px;">৬ জুলাই, ২০২৬ • রাত ১২:১০</p>
                </div>
                <div>
                    <p style="color: var(--gold); font-weight: bold; font-size: 0.8rem; text-transform: uppercase;">রিসিপশন</p>
                    <p style="font-size: 1.1rem; margin-top: 5px;">৮ জুলাই, ২০২৬ • দুপুর ১২:০০</p>
                </div>
            </div>
        </section>

            <a href="https://www.google.com/maps/search/?api=1&query=Raj+Hotel+Chittagong" 
target="_blank"
class="map-btn"
onclick="trackClick('Map')">
    📍 Get Directions
</a>

        <!-- Scratch Surprise -->
        <section class="section">
            <h3>Secret Message</h3>
            <div class="divider"></div>
            <div class="scratch-wrapper">
            <!-- Scratch Finger Animation -->
<div class="scratch-guide">

    <div class="finger-icon">
        ☝️
    </div>

</div>
                <div class="scratch-base">
                    <p style="color: var(--gold); font-size: 0.9rem; font-weight: bold;">WE ARE GETTING MARRIED!</p>
                    <p style="font-size: 0.7rem; margin-top: 5px; opacity: 0.8;">Can't wait to see you there.</p>
                </div>
                <canvas id="scratch-canvas"></canvas>
            </div>
        </section>

            <section id="blessings" class="section">
    <h3>Blessings</h3>
    <div class="divider"></div>
    <p
    id="blessingText"
    style="font-size:0.9rem; min-height:60px;">
</p>
            </section>

        <!-- Instagram -->
        <section class="section">
            <h3>Instagram</h3>
            <div class="divider"></div>
            <a href="https://www.instagram.com/explore/tags/rahul_rupthi_life/" target="_blank" class="insta-box">
                <span style="font-family: 'Cinzel', serif; font-weight: bold; font-size: 1.1rem;">#rahul_rupthi_life</span>
            </a>
            <p style="font-size: 0.75rem; margin-top: 10px; opacity: 0.8; line-height: 1.5;">
    On our Instagram, we share inspiring photos and show how we see our wedding. 
    Click on the hashtag to see more.
</p>
        </section>

        <!-- RSVP Section (All Options Restored) -->
        <section id="rsvp" class="section">
            <h3>RSVP</h3>
            <div class="divider"></div>
            <div class="form-card">
                <!-- AI Wish Box -->
                <div class="form-group" style="background: rgba(197, 160, 89, 0.1); padding: 15px; border-radius: 10px; margin-bottom: 20px;">
                    <label style="color: var(--gold);">✨ AI Wish Generator</label>
                    <input type="text" id="aiInput" placeholder="যেমন: Heartfelt, Funny, or Poetic">
                    <button class="ai-btn" id="aiBtn" onclick="generateAIWish()">Generate Wedding Wish</button>
                </div>

                <div class="form-group">
                    <label>আপনার নাম</label>
                    <input type="text" id="guestName" placeholder="নাম লিখুন">
                </div>

                <div class="form-group">
                    <label>আপনি কি আসছেন?</label>
                    <select id="guestStatus">
                        <option value="হ্যাঁ, আমি আসছি">হ্যাঁ, আমি আসছি</option>
                        <option value="দুঃখিত, আসতে পারছি না">দুঃখিত, আসতে পারছি না</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>কার কাছে পাঠাবেন?</label>
                    <select id="waTarget">
                        <option value="groom">Rahul (Groom)</option>
                        <option value="bride">Rupthi (Bride)</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>আপনার বার্তা</label>
                    <textarea id="guestMsg" rows="3" placeholder="আপনার মনের কথা এখানে লিখুন..."></textarea>
                </div>

                <button class="btn-send" onclick="trackClick('RSVP'); sendToWhatsApp()">
                    <span>Send via WhatsApp</span>
                </button>
            </div>
        </section>

        <!-- Guest Upload -->
<section id="guest-upload" class="section">
    <h3>Share Your Wedding Photos</h3>
    <div class="divider"></div>

    <div class="upload-card">
        <p style="font-size:0.9rem; opacity:0.8;">
            Upload your beautiful wedding memories 📸
        </p>

        <input
            type="file"
            id="guestPhotos"
            class="upload-input"
            accept="image/*"
            multiple
        >

        <button class="upload-btn" onclick="uploadGuestPhotos()">
            Upload Photos
        </button>

        <div id="uploadStatus" class="upload-status"></div>
    </div>
</section>
        
        <!-- Download Invitation -->
<section id="download" class="section">
    <h3>Download Invitation</h3>
    <div class="divider"></div>

    <div style="background: var(--glass); padding: 25px; border-radius: 20px; border: 1px solid rgba(197,160,89,0.2);">
        
        <p style="font-size: 0.9rem; margin-bottom: 20px; opacity: 0.8;">
            Download our wedding invitation card and keep it with you ❤️
        </p>

        <a href="Invitation_Card.png"
   download
   class="download-btn"
   onclick="trackClick('Download')">
    📥 Download Card
</a>

    </div>
</section>
        
        <!-- Bottom Navigation -->
        <section class="bottom-nav">
        <div class="bottom-petals"></div>
            <h2 class="nav-title gold-shine">RAHUL & RUPTHI</h2>
            <p class="nav-tagline">We're getting married!</p>
            <ul class="nav-links">
                <li><a href="#story">Our Story</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#details">Wedding Details</a></li>
                <li><a href="#home">Gifts Registry</a></li>
                <li><a href="#rsvp">RSVP</a></li>
                <li><a href="#download">Download Card</a></li>
            </ul>
            <footer style="margin-top: 60px; opacity: 0.2; font-size: 0.6rem; letter-spacing: 3px;">
                DESIGNED WITH LOVE • 2026
            </footer>
<div class="admin-logo-wrap">
    <button class="admin-logo-btn" id="admin-logo-btn" title="Admin" aria-label="Admin">💍</button>
</div>
        </section>
    </div>
<div id="admin-login-modal" class="admin-modal">
    <button class="admin-close" id="admin-login-close">✕</button>
    <h3>Admin Login</h3>
    <p>Paste a GitHub fine-grained token for the <b>rahul-net/Wedding-Invitation</b> repo only, with <b>Contents: Read and write</b>. The token is saved only on this device, never in the website code, and is sent only to GitHub's API. Never share it in chat. You can revoke it anytime in GitHub Settings → Developer settings → Personal access tokens.</p>
    <input type="password" id="admin-token" placeholder="Paste GitHub token here" autocomplete="off">
    <button class="admin-connect-btn" id="admin-connect-btn">Connect</button>
    <p id="admin-login-status"></p>
</div>

<div id="admin-panel-modal" class="admin-modal">
    <button class="admin-close" id="admin-panel-close">✕</button>
    <h3>Gallery Admin</h3>
    <p>Each photo is saved at the fixed 4:5 gallery ratio. <b>Full photo</b> never cuts face or body (blurred background fills the frame). <b>Fill frame</b> lets you drag and zoom, and what you see in the preview is exactly what visitors will see.</p>
    <div id="admin-slots"></div>
    <button class="admin-logout-btn" id="admin-logout-btn">Logout — remove token from this device</button>
</div>
`;

export default function MainContent() {
  return <div dangerouslySetInnerHTML={{ __html: MainContentHtml }} style={{ display: "contents" }} />;
}
