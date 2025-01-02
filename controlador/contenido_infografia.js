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

HTMLElement.prototype.contenidoInfografiaExcel = function () {
    // Contenedor principal
    const contenedor_infografia = document.createElement("div");
    contenedor_infografia.className = "contenedor_infografia";
    contenedor_infografia.style.display = "block";

    // Sección Excel
    const sectionExcel = createSection(
        "¿Qué es Excel?",
        "Excel es una herramienta de hoja de cálculo desarrollada por Microsoft, ampliamente utilizada para organizar, analizar y visualizar datos. Es conocida por su versatilidad y su capacidad para gestionar grandes volúmenes de datos.",
        "./vista/img/excel.png",
        "Logo de Microsoft Excel",
        "Dato Curioso: ¡Excel tiene más de 30 años en el mercado y sigue siendo una de las herramientas más utilizadas en el mundo empresarial!"
    );
    this.appendChild(sectionExcel);

    // Sección Funciones Clave
    const sectionFunctions = createSection(
        "Funciones Clave de Excel",
        "Excel ofrece una amplia gama de funciones para el análisis y la gestión de datos, entre las cuales se destacan:",
        "./vista/img/calculo.jpg",
        "Ilustración de funciones clave de Excel"
    );
    const functionsList = document.createElement("ul");
    ["Fórmulas y funciones avanzadas para cálculos complejos.",
     "Tablas dinámicas para resumir datos rápidamente.",
     "Herramientas de visualización como gráficos y diagramas.",
     "Capacidades de automatización mediante macros."].forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        functionsList.appendChild(listItem);
    });
    sectionFunctions.appendChild(functionsList);
    this.appendChild(sectionFunctions);

    // Sección Aplicaciones Comunes
    const sectionApplications = createSection(
        "Aplicaciones Comunes de Excel",
        "Excel es utilizado en diversos sectores para múltiples propósitos, como:",
        "./vista/img/documentos.jpg",
        "Ilustración de aplicaciones comunes de Excel"
    );
    const applicationsList = document.createElement("ul");
    ["Gestión Financiera: Seguimiento de presupuestos y cálculos contables.",
     "Análisis de Datos: Filtrado y organización de grandes conjuntos de datos.",
     "Planeación: Creación de cronogramas y planificación de proyectos.",
     "Reportes: Generación de informes profesionales."].forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${item.split(":")[0]}:</strong>${item.split(":")[1]}`;
        applicationsList.appendChild(listItem);
    });
    sectionApplications.appendChild(applicationsList);
    this.appendChild(sectionApplications);

    // Sección Importancia Industrial
    const sectionIndustry = createSection(
        "Importancia Industrial de Excel",
        "Excel desempeña un papel crucial en varias industrias, gracias a sus capacidades avanzadas y facilidad de uso:",
        "./vista/img/almacen.jpg",
        "Ilustración del impacto industrial de Excel"
    );
    const industryList = document.createElement("ul");
    ["Finanzas: Análisis financiero y predicción de tendencias.",
     "Educación: Organización de datos académicos y evaluación.",
     "Salud: Gestión de datos médicos y análisis estadístico.",
     "Marketing: Seguimiento de campañas y análisis de mercado."].forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        industryList.appendChild(listItem);
    });
    sectionIndustry.appendChild(industryList);
    this.appendChild(sectionIndustry);

    // Crear Sección
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
};
