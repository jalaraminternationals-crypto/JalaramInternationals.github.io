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
  // Function to initialize Google Translate
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: 'en,es,fr,de,zh-CN,ar,hi,ja,ru,gu',
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
  }

  // Language switcher function
  function translateLanguage(lang) {
    if (!lang) return;
    const from = 'en';
    document.cookie = 'googtrans=/' + from + '/' + lang + ';path=/';
    window.location.reload();
  }
</script>


