const root = document.documentElement;
const body = document.body;
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const themeToggle = document.querySelector(".theme-toggle");
const navLinks = [...document.querySelectorAll(".main-nav a")];
const sections = [...document.querySelectorAll("main section[id]")];
const progressBar = document.querySelector(".scroll-progress span");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const translate = (key) => window.portfolioI18n?.t(key) || key;

const getTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return systemTheme.matches ? "dark" : "light";
};

const applyTheme = (theme, save = false) => {
    root.dataset.theme = theme;
    const darkModeActive = theme === "dark";
    const labelKey = darkModeActive ? "theme.darkAria" : "theme.lightAria";
    const titleKey = darkModeActive ? "theme.darkTitle" : "theme.lightTitle";
    const themeColor = darkModeActive ? "#0b1211" : "#f3f5f2";

    themeToggle?.setAttribute("aria-label", translate(labelKey));
    themeToggle?.setAttribute("title", translate(titleKey));
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themeColor);

    if (save) localStorage.setItem("theme", theme);
};

const closeNavigation = () => {
    header?.classList.remove("open");
    body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", translate("nav.menuAria"));
};

const openNavigation = () => {
    header?.classList.add("open");
    body.classList.add("nav-open");
    navToggle?.setAttribute("aria-expanded", "true");
    navToggle?.setAttribute("aria-label", translate("nav.closeAria"));
};

const setupTabs = ({ tabSelector, panelSelector, dataKey }) => {
    const tabs = [...document.querySelectorAll(tabSelector)];
    const panels = [...document.querySelectorAll(panelSelector)];

    if (!tabs.length || !panels.length) return;

    const activate = (tab, focus = false) => {
        const value = tab.dataset[dataKey];

        tabs.forEach((item) => {
            const active = item === tab;
            item.classList.toggle("active", active);
            item.setAttribute("aria-selected", String(active));
            item.tabIndex = active ? 0 : -1;
        });

        panels.forEach((panel) => {
            const active = panel.dataset[`${dataKey}Panel`] === value;
            panel.classList.toggle("active", active);
            panel.hidden = !active;
        });

        if (focus) tab.focus();
    };

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => activate(tab));
        tab.addEventListener("keydown", (event) => {
            if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;

            event.preventDefault();
            let nextIndex = index;

            if (event.key === "Home") nextIndex = 0;
            if (event.key === "End") nextIndex = tabs.length - 1;
            if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % tabs.length;
            if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + tabs.length) % tabs.length;

            activate(tabs[nextIndex], true);
        });
    });
};

const formatNumber = (value) => {
    const language = window.portfolioI18n?.language || "es";
    return new Intl.NumberFormat(language === "en" ? "en-US" : "es-PE").format(value);
};

const animateCounter = (element) => {
    const target = Number(element.dataset.count);
    if (!Number.isFinite(target)) return;

    if (reduceMotion.matches) {
        element.textContent = formatNumber(target);
        return;
    }

    const duration = target >= 1000 ? 1200 : 850;
    const startedAt = performance.now();

    const tick = (now) => {
        const elapsed = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - elapsed, 3);
        element.textContent = formatNumber(Math.round(target * eased));
        if (elapsed < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
};

applyTheme(getTheme());
setupTabs({ tabSelector: ".case-tab", panelSelector: ".case-panel", dataKey: "case" });
setupTabs({ tabSelector: ".stack-tab", panelSelector: ".stack-panel", dataKey: "stack" });

themeToggle?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme, true);
});

navToggle?.addEventListener("click", () => {
    const isOpen = header?.classList.contains("open");
    if (isOpen) closeNavigation();
    else openNavigation();
});

navLinks.forEach((link) => link.addEventListener("click", closeNavigation));

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header?.classList.contains("open")) {
        closeNavigation();
        navToggle?.focus();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeNavigation();
});

systemTheme.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) applyTheme(getTheme());
});

const revealElements = document.querySelectorAll(".reveal");
const counterElements = document.querySelectorAll("[data-count]");

if ("IntersectionObserver" in window && !reduceMotion.matches) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px" }
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    const counterObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.5 }
    );

    counterElements.forEach((element) => counterObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("visible"));
    counterElements.forEach((element) => {
        element.textContent = formatNumber(Number(element.dataset.count));
    });
}

if ("IntersectionObserver" in window) {
    const navigationObserver = new IntersectionObserver(
        (entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

            if (!visible) return;

            navLinks.forEach((link) => {
                link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
            });
        },
        { rootMargin: "-28% 0px -62% 0px", threshold: [0, 0.1, 0.25] }
    );

    sections.forEach((section) => navigationObserver.observe(section));
}

let scrollScheduled = false;

const updateScrollState = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;

    if (progressBar) progressBar.style.width = `${progress * 100}%`;
    header?.classList.toggle("scrolled", window.scrollY > 14);
    scrollScheduled = false;
};

window.addEventListener(
    "scroll",
    () => {
        if (scrollScheduled) return;
        scrollScheduled = true;
        requestAnimationFrame(updateScrollState);
    },
    { passive: true }
);

window.addEventListener("portfolio:languagechange", () => {
    applyTheme(root.dataset.theme || getTheme());
    closeNavigation();

    document.querySelectorAll("[data-count]").forEach((element) => {
        element.textContent = formatNumber(Number(element.dataset.count));
    });
});

document.querySelector("[data-current-year]").textContent = String(new Date().getFullYear());
updateScrollState();
