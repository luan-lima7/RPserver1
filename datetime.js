// Função para atualizar data e hora
function atualizarDataHora() {
    const agora = new Date();
    
    // Arrays para dias da semana e meses em português
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    // Obter componentes da data
    const diaSemana = diasSemana[agora.getDay()];
    const dia = agora.getDate();
    const mes = meses[agora.getMonth()];
    const ano = agora.getFullYear();
    
    // Obter componentes da hora
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    
    // Formatar data completa
    const dataFormatada = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
    const horaFormatada = `${horas}:${minutos}:${segundos}`;
    
    // Atualizar elementos HTML
    const elementoData = document.getElementById('currentDate');
    const elementoHora = document.getElementById('currentTime');
    
    if (elementoData) {
        elementoData.textContent = dataFormatada;
    }
    
    if (elementoHora) {
        elementoHora.textContent = horaFormatada;
    }
}

// Atualizar imediatamente ao carregar a página
atualizarDataHora();

// Atualizar a cada segundo
setInterval(atualizarDataHora, 1000);
