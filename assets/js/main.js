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
    
<script>
function translateLanguage(lang) {
    if (lang) {
        const currentUrl = window.location.href;
        const encodedUrl = encodeURIComponent(currentUrl);
        const translateUrl = `https://translate.google.com/translate?hl=${lang}&sl=auto&tl=${lang}&u=${encodedUrl}`;
        window.location.href = translateUrl;
    }
}
</script>




