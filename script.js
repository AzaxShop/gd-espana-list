window.onload = function() {
    const data = [
        {
            comunidad: "Aragón",
            records: [{ name: "Call Me Maybe", player: "Xenoncito", videoUrl: "https://www.youtube.com/watch?v=X3RyySRwo_I" }]
        },
        {
            comunidad: "Canarias",
            records: [{ name: "Gravity", player: "1rr3v3rs1bl3", videoUrl: "https://www.youtube.com/watch?v=f0wPjcV4mek" }]
        },
        {
            comunidad: "Castilla La Mancha",
            records: [{ name: "Blade Of Justice", player: "AzaxxGD", videoUrl: "https://www.youtube.com/watch?v=naWcVb1VqlA" }]
        }
    ];

    const container = document.getElementById('list-container');
    if (!container) return;

    data.forEach((comu, comuIndex) => {
        const title = document.createElement('h2');
        title.style.color = "#00f3ff";
        title.style.marginTop = "50px";
        title.innerText = comu.comunidad.toUpperCase();
        container.appendChild(title);

        comu.records.forEach((rec, recIndex) => {
            const videoId = rec.videoUrl.split('v=')[1]?.split('&')[0];
            const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            
            const card = document.createElement('div');
            card.className = 'level-card';
            // Retraso de animación escalonado
            card.style.animationDelay = `${(comuIndex + recIndex) * 0.1}s`;
            
            card.innerHTML = `
                <div class="card-bg" style="background-image: url('${thumb}')"></div>
                <div class="card-overlay"></div>
                <div class="card-info">
                    <h4>${rec.name}</h4>
                    <p>Por: <strong>${rec.player}</strong></p>
                </div>
                <a href="${rec.videoUrl}" target="_blank" class="btn-neon">VER PRUEBA</a>
            `;
            container.appendChild(card);
        });
    });
}; // <-- Llave de cierre corregida
