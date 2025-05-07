document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos com o atributo "data-scroll"
    const scrollButtons = document.querySelectorAll('[data-scroll]');
    
    scrollButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        event.preventDefault(); // Evita comportamentos padrão do botão, se houver
  
        // Recupera o ID da seção a partir do atributo data-scroll do botão
        const targetId = button.getAttribute('data-scroll');
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        } else {
          console.error(`Seção com id "${targetId}" não encontrada!`);
        }
      });
    });
  });



  document.addEventListener("DOMContentLoaded", function() {
    var fixedElement = document.getElementById("fixed-element");
    var ofertaSection = document.getElementById("oferta");
  
    // INTERSECTION OBSERVER: exibe o elemento fixo quando a seção 'oferta' estiver visível
    var observerOptions = {
      threshold: 0.5 // 50% da seção precisa estar visível na viewport
    };
  
    var observer = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          fixedElement.classList.remove("hidden");
          fixedElement.classList.add("visible");
          // Desconecta o observer pois a exibição já foi ativada
          observer.disconnect();
        }
      });
    }, observerOptions);
  
    if (ofertaSection) {
      observer.observe(ofertaSection);
    }
  
    // COUNTDOWN: Data-alvo para a contagem regressiva (1 de maio de 2025)
    var targetDate = new Date("May 1, 2025 00:00:00");
  
    function updateCountdown() {
      var now = new Date();
      var diff = targetDate - now;
  
      // Se a contagem terminar, define todos os valores para 0 e encerra o intervalo
      if (diff <= 0) {
        var spans = fixedElement.querySelectorAll("ul li span");
        if (spans.length >= 3) {
          spans[0].innerText = "0";
          spans[1].innerText = "0";
          spans[2].innerText = "0";
        }
        clearInterval(intervalId);
        return;
      }
  
      /* Cálculo dos meses:
         - Calcula a diferença em meses entre o ano e o mês da data alvo e a data atual.
         - Se o dia atual for maior que o dia da data alvo, subtrai um mês.
      */
      var months = (targetDate.getFullYear() - now.getFullYear()) * 12 + (targetDate.getMonth() - now.getMonth());
      if (targetDate.getDate() < now.getDate()) {
        months--;
      }
  
      // Cria uma data 'interina' adicionando os meses calculados à data atual
      var interim = new Date(now);
      interim.setMonth(now.getMonth() + months);
      // Ajuste extra caso a data interina ultrapasse o target
      if (interim > targetDate) {
        months--;
        interim = new Date(now);
        interim.setMonth(now.getMonth() + months);
      }
  
      // Calcula o restante da diferença após os meses: dias e horas
      var remainingMs = targetDate - interim;
      var days = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
      remainingMs -= days * 1000 * 60 * 60 * 24;
      var hours = Math.floor(remainingMs / (1000 * 60 * 60));
  
      // Atualiza os elementos <span> com os valores calculados
      var spans = fixedElement.querySelectorAll("ul li span");
      if (spans.length >= 3) {
        spans[0].innerText = months;
        spans[1].innerText = days;
        spans[2].innerText = hours;
      }
    }
  
    // Atualiza a contagem regressiva a cada segundo para uma animação fluida
    var intervalId = setInterval(updateCountdown, 1000);
    updateCountdown(); // chamada inicial para evitar o atraso no primeiro update
  });
  