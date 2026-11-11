    const musica = document.getElementById('audio-player'); // Elemento de audio
    const iconePlay = document.getElementById('icone-player'); // Botao Play/Pausar
    const iconeVoltar = document.getElementById('icone-voltar'); // Botao Voltar
    const iconePular = document.getElementById('icone-pular'); // Botao Pular

// ========== PLAYLIST ===================== //
    const playlist = [
        "Billie Eilish - WILDFLOWER (Official Lyric Video)(MP3_160K).mp3",
        "Billie Eilish - CHIHIRO (Official Lyric Video)(MP3_160K).mp3",
        "Billie Eilish_ Khalid - lovely(MP3_160K).mp3"
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

    function novaPagina() {
    const url = "primeiraPagina.html";
    window.open(url, '_blank');
}

// SEGUNDA PAGINA ========================================================

const playlists = [

    // Primeira Playlist = dont smile at me
    [


    ],

    // Segunda Playlist = when we all fall asleep, where do we go?
    [


    ],

    // Terceira Playlist = happier than ever
    [


    ],

    // Quarta Playlist = hit me hard and soft
    [
        "Billie Eilish - WILDFLOWER (Official Lyric Video)(MP3_160K).mp3",
        "Billie Eilish - CHIHIRO (Official Lyric Video)(MP3_160K).mp3"

    ]
];

const musicas = document.getElementById("musicas");
const albuns = document.querySelectorAll(".disco-img"); // busca todas as imagens com essa classe
// Variavel para armazenar a playlist atual
let currentPlaylist = -1; // Nenhuma playlist selecionada inicialmente
let currentSong = 0; // Indice da musica atual na playlist

// Função para selecionar e tocar a playlist
function playPlaylist(index) {
    if (currentPlaylist === index) { // verifica se a playlist clicada é a mesma que está tocando
        if (!musicas.paused) { // verifica se a musica está tocando
            musicas.pause(); // Pausa a musica se estiver tocando
            albuns[index].classList.remove("playing"); // Remove a classe de animação do album
        }
        else {
            musicas.play(); // Toca a musica se estiver pausada
            albuns[index].classList.add("playing"); // Adiciona a classe de animação do album
        }
        return; // Sai da função para não reiniciar a playlist
    }
        musicas.pause(); // pausa a musica da playlist anterior
        musicas.currentTime = 0; // reinicia a posição da musica para o inicio
        albuns.forEach(album => { // percorre todos os albuns
            album.classList.remove("playing"); // Remove a classe de animação do album
        });
        currentPlaylist = index; // Atualiza a playlist com o index recebido
        currentSong = 0; // Define a primeira musica da playlist como atual
        albuns[index].classList.add("playing"); // Adiciona a classe de animação do album
        playMusica(); // Chama a função para tocar a musica
    }

    // Função para tocar a musica da playlist atual
    function playMusica() {
        // Define o caminho do arquivo de audio
        // A playlist é escolhida por currentPlaylist
        // A musica é escolhida por currentsong
        musicas.src =
        playlists[currentPlaylist][currentsong];
        // Inicia a reprodução da musica
        musicas.play().catch(error => { // Catch identifica se a musica não pode ser reproduzida
            console.error('Não foi possível reproduzir a música:', error); // Exibe o erro no console
        });
    }
    // Adiciona um evento para quando a musica terminar de tocar
    musicas.addEventListener("ended", () => {
        currentSong++; // Avança para a proxima musica da playlist
        if (currentSong >= playlists[currentPlaylist].length) { // Verifica se chegou ao final da playlist
            currentSong = 0; // Reinicia a playlist se chegou ao final
        }
        playMusica(); // Chama a função para tocar a proxima musica
    });
