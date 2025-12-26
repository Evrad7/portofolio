
export function preloadImage(src: string) {
  return new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve(); 
    img.src = src;
  });
}


export function preloadVideo(src: string, level: "metadata" | "canplay" = "metadata") {
  return new Promise<void>((resolve) => {
    const video = document.createElement("video");
    video.preload = "auto";
    video.muted = true; 
    video.playsInline = true;

    const done = () => {
      cleanup();
      resolve();
    };

    const cleanup = () => {
      video.onloadedmetadata = null;
      video.oncanplaythrough = null;
      video.onerror = null;
      // Pas besoin d'ajouter au DOM
    };

    video.onerror = done;
    video.onloadedmetadata = level === "metadata" ? done : null;
    video.oncanplaythrough = level === "canplay" ? done : null;

    video.src = src;
    video.load();
  });
}

export function waitFontsReady() {
  return document.fonts?.ready ?? Promise.resolve();
}

export function withTimeout<T>(p: Promise<T>, ms: number) {
  return new Promise<T>((resolve) => {
    const t = window.setTimeout(() => resolve(undefined as unknown as T), ms);
    p.then((v) => {
      window.clearTimeout(t);
      resolve(v);
    }).catch(() => {
      window.clearTimeout(t);
      resolve(undefined as unknown as T);
    });
  });
}
