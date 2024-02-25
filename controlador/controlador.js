const body = document.body
let contenedor_principal = mkObj(body,"contenedor_principal","contenedor_principal")
    let header = mkObj(contenedor_principal,"header","header")
        let  = mkObj(header,"contenedor_img_header","contenedor_img_header")

            let container = mkObj(contenedor_img_header,"container")
                let circle = mkObj(container,"circle")

        contenedor_img_header.addEventListener("mouseenter",function () {
            circle.className="circle_white"
        })
        contenedor_img_header.addEventListener("mouseleave",function () {
            circle.className="circle"
        })
        contenedor_img_header.addEventListener("mouseup",function () {
            location.reload()
        })
        
                    



        let contenedor_menu_header = mkObj(header,"contenedor_menu_header","contenedor_menu_header")
            let menu = mkObj(contenedor_menu_header,"menu","menu")
            let contenedor_puntos_menu = mkObj(menu,"contenedor_puntos_menu","contenedor_puntos_menu")
                let disco_menu_superior = mkObjObj(contenedor_puntos_menu,"disc","disco_menu_superior") 
                let disco_menu_central = mkObjObj(contenedor_puntos_menu,"disc","disco_menu_central") 
                let disco_menu_inferior = mkObjObj(contenedor_puntos_menu,"disc","disco_menu_inferior") 

            // let menu_header = mkObjImg(contenedor_menu_header,"menu_header","menu_header","./vista/img/menu.png")
            let pestaña_menu_header = mkObj(header,"pestaña_menu_header","pestaña_menu_header")
                let header_opcion_inicio = mkText(pestaña_menu_header,"header_opcion","header_opcion_inicio","Paginación de plataformas.")
                let header_opcion_creacion_contenido = mkText(pestaña_menu_header,"header_opcion","header_opcion_inicio","Creación de contenido.")
                let header_opcion_seguridad = mkText(pestaña_menu_header,"header_opcion","header_opcion_inicio","Seguridad.")
                let header_opcion_informatica = mkText(pestaña_menu_header,"header_opcion","header_opcion_inicio","Informática.")
                let header_opcion_administracion_logistica = mkText(pestaña_menu_header,"header_opcion","header_opcion_inicio","Administración y logística.")
    placerMenu(menu,pestaña_menu_header)

    let cuerpo = mkObj(contenedor_principal,"cuerpo","cuerpo")


    contenidoInicio()
function contenidoInicio() {

    cuerpo.innerHTML=""

    let cuerpo_inicio = mkObj(cuerpo,"cuerpo","cuerpo_inicio")



            



        let contenido_perfil = mkTextList(cuerpo_inicio,"contenido_experiencia_destacada","contenido_experiencia_destacada",
            "Perfil.",
            "Leonardo K. Luna",
            "Informática, logística y desarrollo",
            "Nacimiento: México D.F. (CDMX) - 1997.",
            "Soy una persona comprometida con el trabajo con el trabajo que se realiza, enfocado en brindar soluciones prácticas a procesos repetitivos para optimizar el proceso de ventas y desarrollo creativo.",
        )
    
        let contenido_experiencia_destacada = mkTextList(cuerpo_inicio,"contenido_experiencia_destacada","contenido_experiencia_destacada",
            "Experiencia General.",
            "8 de trabajo en entornos empresariales.",
            "Captura de datos -> Control de Inventarios -> Administración Logística -> Desarrollo de software.",
            "Programación orientada al control de inventario, administración logística, corrección de errores y validadción de datos.",
            "Mejora e implementación de sistemas para manejo de información en tiempo real.",
        )

        // let img_escritorio_trabajo = mkObjImg(cuerpo_inicio,"img_escritorio_trabajo","img_escritorio_trabajo","./vista/img/escritorio_trabajo.png")

        let habilidades_destacadas_web = mkTextList(cuerpo_inicio, "contenido_experiencia_destacada", "habilidades_destacadas_web",
            "Habilidades Destacadas en Desarrollo Web",
            "Diseño responsivo y adaptativo.",
            "Desarrollo front-end con tecnologías modernas (HTML5, CSS3, JavaScript).",
            "Integración de APIs y servicios web.",
            "Optimización de rendimiento y velocidad del sitio.",
            "Manejo de control de versiones (Git).",
            "Conocimientos en seguridad web.",
            "Creación de biblioteca orientada a programación funcional - mkDom.",
            "Diseño de contenido.",
        );

        let carrusel_mkDom = mkCarrusel(cuerpo_inicio,"carrusel","carrusel_mkDom",
            "vista/img/mkDom.png",
            "vista/img/mkDomDinamico.png",
        )    


        let habilidades_destacadas_administracion = mkTextList(cuerpo_inicio, "contenido_experiencia_destacada", "habilidades_destacadas_administracion",
            "Habilidades Destacadas en Administracion",

            "Buena mecanografía.",
            "Aplicaciones de excel para empresas.",
            "Diseño y control de reportes.",
            "Diseño de formularios.",
            "Bases de datos.",
            "Graficación Javascrip.",
        );



        let contenido_etiquetas_actividades = mkObj(cuerpo_inicio,"contenido_etiquetas_actividades","contenido_etiquetas_actividades")

            let etiqueta_actividades_sistema_usuarios = etiquetaElemento(contenido_etiquetas_actividades,"etiqueta_actividades","etiqueta_actividades_sistema_usuarios","Sistema de Usuarios.","./vista/img/actividades_login.png","Registro, autentificación, gestión de perfiles, seguridad de contraseñas...")
            let etiqueta_actividades_formularios = etiquetaElemento(contenido_etiquetas_actividades,"etiqueta_actividades","etiqueta_actividades_forumularios","Formularios.","./vista/img/actividades_formularios.png","Formularios con validaciones de datos...")
            let etiqueta_actividades_encuestas_sugerencias = etiquetaElemento(contenido_etiquetas_actividades,"etiqueta_actividades","etiqueta_actividades_forumularios","Encuestas  y cajas de sujerencias.","./vista/img/actividades_encuestas_sugerencias.png","Encuestas y caja de sugerencias personalizadas para validaciones de datos...")

        let contenido_calendarios_personalizados = mkObj(cuerpo_inicio,"contenido_calendarios_personalizados","contenido_calendarios_personalizados")

            let descripcion_inicio = mkTextList(contenido_calendarios_personalizados,"descripcion_inicio","descripcion_inicio",
                "Calendarización de eventos.",
                "Registro de eventos a traves de calendarios personalizados.",
                "Distribución de la informacion a través de un solo registro",
            )
        
            let ventana_calendarios = mkObj(contenido_calendarios_personalizados,"ventana_calendarios","ventana_calendarios") 

                let calendario_input = mkObjInput(ventana_calendarios,"calendario_input","calendario_input","date","Inserta una fecha para ver el calendario.")
                let contenedor_calendario = mkObj(ventana_calendarios,"contenedor_calendario","contenedor_calendario")
                    calendario_input.addEventListener("input",function () {
                        contenedor_calendario.innerHTML=""
                        let fecha = calendario_input.querySelector("input").value
                        let calendario = mkCalendario(contenedor_calendario,"calendario","calendario","Calendarios dinámicos con bases de datos.",fecha,
                            "Elemento ejemplo 1",
                            "Actividades Ejemplos",
                            "Leonardo K. Luna",
                            "81 3101 0497"
                        )
                    })


        let contenido_etiquetas_actividades_ = mkObj(cuerpo_inicio,"contenido_etiquetas_actividades","contenido_etiquetas_actividades")

            let etiqueta_actividades_tablas_calculo = etiquetaElemento(contenido_etiquetas_actividades_,"etiqueta_actividades","etiqueta_actividades_tablas_calculo","Tablas de Cálculo.","./vista/img/actividades_tablas_calculo.png","Tablas de cálculo dinámicas en navegador completamente personalizadas, ...")
            let etiqueta_actividades_reportes_automaticos = etiquetaElemento(contenido_etiquetas_actividades_,"etiqueta_actividades","etiqueta_actividades_tablas_calculo","Reportes automáticos.","./vista/img/actividades_reportes_automaticos.png","Reportes automaticos con bases de datos...")

        let contenido_diseño_responsivo = mkTextList(cuerpo_inicio,"descripcion_inicio","contenido_diseño_responsivo",
            "Diseños Responsivos",
        )


        let img_pc = mkObjImg(cuerpo_inicio,"img_pc","img_pc","./vista/img/logo_logistic.png")

        let contenido_catalogo_ficha_tecnica = mkTextList(cuerpo_inicio,"descripcion_inicio","descripcion_inicio",
            "Catágolos y Fichas Técnicas.",
            "Sistema de pedidos y almacenamiento en base de datos.",
            "Automatización de formatos para pedidos",
            "",
            "",
        )

        let contenido_etiquetas_actividades_catalogo = mkObj(cuerpo_inicio,"contenido_etiquetas_actividades_catalogo","contenido_etiquetas_actividades_catalogo")

            let etiqueta_actividades_catalogo_fichas_tecnicas = etiquetaElemento(contenido_etiquetas_actividades_catalogo,"etiqueta_actividades","etiqueta_actividades_catalogo_fichas_tecnicas","Catálogos y fichas técnicas.","./vista/img/catalogo_fichas_tecnicas.png","Catágos con fichas técnicas, sistema de pedidos")
            let etiqueta_actividades_catalogo_cotizacion = etiquetaElemento(contenido_etiquetas_actividades_catalogo,"etiqueta_actividades","etiqueta_actividades_catalogo_cotizacion","Sistema de Cotizaciones.","./vista/img/catalogo_cotizacion.png","Catágos con fichas técnicas, sistema de pedidos ")
            // catalogo_fichas_tecnicas.png

        let descripcion_mapa = mkTextList(cuerpo_inicio,"descripcion_inicio","descripcion_mapa",
            "Elaboración de reportes con rutas en KML",
            "KML es un estándar de codificación XML utilizado para representar datos geoespaciales, incluidas rutas y puntos de interés.",
            "Almacenamiento de información relevante en bases de datos.",
        )

        let carrusel_guia_mapas = mkCarrusel(cuerpo_inicio,"carrusel","carrusel_guia_mapas",
            "vista/img/kml_guide_1_mymaps.svg",
            "vista/img/kml_guide_2_indicaciones.svg",
            "vista/img/kml_guide_3_ruta.svg",
            "vista/img/kml_guide_4_opciones.svg",
            "vista/img/kml_guide_5_archivo.svg",
            "vista/img/kml_guide_6_reporte.svg",
        )



        let contenido_mapas = mkObj(cuerpo_inicio,"contenido_mapas","contenido_mapas")


            let input_mapa = mkObjInput(contenido_mapas,"calendario_input","input_mapa","file","Crea una ruta en Google MyMaps, exporta la informacion en KML e inserta aqui el archivo .kml","INSERTA AQUI EL ARCHIVO KML","helvetica","13px","black");
            let mapa = mkObj(contenido_mapas,"mapa","mapa");         
            
            // Escuchar el evento 'change' del input
            let in_mapa = input_mapa.querySelector("input")
            console.log(in_mapa)
            

            in_mapa.addEventListener('change', mapaRuta);


        let contenido_constancias = mkTextList(cuerpo_inicio,"descripcion_inicio","contenido_constancias",
            "Capacitaciones Educativas.",
            "Introducción al Plan de Negocios. CECATI.",
            "Mantenimiento Básico a PC. CECATI.",
            "Mantenimiento Básico a Laptop. CECATI.",
        )

        let contenido_habilidades_destacadas = mkTextList(cuerpo_inicio,"descripcion_inicio","contenido_habilidades_destacadas",
            "Habilidades Destacadas.",
            "Programación Funcional. (JavaScript)",
            "Programación orientada a objetos. (php)",
            "Automatización bases de datos. (php,SQL)",
            "Diseño de imágenes. (GIMP, Adobe Ilustrator)",
            "Diseño de Formatos. (PDF, GIMP, Adobe Ilustrator)",
        )

        let contenido_dominio_lenguajes_html = mkTextList(cuerpo_inicio,"descripcion_inicio","contenido_dominio_lenguajes_html",
            "HTML",
            "Maquetación dinámica con JS",
            "Uso exclusivo de scripts para dinámica de DOM",
            "Optimización de rendimiento",
            "Diseño personalizado y cómodo.",
            "Formularios para captura de datos, registro de usuarios/productos/clientes/trabajadores.",
            "Documentación web para publicitar productos o servicios, información personal, opinion pública, CV o Carpetas de Trabajo.",
            "Sistema web automatizada con tareas.",
        )

        let contenido_dominio_lenguajes_css = mkTextList(cuerpo_inicio,"descripcion_inicio","contenido_dominio_lenguajes_css",
            "CSS",
            "Diseño dinámico.",
            "Completa personalizacion de diseño.",
            "Animaciones.",
        )

        let carrusel_programacion = mkCarrusel(cuerpo_inicio,"carrusel","carrusel_programacion",
            "vista/img/diagrama_html.png",
            "vista/img/diagrama_css.png",
        )    

        let contenido_dominio_lenguajes_js = mkTextList(cuerpo_inicio,"descripcion_inicio","contenido_dominio_lenguajes_js",
            "Java Script",
            "Diseño dinámico.",
            "Completa personalizacion de diseño.",
            "Animaciones.",
        )

        let contenido_dominio_lenguajes_php = mkTextList(cuerpo_inicio,"descripcion_inicio","contenido_dominio_lenguajes_php",
            "PHP",
            "Diseño dinámico.",
            "Completa personalizacion de diseño.",
            "Animaciones.",
        )

        let carrusel_programacion_sec = mkCarrusel(cuerpo_inicio,"carrusel","carrusel_programacion",
            "vista/img/diagrama_js.png",
            "vista/img/diagrama_php.png",
        )    

        let contenido_habilidades_software_excel = mkObj(cuerpo_inicio,"contenido_habilidades_software","contenido_habilidades_software_excel")

        let img_excel = mkObjImg(contenido_habilidades_software_excel,"img_hablidades_software","img_excel","./vista/img/img_excel.svg")
        let descripcion_habilidades_excel = mkTextList(contenido_habilidades_software_excel,"descripcion_habilidades","descripcion_habilidades",
            "Habilidades Excel:",
            "Diseño de formularios y captura de datos",
            "Diseño de tablas dinámicas.",
            "Diseño de formulariós dinámicos.",
            "Control de inventario.",
            "Centralización global de datos con documentos excel.",
            "Gráficas.",
            "Macros.",
            "Google Drive.",
            "Google Sheets.",
        )

    let contenido_habilidades_software_windows = mkObj(cuerpo_inicio,"contenido_habilidades_software","contenido_habilidades_software_windows")
        let descripcion_habilidades_windows = mkTextList(contenido_habilidades_software_windows,"descripcion_habilidades","descripcion_habilidades",
            "Hablidades Microsoft Windows:",
            "Configuración y actualización de versiones.",
            "Solución de problemas comunes.",
            "Manejo del simbolo del sistema (cmd | bash).",
            "Mantenimiento general del equipo físico.",
            "Administración y consultoría remota.",
            "Gestión de software y actualizaciones.",
            "Virtualización de entornos.",
            "Soporte general.",
        )
        let img_windows = mkObjImg(contenido_habilidades_software_windows,"img_hablidades_software","img_windows","./vista/img/img_windows.svg")

    let contenido_habilidades_software_debian = mkObj(cuerpo_inicio,"contenido_habilidades_software","contenido_habilidades_software_debian")
        let img_debian = mkObjImg(contenido_habilidades_software_debian,"img_hablidades_software","img_debian","./vista/img/img_debian.svg")
        let descripcion_habilidades_debian = mkTextList(contenido_habilidades_software_debian,"descripcion_habilidades","descripcion_habilidades",
            "Hablidades Debian:",
            "Instalación y configuración.",
            "Shell Script.",
            "Virtualización.",
            "Gestión de paquetería y depencias.",
            "Virtualización de entornos.",
            "Soporte general.",
        )
    let contenido_habilidades_software_ubuntu = mkObj(cuerpo_inicio,"contenido_habilidades_software","contenido_habilidades_software_ubuntu")
        let descripcion_habilidades_ubuntu = mkTextList(contenido_habilidades_software_ubuntu,"descripcion_habilidades","descripcion_habilidades",
            "Hablidades Ubuntu:",
            "Instalación y configuración.",
            "Shell Script.",
            "Virtualización.",
            "Gestión de paquetería y depencias.",
            "Virtualización de entornos.",
            "Soporte general.",
        )
        let img_ubuntu = mkObjImg(contenido_habilidades_software_ubuntu,"img_hablidades_software","img_ubuntu","./vista/img/img_ubuntu.svg")

    let contenido_habilidades_software_pase_tag = mkObj(cuerpo_inicio,"contenido_habilidades_software","contenido_habilidades_software_pase_tag")
        let img_pase_tag = mkObjImg(contenido_habilidades_software_pase_tag,"img_hablidades_software","img_pase_tag","./vista/img/img_pase_tag.svg")
        let descripcion_habilidades_pase_tag = mkTextList(contenido_habilidades_software_pase_tag,"descripcion_habilidades","descripcion_habilidades",
            "Hablidades Pase Tag:",
            "Sistema corporativo Pase Tag App.",
            "Automatización de recarga.",
            "Gestión de aclaraciones.",
            "Mapeo de casetas (MyMaps - Pase Tag).",
        )

    let contenido_habilidades_software_github = mkObj(cuerpo_inicio,"contenido_habilidades_software","contenido_habilidades_software_github")
        let descripcion_habilidades_github = mkTextList(contenido_habilidades_software_github,"descripcion_habilidades","descripcion_habilidades",
            "Hablidades Github:",
            "Control de versiones.",
            "Documentación (.md).",
            "Github Pages.",
        )
        let img_github = mkObjImg(contenido_habilidades_software_github,"img_hablidades_software","img_github","./vista/img/img_github.svg")

    let contenido_habilidades_software_mastrack = mkObj(cuerpo_inicio,"contenido_habilidades_software","contenido_habilidades_software_mastrack")
        let img_mastrack = mkObjImg(contenido_habilidades_software_mastrack,"img_hablidades_software","img_mastrack","./vista/img/img_mastrack.svg")
        let descripcion_habilidades_mastrack = mkTextList(contenido_habilidades_software_mastrack,"descripcion_habilidades","descripcion_habilidades",
            "Hablidades Mastrack:",
            "Localización.",
            "Generación de reportes.",
            "Alertas y notificaciones.",
            "Geocercas.",
        )





        let contenido_proyectos = mkTextList(cuerpo_inicio,"descripcion_inicio","contenido_proyectos",
        
        "Proyectos.",

        "Bloquera Vac",
        "<a href='https://bloqueravac.com'>bloqueraVac.com</a>",
        "Ecommerce para proveedora materialista.",
        "Sistema de pedidos.",
        "Validación de pedido.",
        "Sistema de correos.",
        "Sistema de sugerencias.",

        "Tranportes Aldoli.",
        "<a href='https://transportesaldoli.com.mx'>https://transportesaldoli.com.mx</a>",
        "Plataforma administrava de logística empresarial.",
        "Agenda de viajes.",
        "Control de reportes de kilometrajes, diesel, rendimineto de unidades, nominas, recuperaciones y utilidades.",
        "Sistema automatico de alertas de mantenimiento por kilometraje.",
        "Sistema jerárquico de usuarios.",

        "LunaKar.",
        "<a href='https://lunakarcp.github.io/LunaKar'>https://lunakarcp.github.io/LunaKar.github.io/LunaKar</a>",
        "Pagina informativa, red de trabajo para consultoría y desarrollo digital.",
        "Red de trabajo freelance orientado al desarrollo de software logístico.",
        "Asistensia CFDI con complemento carta porte.",
        "Asistencia y orientación en programación de gestión seguros.",
        "Transición de información excel a bases de datos más potentes y centralizadas.",

        "Refacciones La Barata",
        "<a href='https://labaratamr.com'>https://labaratamr.com</a>",
        "Mantenimiento general de la página.",
        "Mantenimiento general de la página.",
        "Optimización de contenido",
        "Sistema de identificación de refacciones",

        "Un Mundo de Cancelería",
        "<a href='https://cristalesycanceles.com'>https://cristalesycanceles.com</a>",
        "Ecommerce básico para negocio de vidrios y canceles.",
        "Sistema de administración de pedidos.",
        "Sistema de usuarios.",
        )



        let contenido_footer = mkTextList(cuerpo_inicio,"descripcion_inicio","contenido_footer",
            "Completa personalización del contenido",
            "Codigo limpio",
            "Rendimiento - Seguridad",
            "Buenas prácticas",
        )
        displayScroll(cuerpo_inicio)

return cuerpo_inicio
}