const relogio = () => {
    const criaHoraDosSegundos = (segundos) => {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    function iniciarRelogio() {
        timer = setInterval(() => {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000)
    }
    
    document.addEventListener('click', (e) => {
        const elemento = e.target;
    
        if (elemento.classList.contains('zerar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    
        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer);
            iniciarRelogio();
        }
        
        if (elemento.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado')
        }
    })
}

relogio();