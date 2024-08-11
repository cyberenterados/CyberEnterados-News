const noticias = [
    {
        id: 1,
        titulo: "Título de la Noticia 1",
        resumen: "Resumen de la noticia 1...",
        fecha: "2024-08-08",
        imagen: "https://via.placeholder.com/300x150"
    },
    {
        id: 2,
        titulo: "Título de la Noticia 2",
        resumen: "Resumen de la noticia 2...",
        fecha: "2024-08-07",
        imagen: "https://via.placeholder.com/300x150"
    },
    // Agrega más noticias aquí
];

function leerMas(noticiaId) {
    alert("Has hecho clic en Leer más para la noticia " + noticiaId);
}

function mostrarNoticiaAleatoria() {
    const randomIndex = Math.floor(Math.random() * noticias.length);
    const noticia = noticias[randomIndex];

    const noticiaElement = `
        <article>
            <img src="${noticia.imagen}" alt="${noticia.titulo}">
            <h2>${noticia.titulo}</h2>
            <p>${noticia.resumen}</p>
            <p><strong>Fecha:</strong> ${noticia.fecha}</p>
            <button onclick="leerMas(${noticia.id})">Leer más</button>
        </article>
    `;

    document.getElementById('noticia-aleatoria').innerHTML = noticiaElement;
}






document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show')
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-card', {delay: 500});
ScrollReveal().reveal('.card-banner-one', {delay: 500});
ScrollReveal().reveal('.cards-banner-two', {delay: 500});