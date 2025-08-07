// ? Toggle mobile menu visibility
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
    // ? Make dropdowns work on mobile
    document.querySelectorAll('nav .dropdown > a').forEach(link => {
        link.addEventListener('click', e => {
            if (window.innerWidth < 768) {
            e.preventDefault(); // prevent default link behavior
const menu = link.nextElementSibling;
if (menu) menu.classList.toggle('show');
}
});
});

// ? Make sub-dropdowns work on mobile
document.querySelectorAll('nav .dropdown-sub > a').forEach(link => {
    link.addEventListener('click', e => {
        if (window.innerWidth < 768) {
        e.preventDefault();
const submenu = link.nextElementSibling;
if (submenu) submenu.classList.toggle('show');
}
});
});

// ? Language translator dropdown logic
const languageDropdown = document.getElementById('languageDropdown');
if (languageDropdown) {
    // ? Add custom styling (can be moved to CSS for better practice)
    languageDropdown.style.padding = '10px';
    languageDropdown.style.fontSize = '16px';
    languageDropdown.style.border = '2px solid #003366';
    languageDropdown.style.borderRadius = '8px';
    languageDropdown.style.backgroundColor = '#f1f1f1';
    languageDropdown.style.color = '#003366';
    languageDropdown.style.cursor = 'pointer';
    languageDropdown.style.marginTop = '10px';

    // ?? Detect change and trigger Google Translate
    languageDropdown.addEventListener('change', function () {
        const lang = this.value;
        if (!lang) return;

        const interval = setInterval(() => {
            const frame = document.querySelector('iframe.goog-te-menu-frame');
        if (!frame) return;

        const innerDoc = frame.contentDocument || frame.contentWindow.document;
        const items = innerDoc.querySelectorAll('.goog-te-menu2-item span.text');

        for (const item of items) {
          if (item.innerHTML.toLowerCase().includes(lang.toLowerCase())) {
            item.click();
            clearInterval(interval);
        break;
    }
    }
}, 500);
});
}
});

// ? Google Translate loader
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        autoDisplay: false
    }, 'google_translate_element');
}

// ? Inject Google Translate script dynamically
const translateScript = document.createElement('script');
translateScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
document.head.appendChild(translateScript);
