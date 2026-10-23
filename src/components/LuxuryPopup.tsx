// Preserved verbatim from the original single-file website (see original/index.html).
// Markup is rendered as-is to guarantee exact design preservation.
export const LuxuryPopupHtml = `<!-- Luxury Menu Button -->
<div class="luxury-menu-btn" onclick="openLuxuryMenu()">
    <span>☰</span>
</div>

<!-- Luxury Popup -->
<div id="luxuryPopup" class="luxury-popup">

    <button class="close-luxury" onclick="closeLuxuryMenu()">✕</button>

    <div class="luxury-wrapper">

        <div class="invitation-container">

            <!-- Corners -->
            <svg class="corner top-left" viewBox="0 0 100 100">
                <path d="M0 0 L100 0 L100 2 L2 2 L2 100 L0 100 Z"/>
            </svg>

            <svg class="corner top-right" viewBox="0 0 100 100">
                <path d="M0 0 L100 0 L100 2 L2 2 L2 100 L0 100 Z"/>
            </svg>

            <svg class="corner bottom-left" viewBox="0 0 100 100">
                <path d="M0 0 L100 0 L100 2 L2 2 L2 100 L0 100 Z"/>
            </svg>

            <svg class="corner bottom-right" viewBox="0 0 100 100">
                <path d="M0 0 L100 0 L100 2 L2 2 L2 100 L0 100 Z"/>
            </svg>

            <p style="font-family:'Cinzel',serif;
            letter-spacing:6px;
            font-size:.7rem;
            color:#996515;
            text-transform:uppercase;">
            The Wedding Of
            </p>

            <div class="lux-divider"></div>

            <div class="monogram">

                <h1 class="gold-text"
                style="font-family:'Playfair Display',serif;
                font-size:3rem;
                line-height:1;
                margin:0;">
                Rahul
                </h1>

                <span style="font-family:'Great Vibes',cursive;
                font-size:2.5rem;
                color:#d4af37;">
                &
                </span>

                <h1 class="gold-text"
                style="font-family:'Playfair Display',serif;
                font-size:3rem;
                line-height:1;
                margin:0;">
                Rupthi
                </h1>

            </div>

            <p style="font-family:'Montserrat',sans-serif;
            font-size:.8rem;
            letter-spacing:2px;
            color:#555;">
            WITH GREAT JOY WE INVITE YOU
            </p>

            <div style="margin:20px 0;">

                <p style="font-family:'Cinzel',serif;
                color:#996515;">
                MONDAY
                </p>

                <h3 style="font-family:'Playfair Display',serif;
                font-size:2rem;
                color:#222;">
                JULY 06, 2026
                </h3>

                <p style="font-family:'Cinzel',serif;
                color:#996515;">
                AT SEVEN O'CLOCK
                </p>

            </div>

            <div style="margin-top:20px;">

                <p style="font-family:'Playfair Display',serif;
                font-size:1.1rem;
                color:#222;">
                RAJ HOTEL, CHITTAGONG
                </p>

                <p style="font-family:'Montserrat',sans-serif;
                font-size:.75rem;
                color:#777;">
                Ceremony & Dinner Reception to follow
                </p>

            </div>

            <div class="footer-lotus">

                <svg class="floating-svg" viewBox="0 0 100 100">
                    <path fill="#d4af37"
                    opacity="0.6"
                    d="M50 10 C65 40 100 50 50 90 C0 50 35 40 50 10 Z"/>
                </svg>

                <svg class="floating-svg" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="20"
                    fill="#ffb7c5" opacity="0.5"/>
                    <path fill="#d4af37"
                    d="M50 20 L60 50 L50 80 L40 50 Z"
                    opacity="0.7"/>
                </svg>

                <svg class="floating-svg"
                viewBox="0 0 100 100"
                style="width:50px;height:50px;">
                    <path fill="#d4af37"
                    d="M50 5 L70 45 L100 55 L50 95 L0 55 L30 45 Z"/>
                </svg>

            </div>

        </div>

    </div>

</div>`;

export default function LuxuryPopup() {
  return <div dangerouslySetInnerHTML={{ __html: LuxuryPopupHtml }} style={{ display: "contents" }} />;
}
