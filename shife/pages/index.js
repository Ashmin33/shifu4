import Head from "next/head";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Home() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [confettiActive, setConfettiActive] = useState(true);
  const [typed, setTyped] = useState("");
  const message = "You're the most special part my world. Happy 18th Birthday, Shifu ♥";

  useEffect(() => {
    if (showMessage && typed.length < message.length) {
      const timeout = setTimeout(() => {
        setTyped(message.slice(0, typed.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [typed, showMessage]);

  const playSong = () => {
    const audio = new Audio("/song.mp3");
    audio.play();
    setShowButton(false);
    setShowMessage(true);
  };

  const stopConfetti = () => {
    setConfettiActive(false);
  };

  return (
    <>
      <Head>
        <title>Happy Birthday Shifu</title>
      </Head>
      <div className="container" style={{ backgroundColor: "#e6f0fa", minHeight: "100vh", position: "relative" }}>
        {confettiActive && <Confetti />}
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h1 style={{ color: "#8B4513", fontSize: "2.5em" }}>HAPPY BIRTHDAY SHIFU!</h1>
          <p style={{ color: "#666" }}>For [Name]</p>
          <div style={{ margin: "20px 0" }}>
            <img src="/girl1.png" alt="First Girlfriend" style={{ width: "300px", borderRadius: "10px" }} />
            <p style={{ color: "#8B4513", fontStyle: "italic" }}>{typed}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
            <img src="/girl2.png" alt="Second Girlfriend" style={{ width: "100px", borderRadius: "10px" }} />
            <img src="/girl2.png" alt="Second Girlfriend" style={{ width: "100px", borderRadius: "10px" }} />
            <img src="/girl2.png" alt="Second Girlfriend" style={{ width: "100px", borderRadius: "10px" }} />
          </div>
          {showButton && (
            <button className="playBtn" onClick={playSong} style={{ padding: "10px 20px", backgroundColor: "#1E90FF", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Play Song
            </button>
          )}
          {confettiActive && (
            <button onClick={stopConfetti} style={{ padding: "10px 20px", backgroundColor: "#FF6347", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginLeft: "10px" }}>
              Stop Confetti
            </button>
          )}
          <footer style={{ position: "absolute", bottom: "10px", width: "100%", textAlign: "center", color: "#666" }}>
            Made with ♥ by Isshan
          </footer>
        </div>
        {/* Heart balloons */}
        <img src="/heart-balloon.png" alt="Heart Balloon" style={{ position: "absolute", top: "10px", left: "10px", width: "50px" }} />
        <img src="/heart-balloon.png" alt="Heart Balloon" style={{ position: "absolute", top: "10px", right: "10px", width: "50px" }} />
        <img src="/panda.png" alt="Panda" style={{ position: "absolute", top: "50%", left: "10px", width: "50px" }} />
        <img src="/panda.png" alt="Panda" style={{ position: "absolute", bottom: "10px", right: "10px", width: "50px" }} />
      </div>
    </>
  );
}
