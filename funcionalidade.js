function alternarMusica() {
    const musica = document.getElementById('musica-fundo');
    const icone = document.getElementById('icone-player');

    if (musica.paused) {
        musica.play();
        // Altera a imagem para o icone de pausa
        icone.src = 'button-pausar.png'; 
    } else {
        musica.pause();
        // Altera de volta para o icone de play
        icone.src = 'button-despausar.png'; 
    }
}