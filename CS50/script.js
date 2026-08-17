
const themeToggleBtn = document.createElement('button');
themeToggleBtn.innerText = '🌙Mode';
themeToggleBtn.id = 'theme-toggle';
document.body.appendChild(themeToggleBtn);

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.innerText = '☀️ Light';
    } else {
        themeToggleBtn.innerText = '🌙 Dark';
    }
});
