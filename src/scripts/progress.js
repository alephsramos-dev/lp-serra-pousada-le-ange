function atualizarBarraDeProgresso() {
    const passos = document.getElementById('passos');
    const progressFill = document.querySelector('.barra-de-progresso-fill');
    const dots = document.querySelectorAll('.barra-de-progresso > span');

    // Calcula a posição e o tamanho da seção "passos"
    const passosTop = passos.offsetTop;
    const passosHeight = passos.offsetHeight;
    const windowHeight = window.innerHeight;

    // Pega a posição atual do scroll
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Calcula o total rolável dentro da seção (garante que nunca seja menor que 1)
    const totalScrollable = Math.max(passosHeight - windowHeight, 1);

    // Calcula a porcentagem de progresso (limitado entre 0 e 100)
    let progressPercent = ((scrollY - passosTop) / totalScrollable) * 100;
    progressPercent = Math.max(0, Math.min(100, progressPercent));

    // Atualiza a altura do fill da barra
    progressFill.style.height = progressPercent + '%';

    // Para cada bolinha, calcule um threshold com base no index (distribuídas uniformemente)
    dots.forEach((dot, index) => {
      // Ex: com 3 dots, índices 0, 1, 2 correspondem a 0%, 50% e 100% respectivamente
      const threshold = (index * 100) / (dots.length - 1);
      if(progressPercent >= threshold) {
        dot.classList.add('filled');
      } else {
        dot.classList.remove('filled');
      }
    });
  }

  // Atualiza a barra de progresso a cada scroll
  window.addEventListener('scroll', atualizarBarraDeProgresso);
  document.addEventListener('DOMContentLoaded', atualizarBarraDeProgresso);