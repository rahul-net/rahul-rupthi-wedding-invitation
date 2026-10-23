// Preserved verbatim from the original single-file website (see original/index.html).
// Markup is rendered as-is to guarantee exact design preservation.
export const ShareAndTopHtml = `<button id="topBtn" onclick="scrollToTop()">Go to Top</button>
    <!-- Share Floating -->
<div class="share-floating">

    <div class="share-title">
        SHARE TO
    </div>

    <div class="share-icons">

        <!-- Facebook -->
<a class="share-btn"
href="https://www.facebook.com/sharer/sharer.php?u=https://rahul-net.github.io/rahul-rupthi-wedding-invitation/"
target="_blank">

    <i class="fab fa-facebook-f facebook-icon"></i>

</a>

<!-- WhatsApp -->
<a class="share-btn"
href="https://wa.me/?text=You're invited ❤️ https://rahul-net.github.io/rahul-rupthi-wedding-invitation/"
target="_blank">

    <i class="fab fa-whatsapp whatsapp-icon"></i>

</a>

<!-- Instagram -->
<a class="share-btn"
href="instagram://share"
onclick="copyInviteLink()">

    <i class="fab fa-instagram instagram-icon"></i>

</a>

    </div>

</div>`;

export default function ShareAndTop() {
  return <div dangerouslySetInnerHTML={{ __html: ShareAndTopHtml }} style={{ display: "contents" }} />;
}
