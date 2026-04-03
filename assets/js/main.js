
  function initPanelsAndNavbar() {
    const panels = document.querySelectorAll(".panel");
    const navbar = document.querySelector(".navbar");

    // Fade-in observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    panels.forEach((panel) => observer.observe(panel));

    // Navbar scroll behavior
    function handleScroll() {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll);
  }

  function initMusicPlayer() {
    const btn = document.getElementById("music-btn");
    const audio = document.getElementById("bgm");
    let playing = false;

    function toggleMusic() {
      if (!playing) {
        audio.play()
          .then(() => {
            playing = true;
            btn.textContent = "⏸️ Pause Music";
          })
          .catch((err) => {
            console.log("Audio play prevented:", err);
            alert("Please click again to allow audio playback.");
          });
      } else {
        audio.pause();
        playing = false;
        btn.textContent = "▶️ Play Music";
      }
    }

    btn.addEventListener("click", toggleMusic);
  }
    // Master initializer (recommended)
  function initApp() {
    initPanelsAndNavbar();
    initMusicPlayer();
  }

  // Ensure DOM is ready
  document.addEventListener("DOMContentLoaded", initApp);