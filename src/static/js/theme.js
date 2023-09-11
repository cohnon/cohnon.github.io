function setTheme(lightmode) {
  document.getElementById('theme-light').disabled = !lightmode;
  document.getElementById('theme-dark').disabled = lightmode;
  localStorage.setItem('theme-select', lightmode ? '1' : '0');
}

function toggleTheme() {
  const isLight = document.getElementById('theme-dark').disabled;
  setTheme(!isLight);
}

setTheme(localStorage.getItem('theme-select') == '1');