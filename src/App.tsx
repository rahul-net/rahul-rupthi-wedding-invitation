import { useEffect } from "react";
import AudioAndEntrance from "./components/AudioAndEntrance";
import LuxuryPopup from "./components/LuxuryPopup";
import MainContent from "./components/MainContent";
import Modal from "./components/Modal";
import ShareAndTop from "./components/ShareAndTop";
import { initInvitation } from "./lib/invitation";

export default function App() {
  useEffect(() => {
    initInvitation();
  }, []);

  return (
    <>
      <AudioAndEntrance />
      <LuxuryPopup />
      <MainContent />
      <Modal />
      <ShareAndTop />
    </>
  );
}
