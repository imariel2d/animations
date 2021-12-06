const button = document.getElementById('button');

button.addEventListener('click', () => {
  button.setAttribute('class', 'active');

  setTimeout(() => {
    button.removeAttribute('class');
  }, 500);
});
