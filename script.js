window.onload = function() {
    const data = [
        {
            comunidad: "Aragón",
            provincias: [
                { nombre: "Zaragoza", records: [{ name: "Call Me Maybe", player: "Xenoncito", videoUrl: "https://www.youtube.com/watch?v=X3RyySRwo_I" }] }
            ]
        },
        {
            comunidad: "Canarias",
            provincias: [
                { nombre: "Santa Cruz De Tenerife", records: [{ name: "Gravity", player: "1rr3v3rs1bl3", videoUrl: "https://www.youtube.com/watch?v=f0wPjcV4mek" }] }
            ]
        }
    ];

    const container = document.getElementById('list-container');
    if (!container) return;

    data.forEach(comu => {
        const h2 = document.createElement('h2');
        h2.style.color = "#00f3ff";
        h2.innerText = comu.comunidad.toUpperCase();
        container.appendChild(h2);

        comu.provincias.forEach(prov => {
            prov.records.forEach(rec => {
                const videoId = rec.videoUrl.split('v=')[1];
                const thumb = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                
                const card = document.createElement('div');
                card.className = 'level-card';
                card.innerHTML = `
                    <div class="card-bg" style="background-image: url('${thumb}')"></div>
                    <div class="card-overlay"></div>
                    <div class="card-info">
                        <h4>${rec.name}</h4>
                        <p>${rec.player} - 100%</p>
                    </div>
                    <a href="${rec.videoUrl}" target="_blank" class="btn-neon">Ver Prueba</a>
                `;
                container.appendChild(card);
            });
        });
    });
};
