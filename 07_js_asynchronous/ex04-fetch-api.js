document.addEventListener('click', e => {

    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }

})

const carregaPagina = async (el) => {
    const href = el.getAttribute('href');

    try {
        const response = await fetch(href)
        const html = await response.text()
        carregaResultado(html)
    } catch (error) {
        carregaResultado(error)   
    }

}

const carregaResultado = (res) => {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = res;
}