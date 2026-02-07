
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

const roseContainer = document.getElementById("rose-petals-container");

function createRosePetal() {
  const petal = document.createElement("div");
  petal.classList.add("rose-petal");

  // Random horizontal start
  petal.style.left = Math.random() * window.innerWidth + "px";

  // Random fall duration (4–8s)
  const duration = 4 + Math.random() * 4;
  petal.style.animationDuration = duration + "s";

  // Random size (15–30px)
  const size = 15 + Math.random() * 15;
  petal.style.width = size + "px";
  petal.style.height = size + "px";

  roseContainer.appendChild(petal);

  // Remove petal after falling
  petal.addEventListener("animationend", () => petal.remove());
}

// Spawn petals every 0.4s
setInterval(createRosePetal, 400);

