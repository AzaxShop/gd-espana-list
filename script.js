window.onload = function() {
    const data = [
        {
            comunidad: "Aragón",
            provincias: [
                { nombre: "Huesca", habitantes: 673010, records: [{ name: "Call Me Maybe", player: "Xenoncito", percentage: "100%", videoUrl: "https://www.youtube.com/watch?v=X3RyySRwo_I" }] }
            ]
        },
        {
            comunidad: "Canarias",
            provincias: [
                { nombre: "Santa Cruz De Tenerife", habitantes: 211436, records: [{ name: "Gravity", player: "1rr3v3rs1bl3", percentage: "100%", videoUrl: "https://www.youtube.com/watch?v=f0wPjcV4mek" }] }
            ]
        },
        {
            comunidad: "Castilla La Mancha",
            provincias: [
                { nombre: "Toledo", habitantes: 83365, records: [{ name: "Blade Of Justice", player: "AzaxxGD", percentage: "100%", videoUrl: "https://www.youtube.com/watch?v=naWcVb1VqlA&t" }] }
            ]
        }
    ];

    const container = document.getElementById('list-container');
    if (!container) return;

    // Función para obtener la miniatura de YouTube
    function getThumbnail(url) {
        const videoId = url.split('v=')[1]?.split('&')[0];
        return videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : 'https://via.placeholder.com/120x68';
    }

data.forEach(comu => {
        const comuTitle = document.createElement('h2');
        comuTitle.className = 'neon-title';
        comuTitle.innerText = comu.comunidad.toUpperCase();
        container.appendChild(comuTitle);

        comu.provincias.forEach(prov => {
            const provTitle = document.createElement('h3');
            provTitle.className = 'provincia-subtitle';
            provTitle.innerText = prov.nombre;
            container.appendChild(provTitle);

            prov.records.forEach((record, index) => {
                const card = document.createElement('div');
                card.className = index === 0 ? 'level-card gold-card' : 'level-card';
                
                // Obtenemos la imagen de YouTube
                const thumb = getThumbnail(record.videoUrl);

                card.innerHTML = `
                    <div class="card-background" style="background-image: url('${thumb}')"></div>
                    <div class="card-overlay"></div>
                    
                    <div class="card-content-left">
                        <h4 class="level-name">${index === 0 ? '🏆 ' : '#' + (index + 1)} ${record.name}</h4>
                        <p class="player-info">Por: <strong>${record.player}</strong> — ${record.percentage}</p>
                    </div>

                    <div class="card-content-right">
                        <a href="${record.videoUrl}" target="_blank" class="btn-neon">VER PRUEBA</a>
                    </div>
                `;
                container.appendChild(card);
            });
        });
    });
