function setTheme(darkmode) {
  document.getElementById('theme-light').disabled = darkmode;
  document.getElementById('theme-dark').disabled = !darkmode;
  localStorage.setItem('theme-select', darkmode ? '0' : '1');
}

function toggleTheme() {
  const isLight = document.getElementById('theme-dark').disabled;
  setTheme(!isLight);
}

setTheme(localStorage.getItem('theme-select') == '0');