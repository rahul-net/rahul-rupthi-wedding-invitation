// Preserved verbatim from the original single-file website (see original/index.html).
// Markup is rendered as-is to guarantee exact design preservation.
export const AudioAndEntranceHtml = `<audio id="bgMusic" loop preload="auto" playsinline>
    <source src="wedding.mp3" type="audio/mpeg">
</audio>

<div id="musicBtn" class="music-toggle" onclick="toggleMusic()">🔊</div>

    <!-- Entrance Section -->

        <section id="entrance" class="royal-intro" onclick="openInvite()">

    <div class="card">

        <div class="ornament">💍</div>

        <h1 class="names gold-shine">
            Rahul <span>and</span> Rupthi
        </h1>

        <p class="invite-text gold-shine">
            invite you to celebrate their Wedding
        </p>

        <div class="enter-wrap">
            <div class="enter-btn">●</div>
            <p class="tap-text">Tap to Open</p>
        </div>

    </div>

</section>`;

export default function AudioAndEntrance() {
  return <div dangerouslySetInnerHTML={{ __html: AudioAndEntranceHtml }} style={{ display: "contents" }} />;
}
