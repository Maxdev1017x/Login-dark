document.getElementById('mode_icon').addEventListener('click', function() {
    const form = document.getElementById('login_form');
    const isDarkMode = form.classList.contains('dark');

    form.classList.toggle('dark', !isDarkMode);

    const newClass = isDarkMode ? 'fa-moon' : 'fa-sun';
    const oldClass = isDarkMode ? 'fa-sun' : 'fa-moon';

    this.classList.remove(oldClass);
    this.classList.add(newClass);
});
