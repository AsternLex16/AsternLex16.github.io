const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const themeToggle = document.querySelector(".theme-toggle");
const navLinks = [...document.querySelectorAll(".main-nav a")];
const sections = [...document.querySelectorAll("main section[id]")];
const reveals = document.querySelectorAll(".reveal");
const filterButtons = document.querySelectorAll(".filter");
const skills = document.querySelectorAll(".skill-list span");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
const erpRows = [...document.querySelectorAll("[data-erp-row]")];
const erpSteps = [...document.querySelectorAll("[data-erp-step]")];
const erpTourTitle = document.querySelector("[data-erp-tour-title]");
const erpTourText = document.querySelector("[data-erp-tour-text]");
const erpCreateButton = document.querySelector("[data-erp-action='create']");

const erpData = [
    { title: "OP-1046 - Empresa 1", product: "OKRs & KPIs", amount: "$25,000", owner: "Consultor 1", stage: "Open" },
    { title: "OP-1043 - Empresa 2", product: "Modelo operativo", amount: "$18,500", owner: "Consultor 2", stage: "Proposal" },
    { title: "OP-1038 - Empresa 3", product: "Transformacion", amount: "$50,000", owner: "Consultor 3", stage: "Open" },
    { title: "OP-1011 - Empresa 4", product: "Liderazgo", amount: "$5,600", owner: "Consultor 4", stage: "Closed Won" }
];

const erpTourKeys = [
    ["erp.stepOneTitle", "erp.stepOneText"],
    ["erp.stepTwoTitle", "erp.stepTwoText"],
    ["erp.stepThreeTitle", "erp.stepThreeText"],
    ["erp.stepFourTitle", "erp.stepFourText"]
];

let activeErpStep = 0;

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

const selectErpRow = (index) => {
    const item = erpData[index];
    if (!item) return;

    erpRows.forEach((row) => row.classList.toggle("selected", Number(row.dataset.erpRow) === index));

    const title = document.querySelector("[data-erp-detail-title]");
    const product = document.querySelector("[data-erp-detail-product]");
    const amount = document.querySelector("[data-erp-detail-amount]");
    const owner = document.querySelector("[data-erp-detail-owner]");
    const stage = document.querySelector("[data-erp-detail-stage]");

    if (title) title.textContent = item.title;
    if (product) product.textContent = item.product;
    if (amount) amount.textContent = item.amount;
    if (owner) owner.textContent = item.owner;
    if (stage) stage.textContent = item.stage;
};

function renderErpStep(index) {
    const keys = erpTourKeys[index] || erpTourKeys[0];
    activeErpStep = index;

    erpSteps.forEach((step) => step.classList.toggle("active", Number(step.dataset.erpStep) === index));

    if (erpTourTitle && erpTourText) {
        erpTourTitle.textContent = translate(keys[0]);
        erpTourText.textContent = translate(keys[1]);
    }

    selectErpRow(index);
}

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
    renderErpStep(activeErpStep);
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

erpRows.forEach((row) => {
    row.addEventListener("click", () => {
        selectErpRow(Number(row.dataset.erpRow));
    });
});

erpSteps.forEach((step) => {
    step.addEventListener("click", () => {
        renderErpStep(Number(step.dataset.erpStep));
    });
});

erpCreateButton?.addEventListener("click", () => {
    renderErpStep(1);
});

renderErpStep(activeErpStep);

console.log("Hola, soy Joseph. Este portfolio tambien esta pensado como evidencia de criterio QA.");
