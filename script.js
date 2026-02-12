const inputs = document.querySelectorAll(".pin input");
const error = document.getElementById("error");
const correct = "0504";

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }

    const code = Array.from(inputs).map(i => i.value).join("");

    if (code.length === 4) {
      if (code === correct) {
        window.location.href = "hero.html";
      } else {
        error.textContent = "Ez csak neked szól ❤️";
        inputs.forEach(i => i.value = "");
        inputs[0].focus();
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {

  const timelineItems = document.querySelectorAll('.timeline-item');
  const timelineLine = document.querySelector('.timeline-line');
  const finalSection = document.querySelector('.final-section');

  window.addEventListener('scroll', () => {

    timelineItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        item.classList.add('visible');
      }
    });

    if (timelineLine) {
      const rect = timelineLine.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        timelineLine.classList.add('visible');
      }
    }

    if (finalSection) {
  window.addEventListener('scroll', () => {
    const rect = finalSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      finalSection.classList.add('visible');
    }
  });
}
  })
}
)







document.addEventListener("DOMContentLoaded", function () {

  const letter = document.querySelector(".letter");

  if (letter) {

    const lines = letter.querySelectorAll(".line");

    // Soronkénti késleltetés beállítása
    lines.forEach((line, index) => {
      line.style.transitionDelay = `${index * 0.4}s`;
    });

    // Scroll figyelés
    window.addEventListener("scroll", () => {
      const rect = letter.getBoundingClientRect();

      if (rect.top < window.innerHeight - 150) {
        letter.classList.add("visible");
      }
    });

  }

});



const yesBtn = document.querySelector(".yes");
const superYesBtn = document.querySelector(".super-yes");
const proposalResult = document.querySelector(".proposal-result");
const heartExplosion = document.querySelector(".heart-explosion");

/* Az IGEN elszalad */
yesBtn.addEventListener("mouseenter", () => {

  const randomX = Math.random() * 300 - 150;
  const randomY = Math.random() * 200 - 100;

  yesBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

/* A Még jobban igen működik */
superYesBtn.addEventListener("click", () => {

  proposalResult.textContent = "Mindig téged választalak 🤍";
  proposalResult.classList.add("visible");

  createExplosion();
});

function createExplosion() {

  for (let i = 0; i < 35; i++) {

    const heart = document.createElement("div");
    heart.classList.add("heart-particle");
    heart.textContent = "💖";

    const x = (Math.random() - 0.5) * 800 + "px";
    const y = (Math.random() - 0.5) * 800 + "px";

    heart.style.setProperty("--x", x);
    heart.style.setProperty("--y", y);

    heart.style.left = "50%";
    heart.style.top = "50%";

    heartExplosion.appendChild(heart);

    setTimeout(() => heart.remove(), 1500);
  }
}


const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {

  if (music.paused) {
    music.play();
    musicBtn.classList.add("playing");
  } else {
    music.pause();
    musicBtn.classList.remove("playing");
  }

});


/* ===================== */
/* 🌌 STARS BACKGROUND */
/* ===================== */

const canvas = document.getElementById("starsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 120; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2,
    speed: Math.random() * 0.3
  });
}

/* Két kiemelt csillag */
const starA = { x: canvas.width * 0.3, y: canvas.height * 0.4 };
const starB = { x: canvas.width * 0.7, y: canvas.height * 0.5 };

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";

  stars.forEach(star => {
    star.y += star.speed;
    if (star.y > canvas.height) star.y = 0;

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  /* Kiemelt csillagok */
  ctx.fillStyle = "#f5e6c8";
  ctx.beginPath();
  ctx.arc(starA.x, starA.y, 4, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(starB.x, starB.y, 4, 0, Math.PI * 2);
  ctx.fill();

  /* Összekötő vonal */
  ctx.strokeStyle = "rgba(245,230,200,0.6)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(starA.x, starA.y);
  ctx.lineTo(starB.x, starB.y);
  ctx.stroke();

  requestAnimationFrame(drawStars);
}

drawStars();


/* ===================== */
/* 🕰 LOVE COUNTER */
/* ===================== */

const startDate = new Date("2024-05-04T00:00:00"); // <-- Itt írd át a dátumot

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
}

setInterval(updateCounter, 60000);
updateCounter();


/* ================================= */
/* 💖 LOVE FINAL INTERACTIVE SYSTEM */
/* ================================= */

const loveSection = document.querySelector(".love-final-section");
const loveCanvas = document.getElementById("loveCanvas");
const loveCtx = loveCanvas.getContext("2d");

const firstBlock = document.getElementById("loveContent");
const secondText = document.getElementById("secondLoveText");
const bunny = document.getElementById("loveBunny");

let started = false;

/* ===== CANVAS MÉRET ===== */

function resizeCanvas() {
  loveCanvas.width = window.innerWidth;
  loveCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

/* ===== SZÍV PARTICLE RENDSZER ===== */

let hearts = [];

function createHeart() {
  return {
    x: Math.random() * loveCanvas.width,
    y: loveCanvas.height + Math.random() * 200,
    size: Math.random() * 20 + 10,
    speedY: Math.random() * 1 + 0.5,
    opacity: Math.random() * 0.5 + 0.5
  };
}

for (let i = 0; i < 40; i++) {
  hearts.push(createHeart());
}

/* ===== NYUSZI EGÉR KÖVETÉS ===== */

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight - 100;

let bunnyX = mouseX;
let bunnyY = mouseY;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

/* ===== RAJZOLÁS ===== */

function drawHeart(x, y, size, opacity) {

  loveCtx.globalAlpha = opacity;
  loveCtx.fillStyle = "#ff5e9c";

  loveCtx.beginPath();
  loveCtx.moveTo(x, y);
  loveCtx.bezierCurveTo(x - size/2, y - size/2, x - size, y + size/3, x, y + size);
  loveCtx.bezierCurveTo(x + size, y + size/3, x + size/2, y - size/2, x, y);
  loveCtx.fill();

  loveCtx.globalAlpha = 1;
}

function animateLove() {

  loveCtx.clearRect(0, 0, loveCanvas.width, loveCanvas.height);

  hearts.forEach(heart => {

    heart.y -= heart.speedY;

    if (heart.y < -20) {
      Object.assign(heart, createHeart());
    }

    drawHeart(heart.x, heart.y, heart.size, heart.opacity);
  });

  /* 🐰 Smooth follow */
  bunnyX += (mouseX - bunnyX) * 0.05;
  bunnyY += (mouseY - bunnyY) * 0.05;

  bunny.style.left = bunnyX + "px";
  bunny.style.top = bunnyY + "px";

  requestAnimationFrame(animateLove);
}

/* ===== SCROLL TRIGGER ===== */

const loveObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting && !started) {
      started = true;

      animateLove();

      setTimeout(() => {
        firstBlock.style.opacity = "0";

        setTimeout(() => {
          secondText.style.opacity = "1";
        }, 1200);

      }, 4000);
    }

  });
}, { threshold: 0.6 });

loveObserver.observe(loveSection);



window.addEventListener("resize", () => {
  if (romanticCanvas) {
    romanticCanvas.width = window.innerWidth;
    romanticCanvas.height = window.innerHeight;
  }
});

const bunnyCursor = document.getElementById("customBunny");

document.addEventListener("mousemove", (e) => {
  bunnyCursor.style.left = e.clientX + "px";
  bunnyCursor.style.top = e.clientY + "px";
});

document.addEventListener("mousemove", (e) => {

  const paw = document.createElement("div");
  paw.className = "bunny-paw";
  paw.textContent = "💖";

  paw.style.left = e.clientX + "px";
  paw.style.top = e.clientY + "px";

  document.body.appendChild(paw);

  setTimeout(() => {
    paw.remove();
  }, 2000);

});





const secretTrigger = document.getElementById("secretTrigger");
const miniGame = document.getElementById("miniGame");

secretTrigger.addEventListener("click", () => {
  miniGame.style.display = "flex";
});

function checkAnswer(value) {
  alert("Mindig többet 💖");
  miniGame.style.display = "none";
}










