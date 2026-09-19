// ==========================================
//   BNCC SUSHI — main.js v1.0.4 (production)
//   WARNING: legacy code, do not touch -_-
// ==========================================

console.log("%c🍣 Welcome to BNCC Sushi DevTools!", "color:#8CD79A; font-size:20px; font-weight:bold");
console.log("%cWhy are you here? The footer said 'Never Open'.", "color:#F5BF3F");

// ------------------------------------------
// 1. Fake boot sequence on page load
// ------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
  console.log("[BOOT] Initializing BNCC Sushi v1.0.4...");
  setTimeout(() => console.log("[BOOT] Loading finest chips... OK"), 500);
  setTimeout(() => console.log("[BOOT] Compiling rice... OK"), 1000);
  setTimeout(() => console.log("[BOOT] Deploying wasabi to production... OK"), 1500);
  setTimeout(() => console.log("[BOOT] Ready. But still Never Open. 🍣"), 2000);
});

// ------------------------------------------
// 2. Dynamic title — shameless attention grab
// ------------------------------------------
const originalTitle = document.title;
let awayTimer;

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = "🥺 come back, the salmon is escaping";
    clearTimeout(awayTimer);
  } else {
    document.title = originalTitle;
    awayTimer = setTimeout(() => {
      document.title = "🍣 psst... sushi?";
    }, 5000);
  }
});

// ------------------------------------------
// 3. Time-based greeting injected under <h1>
// ------------------------------------------
const greeting = document.createElement("p");
const hour = new Date().getHours();

if (hour >= 5 && hour < 11)       greeting.textContent = "> sudo yum breakfast 🍣";
else if (hour >= 11 && hour < 15) greeting.textContent = "> git lunch --force";
else if (hour >= 15 && hour < 19) greeting.textContent = "> npm run snack";
else                              greeting.textContent = "> curl midnight-sushi:5000 // you shouldn't be awake";

greeting.style.textAlign = "center";
greeting.style.color = "#F5BF3F";
greeting.style.fontFamily = "monospace";
greeting.style.fontSize = "0.95rem";
document.querySelector("h1").after(greeting);

// ------------------------------------------
// 4. Konami-style cheat code: type "sushi"
// ------------------------------------------
let buffer = "";
const SECRET = "sushi";

document.addEventListener("keydown", (e) => {
  buffer = (buffer + e.key.toLowerCase()).slice(-SECRET.length);
  if (buffer === SECRET) {
    activateSushiMode();
    buffer = "";
  }
});

function activateSushiMode() {
  console.log("%c🌀 SUSHI MODE ACTIVATED", "color:#F08372; font-size:24px; font-weight:bold");

  // spawn raining emoji
  for (let i = 0; i < 40; i++) {
    const emoji = document.createElement("span");
    emoji.textContent = ["🍣", "🥢", "🍥", "🍙"][Math.floor(Math.random() * 4)];
    emoji.style.position = "fixed";
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.top = "-5vh";
    emoji.style.fontSize = 20 + Math.random() * 30 + "px";
    emoji.style.zIndex = "9999";
    emoji.style.pointerEvents = "none";
    emoji.style.transition = `top ${2 + Math.random() * 3}s linear, transform 3s`;

    document.body.appendChild(emoji);

    requestAnimationFrame(() => {
      emoji.style.top = "110vh";
      emoji.style.transform = `rotate(${Math.random() * 720}deg)`;
    });

    setTimeout(() => emoji.remove(), 6000);
  }

  // commit to localStorage like a real dev
  localStorage.setItem("sushiMode", "activated");
}

// ------------------------------------------
// 5. "404: Salmon Not Found" card does a 404
// ------------------------------------------
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.style.cursor = "pointer";
  card.addEventListener("click", () => {
    if (card.querySelector("h3").textContent.includes("404")) {
      card.style.transition = "opacity 0.3s, transform 0.3s";
      card.style.opacity = "0";
      card.style.transform = "translateX(100px)";

      setTimeout(() => {
        card.style.transition = "none";
        card.style.transform = "translateX(-100px)";
        card.style.opacity = "1";
        requestAnimationFrame(() => {
          card.style.transition = "opacity 0.3s, transform 0.3s";
          card.style.transform = "translateX(0)";
        });
      }, 300);

      console.warn("Error: Salmon Not Found (again). Have you tried turning it off and on?");
    }
  });
});

// ------------------------------------------
// 6. Price "premium subscription" prank
// ------------------------------------------
console.log(
  "%c💡 TIP: Click any price 3 times to unlock BNCC Sushi Premium™",
  "color:#CAF8CA; font-size:14px"
);

document.querySelectorAll("strong").forEach((price) => {
  let clicks = 0;
  price.style.cursor = "pointer";

  price.addEventListener("click", () => {
    clicks++;
    if (clicks === 3) {
      price.textContent = " $$$99.99/mo";
      price.style.color = "#F08372";

      const note = document.createElement("small");
      note.textContent = " (auto-renewal, no refunds, no exit strategy)";
      note.style.color = "#A8CFF5";
      note.style.fontSize = "0.75rem";
      price.after(note);

      console.error("PaymentProcessorException: your wallet has stopped responding.");
    }
  });
});

// ------------------------------------------
// 7. Anti-Developers-Inspector easter egg
// ------------------------------------------
// Detects if devtools opened via window size heuristics
const devtoolsCheck = () => {
  if (window.outerWidth - window.innerWidth > 160) {
    console.log("%c👀 we see you inspecting our legacy code", "color:#F08372; font-size:16px");
    console.log("%cIt works on our machine. That's all that matters.", "color:#A8CFF5");
  }
};
setInterval(devtoolsCheck, 3000);

// ------------------------------------------
// 8. Footer easter egg — try to click "Never Open"
// ------------------------------------------
const footer = document.querySelector("footer p");
footer.style.cursor = "not-allowed";
footer.title = "we told you. NEVER. OPEN.";

footer.addEventListener("click", () => {
  const attempts = parseInt(localStorage.getItem("openAttempts") || "0") + 1;
  localStorage.setItem("openAttempts", attempts);

  const responses = [
    "Nice try. Attempt #" + attempts + ".",
    "The restaurant is a lie. (Attempt #" + attempts + ")",
    "Have you considered ordering from somewhere else? (Attempt #" + attempts + ")",
    "Even sudo can't open this. (Attempt #" + attempts + ")",
    "You've tried " + attempts + " times. Persistence detected. Still closed. 🔒",
  ];

  console.log("🔒 " + responses[Math.min(attempts - 1, responses.length - 1)]);

  if (attempts === 10) {
    console.log("%c🏆 ACHIEVEMENT UNLOCKED: 'It Never Opens' — you clicked 10 times", "color:#F5BF3F; font-size:18px; font-weight:bold");
    activateSushiMode(); // reward: sushi rain
  }
});

// ------------------------------------------
// 9. Fake git log in console
// ------------------------------------------
console.table([
  { hash: "a1b2c3d", message: "feat: add sushi", author: "magnivivo" },
  { hash: "e4f5g6h", message: "fix: salmon escaping from nigiri", author: "magnivivo" },
  { hash: "f8g9h0i", message: "hotfix: revert hotfix of revert", author: "magnivivo" },
  { hash: "j1k2l3m", message: "chore: delete node_modules from prod (oops)", author: "magnivivo" },
  { hash: "n4o5p6q", message: "docs: update README (nobody reads this)", author: "magnivivo" },
]);