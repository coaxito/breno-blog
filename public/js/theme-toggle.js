document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIconImg = document.getElementById('theme-icon-img');
    const docElement = document.documentElement;
    const ICONS = {
        light: "/icons/light_mode.svg",
        dark: "/icons/dark_mode.svg"
    };

    function setTheme(isDark) {
        docElement.classList.toggle('dark-theme', isDark);
        themeIconImg && (themeIconImg.src = isDark ? ICONS.dark : ICONS.light);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Detecta preferência salva ou do sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme ? savedTheme === 'dark' : prefersDark;

    setTheme(isDark);

    themeToggleButton?.addEventListener('click', () => {
        setTheme(!docElement.classList.contains('dark-theme'));
    });
});
