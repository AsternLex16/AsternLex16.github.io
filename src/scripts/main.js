const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const themeToggle = document.querySelector(".theme-toggle");
const navLinks = [...document.querySelectorAll(".main-nav a")];
const sections = [...document.querySelectorAll("main section[id]")];
const reveals = document.querySelectorAll(".reveal");
const filterButtons = document.querySelectorAll(".filter");
const skills = document.querySelectorAll(".skill-list span");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

const getActiveTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return systemTheme.matches ? "dark" : "light";
};

const translate = (key) => window.portfolioI18n?.t(key) || key;

const applyTheme = (theme, shouldSave = false) => {
    document.documentElement.dataset.theme = theme;
    const labelKey = theme === "dark" ? "theme.darkAria" : "theme.lightAria";
    const titleKey = theme === "dark" ? "theme.darkTitle" : "theme.lightTitle";
    themeToggle.setAttribute("aria-label", translate(labelKey));
    themeToggle.setAttribute("title", translate(titleKey));

    if (shouldSave) {
        localStorage.setItem("theme", theme);
    }
};

applyTheme(getActiveTheme());

toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
});

themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme, true);
});

systemTheme.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        applyTheme(getActiveTheme());
    }
});

window.addEventListener("portfolio:languagechange", () => {
    applyTheme(document.documentElement.dataset.theme || getActiveTheme());
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        header.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
    });
});

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.16 }
);

reveals.forEach((element) => revealObserver.observe(element));

const navObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navLinks.forEach((link) => {
                link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
            });
        });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
);

sections.forEach((section) => navObserver.observe(section));

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((item) => item.classList.toggle("active", item === button));
        skills.forEach((skill) => {
            const shouldShow = filter === "all" || skill.dataset.category === filter;
            skill.classList.toggle("hidden", !shouldShow);
        });
    });
});

console.log("Hola, soy Joseph. Este portfolio también está pensado como evidencia de criterio QA.");
