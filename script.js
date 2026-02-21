// AQUI ES DONDE AÑADES TUS NIVELES
const data = [
    {
        comunidad: "Aragón",
        provincias: [
            {
                nombre: "Zaragoza",
                habitantes: 673010,
                records: [
                    // El primero de la lista SIEMPRE será el Top 1 (Dorado)
                    { name: "Acheron", player: "Player1", percentage: "100%", videoUrl: "#" },
                    { name: "Bloodlust", player: "Player2", percentage: "100%", videoUrl: "#" }
                ]
            },
            {
                nombre: "Huesca",
                habitantes: 52469,
                records: [
                    { name: "Call Me Maybe", player: "Xenoncito", percentage: "100%", videoUrl: "https://www.youtube.com/watch?v=X3RyySRwo_I&t=8s" }
                ]
            }
            // Puedes añadir Teruel aquí...
        ]
    },
    {
        comunidad: "Madrid",
        provincias: [
            {
                nombre: "Madrid",
                habitantes: 3305408,
                records: [
                    { name: "Kenos", player: "MadPlayer", percentage: "100%", videoUrl: "#" },
                    { name: "Zodiac", player: "AnotherUser", percentage: "100%", videoUrl: "#" }
                ]
            }
        ]
    }
    // Copia y pega bloques para añadir más comunidades (Cataluña, Andalucía, etc.)
];

const container = document.getElementById('list-container');

// Lógica para pintar la web
data.forEach(comu => {
    // 1. Título de la Comunidad (Neon Style)
    const comuSection = document.createElement('div');
    comuSection.className = 'comunidad-section';
    comuSection.innerHTML = `<h2 class="neon-title">${comu.comunidad.toUpperCase()}</h2>`;
    container.appendChild(comuSection);

    // 2. Ordenar provincias por habitantes (Mayor a menor)
    comu.provincias.sort((a, b) => b.habitantes - a.habitantes);

    comu.provincias.forEach(prov => {
        // 3. Título de Provincia
        const provTitle = document.createElement('h3');
        provTitle.className =
