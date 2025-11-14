const navigationButton = document.getElementById('open-menu');
const changeThemeButton = document.getElementById('change-theme')
const navigation = document.getElementById('nav-menu');
const navigationLinks = document.querySelectorAll('.nav-link');
const gitHubLogo = document.getElementById('github-logo');
const mailLogo = document.getElementById('mail-logo');
const tabletWidth = 768;

const removeNavVisibleClass = () => {
    if (navigation.classList.contains('nav-visible')) {
        navigation.classList.remove('nav-visible');
    }
}

const toggleTheme = (theme) => {
    if (theme === 'dark') {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        navigationButton.style.backgroundImage = 'url("assets/menu_icon_dark.svg")';
        changeThemeButton.style.backgroundImage = 'url("assets/dark_mode.svg")';
        gitHubLogo.style.backgroundImage = 'url(assets/github_mark_dark.svg)';
        mailLogo.style.backgroundImage = 'url(assets/mail_dark.svg)';
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        navigationButton.style.backgroundImage = 'url("assets/menu_icon_light.svg")';
        changeThemeButton.style.backgroundImage = 'url("assets/light_mode.svg")';
        gitHubLogo.style.backgroundImage = 'url(assets/github_mark_white.svg)';
        mailLogo.style.backgroundImage = 'url(assets/mail_light.svg)';
    }
}

navigationButton.addEventListener('click', () => navigation.classList.toggle('nav-visible'));

changeThemeButton.addEventListener('click', () => toggleTheme(document.body.classList[0] == 'light' ? 'dark' : 'light'));

navigationLinks.forEach((link) => {
    link.addEventListener('click', removeNavVisibleClass);
});

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleTheme('dark');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    toggleTheme(e.matches ? 'dark' : 'light');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= tabletWidth) {
        removeNavVisibleClass();
    }
})