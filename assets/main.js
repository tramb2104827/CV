/* Mobile nav + active section highlight + footer year */
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const nav = document.getElementById("primary-nav");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));

  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Mở menu");
  }

  function openNav() {
    if (!nav || !toggle) return;
    nav.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Đóng menu");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.contains("open");
      if (isOpen) closeNav();
      else openNav();
    });

    document.addEventListener("click", (e) => {
      if (!nav.classList.contains("open")) return;
      const target = e.target;
      if (!(target instanceof Element)) return;
      const clickedInside = nav.contains(target) || toggle.contains(target);
      if (!clickedInside) closeNav();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });
  }

  navLinks.forEach((a) => {
    a.addEventListener("click", () => closeNav());
  });

  // Active section highlight
  const sectionIds = navLinks
    .map((a) => a.getAttribute("href"))
    .filter((h) => h && h.startsWith("#"))
    .map((h) => h.slice(1));

  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  if (sections.length) {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0))[0];
        if (!visible) return;

        const id = visible.target.id;
        navLinks.forEach((a) => {
          const href = a.getAttribute("href");
          const active = href === `#${id}`;
          a.classList.toggle("active", active);
          if (active) a.setAttribute("aria-current", "page");
          else a.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0.05, 0.15, 0.25] }
    );

    sections.forEach((s) => obs.observe(s));
  }
})();

