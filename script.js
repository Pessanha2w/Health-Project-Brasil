// Exemplo simples: rolar suavemente para uma seção do site
document.querySelector('.btn-primary').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.services').scrollIntoView({ behavior: 'smooth' });
});
