const body = document.querySelector('body');
const darkBtn = document.getElementById('dark-btn');
const lightBtn = document.getElementById('light-btn');

const toggleDarkMode = () => {
    body.classList.toggle('dark-mode');
}

const userModePreference = localStorage.getItem('mode');

if (userModePreference) {
    body.classList.add(userModePreference);
    if (userModePreference === 'dark-mode') {
        darkBtn.classList.add('hidden');
        lightBtn.classList.remove('hidden');
    } else {
        darkBtn.classList.remove('hidden');
        lightBtn.classList.add('hidden');
    }
}

darkBtn.addEventListener('click', () => {
    localStorage.setItem('mode', 'dark-mode');
    toggleDarkMode();
    darkBtn.classList.add('hidden');
    lightBtn.classList.remove('hidden');
});

lightBtn.addEventListener('click', () => {
    localStorage.setItem('mode', 'light-mode');
    toggleDarkMode();
    lightBtn.classList.add('hidden');
    darkBtn.classList.remove('hidden');
});
