document.addEventListener('DOMContentLoaded', function() {
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const darkModeStyle = document.getElementById('dark-mode-style');
  
  // Verificar preferencia del usuario
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedMode = localStorage.getItem('darkMode');
  
  // Aplicar modo inicial
  if (savedMode === 'enabled' || (savedMode === null && prefersDarkMode)) {
    enableDarkMode();
  }
  
  // Escuchar cambios en las preferencias del sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (localStorage.getItem('darkMode') === null) {
      e.matches ? enableDarkMode() : disableDarkMode();
    }
  });
  
  // Manejar el botón de toggle
  darkModeToggle.addEventListener('click', () => {
    if (darkModeStyle.disabled) {
      enableDarkMode();
      localStorage.setItem('darkMode', 'enabled');
    } else {
      disableDarkMode();
      localStorage.setItem('darkMode', 'disabled');
    }
  });
  
  function enableDarkMode() {
    darkModeStyle.disabled = false;
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  
  function disableDarkMode() {
    darkModeStyle.disabled = true;
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    document.documentElement.setAttribute('data-theme', 'light');
  }
});