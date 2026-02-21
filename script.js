const data = [
    {
        comunidad: "Aragón",
        provincias: [
            {
                nombre: "Santa Cruz De Tenerife",
                habitantes: 211.436, // Ordenaremos por este número
                records: [
                    { name: "Gravity", player: "1rr3v3rs1bl3", percentage: "100%", videoUrl: "https://www.youtube.com/watch?v=f0wPjcV4mek" },
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
        comunidad: "Toledo",
        provincias: [
            {
                nombre: "Toledo",
                habitantes: 88.356,
                records: [
                    { name: "Blade Of Justice", player: "AzaxxGD", percentage: "100%", videoUrl: "https://www.youtube.com/watch?v=naWcVb1VqlA&t=320s" }
                ]
            }
        ]
    }
];

const container = document.getElementById('list-container');

data.forEach(comu => {
    // 1. Crear Título de la Comunidad
    const comuTitle = document.createElement('h2');
    comuTitle.className = 'comunidad-titulo';
    comuTitle.innerText = comu.comunidad.toUpperCase();
    container.appendChild(comuTitle);

    // 2. Ordenar provincias por habitantes (de mayor a menor)
    comu.provincias.sort((a, b) => b.habitantes - a.habitantes);

    comu.provincias.forEach(prov => {
        // 3. Crear Título de la Provincia
        const provTitle = document.createElement('h3');
        provTitle.className = 'provincia-titulo';
        provTitle.innerText = `${prov.nombre} (${prov.habitantes.toLocaleString()} hab.)`;
        container.appendChild(provTitle);

        // 4. Crear los récords de esa provincia
        prov.records.forEach((record, index) => {
            const card = document.createElement('div');
            // El primero de cada provincia recibe la clase 'top-one' (dorado)
            card.className = index === 0 ? 'level-card top-one' : 'level-card';
            
            card.innerHTML = `
                <div class="level-info">
                    <h3>${index === 0 ? '🏆' : `#${index + 1}`} - ${record.name}</h3>
                    <p><strong>${record.player}</strong> - ${record.percentage}</p>
                </div>
                <a href="${record.videoUrl}" target="_blank" class="btn-video">Ver Prueba</a>
            `;
            container.appendChild(card);
        });
    });
});
