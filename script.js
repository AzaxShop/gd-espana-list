window.onload = function() {
    console.log("Cargando niveles...");

    const data = [
        {
            comunidad: "Aragón",
            provincias: [
                {
                    nombre: "Zaragoza",
                    habitantes: 673010,
                    records: [
                        { name: "Acheron", player: "Player1", percentage: "100%", videoUrl: "#" },
                        { name: "Bloodlust", player: "Player2", percentage: "100%", videoUrl: "#" }
                    ]
                },
                {
                    nombre: "Huesca",
                    habitantes: 52469,
                    records: [
                        { name: "Call Me Maybe", player: "Xenoncito", percentage: "100%", videoUrl: "#" }
                    ]
                }
            ]
        },
        {
            comunidad: "Madrid",
            provincias: [
                {
                    nombre: "Madrid",
                    habitantes: 3305408,
                    records: [
                        { name: "Kenos", player: "MadPlayer", percentage: "100%", videoUrl: "#" }
                    ]
                }
            ]
        }
    ];

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
                            <p>${record.player} - <span style="color:var(--neon-blue)">${record.percentage}</span></p>
                        </div>
                    </div>
                    <a href="${record.videoUrl}" target="_blank" class="btn-neon">Ver Prueba</a>
                `;
                container.appendChild(card);
            });
        });
    });
    console.log("¡Hecho!");
}; // <--- ESTA LLAVE ES LA QUE FALTABA
