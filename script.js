const levels = [
    {
        name: "Call Me Maybe",
        player: "Xenoncito",
        location: "Huesca",
        percentage: "100%",
        videoUrl: "https://youtube.com" // Cambia por el link real
    },
    {
        name: "Acheron",
        player: "Jugador Pro",
        location: "Madrid",
        percentage: "100%",
        videoUrl: "#"
    }
];

const container = document.getElementById('list-container');

levels.forEach((level, index) => {
    const card = document.createElement('div');
    card.className = 'level-card';
    card.innerHTML = `
        <div class="level-info">
            <h3>#${index + 1} - ${level.name}</h3>
            <p><strong>${level.player}</strong> (${level.location}) - ${level.percentage}</p>
        </div>
        <a href="${level.videoUrl}" target="_blank" class="btn-video">Ver Prueba</a>
    `;
    container.appendChild(card);
});
