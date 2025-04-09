const button = document.getElementById('toggleDyslexic');
button.addEventListener('click', () => {
    document.body.classList.toggle('dyslexic');
    button.textContent = document.body.classList.contains('dyslexic') ? 'Lesevansker' : 'Dyslexci';
});