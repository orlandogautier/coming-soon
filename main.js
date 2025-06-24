document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;

  function setTheme(theme) {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
      toggleBtn.textContent = '🌞 Light Mode';
    } else {
      body.classList.remove('dark-mode');
      toggleBtn.textContent = '🌓 Dark Mode';
    }
    localStorage.setItem('theme', theme);
  }

  // Load saved theme or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  });
});
