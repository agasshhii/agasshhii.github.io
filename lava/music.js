
const musicForBooks = {
    1: new Audio('musilka/bitls.mp3'),
    2: new Audio('musilka/ipanema.mp3'),
    3: new Audio('musilka/JACKKKK.mp3')
  };
  const gifsForBooks = {
    1: 'pictures and gifs/bubu-dudu.gif',
    2: 'pictures and gifs/bubu-dudu.gif',
    3: 'pictures and gifs/bubu-dudu.gif'
  };
  function showGif(bookId) {
    const gifContainer = document.getElementById(`gif-container-${bookId}`);
    const img = document.createElement('img');
    img.src = gifsForBooks[bookId];
    img.alt = `GIF for book ${bookId}`;
    gifContainer.appendChild(img);
    gifContainer.classList.add('show');
  }
  
  function hideGif(bookId) {
    const gifContainer = document.getElementById(`gif-container-${bookId}`);
    gifContainer.innerHTML = ''; 
    gifContainer.classList.remove('show');
  }
  
  function playMusic(bookId) {
    const music = musicForBooks[bookId];
    if (music) {
      music.play();
      music.loop = true;
      showGif(bookId); 
    }
  }
  function pauseMusic(bookId) {
    const music = musicForBooks[bookId];
    if (music) {
      music.pause();
      hideGif(bookId); 
    }
  }
  