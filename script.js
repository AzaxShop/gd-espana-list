window.onload = function() {
    const data = [
        {
            comunidad: "Aragón",
            provincias: [
                { nombre: "Zaragoza", habitantes: 673010, records: [{ name: "Call Me Maybe", player: "Xenoncito", percentage: "100%", videoUrl: "#" }] }
            ]
        },
        {
            comunidad: "Canarias",
            provincias: [
                { nombre: "Santa Cruz De Tenerife", habitantes: 211436, records: [{ name: "Gravity", player: "1rr3v3rs1bl3", percentage: "100%", videoUrl: "#" }] }
            ]
        },
        {
            comunidad: "Castilla La Mancha",
            provincias: [
                { nombre: "Toledo", habitantes: 83365, records: [{ name: "Blade Of Justice", player: "AzaxxGD", percentage: "100%", videoUrl: "#" }] }
            ]
        }
    ];

    const container = document.getElementById('list-container');
    if (!container) return;

    data.forEach(comu => {
        const comuTitle = document.createElement('h2');
        comuTitle.className = 'neon-title';
        comuTitle.innerText = comu.comunidad.toUpperCase();
        container.appendChild(comuTitle);

        comu.provincias.forEach(prov => {
            const provTitle = document.createElement('h3');
            provTitle.style.color = "#ccc";
            provTitle.style.marginTop = "30px";
            provTitle.innerText = `${prov.nombre}`;
            container.appendChild(provTitle);

            prov.records.forEach((record, index) => {
                const card = document.createElement('div');
                card.className = index === 0 ? 'level-card gold-card' : 'level-card';
                card.innerHTML = `
                    <div class="info">
                        <h4 style="margin:0; font-size:1.5rem">${index === 0 ? '🏆 ' : ''}${record.name}</h4>
                        <p style="margin:5px 0; opacity:0.7">${record.player} - ${record.percentage}</p>
                    </div>
                    <a href="${record.videoUrl}" target="_blank" class="btn-neon">Ver Prueba</a>
                `;
                container.appendChild(card);
            });
        });
    });
};
