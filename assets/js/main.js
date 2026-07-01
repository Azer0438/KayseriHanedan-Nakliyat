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