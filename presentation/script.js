(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const dots = document.getElementById("slideDots");
  const counter = document.getElementById("slideCounter");
  const progress = document.getElementById("progressBar");
  const video = document.getElementById("demoVideo");
  const canvas = document.getElementById("ambientCanvas");
  const ctx = canvas.getContext("2d");

  let activeIndex = 0;
  let nodes = [];
  let animationFrame = null;

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function buildDots() {
    dots.innerHTML = "";
    slides.forEach((slide, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", `Go to slide ${index + 1}: ${slide.dataset.label}`);
      button.addEventListener("click", () => showSlide(index));
      dots.appendChild(button);
    });
  }

  function showSlide(index) {
    const nextIndex = Math.max(0, Math.min(slides.length - 1, index));
    activeIndex = nextIndex;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === activeIndex);
    });

    Array.from(dots.children).forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === activeIndex);
    });

    const current = activeIndex + 1;
    counter.textContent = `${pad(current)} / ${pad(slides.length)}`;
    progress.style.width = `${(current / slides.length) * 100}%`;
    window.location.hash = `slide-${current}`;

    if (video && slides[activeIndex].dataset.label !== "Demo") {
      video.pause();
    }
  }

  function next() {
    showSlide(activeIndex + 1);
  }

  function previous() {
    showSlide(activeIndex - 1);
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-action], [data-jump]");
    if (!trigger) return;

    if (trigger.dataset.jump) {
      event.preventDefault();
      showSlide(Number(trigger.dataset.jump));
      return;
    }

    const action = trigger.dataset.action;
    if (action === "next") next();
    if (action === "prev") previous();
    if (action === "restart") showSlide(0);
    if (action === "play-demo" && video) {
      video.currentTime = 0;
      video.play();
    }
  });

  document.addEventListener("keydown", (event) => {
    const forwardKeys = ["ArrowRight", "PageDown", " "];
    const backKeys = ["ArrowLeft", "PageUp"];

    if (forwardKeys.includes(event.key)) {
      event.preventDefault();
      next();
    }

    if (backKeys.includes(event.key)) {
      event.preventDefault();
      previous();
    }

    if (event.key === "Home") {
      event.preventDefault();
      showSlide(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      showSlide(slides.length - 1);
    }
  });

  function resizeCanvas() {
    const ratio = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.max(52, Math.floor((width * height) / 18000));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.34,
      vy: (Math.random() - 0.5) * 0.34,
      radius: Math.random() * 1.8 + 0.7,
      hue: Math.random() > 0.58 ? 270 : 188
    }));
  }

  function drawAmbient() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    nodes.forEach((node, index) => {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < -20) node.x = width + 20;
      if (node.x > width + 20) node.x = -20;
      if (node.y < -20) node.y = height + 20;
      if (node.y > height + 20) node.y = -20;

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${node.hue}, 100%, 68%, 0.48)`;
      ctx.fill();

      for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
        const other = nodes[nextIndex];
        const dx = node.x - other.x;
        const dy = node.y - other.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 128) {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `rgba(88, 246, 255, ${0.14 * (1 - distance / 128)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    });

    ctx.globalCompositeOperation = "source-over";
    animationFrame = requestAnimationFrame(drawAmbient);
  }

  function initialSlideFromHash() {
    const match = window.location.hash.match(/slide-(\d+)/);
    if (!match) return 0;
    return Number(match[1]) - 1;
  }

  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("beforeunload", () => cancelAnimationFrame(animationFrame));

  buildDots();
  resizeCanvas();
  drawAmbient();
  showSlide(initialSlideFromHash());
  requestAnimationFrame(() => document.querySelector(".deck").classList.add("is-ready"));
})();
