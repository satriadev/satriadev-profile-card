const language = {
    id: {
        desc: 'Halo',
    },
    en: {
        desc: 'hi',
    }
};

const langBtn = document.getElementById('langBtn');
let curLang = 'id';

const updateLang = (lang) => {
    document.getElementById('desc').textContent = language[lang].desc;
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