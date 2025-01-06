const startDate = new Date('2024-06-09T00:00:00');

function updateTimer() {
    const now = new Date();
    
    // Calcular diferenças
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    
    // Ajustar se o mês atual é antes do mês do início
    if (months < 0) {
      years -= 1;
      months += 12;
    }
  
    // Ajustar se o dia atual é antes do dia do início
    if (days < 0) {
      months -= 1;
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0); // Último dia do mês anterior
      days += lastMonth.getDate();
    }
  
    // Atualizar o conteúdo na página
    document.getElementById('years').textContent = years.toString().padStart(2, '0');
    document.getElementById('months').textContent = months.toString().padStart(2, '0');
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    
    // Horas, minutos e segundos
    const diff = now - startDate;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
  
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  }  

// Atualizar a cada segundo
setInterval(updateTimer, 1000);
updateTimer();

// Função para rolagem suave
function smoothScroll(e) {
  // Verifica se o evento de rolagem é para baixo (mouse)
  if (e.deltaY > 0) {
    window.scrollBy({
      top: 50,  // Desce 50px por vez
      behavior: 'smooth'  // Rolagem suave
    });
  }
  // Caso o evento de rolagem seja para cima
  else {
    window.scrollBy({
      top: -50,  // Sobe 50px por vez
      behavior: 'smooth'  // Rolagem suave
    });
  }
}

// Adiciona o evento de rolagem
window.addEventListener('wheel', smoothScroll);