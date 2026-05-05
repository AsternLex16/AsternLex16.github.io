(function () {
    const supportedLanguages = ["es", "en"];
    const fallbackLanguage = "es";
    const dictionaries = {};
    const languageToggle = document.querySelector(".language-toggle");

    const normalizeLanguage = (language) => {
        const shortCode = String(language || "").toLowerCase().split("-")[0];
        return supportedLanguages.includes(shortCode) ? shortCode : fallbackLanguage;
    };

    const getBrowserLanguage = () => normalizeLanguage(navigator.language || navigator.userLanguage);

    const getInitialLanguage = () => {
        const savedLanguage = localStorage.getItem("language");
        return savedLanguage ? normalizeLanguage(savedLanguage) : getBrowserLanguage();
    };

    const getNestedValue = (dictionary, key) => {
        return key.split(".").reduce((current, part) => current?.[part], dictionary);
    };

    const loadDictionary = async (language) => {
        const normalizedLanguage = normalizeLanguage(language);
        if (dictionaries[normalizedLanguage]) return dictionaries[normalizedLanguage];

        const response = await fetch(`src/locales/${normalizedLanguage}.json`);
        if (!response.ok) {
            throw new Error(`Unable to load locale: ${normalizedLanguage}`);
        }

        dictionaries[normalizedLanguage] = await response.json();
        return dictionaries[normalizedLanguage];
    };

    const getTranslation = (key, language = window.portfolioI18n?.language) => {
        const dictionary = dictionaries[language] || {};
        const fallbackDictionary = dictionaries[fallbackLanguage] || {};
        return getNestedValue(dictionary, key) || getNestedValue(fallbackDictionary, key) || key;
    };

    const applyTextTranslations = (language) => {
        document.querySelectorAll("[data-i18n]").forEach((element) => {
            element.textContent = getTranslation(element.dataset.i18n, language);
        });
    };

    const applyAttributeTranslations = (language) => {
        document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
            const pairs = element.dataset.i18nAttr.split(";").map((item) => item.trim()).filter(Boolean);

            pairs.forEach((pair) => {
                const [attribute, key] = pair.split(":").map((item) => item.trim());
                if (attribute && key) {
                    element.setAttribute(attribute, getTranslation(key, language));
                }
            });
        });
    };

    const applyLanguage = async (language, shouldSave = false) => {
        const nextLanguage = normalizeLanguage(language);
        await Promise.all([loadDictionary(fallbackLanguage), loadDictionary(nextLanguage)]);

        window.portfolioI18n.language = nextLanguage;
        document.documentElement.lang = nextLanguage;
        document.documentElement.dataset.language = nextLanguage;

        applyTextTranslations(nextLanguage);
        applyAttributeTranslations(nextLanguage);
        document.title = getTranslation("meta.title", nextLanguage);

        if (shouldSave) {
            localStorage.setItem("language", nextLanguage);
        }

        window.dispatchEvent(new CustomEvent("portfolio:languagechange", { detail: { language: nextLanguage } }));
    };

    const getNextLanguage = () => {
        const currentIndex = supportedLanguages.indexOf(window.portfolioI18n.language);
        return supportedLanguages[(currentIndex + 1) % supportedLanguages.length];
    };

    window.portfolioI18n = {
        language: getInitialLanguage(),
        t: getTranslation,
        applyLanguage,
        supportedLanguages
    };

    applyLanguage(window.portfolioI18n.language).catch((error) => {
        console.error("i18n initialization failed", error);
    });

    languageToggle?.addEventListener("click", () => {
        applyLanguage(getNextLanguage(), true).catch((error) => {
            console.error("language switch failed", error);
        });
    });
})();
