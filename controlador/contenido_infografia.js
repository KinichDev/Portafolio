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
        "PHP Data Objects",
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

HTMLElement.prototype.contenidoInfografiaWindows = function() {
    this.innerHTML = `
        <style>
            .contenedor_infografia_windows {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                margin: 0 auto;
                max-width: 1200px;
                padding: 20px;
                line-height: 1.8;
                flex-direction: column;
                color: #2c3e50;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
            }
            .contenedor_infografia_windows h2 {
                font-size: 2.2rem;
                color:rgb(41, 170, 185);
                border-bottom: 3px solidrgb(52, 211, 219);
                padding-bottom: 10px;
                margin-bottom: 20px;
                font-weight: bold;
            }
            .contenedor_infografia_windows p {
                margin: 20px 0;
                font-size: 1rem;
            }
            .contenedor_infografia_windows ul {
                list-style-type: circle;
                padding-left: 40px;
                margin: 15px 0;
            }
            .contenedor_infografia_windows li {
                margin-bottom: 10px;
                font-size: 1rem;
            }
            .contenedor_infografia_windows section {
                margin-bottom: 40px;
                padding: 20px;
                background-color: #fff;
                border-radius: 8px;
                transition: transform 0.3s;
            }
            .contenedor_infografia_windows section:hover {
                transform: scale(1.02);
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
            }
        </style>
        <div class="contenedor_infografia_windows">
            <section class="skill-section_infografia_windows">
                <h2>Entorno Windows</h2>
                <ul>
                    <li><b>Seguridad:</b> Manejo de características de seguridad avanzadas, incluyendo desinfección, depuración y prevención de amenazas. Experiencia en pruebas de penetración (pentesting) para identificar y mitigar vulnerabilidades.</li>
                    <li><b>Integración con la Nube:</b> Experiencia en la implementación y gestión de soluciones en la nube, como OneDrive y sistemas de archivos compartidos, para mejorar la colaboración y el almacenamiento seguro de datos.</li>
                    <li><b>Automatización y Scripts:</b> Desarrollo de scripts de PowerShell y otras herramientas de automatización para optimizar tareas repetitivas y mejorar la eficiencia operativa.</li>
                    <li><b>Solución de Problemas:</b> Habilidad para diagnosticar y resolver problemas técnicos complejos en entornos Windows, asegurando la estabilidad y el rendimiento del sistema.</li>
                    <li><b>Configuración y Personalización:</b> Configuración y personalización de sistemas Windows para maximizar el rendimiento y la seguridad, incluyendo la configuración de políticas de grupo y ajustes de seguridad avanzados.</li>
                    <li><b>Mejores Prácticas de Seguridad:</b> Implementación de mejores prácticas de seguridad en entornos Windows, como el uso de antivirus, firewalls y políticas de seguridad estrictas para proteger los datos y la infraestructura.</li>
                </ul>
            </section>

            <section class="tool-section_infografia_windows">
                <h2>Herramientas en Windows</h2>
                <ul>
                    <li><b>Microsoft Office:</b> Una suite de aplicaciones que incluye Word, Excel, PowerPoint, Outlook, y más, esenciales para el trabajo diario y la colaboración en equipo.</li>
                    <li><b>Microsoft Edge:</b> Un navegador web rápido y seguro con características de productividad como Colecciones, Pestañas Verticales y un modo de lectura para una mejor experiencia de navegación.</li>
                    <li><b>Windows Terminal:</b> Una poderosa herramienta para desarrolladores que facilita el uso de la línea de comandos con soporte para múltiples pestañas, personalización avanzada y compatibilidad con PowerShell, Cmd y WSL (Windows Subsystem for Linux).</li>
                    <li><b>Visual Studio Code:</b> Un editor de código fuente ligero y potente con soporte para extensiones, ideal para programación en múltiples lenguajes. Ofrece características como depuración, control de versiones integrado y una amplia comunidad de extensiones.</li>
                    <li><b>OneDrive:</b> Una solución de almacenamiento en la nube que permite sincronizar y compartir archivos fácilmente entre dispositivos. Ofrece integración nativa con Windows y las aplicaciones de Microsoft Office.</li>
                    <li><b>Power Automate:</b> Una herramienta que permite automatizar flujos de trabajo y tareas repetitivas en Windows y otras aplicaciones, mejorando la eficiencia y reduciendo errores manuales.</li>
                    <li><b>Microsoft Teams:</b> Una plataforma de colaboración que combina chat, videollamadas y compartición de archivos, ideal para el trabajo en equipo y la comunicación en entornos profesionales.</li>
                    <li><b>Microsoft Defender:</b> Una solución de seguridad integrada que proporciona protección en tiempo real contra malware, virus y otras amenazas cibernéticas.</li>
                </ul>
            </section>

            <section class="accessibility-section_infografia_windows">
                <h2>Configuración de accesibilidad en Windows</h2>
                <p>Windows incluye características diseñadas para hacer que el sistema operativo sea accesible para todos los usuarios:</p>
                <ul>
                    <li><b>Narrador:</b> Configfuración de herramienta integrada para lectura texto en la pantalla para usuarios con discapacidades visuales.</li>
                    <li><b>Configuración y ajustes de vídeo:</b> Incremento el contenido de la pantalla para facilitar visualización, expansión de escritorios y montaje de setup para propositos de monitoreo en general.</li>
                    <li><b>Reconocimiento de Voz:</b> Configuración de funcionalidad para controlar el dispositivo a travez de comandos por voz.</li>
                    <li><b>Teclado en Pantalla:</b> Ideal para usuarios con dificultades para usar teclados físicos.</li>
                </ul>
            </section>

            <section class="gaming-section_infografia_windows">
                <h2>Características para Gamers</h2>
                <p>Windows ofrece varias características que mejoran la experiencia de juego:</p>
                <ul>
                    <li><b>Modo de Juego:</b> Optimiza el rendimiento del sistema para una experiencia de juego más fluida.</li>
                    <li><b>Xbox Game Bar:</b> Una barra integrada para grabar, transmitir y acceder rápidamente a herramientas mientras juegas.</li>
                    <li><b>DirectX:</b> Tecnología avanzada para gráficos de alta calidad y rendimiento mejorado.</li>
                    <li><b>Compatibilidad:</b> Soporte para una amplia variedad de juegos y hardware.</li>
                </ul>
            </section>
        </div>
    `;
};

HTMLElement.prototype.contenidoInfografiaDebian = function() {
    this.innerHTML = `
        <style>
            .contenedor_infografia_debian {
                font-family: 'Arial', sans-serif;
                margin: 0 auto;
                max-width: 1200px;
                padding: 20px;
                line-height: 1.8;
                flex-direction: column;
                color: #333333;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
            }
            .contenedor_infografia_debian h2 {
                font-size: 2.2rem;
                color: #A80030;
                border-bottom: 3px solid #D70A53;
                padding-bottom: 10px;
                margin-bottom: 20px;
                font-weight: bold;
            }
            .contenedor_infografia_debian p {
                margin: 20px 0;
                font-size: 1rem;
            }
            .contenedor_infografia_debian ul {
                list-style-type: circle;
                padding-left: 40px;
                margin: 15px 0;
            }
            .contenedor_infografia_debian li {
                margin-bottom: 10px;
                font-size: 1rem;
            }
            .contenedor_infografia_debian section {
                margin-bottom: 40px;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 8px;
                transition: transform 0.3s;
            }
            .contenedor_infografia_debian section:hover {
                transform: scale(1.02);
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
            }
        </style>
        <div class="contenedor_infografia_debian">
            <section class="skill-section_infografia_debian">
                <h2>Entorno Debian</h2>
                <ul>
                    <li><b>Estabilidad:</b> Reconocido por su alta estabilidad y confiabilidad, ideal para servidores y entornos de producción.</li>
                    <li><b>Gestión de Paquetes:</b> Utiliza APT para una gestión eficiente de paquetes, incluyendo instalación, actualización y resolución de dependencias.</li>
                    <li><b>Comunidad Activa:</b> Soporte continuo y colaborativo de una comunidad global, proporcionando documentación y soluciones a problemas comunes.</li>
                    <li><b>Compatibilidad:</b> Compatible con una amplia variedad de arquitecturas, desde servidores hasta dispositivos embebidos.</li>
                    <li><b>Personalización:</b> Permite personalizar el sistema al detalle, desde el kernel hasta el entorno de escritorio.</li>
                    <li><b>Seguridad:</b> Actualizaciones regulares de seguridad para mantener el sistema protegido contra vulnerabilidades.</li>
                </ul>
            </section>

            <section class="tool-section_infografia_debian">
                <h2>Herramientas en Debian</h2>
                <ul>
                    <li><b>GNOME, KDE y XFCE:</b> Entornos de escritorio ampliamente utilizados y personalizables para diferentes necesidades.</li>
                    <li><b>Synaptic:</b> Una interfaz gráfica para la gestión de paquetes, ideal para usuarios menos familiarizados con la línea de comandos.</li>
                    <li><b>Bash:</b> Shell predeterminado que permite la ejecución de scripts avanzados y la automatización de tareas.</li>
                    <li><b>Systemd:</b> Sistema de inicialización que facilita la gestión de servicios y el arranque del sistema.</li>
                    <li><b>LibreOffice:</b> Una suite ofimática completa, alternativa gratuita a herramientas propietarias.</li>
                    <li><b>SSH:</b> Herramienta esencial para acceder y gestionar servidores de forma remota.</li>
                    <li><b>Docker:</b> Plataforma de contenedores para desarrollar, probar y desplegar aplicaciones en entornos aislados.</li>
                    <li><b>Fail2Ban:</b> Solución para prevenir ataques de fuerza bruta bloqueando direcciones IP sospechosas.</li>
                </ul>
            </section>

            <section class="accessibility-section_infografia_debian">
                <h2>Accesibilidad en Debian</h2>
                <p>Debian incluye características que hacen el sistema accesible para todos:</p>
                <ul>
                    <li><b>Orca:</b> Lector de pantalla para usuarios con discapacidades visuales.</li>
                    <li><b>Ampliador:</b> Permite ampliar el contenido de la pantalla para facilitar su visualización.</li>
                    <li><b>Teclado en Pantalla:</b> Herramienta útil para usuarios con dificultades motoras.</li>
                    <li><b>Compatibilidad con dispositivos:</b> Soporte para dispositivos de asistencia como teclados Braille.</li>
                </ul>
            </section>

            <section class="server-section_infografia_debian">
                <h2>Características para Servidores</h2>
                <p>Debian es una opción destacada para servidores debido a:</p>
                <ul>
                    <li><b>Alta Disponibilidad:</b> Soporte para configuraciones avanzadas como clusters de alta disponibilidad.</li>
                    <li><b>Seguridad:</b> Actualizaciones rápidas y políticas estrictas para mitigar riesgos.</li>
                    <li><b>Ligereza:</b> Instalaciones mínimas disponibles para maximizar el rendimiento.</li>
                    <li><b>Soporte LTS:</b> Versiones con soporte a largo plazo para entornos críticos.</li>
                </ul>
            </section>
        </div>
    `;
};

HTMLElement.prototype.contenidoInfografiaUbuntu = function() {
    this.innerHTML = `
        <style>
            .contenedor_infografia_ubuntu {
                font-family: 'Ubuntu', Arial, sans-serif;
                margin: 0 auto;
                max-width: 1200px;
                padding: 20px;
                line-height: 1.8;
                flex-direction: column;
                color: #333333;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                border-radius: 10px;
            }
            .contenedor_infografia_ubuntu h2 {
                font-size: 2.2rem;
                color: #E95420;
                border-bottom: 3px solid #FF7E3D;
                padding-bottom: 10px;
                margin-bottom: 20px;
                font-weight: bold;
            }
            .contenedor_infografia_ubuntu p {
                margin: 20px 0;
                font-size: 1rem;
            }
            .contenedor_infografia_ubuntu ul {
                list-style-type: square;
                padding-left: 40px;
                margin: 15px 0;
            }
            .contenedor_infografia_ubuntu li {
                margin-bottom: 10px;
                font-size: 1rem;
            }
            .contenedor_infografia_ubuntu section {
                margin-bottom: 40px;
                padding: 20px;
                background-color: #fff;
                border-radius: 8px;
                transition: transform 0.3s;
            }
            .contenedor_infografia_ubuntu section:hover {
                transform: scale(1.02);
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
            }
        </style>
        <div class="contenedor_infografia_ubuntu">
            <section class="skill-section_infografia_ubuntu">
                <h2>Entorno Ubuntu</h2>
                <ul>
                    <li><b>Amigable para el Usuario:</b> Entorno gráfico intuitivo y fácil de usar, ideal tanto para principiantes como para expertos.</li>
                    <li><b>Actualizaciones Regulares:</b> Lanza nuevas versiones cada seis meses, con actualizaciones de largo plazo (LTS) cada dos años.</li>
                    <li><b>Compatible con Hardware:</b> Excelente soporte para hardware moderno, incluyendo laptops, PCs y servidores.</li>
                    <li><b>Soporte Multiplataforma:</b> Disponible para arquitecturas x86, ARM y más.</li>
                    <li><b>Seguridad:</b> Parches y actualizaciones de seguridad regulares para proteger el sistema contra vulnerabilidades.</li>
                </ul>
            </section>

            <section class="tool-section_infografia_ubuntu">
                <h2>Herramientas en Ubuntu</h2>
                <ul>
                    <li><b>Ubuntu Software:</b> Una tienda de aplicaciones integrada para instalar software fácilmente con un clic.</li>
                    <li><b>GNOME:</b> Entorno de escritorio predeterminado con una experiencia visual moderna y personalizable.</li>
                    <li><b>Snap:</b> Sistema de paquetes universal que facilita la instalación de aplicaciones en cualquier versión de Ubuntu.</li>
                    <li><b>Bash:</b> Shell poderoso para tareas de administración y scripting avanzado.</li>
                    <li><b>LibreOffice:</b> Suite de oficina completa para documentos, hojas de cálculo y presentaciones.</li>
                    <li><b>Timeshift:</b> Herramienta para crear y gestionar puntos de restauración del sistema.</li>
                    <li><b>VirtualBox:</b> Software de virtualización para ejecutar otros sistemas operativos dentro de Ubuntu.</li>
                    <li><b>UFW:</b> Cortafuegos simplificado para proteger redes y aplicaciones.</li>
                </ul>
            </section>

            <section class="accessibility-section_infografia_ubuntu">
                <h2>Accesibilidad en Ubuntu</h2>
                <p>Ubuntu incluye características diseñadas para ser accesible para todos los usuarios:</p>
                <ul>
                    <li><b>Orca:</b> Lector de pantalla para usuarios con discapacidades visuales.</li>
                    <li><b>Ampliador de Pantalla:</b> Permite agrandar áreas específicas de la pantalla para facilitar su lectura.</li>
                    <li><b>Teclado en Pantalla:</b> Ideal para usuarios con problemas de movilidad o teclados físicos dañados.</li>
                    <li><b>Compatibilidad Braille:</b> Soporte integrado para dispositivos Braille.</li>
                </ul>
            </section>

            <section class="server-section_infografia_ubuntu">
                <h2>Características para Servidores</h2>
                <p>Ubuntu es una opción popular para servidores gracias a:</p>
                <ul>
                    <li><b>Soporte LTS:</b> Actualizaciones a largo plazo garantizadas durante cinco años para entornos críticos.</li>
                    <li><b>Cloud Ready:</b> Integración nativa con servicios en la nube como AWS, Azure y Google Cloud.</li>
                    <li><b>Ligero y Eficiente:</b> Permite configuraciones mínimas para maximizar el rendimiento.</li>
                    <li><b>Soporte Contenerizado:</b> Compatibilidad con Docker, Kubernetes y otros sistemas de orquestación de contenedores.</li>
                </ul>
            </section>
        </div>
    `;
};

HTMLElement.prototype.contenidoInfografiaMarkdownGitHub = function() {
    this.innerHTML = `
<style>
  .contenedor_infografia_markdown_github {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0 auto;
    max-width: 980px;
    padding: 20px;
    line-height: 1.6;
    background-color: #fff;
    color: #333;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  .contenedor_infografia_markdown_github h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    color: #0366d6;
  }
  .contenedor_infografia_markdown_github h2 {
    font-size: 1.5rem;
    margin-top: 1.5rem;
    font-weight: 600;
    color: #0366d6;
    border-bottom: 1px solid #eaecef;
    padding-bottom: 0.3rem;
  }
  .contenedor_infografia_markdown_github h3 {
    font-size: 1.25rem;
    margin-top: 1.5rem;
    color: #24292e;
  }
  .contenedor_infografia_markdown_github h4 {
    font-size: 1rem;
    margin-top: 1.2rem;
    color: #24292e;
  }
  .contenedor_infografia_markdown_github p {
    font-size: 1rem;
    margin: 15px 0;
    color: #24292e;
  }
  .contenedor_infografia_markdown_github code {
    background-color: #f6f8fa;
    color: #e36209;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-size: 1rem;
    border: 1px solid #e1e4e8;
  }
  .contenedor_infografia_markdown_github pre {
    background-color: #f6f8fa;
    padding: 15px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 1rem;
    line-height: 1.5;
    margin: 1.5rem 0;
    color: #e36209;
    border: 1px solid #e1e4e8;
  }
  .contenedor_infografia_markdown_github ul {
    padding-left: 20px;
    list-style-type: disc;
    margin-bottom: 1rem;
    color: #24292e;
  }
  .contenedor_infografia_markdown_github ol {
    padding-left: 40px;
    margin-bottom: 1rem;
    color: #24292e;
  }
  .contenedor_infografia_markdown_github blockquote {
    border-left: 4px solid #dfe2e5;
    padding-left: 1rem;
    margin: 1.5rem 0;
    color: #6a737d;
    background-color: #f6f8fa;
    font-style: italic;
  }
  .contenedor_infografia_markdown_github hr {
    border: 0;
    border-top: 1px solid #eaecef;
    margin: 2rem 0;
  }
  .contenedor_infografia_markdown_github .skill-section_infografia_markdown_github {
    margin-bottom: 40px;
    padding: 20px;
    background-color: #f6f8fa;
    border-left: 3px solid #0366d6;
    border-radius: 6px;
    color: #24292e;
  }
  .contenedor_infografia_markdown_github .tool-section_infografia_markdown_github {
    margin-bottom: 40px;
    padding: 20px;
    background-color: #f6f8fa;
    border-left: 3px solid #0366d6;
    border-radius: 6px;
  }
  .contenedor_infografia_markdown_github .accessibility-section_infografia_markdown_github {
    margin-bottom: 40px;
    padding: 20px;
    background-color: #f6f8fa;
    border-left: 3px solid #6f42c1;
    border-radius: 6px;
  }
  .contenedor_infografia_markdown_github .server-section_infografia_markdown_github {
    margin-bottom: 40px;
    padding: 20px;
    background-color: #f6f8fa;
    border-left: 3px solid #d73a49;
    border-radius: 6px;
  }
</style>
        <div class="contenedor_infografia_markdown_github">
            <section class="skill-section_infografia_markdown_github">
                <h2>## Extensiones Personalizadas para el Prototipo de \`HTMLElement\`</h2>
                <p>Este proyecto extiende el prototipo nativo de \`HTMLElement\` para agregar métodos útiles que simplifican tareas comunes en la manipulación del DOM. Las funciones incluidas abarcan desde animaciones hasta la gestión de eventos y estilos dinámicos.</p>
                <h3>## Métodos Disponibles</h3>
                
                <h4> \`displayNone\`</h4>
                <p>Oculta un elemento HTML con una animación de desvanecimiento.</p>
                <p><b>Uso:</b></p>
                <pre><code>document.getElementById('miElemento').displayNone();</code></pre>
                <p><b>Descripción:</b></p>
                <ul>
                    <li>Aplica una animación de desvanecimiento durante 0.5 segundos.</li>
                    <li>Cambia el estilo \`display\` a \`none\` al finalizar la animación.</li>
                </ul>

                <h4> \`displayFlex\`</h4>
                <p>Muestra un elemento HTML con una animación de aparición y lo configura en modo \`flex\`.</p>
                <p><b>Uso:</b></p>
                <pre><code>document.getElementById('miElemento').displayFlex();</code></pre>
                <p><b>Descripción:</b></p>
                <ul>
                    <li>Aplica una animación de aparición durante 0.5 segundos.</li>
                    <li>Cambia el estilo \`display\` a \`flex\` al finalizar la animación.</li>
                </ul>

                <h4> \`entradaSuave\`</h4>
                <p>Aplica una animación cinematográfica suave a un elemento.</p>
                <p><b>Uso:</b></p>
                <pre><code>document.getElementById('miElemento').entradaSuave();</code></pre>
                <p><b>Descripción:</b></p>
                <ul>
                    <li>Aplica una animación lenta que transforma el fondo, el brillo, y la escala del elemento.</li>
                    <li>Si la animación no está definida, la crea dinámicamente como una regla CSS.</li>
                </ul>

                <h4> \`onScrollIntoView\`</h4>
                <p>Ejecuta una función cuando el elemento entra en el viewport.</p>
                <p><b>Uso:</b></p>
                <pre><code>document.getElementById('miElemento').onScrollIntoView((entry) => {
    console.log('Elemento visible:', entry.target);
});</code></pre>
                <p><b>Parámetros:</b></p>
                <ul>
                    <li>\`callback\` (función): Se ejecuta cuando el elemento es visible.</li>
                    <li>\`options\` (opcional): Configura el comportamiento del observador.</li>
                </ul>
                <p><b>Retorno:</b> Devuelve el observador creado para desconexión manual si es necesario.</p>

                <h4> \`nivelScroll\`</h4>
                <p>Calcula el porcentaje de desplazamiento dentro de un contenedor.</p>
                <p><b>Uso:</b></p>
                <pre><code>let porcentaje = document.getElementById('contenedor').nivelScroll();
console.log('Porcentaje de scroll:', porcentaje);</code></pre>
                <p><b>Descripción:</b></p>
                <ul>
                    <li>Devuelve el porcentaje de scroll dentro de un elemento en un valor entre \`0\` y \`100\`.</li>
                </ul>

                <h4> \`removeElement\`</h4>
                <p>Elimina un elemento HTML con una animación de desvanecimiento.</p>
                <p><b>Uso:</b></p>
                <pre><code>document.getElementById('miElemento').removeElement();</code></pre>
                <p><b>Descripción:</b></p>
                <ul>
                    <li>Aplica una animación de desvanecimiento durante 0.3 segundos.</li>
                    <li>Elimina el elemento del DOM al finalizar la animación.</li>
                </ul>

                <h4> \`toggleDisplayFlexNone\`</h4>
                <p>Alterna entre mostrar un elemento como \`flex\` o ocultarlo como \`none\`.</p>
                <p><b>Uso:</b></p>
                <pre><code>document.getElementById('miElemento').toggleDisplayFlexNone();</code></pre>
                <p><b>Descripción:</b></p>
                <ul>
                    <li>Cambia dinámicamente entre los estilos \`display: flex\` y \`display: none\` según el estado actual del elemento.</li>
                </ul>

                <h3>## Instalación</h3>
                <p>Puedes sencillamente descargar el .JS en tu carpeta de preferencia para importarla y comenzar a desarrollar.</p>

                <h3>## Requisitos</h3>
                <ul>
                    <li>Un navegador moderno con soporte para \`IntersectionObserver\`.</li>
                </ul>

                <h3>## Contribuciones</h3>
                <p>Las contribuciones son bienvenidas. Si deseas agregar más métodos o mejorar los existentes, puedes ponerte en contacto.</p>

                <h3>## Licencia</h3>
                <p>Este proyecto es de dominio público. Puedes usarlo y modificarlo libremente.</p>
            </section>
        </div>
    `;
};

HTMLElement.prototype.contenidoCatalogos = function() {
    this.innerHTML = `
        <style>
            body {
                font-family: 'Arial', sans-serif;
                background-color: #f4f4f4;
                color: #333;
                margin: 0;
                padding: 0;
                text-align: center;
            }
            header {
                background: #007BFF;
                color: white;
                padding: 60px 20px;
                margin-bottom: 40px;
            }
            h1 {
                font-size: 2.5rem;
                margin-bottom: 10px;
                color: white;
            }
            h2 {
                font-size: 2rem;
                color: #007BFF;
            }
            section {
                padding: 40px 20px;
                margin: auto;
                max-width: 800px;
                background: white;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            p {
                font-size: 1.1rem;
                line-height: 1.6;
            }
            .cta-button {
                display: inline-block;
                margin: 20px 0;
                padding: 15px 30px;
                background: #007BFF;
                color: white;
                text-decoration: none;
                border-radius: 5px;
                font-size: 1.2rem;
                transition: background 0.3s ease;
            }
            .cta-button:hover {
                background: #0056b3;
            }
            footer {
                background: #333;
                color: white;
                padding: 20px;
                margin-top: 40px;
            }
            .catalogo-container {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                gap: 20px;
                margin-top: 20px;
            }
            .producto {
                background: #fff;
                border: 1px solid #ddd;
                border-radius: 10px;
                padding: 20px;
                width: 200px;
                height: 360px;
                text-align: center;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                flex-direction: column;
            }
            .producto:hover {
                transform: translateY(-10px);
                box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
            }
            .producto-imagen {
                width: 100%;
                height: auto;
                border-radius: 10px;
            }
            .precio {
                font-size: 1.2rem;
                color: #007BFF;
                font-weight: bold;
            }
            .boton-comprar {
                background: #007BFF;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                transition: background 0.3s ease;
            }
            .boton-comprar:hover {
                background: #0056b3;
            }
        </style>
        <header>
            <h1>Servicios de Desarrollo Web</h1>
            <p>Formaliza tus negocios con una presencia en línea profesional y accesible.</p>
        </header>

        <section id="beneficios">
            <h2>Catálogos Web y Beneficios</h2>
            <p>Un catálogo web te permite:</p>
            <ul>
                <li>✅ Aumentar tu visibilidad en línea.</li>
                <li>✅ Atraer más clientes locales.</li>
                <li>✅ Mostrar tus productos o servicios de manera profesional.</li>
                <li>✅ Actualizar tu información fácilmente.</li>
            </ul>
        </section>

        <section id="servicios">
            <h2>Soluciones digitales</h2>
            <p>Ofrecemos soluciones adaptadas a tus necesidades:</p>
            <ul>
                <li>🌐 Diseño de catálogos web personalizados.</li>
                <li>📱 Optimización para dispositivos móviles.</li>
                <li>🔍 Integración con redes sociales y SEO básico.</li>
                <li>🛠️ Soporte técnico y capacitación.</li>
            </ul>
        </section>

        <section id="catalogo-ejemplo">
            <h2>Catálogo Web de Ejemplo</h2>
            <p>Así podría verse tu catálogo web:</p>
            <div class="catalogo-container">
                <div class="producto">
                    <img src="./vista/img/cosmeticos.jpg" alt="Cosmeticos" class="producto-imagen">
                    <h3>Cosmeticos</h3>
                    <p>Productos de Belleza.</p>
                    <p class="precio">$3.99</p>
                    <button class="boton-comprar">Ver más</button>
                </div>
                <div class="producto">
                    <img src="./vista/img/clavos.jpg" alt="Clavos" class="producto-imagen">
                    <h3>Clavos</h3>
                    <p>Productos Ferretería.</p>
                    <p class="precio">$4.99</p>
                    <button class="boton-comprar">Ver más</button>
                </div>
                <div class="producto">
                    <img src="./vista/img/productos_y_servicios.jpg" alt="Productos y Servicios" class="producto-imagen">
                    <h3>Productos y Servicios</h3>
                    <p>Catálogos y pedidos.</p>
                    <p class="precio">$19.49</p>
                    <button class="boton-comprar">Ver más</button>
                </div>
            </div>
        </section>

        <section id="catalogo-moderno">
            <h2 class="titulo-destacado">Catálogo Moderno</h2>
            <p class="descripcion-catalogo">Descubre nuestro catálogo con un diseño fresco y moderno:</p>
            <div class="catalogo-grid">
                <div class="producto-card">
                    <img src="./vista/img/cosmeticos.jpg" alt="Cosmeticos" class="producto-imagen-estilizada">
                    <h3 class="producto-titulo">Cosméticos</h3>
                    <p class="producto-descripcion">Productos de belleza para resaltar tu estilo.</p>
                    <p class="precio-destacado">$3.99</p>
                    <button class="boton-accion">Ver detalles</button>
                </div>
                <div class="producto-card">
                    <img src="./vista/img/clavos.jpg" alt="Clavos" class="producto-imagen-estilizada">
                    <h3 class="producto-titulo">Clavos</h3>
                    <p class="producto-descripcion">Materiales de ferretería de alta calidad.</p>
                    <p class="precio-destacado">$4.99</p>
                    <button class="boton-accion">Ver detalles</button>
                </div>
                <div class="producto-card">
                    <img src="./vista/img/productos_y_servicios.jpg" alt="Productos y Servicios" class="producto-imagen-estilizada">
                    <h3 class="producto-titulo">Productos y Servicios</h3>
                    <p class="producto-descripcion">Catálogos personalizados y pedidos en línea.</p>
                    <p class="precio-destacado">$19.49</p>
                    <button class="boton-accion">Ver detalles</button>
                </div>
            </div>
        </section>

        <style>
            /* Estilos para la sección moderna */
            #catalogo-moderno {
                background-color: #f9f9f9;
                padding: 40px 20px;
                margin-top: 20px;
                margin-bottom: 20px;
                text-align: center;
            }

            .titulo-destacado {
                font-size: 2.5rem;
                color: #333;
                margin-bottom: 10px;
            }

            .descripcion-catalogo {
                font-size: 1.2rem;
                color: #666;
                margin-bottom: 30px;
            }

            .catalogo-grid {
                padding: 20px;
                flex-direction: column;
                height: min-content;
            }

            .producto-card {
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                overflow: hidden;
                transition: transform 0.3s ease, box-shadow 0.3s ease;
                flex-direction: column ;
                margin-bottom: 45px;
            }

            .producto-card:hover {
                transform: translateY(-10px);
                box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            }

            .producto-imagen-estilizada {
                width: 100%;
                height: 200px;
                object-fit: cover;
            }

            .producto-titulo {
                font-size: 1.5rem;
                color: #444;
                margin: 15px 0 10px;
            }

            .producto-descripcion {
                font-size: 1rem;
                color: #777;
                padding: 0 15px;
            }

            .precio-destacado {
                font-size: 1.4rem;
                color: #e91e63;
                font-weight: bold;
                margin: 15px 0;
            }

            .boton-accion {
                background-color: #e91e63;
                color: #fff;
                border: none;
                padding: 10px 20px;
                font-size: 1rem;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            .boton-accion:hover {
                background-color: #d81b60;
            }
        </style>

        <section id="contacto">
            <p>Contáctanos hoy mismo y lleva tu negocio al siguiente nivel.</p>
            <a href="mailto:kinich.development@gmail.com" class="cta-button">Enviar un correo</a>
        </section>

        <footer>
            <p>Leonardo K. Luna. <br>kinich.development@gmail.com <br>Desarrollo de Software.</p>
        </footer>
    `;
};