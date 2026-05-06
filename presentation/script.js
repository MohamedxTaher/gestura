(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const slideCounter = document.getElementById("slideCounter");
  const progressBar = document.getElementById("progressBar");
  const demoVideo = document.getElementById("demoVideo");
  const particleCanvas = document.getElementById("particleCanvas");
  const ctx = particleCanvas.getContext("2d");

  const teamMembers = [
    {
      name: "Mohamed Taher El-Refaey",
      role: "Project Introduction & Main Idea",
      speech: "Good morning. We are Gayar Vision, and our project is Gestura, a real-time hand gesture game controller. The main idea is simple: instead of using a keyboard or controller, the user can control a game using only hand gestures through a webcam."
    },
    {
      name: "Mohamed Hassan El-Kassas",
      role: "Problem & Motivation",
      speech: "The problem we focused on is that most games depend on physical input devices. Gestura explores a more natural and touchless interaction method using computer vision, which makes the experience more interactive and more engaging."
    },
    {
      name: "Ziad Mohamed Refaey",
      role: "System Pipeline",
      speech: "The system starts by reading frames from the webcam. Then OpenCV handles the video stream, MediaPipe detects hand landmarks, and our rule-based logic understands the gesture. Finally, the gesture is converted into a keyboard or mouse action."
    },
    {
      name: "Ahmed Youssef Abdelhamid",
      role: "Gesture Recognition",
      speech: "The gesture recognition layer depends on predefined hand patterns, such as raised fingers, fist, open palm, or pinch movement. These gestures are then mapped to game actions like moving, jumping, braking, or swiping."
    },
    {
      name: "Ahmed Hany Khairy",
      role: "Technology Stack",
      speech: "The project is built using Python, OpenCV, MediaPipe, and Pynput. MediaPipe gives us accurate hand landmarks, OpenCV manages the camera feed, and Pynput sends the final control input to the game."
    },
    {
      name: "Kareem Mohamed Zaki",
      role: "Demo Explanation",
      speech: "In the demo, you can see that the webcam tracks the user's hand in real time. When the user changes the gesture, the game receives the corresponding action immediately, which proves that the system is interactive and practical."
    },
    {
      name: "Mohamed Gaber Aboud",
      role: "Conclusion & Future Work",
      speech: "Gestura is a practical computer vision project that connects hand tracking with real game control. In the future, it can be improved by adding more gestures, smoother control, a calibration screen, and support for more games."
    }
  ];

  let currentSlide = 0;
  let currentMember = 0;
  let particles = [];

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function renderTeamMember() {
    const member = teamMembers[currentMember];
    document.getElementById("memberCounter").textContent = `Member ${currentMember + 1} / ${teamMembers.length}`;
    document.getElementById("memberName").textContent = member.name;
    document.getElementById("memberRole").textContent = member.role;
    document.getElementById("memberSpeech").textContent = member.speech;

    const dots = document.getElementById("memberDots");
    dots.innerHTML = "";
    teamMembers.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", `Show member ${index + 1}`);
      dot.className = index === currentMember ? "is-active" : "";
      dot.addEventListener("click", () => {
        currentMember = index;
        renderTeamMember();
      });
      dots.appendChild(dot);
    });
  }

  function showSlide(index) {
    currentSlide = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === currentSlide);
    });

    if (slides[currentSlide].dataset.slide === "team") {
      renderTeamMember();
    }

    const displayIndex = currentSlide + 1;
    slideCounter.textContent = `${pad(displayIndex)} / ${pad(slides.length)}`;
    progressBar.style.width = `${(displayIndex / slides.length) * 100}%`;

    if (demoVideo && slides[currentSlide].dataset.slide !== "demo") {
      demoVideo.pause();
    }
  }

  function next() {
    if (slides[currentSlide].dataset.slide === "team" && currentMember < teamMembers.length - 1) {
      currentMember += 1;
      renderTeamMember();
      return;
    }

    showSlide(currentSlide + 1);
  }

  function previous() {
    if (slides[currentSlide].dataset.slide === "team" && currentMember > 0) {
      currentMember -= 1;
      renderTeamMember();
      return;
    }

    showSlide(currentSlide - 1);
  }

  document.addEventListener("click", (event) => {
    const target = event.target.closest("[data-action]");
    if (!target) return;

    const action = target.dataset.action;
    if (action === "next") next();
    if (action === "prev") previous();
    if (action === "start") showSlide(1);
    if (action === "restart") {
      currentMember = 0;
      showSlide(0);
    }
    if (action === "demo" && demoVideo) {
      demoVideo.play();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
      event.preventDefault();
      next();
    }

    if (event.key === "ArrowLeft" || event.key === "PageUp") {
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
    particleCanvas.width = Math.floor(window.innerWidth * ratio);
    particleCanvas.height = Math.floor(window.innerHeight * ratio);
    particleCanvas.style.width = `${window.innerWidth}px`;
    particleCanvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.max(42, Math.floor((window.innerWidth * window.innerHeight) / 24000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.26,
      vy: (Math.random() - 0.5) * 0.26,
      size: 1 + Math.random() * 1.8,
      hue: Math.random() > 0.5 ? 188 : 260
    }));
  }

  function drawParticles() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.globalCompositeOperation = "lighter";

    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
      if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${particle.hue}, 100%, 68%, 0.42)`;
      ctx.fill();

      for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
        const other = particles[nextIndex];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.hypot(dx, dy);

        if (distance < 118) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = `rgba(99, 244, 255, ${0.12 * (1 - distance / 118)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    });

    ctx.globalCompositeOperation = "source-over";
    requestAnimationFrame(drawParticles);
  }

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  drawParticles();
  renderTeamMember();
  showSlide(0);
})();
