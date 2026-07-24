/* ==========================================
        HAMBURGER MENU
========================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* ==========================================
        CLOSE MENU AFTER CLICK
========================================== */

document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

/* ==========================================
        TYPING ANIMATION
========================================== */

const words = [
  "MERN Stack Developer",

  "Frontend Developer",

  "React Developer",

  "Node.js Developer",

  "Full Stack Developer",
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {
  if (!typing) return;

  const currentWord = words[wordIndex];

  if (!deleting) {
    typing.textContent = currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {
      deleting = true;

      setTimeout(typeEffect, 1500);

      return;
    }
  } else {
    typing.textContent = currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      deleting = false;

      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();

/* ==========================================
        SCROLL REVEAL
========================================== */

const reveals = document.querySelectorAll(".reveal");

function revealSection() {
  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;

    const top = section.getBoundingClientRect().top;

    if (top < windowHeight - 120) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSection);

revealSection();

/* ==========================================
        ACTIVE NAVBAR
========================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("#navLinks a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    const sectionHeight = section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* ==========================================
        HEADER EFFECT
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,.55)";
    header.style.backdropFilter = "blur(18px)";
  } else {
    header.style.background = "rgba(255,255,255,.05)";
    header.style.backdropFilter = "blur(15px)";
  }
});

/* ==========================================
        BACK TO TOP
========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (!topBtn) return;

  if (window.scrollY > 500) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  });
}

/* ==========================================
        CONTACT FORM
========================================== */

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("✅ Thank you! Your message has been sent successfully.");

    form.reset();
  });
}

/* ==========================================
        HERO IMAGE EFFECT
========================================== */

const profile = document.querySelector(".hero-image img");

if (profile) {
  profile.addEventListener("mousemove", () => {
    profile.style.transform = "scale(1.05)";
  });

  profile.addEventListener("mouseleave", () => {
    profile.style.transform = "scale(1)";
  });
}

/* ==========================================
        BUTTON HOVER EFFECT
========================================== */

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-5px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0px)";
  });
});

/* ==========================================
        LOADING ANIMATION
========================================== */

window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});
