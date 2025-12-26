"use client";

import { useEffect, useState } from "react";
import { preloadImage, preloadVideo, waitFontsReady, withTimeout } from "../../_utils/preload";
import { SpinnerCircular, SpinnerCircularSplit, SpinnerInfinity } from "spinners-react";

type Props = {
  children: React.ReactNode;
};

async function prepareCriticalHero() {
  const poster = "/poster_hero.webp";
  const video = "/hero.mp4";

  await Promise.all([
    waitFontsReady(),
    preloadImage(poster),
    preloadVideo(video, "metadata")
  ]);

}

export default function AppGate({ children }: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    (async () => {
      // Timeout anti écran noir
      const MAX_WAIT = reduceMotion ? 1200 : 3500;

      await withTimeout(prepareCriticalHero(), MAX_WAIT);

      if (!cancelled) setReady(true);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) {
    return (
        <div
            style={{
            position: "fixed",
            inset: 0, 
            zIndex: 50,
            backgroundColor: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
        }}
        >
        <div
            className="font-tenor"
            style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            }}
        >
            <h1
            style={{
                fontSize: "1.5rem", 
                margin: 0,
            }}
            >
            Evrad7
            </h1>

            <SpinnerInfinity
            size={75}
            thickness={50}
            color="#b2922a"
            secondaryColor="#1A1A1A"
            speed={200}
            />
            <p className="font-tenor" style = {{
                fontSize: "1rem", display: "flex", columnGap: ".5rem", fontFamily: ""
            }}>
                <span>Conception</span> / 
                <span>Développement</span> /
                <span>Impact</span>
            </p>
        </div>
    </div>

    );
  }

  return <>{children}</>;
}
