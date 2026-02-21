// Esperar a que la página cargue para evitar errores
window.onload = function() {
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
    
    // Si el contenedor no existe, mandamos un error a la consola para saber qué pasa
    if (!container) {
        console.error("No se encontró el contenedor 'list-container'. Revisa tu index.html");
        return;
    }

    // Limpiar el contenedor por si acaso
    container.innerHTML = "";

    data.forEach(comu => {
        const comuSection = document.createElement('div');
        comuSection.className = 'comunidad-section';
        comuSection.innerHTML = `<h2 class="neon-title">${comu.comunidad.toUpperCase()}</h2>`;
        container.appendChild(comuSection);

        comu.provincias.sort((a, b) => b.habitantes - a.habitantes);

        comu.provincias.forEach(prov => {
            const provTitle = document.createElement('h3');
            provTitle.className = 'provincia-title';
            provTitle.innerText = `${prov.nombre} (${prov.habitantes.toLocaleString()} hab.)`;
            container.appendChild(provTitle);

            prov.records.forEach((record, index) => {
                const card = document.createElement('div');
                let cardClass = index === 0 ? 'level-card gold-card' : 'level-card';
                let rankIcon = index === 0 ? '🏆' : `#${index + 1}`;

                card.className = cardClass;
                card.innerHTML = `
                    <div class="card-content">
                        <div class="rank-box">${rankIcon}</div>
                        <div class="info-box">
                            <h4>${record.name}</h4>
                            <p>${record.player} - <span class="percent">${record.percentage}</span></p>
                        </div>
                    </div>
                    <a href="${record.videoUrl}" target="_blank" class="btn-neon">Ver Prueba</a>
                `;
                container.appendChild(card);
            });
        });
    });
    
    console.log("¡Niveles cargados correctamente!");
};
