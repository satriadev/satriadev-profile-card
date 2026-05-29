const language = {
    id: {
        desc: 'Siap mengubah tantangan Anda menjadi solusi digital yang nyata?',
        contact: 'Hubungi Saya!'
    },
    en: {
        desc: 'Ready to turn your challenges into real digital solutions?',
        contact: 'Contact Me!'
    }
};

const langBtn = document.getElementById('langBtn');
let curLang = 'id';

const updateLang = (lang) => {
    document.getElementById('desc').textContent = language[lang].desc;
    document.getElementById('contact').textContent = language[lang].contact;
    langBtn.textContent = lang === 'en' ? 'EN' : 'ID';
};

langBtn.addEventListener('click', () => {
    curLang = curLang === 'id' ? 'en' : 'id';
    updateLang(curLang);
});

const themeBtn = document.getElementById('themeBtn');
const htmlEl= document.documentElement;

if (localStorage.getItem('theme') === 'dark') htmlEl.classList.add('dark');
else htmlEl.classList.remove('dark');

const updateTheme = (theme) => {
    if (theme === 'dark') themeBtn.documentElement ;
};

themeBtn.addEventListener('click', () => {
    htmlEl.classList.toggle('dark');
    localStorage.setItem('theme', htmlEl.classList.contains('dark') ? 'dark' : 'light');
});