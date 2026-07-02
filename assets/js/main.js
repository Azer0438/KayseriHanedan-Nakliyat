const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const mobileClose = document.querySelector(".mobile-close");
if (menuToggle && mobileNav) {
  const mobileSearch = mobileNav.querySelector(".mobile-search input");
  const resetMobileSearch = () => {
    if (!mobileSearch) return;
    mobileSearch.value = "";
    mobileNav.querySelectorAll(".is-hidden").forEach((item) => item.classList.remove("is-hidden"));
  };

  const setMenuOpen = (isOpen) => {
    mobileNav.classList.toggle("open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    if (!isOpen) resetMobileSearch();
  };

  menuToggle.addEventListener("click", () => setMenuOpen(!mobileNav.classList.contains("open")));
  mobileClose?.addEventListener("click", () => setMenuOpen(false));

  mobileNav.querySelectorAll(".has-dropdown > a").forEach((link) => {
    link.setAttribute("aria-expanded", "false");
    link.addEventListener("click", (event) => {
      if (!event.target.closest(".dropdown-toggle")) return;
      event.preventDefault();
      const item = link.parentElement;
      const isOpen = item.classList.toggle("open");
      link.setAttribute("aria-expanded", String(isOpen));
    });
  });

  mobileSearch?.addEventListener("input", () => {
    const term = mobileSearch.value.trim().toLocaleLowerCase("tr-TR");
    mobileNav.querySelectorAll(":scope > ul > li").forEach((item) => {
      const text = item.textContent.toLocaleLowerCase("tr-TR");
      const matches = !term || text.includes(term);
      item.classList.toggle("is-hidden", !matches);
      if (term && matches && item.classList.contains("has-dropdown")) {
        item.classList.add("open");
        item.children[0]?.setAttribute("aria-expanded", "true");
      }
    });
  });

  mobileNav.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (link && !link.parentElement.classList.contains("has-dropdown")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
}

document.querySelectorAll("[data-hero-carousel]").forEach((carousel) => {
  const slides = [...carousel.querySelectorAll(".hero-slide")];
  const dotsContainer = carousel.closest(".hero") ? carousel.closest(".hero").querySelector(".hero-dots") : carousel.querySelector(".hero-dots");
  const dots = dotsContainer ? [...dotsContainer.querySelectorAll("button")] : [];
  if (slides.length < 2) return;

  let active = 0;
  const show = (index) => {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === active;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });
    dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === active));
  };

  show(active);

  let timer = setInterval(() => show(active + 1), 5000);
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(timer);
      show(index);
      timer = setInterval(() => show(active + 1), 5000);
    });
  });
});

document.querySelectorAll(".quote-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const lines = [
      "Merhaba, Kayseri Hanedan Nakliyat web sitesinden teklif almak istiyorum.",
      "",
      "Ad Soyad: " + (data.get("name") || ""),
      "Telefon: " + (data.get("phone") || ""),
      "Tasima Turu: " + (data.get("service") || ""),
      "Alinacak Adres / Ilce: " + (data.get("from") || ""),
      "Teslim Adresi / Ilce: " + (data.get("to") || ""),
      "Kat Bilgisi: " + (data.get("floor") || ""),
      "Asansor Durumu: " + (data.get("elevator") || ""),
      "Mesaj: " + (data.get("message") || "")
    ];
    const phone = form.dataset.whatsapp || "905337813804";
    window.location.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(lines.join("\n"));
  });
});

// Gallery Tabs
document.querySelectorAll(".gallery-tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tab = btn.getAttribute("data-tab");
    document.querySelectorAll(".gallery-tab-btn").forEach((b) => b.classList.remove("active"));
    document.querySelectorAll(".gallery-tab-pane").forEach((pane) => pane.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(tab + "-tab")?.classList.add("active");
  });
});