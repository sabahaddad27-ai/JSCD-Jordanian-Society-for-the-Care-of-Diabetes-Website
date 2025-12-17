function switchLanguage(lang) {
  // Hide all language spans
  document.querySelectorAll('[lang]').forEach(el => el.style.display = 'none');

  // Show the selected language
  document.querySelectorAll('[lang="' + lang + '"]').forEach(el => el.style.display = 'inline');
}
