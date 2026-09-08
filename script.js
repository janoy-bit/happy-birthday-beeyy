const reasons = [
  ["01","cara kamu bikin aku nyaman"],
  ["02","senyum kecil kamu"],
  ["03","kamu yang selalu punya cerita"],
  ["04","sisi random kamu"],
  ["05","momen-momen sederhana kita"],
  ["06","cara kamu jadi diri sendiri"],
  ["07","kamu yang selalu punya tempat di pikiranku"],
  ["08","tawa yang pernah kita bagi"],
  ["09","semua kenangan kecil"],
  ["10","cara kamu membuat hari terasa berbeda"],
  ["11","kamu yang tetap jadi kamu"],
  ["12","hal-hal kecil yang cuma kita mengerti"],
  ["13","cerita yang belum selesai"],
  ["14","waktu yang pernah kita lewati"],
  ["15","semua versi kamu"],
  ["16","karena kamu adalah kamu"],
  ["17","and simply… because it's you. ♡"]
];

const grid = document.getElementById("reasons");

reasons.forEach(([num, text]) => {
  const card = document.createElement("div");
  card.className = "reason";

  card.innerHTML = `
    <span class="num">${num}</span>
    <span class="label">tap me ♡</span>
    <span class="hidden-text">${text}</span>
  `;

  card.onclick = () => card.classList.toggle("open");
  grid.appendChild(card);
});

const wishBtn = document.getElementById("wishBtn");

wishBtn.addEventListener("click", () => {
  document.getElementById("wishText").textContent =
    "Semoga semua doa baik kamu menemukan jalannya. ♡";

  for (let i = 0; i < 45; i++) {
    const c = document.createElement("span");

    c.className = "conf";
    c.textContent = ["♡", "✦", "🐱", "🏁", "🎉"][
      Math.floor(Math.random() * 5)
    ];

    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDelay = Math.random() * 1.2 + "s";

    document.getElementById("confetti").appendChild(c);

    setTimeout(() => c.remove(), 4000);
  }
});

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play().then(() => {
      musicBtn.classList.add("playing");
    }).catch(() => {
      alert("File musik belum ditambahkan ya ♡");
    });
  } else {
    music.pause();
    musicBtn.classList.remove("playing");
  }
});
