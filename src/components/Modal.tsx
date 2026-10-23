// Preserved verbatim from the original single-file website (see original/index.html).
// Markup is rendered as-is to guarantee exact design preservation.
export const ModalHtml = `<!-- Modal -->
    <div id="msg-modal">
        <h3 style="color: var(--gold); margin-bottom: 10px;">Special Invitation</h3>
        <p style="font-size: 0.9rem; line-height: 1.6;">আপনার উপস্থিতি আমাদের জীবনের এই নতুন যাত্রাকে আরও আনন্দময় করে তুলবে। দেখা হবে বিয়ের আসরে!</p>
        <button class="ai-btn" style="margin-top: 20px; width: auto; padding: 10px 30px;" onclick="closeModal()">ধন্যবাদ</button>
    </div>`;

export default function Modal() {
  return <div dangerouslySetInnerHTML={{ __html: ModalHtml }} style={{ display: "contents" }} />;
}
