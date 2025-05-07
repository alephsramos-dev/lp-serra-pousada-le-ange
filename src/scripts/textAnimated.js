// Animação do titulo

const palavras = ["conforto", "marcante", "memorável"];
    let indicePalavra = 0;     // Índice da palavra atual no array
    let indiceCaractere = 0;   // Índice do caractere atual da palavra
    let deletando = false;     // Flag que indica se está deletando ou escrevendo

    // Configurações de tempo (em milissegundos)
    const velocidadeDigitacao = 150;  // Velocidade para digitar um caractere
    const velocidadeDeletar = 150;      // Velocidade para apagar um caractere
    const pausaAntesDeDeletar = 1500;     // Pausa após a palavra completa ser escrita

    // Referência ao elemento onde será exibida a palavra
    const wordSpan = document.getElementById("dynamicWord");

    function animarTexto() {
      const palavraAtual = palavras[indicePalavra];

      // Se não estiver deletando, adiciona caractere a caractere
      if (!deletando) {
        wordSpan.textContent = palavraAtual.substring(0, indiceCaractere + 1);
        indiceCaractere++;
        
        // Se a palavra foi completamente escrita
        if (indiceCaractere === palavraAtual.length) {
          deletando = true;
          setTimeout(animarTexto, pausaAntesDeDeletar);
          return;
        }
        setTimeout(animarTexto, velocidadeDigitacao);
      } else {
        // Se estiver deletando, remove caractere a caractere
        wordSpan.textContent = palavraAtual.substring(0, indiceCaractere - 1);
        indiceCaractere--;

        // Quando a palavra é completamente apagada, passa para a próxima
        if (indiceCaractere === 0) {
          deletando = false;
          indicePalavra = (indicePalavra + 1) % palavras.length;
          setTimeout(animarTexto, velocidadeDigitacao);
          return;
        }
        setTimeout(animarTexto, velocidadeDeletar);
      }
    }

    // Inicia a animação quando a página é carregada
    window.addEventListener("load", animarTexto);