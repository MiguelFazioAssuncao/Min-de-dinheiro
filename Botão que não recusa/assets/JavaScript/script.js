
function sim() {
    alert(`Muito obrigado por me ajudar <3`)

    const img = document.querySelector('.content img');
    img.src = 'https://media1.tenor.com/m/AQa-sGBW6JYAAAAC/luffy-gordo-luffy-gordinho.gif'
    img.style.filter = 'none';
    img.style.width = '800px'; 
    img.style.height = '550px';
    img.style.transition = 'width 0.5s ease, height 0.5s ease, border-radius 0.5s ease';
    img.style.borderRadius = '10px';
}

function desvia(btn) {
    // btn declarado na função
    btn.style.position = 'absolute'; 
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
