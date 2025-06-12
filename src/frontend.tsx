/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { createRoot } from "react-dom/client";
import { App } from "./App";

function getVibeFromUrl(): 1 | 2 | 3 | 4 | 5 {
  const urlParams = new URLSearchParams(window.location.search);
  const vibeParam = urlParams.get("vibe");
  const vibeNumber = parseInt(vibeParam || "2", 10);

  // Ensure the vibe is within valid range (1-5), default to 2
  if (vibeNumber >= 1 && vibeNumber <= 5) {
    return vibeNumber as 1 | 2 | 3 | 4 | 5;
  }
  return 2; // Default vibe level is vibes are off
}

function start() {
  const vibeLevel = getVibeFromUrl();
  console.log(`Starting app with vibe level: ${vibeLevel}`);
  const root = createRoot(document.getElementById("root")!);
  root.render(<App vibe={vibeLevel} />);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
