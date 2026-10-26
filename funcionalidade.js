    const musica = document.getElementById('audio-player'); // Elemento de audio
    const iconePlay = document.getElementById('icone-player'); // Botao Play/Pausar
    const iconeVoltar = document.getElementById('icone-voltar'); // Botao Voltar
    const iconePular = document.getElementById('icone-pular'); // Botao Pular

// ========== PLAYLIST ===================== //
    const playlist = [
        "pasta/Billie Eilish - WILDFLOWER (Official Lyric Video)(MP3_160K).mp3",
        "pasta/Billie Eilish - CHIHIRO (Official Lyric Video)(MP3_160K).mp3",
        "pasta/Billie Eilish_ Khalid - lovely(MP3_160K).mp3"
    ];
// ======== FIM PLAYLIST =================== //

    let currentSongIndex = 0; // Em qual musica a playlist começa

    function loadSong(index) {
        musica.src = playlist[index]; // pega a musica da playlist para tocar
        musica.load(); // prepara para começar a tocar
    }

    function reproduzirMusica() {
        musica.play().catch((error) => {
            console.error('Não foi possível reproduzir a música:', error);
        });
    }

    musica.addEventListener('play', () => {
        iconePlay.src = 'button-pausar.png';
    });

    musica.addEventListener('pause', () => {
        iconePlay.src = 'button-despausar.png';
    });

    function alternarMusica() {
        if (musica.paused) {
            reproduzirMusica();
        } else {
            musica.pause();
        }
    }
    function voltarMusica() {
        // Pega o numero da musica atual e subtrai 1
        // A conta grande protege o codigo
        // Da musica 0 volta para a ultima musica da playlist
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        loadSong(currentSongIndex); // Envia o novo numero da musica anterior
        reproduzirMusica(); // Da play na musica nova
    }
    function pularMusica() {
        // Mesma coisa so que inves de - usa + para pular
        // Da ultima volta para musica 0
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(currentSongIndex);
        reproduzirMusica();

    }

    loadSong(currentSongIndex);