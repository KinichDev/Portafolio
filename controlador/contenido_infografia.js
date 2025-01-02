HTMLElement.prototype.contenidoInfografiaPHP = function () {

    
    
    // Contenedor principal
    const contenedor_infografia = document.createElement("div");
    contenedor_infografia.className = "contenedor_infografia";
    contenedor_infografia.style.display= "block"

    // Sección PHP
    const sectionPHP = createSection(
        "¿Qué es PHP?",
        "PHP (Hypertext Preprocessor) es un lenguaje de scripting del lado del servidor muy popular, diseñado para el desarrollo web. Alimenta millones de sitios web en todo el mundo, permitiendo contenido dinámico y lógica de backend eficiente.",
        "./vista/img/php_info.png",
        "Ilustración del uso de PHP",
        "Dato Curioso: ¡PHP es utilizado por más del 75% de los sitios web que emplean un lenguaje del lado del servidor, incluyendo plataformas como WordPress!"
    );
    this.appendChild(sectionPHP);

    // Sección PDO
    const sectionPDO = createSection(
        "Introducción a PDO",
        "PDO (PHP Data Objects) es una biblioteca de acceso a bases de datos para PHP que proporciona una forma uniforme de interactuar con múltiples sistemas de bases de datos.",
        "./vista/img/pdo.png",
        "Ilustración del uso de PDO"
    );
    const pdoList = document.createElement("ul");
    ["Soporta MySQL, PostgreSQL, SQLite y más.", "Mejora la seguridad mediante declaraciones preparadas para prevenir inyecciones SQL.", "Simplifica el acceso a bases de datos y mejora la portabilidad."].forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        pdoList.appendChild(listItem);
    });
    sectionPDO.appendChild(pdoList);
    this.appendChild(sectionPDO);

    // Sección Honeypots
    const sectionHoneypot = createSection(
        "¿Qué es un Honeypot?",
        "Un honeypot es un mecanismo de seguridad diseñado para atraer y atrapar actores maliciosos simulando vulnerabilidades en un sistema. Los honeypots son invaluables para detectar y analizar amenazas cibernéticas.",
        "./vista/img/hacker.png",
        "Ilustración del concepto de honeypot",
        "Los honeypots actúan como señuelos, manteniendo ocupados a los atacantes mientras los sistemas reales permanecen seguros."
    );
    this.appendChild(sectionHoneypot);

    // Sección Importancia Industrial
    const sectionImportance = createSection(
        "Importancia Industrial",
        "Comprender y aprovechar herramientas como PHP, PDO y honeypots tiene un impacto significativo en varias industrias:",
        "./vista/img/ciber_seguridad.png",
        "Ilustración de aplicaciones industriales"
    );
    const importanceList = document.createElement("ul");
    ["Desarrollo Web: PHP y PDO simplifican el desarrollo de backend y las interacciones con bases de datos.",
        "Ciberseguridad: Los honeypots proporcionan información sobre amenazas potenciales y estrategias de ataque.",
        "Aplicaciones Basadas en Datos: El manejo seguro y eficiente de bases de datos mediante PDO garantiza aplicaciones web robustas."].forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${item.split(":")[0]}:</strong>${item.split(":")[1]}`;
        importanceList.appendChild(listItem);
    });
    sectionImportance.appendChild(importanceList);
    this.appendChild(sectionImportance);

    // // Footer
    // const footer = document.createElement("footer");
    // footer.innerHTML = `<p style="text-align: center;">&copy; 2025 Leonardo Kinich Luna Lugo</p>`;
    // this.appendChild(footer);

    // // Añadir al body
    // this.appendChild(contenedor_infografia);
}

function createSection(titleText, descriptionText, imgSrc, imgAlt, highlightText) {
    const section = document.createElement("div");
    section.className = "section";

    const title = document.createElement("h2");
    title.textContent = titleText;
    section.appendChild(title);

    const description = document.createElement("p");
    description.textContent = descriptionText;
    section.appendChild(description);

    if (imgSrc) {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = imgAlt || "";
        section.appendChild(img);
    }

    if (highlightText) {
        const highlight = document.createElement("div");
        highlight.className = "highlight";
        highlight.textContent = highlightText;
        section.appendChild(highlight);
    }

    return section;
}
