const levels = [
    {
        name: "Call Me Maybe",
        player: "Xenoncito",
        location: "Huesca",
        percentage: "100%",
        videoUrl: "https://youtu.be/X3RyySRwo_I?si=UXGCpbnCNoAsPks_" // Cambia por el link real
    },
    {
        name: "Blade Of Justice",
        player: "AzaxxGD",
        location: "Toledo",
        percentage: "100%",
        videoUrl: "https://www.youtube.com/watch?v=naWcVb1VqlA&t=320s"
    },
    name: "Gravity",
        player: "1rr3v3rs1bl3",
        location: "Santa Cruz De Tenerife",
        percentage: "100%",
        videoUrl: "https://www.youtube.com/watch?v=f0wPjcV4mek"
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
