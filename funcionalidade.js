    const musica = document.getElementById('audio-player'); // Elemento de audio //

    // Verifica se o elemento de audio existe nesta pagina //
    if (musica) {
        const iconePlay = document.getElementById('icone-player'); // Busca o botao de play //
        const playlist = [ // Playlist inicial //
            "dontsmileatme/hit me hard and soft/Billie Eilish - WILDFLOWER (Official Lyric Video)(MP3_160K).mp3",
            "dontsmileatme/hit me hard and soft/Billie Eilish - CHIHIRO (Official Lyric Video)(MP3_160K).mp3",
            "Billie Eilish_ Khalid - lovely(MP3_160K).mp3"
        ];
        let currentSongIndex = 0; // Guarda a posiçao da musica que esta sendo reproduzida //

        function loadSong(index) { // Carrega uma musica da playlist //
            musica.src = playlist[index]; // Define o caminho do arquivo de audio //
            musica.load(); // Carrega o arquivo no elemento de audio //
        }

        function reproduzirMusica() { // Inicia a reproduçao da musica //
            musica.play().catch(error => { // Tenta reproduzir o audio //
                console.error('Não foi possível reproduzir:', error); // Exibe o erro no console caso a reproduçao falhe //
            });
        }
        musica.addEventListener('play', () => { // Detecta quando a musica começa a tocar //
            if (iconePlay) iconePlay.src = 'button-pausar.png'; // Altera o icone para o botao de pausar //
        });
        musica.addEventListener('pause', () => { // Detecta quando a musica é pausada //
            if (iconePlay) iconePlay.src = 'button-despausar.png'; // Altera o icone para o botao de reproduzir //
        });
        function alternarMusica() { // Alterna entre reproduzir e pausar musica //
            if (musica.paused) { // Verifica se a musica esta pausada //
                reproduzirMusica(); // Se estiver pausada, começa a tocar //
            } else { // Se estiver tocando, pausa //
                musica.pause();
            }
        }
        function voltarMusica() { // Volta para a musica anterior //
            // Diminui o indice e retorna a ultima musica caso esteja na primeira //
            currentSongIndex = (currentSongIndex -1 + playlist.length) % playlist.length;
            loadSong(currentSongIndex); // Carrega a musica anterior //
            reproduzirMusica(); // Começa a reproduzir //
        }
        function pularMusica() { // Avança para a proxima musica //
            // Aumenta o indice e retorna a primeira musica caso esteja na ultima //
            currentSongIndex = (currentSongIndex + 1) % playlist.length;
            loadSong(currentSongIndex); // Carrega a proxima musica //
            reproduzirMusica(); // Começa a reproduzir //
        }
        loadSong(currentSongIndex); // carrega a primeira musica quando a pagina é aberta //
    }
    function novaPagina() {
    const url = "primeiraPagina.html";
    window.open(url, '_blank');
}

// SEGUNDA PAGINA ========================================================

const playlists = [

    // Primeira Playlist = dont smile at me
    [
        "dontsmileatme/Billie Eilish - COPYCAT (Official Audio)(MP3_160K).mp3",
        "dontsmileatme/Billie Eilish - idontwannabeyouanymore (Official Vertical Video)(MP3_160K).mp3",
        "dontsmileatme/Billie Eilish - my boy (Official Audio)(MP3_160K).mp3",
        "dontsmileatme/Billie Eilish - watch (Official Audio)(MP3_160K).mp3",
        "dontsmileatme/Billie Eilish - party favor (Official Audio)(MP3_160K).mp3",
        "dontsmileatme/Billie Eilish - bellyache (Official Audio)(MP3_160K).mp3",
        "dontsmileatme/Billie Eilish - ocean eyes (Official Music Video)(MP3_160K).mp3",
        "dontsmileatme/Billie Eilish - hostage (Official Audio)(MP3_160K).mp3",
        "dontsmileatme/Billie Eilish_ Vince Staples - _burn (Official Audio)(MP3_160K).mp3"
    ],

    // Segunda Playlist = when we all fall asleep, where do we go?
    [
        "dontsmileatme/when we all fall asleep/Billie Eilish - bad guy(MP3_160K).mp3",
        "dontsmileatme/when we all fall asleep/Billie Eilish - bury a friend(MP3_160K).mp3",
        "dontsmileatme/when we all fall asleep/Billie Eilish - you should see me in a crown (Official Audio)(MP3_160K).mp3",
        "dontsmileatme/when we all fall asleep/Billie Eilish - all the good girls go to hell (Lyrics)(MP3_160K).mp3",
        "dontsmileatme/when we all fall asleep/Billie Eilish - wish you were gay (Audio)(MP3_160K).mp3",
        "dontsmileatme/when we all fall asleep/Billie Eilish - when the party_s over(MP3_160K).mp3",
        "dontsmileatme/when we all fall asleep/8(MP3_160K).mp3",
        "dontsmileatme/when we all fall asleep/my strange addiction(MP3_160K).mp3",
        "dontsmileatme/when we all fall asleep/listen before i go(MP3_160K).mp3",
        "dontsmileatme/when we all fall asleep/i love you(MP3_160K).mp3",
        "dontsmileatme/when we all fall asleep/goodbye(MP3_160K).mp3",
        "dontsmileatme/when we all fall asleep/Billie Eilish - ilomilo (Audio)(MP3_160K).mp3",
        "dontsmileatme/when we all fall asleep/Billie Eilish - xanny(MP3_160K).mp3"

    ],

    // Terceira Playlist = happier than ever
    [


    ],

    // Quarta Playlist = hit me hard and soft
    [
        "dontsmileatme/hit me hard and soft/Billie Eilish - WILDFLOWER (Official Lyric Video)(MP3_160K).mp3",
        "dontsmileatme/hit me hard and soft/Billie Eilish - CHIHIRO (Official Lyric Video)(MP3_160K).mp3"

    ]
];

const musicas = document.getElementById("musicas");
const albuns = document.querySelectorAll(".disco-img"); // busca todas as imagens com essa classe
// Variavel para armazenar a playlist atual
let currentPlaylist = -1; // Nenhuma playlist selecionada inicialmente
let currentSong = 0; // Indice da musica atual na playlist

// Função para selecionar e tocar a playlist
function playPlaylist(index) {
 
    // Verifica se a playlist possui músicas
    if (playlists[index].length === 0) {
        console.log("Essa playlist ainda não possui músicas.");
        return;
    }
    // Verifica se o álbum clicado já está selecionado
    if (currentPlaylist === index) {
        if (!musicas.paused) { // Se estiver tocando, pausa
            musicas.pause();
        } else { // Se estiver pausado, continua a reprodução
            musicas.play().catch(error => {
                console.error(error);
            });
        }
        return;
    }
    musicas.pause(); // Pausa a música anterior
 
    // Remove a animação de todos os discos
    albuns.forEach(album => {
        album.classList.remove("playing");
    });

    currentPlaylist = index; // Atualiza o álbum selecionado
    currentSong = 0; // Reinicia a playlist
    playMusica(); // Inicia a reprodução
}

    // Função para tocar a musica da playlist atual
    function playMusica() {
        // Define o caminho do arquivo de audio
        // A playlist é escolhida por currentPlaylist
        // A musica é escolhida por currentSong
        musicas.src =
        playlists[currentPlaylist][currentSong];
        musicas.load();
        // Inicia a reprodução da musica
        musicas.play().catch(error => { // Catch identifica se a musica não pode ser reproduzida
            console.error("Não foi possível reproduzir a música:", error); // Exibe o erro no console
        });
    }
    musicas.addEventListener("play", () => { // Detecta quando a musica começa a tocar //
        albuns.forEach((album, index) => { // Percorre todos os discos //
            album.classList.toggle( // Faz girar somente o disco selecionado //
                "playing",
                index === currentPlaylist
            );
        });
    });
    musicas.addEventListener("pause", () => { // Detecta quando a musica é pausada //
        if (currentPlaylist >= 0) { // Verifica se existe um album selecionado //
            albuns[currentPlaylist].classList.remove("playing"); // Para a rotação do disco atual //
        }
    });

    // Adiciona um evento para quando a musica terminar de tocar
    musicas.addEventListener("ended", () => {
        currentSong++; // Avança para a proxima musica da playlist
        if (currentSong >= playlists[currentPlaylist].length) { // Verifica se chegou ao final da playlist
            currentSong = 0; // Reinicia a playlist se chegou ao final
        }
        playMusica(); // Chama a função para tocar a proxima musica
    });
