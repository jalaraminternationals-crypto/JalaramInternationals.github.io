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

<script type="text/javascript">
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: 'en'
      }, 'google_translate_element');
    }

    function translateLanguage(lang) {
      if (lang === '') return;

      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
      }
    }
  </script>
  <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
