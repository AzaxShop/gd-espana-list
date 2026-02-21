window.onload = function() {
    console.log("Cargando niveles...");

    const data = [
        {
            comunidad: "Aragón",
            provincias: [
                {
                    nombre: "Huesca",
                    habitantes: 55850,
                    records: [
                        { name: "Call Me Maybe", player: "Xenoncito", percentage: "100%", videoUrl: "https://www.youtube.com/watch?v=X3RyySRwo_I&t=11s" }
                    ]
                }
            ]
        },
        {
            comunidad: "Canarias",
            provincias: [
                {
                    nombre: "Santa Cruz De Tenerife",
                    habitantes: 211436,
                    records: [
                        { name: "Gravity", player: "1rr3v3rs1bl3", percentage: "100%", videoUrl: "https://www.youtube.com/watch?v=f0wPjcV4mek" }
                    ]
                }
            ]
        },
        {
            comunidad: "Castilla La Mancha",
            provincias: [
                {
                    nombre: "Toledo",
                    habitantes: 83365,
                    records: [
                        { name: "Blade Of Justice", player: "AzaxxGD", percentage: "100%", videoUrl: "https://www.youtube.com/watch?v=naWcVb1VqlA&t=320s" }
                    ]
                }
            ]
        },
        {
            comunidad: "Galicia",
            provincias: [
                {
                    nombre: "Santiago De Compostela",
                    habitantes: 100965,
                    records: [
                        { name: "Gravity", player: "R1m2", percentage: "100%", videoUrl: "https://www.tiktok.com/@rue1.m2/video/7578150874694962435?is_from_webapp=1&sender_device=pc&web_id=7556717541113349654" }
                    ]
                }
            ]
        },
        
    ]; // <--- AQUÍ SE CIERRAN LOS DATOS

    const container = document.getElementById('list-container');
    if (!container) return;
    container.innerHTML = "";

    data.forEach(comu => {
        const comuTitle = document.createElement('h2');
        comuTitle.className = 'neon-title';
        comuTitle.innerText = comu.comunidad.toUpperCase();
        container.appendChild(comuTitle);

        comu.provincias.sort((a, b) => b.habitantes - a.habitantes);

        comu.provincias.forEach(prov => {
            const provTitle = document.createElement('h3');
            provTitle.className = 'provincia-title';
            provTitle.innerText = `${prov.nombre} (${prov.habitantes.toLocaleString()} hab.)`;
            container.appendChild(provTitle);

            prov.records.forEach((record, index) => {
                const card = document.createElement('div');
                card.className = index === 0 ? 'level-card gold-card' : 'level-card';
                card.innerHTML = `
                    <div class="card-content">
                        <div class="rank-box">${index === 0 ? '🏆' : '#' + (index + 1)}</div>
                        <div class="info-box">
                            <h4>${record.name}</h4>
                            <p>${record.player} - <span style="color:#00f3ff">${record.percentage}</span></p>
                        </div>
                    </div>
                    <a href="${record.videoUrl}" target="_blank" class="btn-neon">Ver Prueba</a>
                `;
                container.appendChild(card);
            });
        });
    });
};
