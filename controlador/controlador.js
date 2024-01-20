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
            let menu_header = mkObjImg(contenedor_menu_header,"menu_header","menu_header","./vista/img/menu.png")
            let pestaña_menu_header = mkObj(header,"pestaña_menu_header","pestaña_menu_header")
                let header_opcion_inicio = mkText(pestaña_menu_header,"header_opcion","header_opcion_inicio","Portal de Inicio")
                let header_opcion_login = mkText(pestaña_menu_header,"header_opcion","header_opcion_login","Ingresar/Registrar")
                let header_opcion_crear_agenda = mkText(pestaña_menu_header,"header_opcion","header_opcion_crear_agenda","Crear Agenda")
                let header_opcion_informacion = mkText(pestaña_menu_header,"header_opcion","header_opcion_informacion","Completa tu información")
                let header_opcion_cerrar_sesion = mkText(pestaña_menu_header,"header_opcion","header_opcion_cerrar_sesion","Cerrar Sesión")
                header_opcion_crear_agenda.style.display="none"
                header_opcion_informacion.style.display="none"
                header_opcion_cerrar_sesion.style.display="none"
    placerMenu(menu_header,pestaña_menu_header)

    let cuerpo = mkObj(contenedor_principal,"cuerpo","cuerpo")


    contenidoInicio()
function contenidoInicio() {

    cuerpo.innerHTML=""

    let cuerpo_inicio = mkObj(cuerpo,"cuerpo","cuerpo_inicio")

    
        let contenido_experiencia_destacada = mkTextList(cuerpo_inicio,"contenido_experiencia_destacada","contenido_experiencia_destacada",
            "Experiencia Destacada",

            "Automatización de tareas repetitivas, formularios automáticos.",
            "Mejora e implementación de sistemas para control en tiempo real.",
            "Desarrollo de software"
        )

        let img_escritorio_trabajo = mkObjImg(cuerpo_inicio,"img_escritorio_trabajo","img_escritorio_trabajo","./vista/img/escritorio_trabajo.png")

        let habilidades_destacadas_web = mkTextList(cuerpo_inicio, "contenido_experiencia_destacada", "habilidades_destacadas_web",
            "Habilidades Destacadas en Desarrollo Web",
            "Diseño responsivo y adaptativo",
            "Desarrollo front-end con tecnologías modernas (HTML5, CSS3, JavaScript)",
            "Integración de APIs y servicios web",
            "Optimización de rendimiento y velocidad del sitio",
            "Manejo de control de versiones (Git)",
            "Conocimientos en seguridad web"
        );

        let habilidades_destacadas_administracion = mkTextList(cuerpo_inicio, "contenido_experiencia_destacada", "habilidades_destacadas_administracion",
            "Habilidades Destacadas en Administracion.",
            "Excel avanzado",
            "Elavoración de reportes",
            "Diseño de Formatos",
            "Bases de datos",
            ""
        );



        let contenido_etiquetas_actividades = mkObj(cuerpo_inicio,"contenido_etiquetas_actividades","contenido_etiquetas_actividades")

            let etiqueta_actividades_sistema_usuarios = etiquetaElemento(contenido_etiquetas_actividades,"etiqueta_actividades","etiqueta_actividades_sistema_usuarios","Sistema de Usuarios.","./vista/img/actividades_login.png","Registro, autentificación, gestión de perfiles, seguridad de contraseñas...")
            let etiqueta_actividades_formularios = etiquetaElemento(contenido_etiquetas_actividades,"etiqueta_actividades","etiqueta_actividades_forumularios","Formularios.","./vista/img/actividades_formularios.png","Formularios con validaciones de datos...")
            let etiqueta_actividades_encuestas_sugerencias = etiquetaElemento(contenido_etiquetas_actividades,"etiqueta_actividades","etiqueta_actividades_forumularios","Encuestas  y cajas de sujerencias.","./vista/img/actividades_encuestas_sugerencias.png","Encuestas y caja de sugerencias personalizadas para validaciones de datos...")

        let contenido_calendarios_personalizados = mkObj(cuerpo_inicio,"contenido_calendarios_personalizados","contenido_calendarios_personalizados")

            let descripcion_calendario = mkTextList(contenido_calendarios_personalizados,"descripcion_calendario","descripcion_calendario",
                "Calendarización de eventos.",
                "Registro de eventos a traves de calendarios personalizados.",
                "Distribución de la informacion a través de un solo registro",
            )
        
            let ventana_calendarios = mkObj(contenido_calendarios_personalizados,"ventana_calendarios","ventana_calendarios") 

                let calendario_input = mkObjInput(ventana_calendarios,"calendario_input","calendario_input","date","Inserta una fecha para ver el calendario.")
                let contenedor_calendario = mkObj(ventana_calendarios,"contenedor_calendario","contenedor_calendario")
                    calendario_input.addEventListener("input",function () {
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

        let contenido_diseño_responsivo = mkTextList(cuerpo_inicio,"descripcion_calendario","contenido_diseño_responsivo",
            "Diseños Multiplataforma",
        )


        let img_pc = mkObjImg(cuerpo_inicio,"img_pc","img_pc","./vista/img/background_row.png")

        let contenido_catalogo_ficha_tecnica = mkTextList(cuerpo_inicio,"descripcion_calendario","descripcion_calendario",
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

        let descripcion_mapa = mkTextList(cuerpo_inicio,"descripcion_calendario","descripcion_mapa",
            "Elaboración de reportes con rutas en KML",
            "KML es un estándar de codificación XML utilizado para representar datos geoespaciales, incluidas rutas y puntos de interés.",
            "Almacenamiento de información relevante en bases de datos.",
        )


        let contenido_mapas = mkObj(cuerpo_inicio,"contenido_mapas","contenido_mapas")


            let input_mapa = mkObjInput(contenido_mapas,"calendario_input","input_mapa","file","Crea una ruta en Google MyMaps, exporta la informacion en KML e inserta aqui el archivo .kml","INSERTA AQUI EL ARCHIVO KML","helvetica","13px","black");
            let mapa = mkObj(contenido_mapas,"mapa","mapa");         
            
            // Escuchar el evento 'change' del input
            let in_mapa = input_mapa.querySelector("input")
            console.log(in_mapa)
            

            in_mapa.addEventListener('change', mapaRuta);


        let contenido_constancias = mkTextList(cuerpo_inicio,"descripcion_calendario","contenido_constancias",
            "Constancias Educativas.",
            "Introducción al Plan de Negocios. CECATI.",
            "Mantenimiento Básico a PC. CECATI.",
            "Mantenimiento Básico a Laptop. CECATI.",
        )

        let contenido_habilidades_destacadas = mkTextList(cuerpo_inicio,"descripcion_calendario","contenido_habilidades_destacadas",
            "Habilidades Destacadas.",
            "Programación Funcional. (JavaScript)",
            "Programación orientada a objetos. (php)",
            "Automatización bases de datos. (php,SQL)",
            "Diseño de imágenes. (GIMP, Adobe Ilustrator)",
            "Diseño de Formatos. (PDF, GIMP, Adobe Ilustrator)",
        )

        let contenido_dominio_lenguajes_html = mkTextList(cuerpo_inicio,"descripcion_calendario","contenido_dominio_lenguajes_html",
            "HTML",
            "Maquetación dinámica con JS",
            "Uso exclusivo de scripts para dinámica de DOM",
            "Optimización de rendimiento",
            "Diseño personalizado y cómodo.",
            "Formularios para captura de datos, registro de usuarios/productos/clientes/trabajadores.",
            "Documentación web para publicitar productos o servicios, información personal, opinion pública, CV o Carpetas de Trabajo.",
            "Sistema web automatizada con tareas.",
        )
            let img_dominio_html = mkObjImg(cuerpo_inicio,"img_dominio_lenguaje","img_dominio_html","./vista/img/diagrama_html.png")

        let contenido_dominio_lenguajes_css = mkTextList(cuerpo_inicio,"descripcion_calendario","contenido_dominio_lenguajes_css",
            "CSS",
            "Diseño dinámico.",
            "Completa personalizacion de diseño.",
            "Animaciones.",
        )
            let img_dominio_css = mkObjImg(cuerpo_inicio,"img_dominio_lenguaje","img_dominio_css","./vista/img/diagrama_css.png")

            let contenido_dominio_lenguajes_js = mkTextList(cuerpo_inicio,"descripcion_calendario","contenido_dominio_lenguajes_js",
            "Java Script",
            "Diseño dinámico.",
            "Completa personalizacion de diseño.",
            "Animaciones.",
        )
            let img_dominio_js = mkObjImg(cuerpo_inicio,"img_dominio_lenguaje","img_dominio_js","./vista/img/diagrama_js.png")

        let contenido_dominio_lenguajes_php = mkTextList(cuerpo_inicio,"descripcion_calendario","contenido_dominio_lenguajes_php",
            "PHP",
            "Diseño dinámico.",
            "Completa personalizacion de diseño.",
            "Animaciones.",
        )
            let img_dominio_php = mkObjImg(cuerpo_inicio,"img_dominio_lenguaje","img_dominio_php","./vista/img/diagrama_php.png")



    // !
    // !
    // !
    // !

        let contenido_footer = mkTextList(cuerpo_inicio,"descripcion_calendario","contenido_footer",
                "Completa personalización del contenido",
                "Codigo limpio",
                "Rendimiento - Seguridad",
                "Buenas prácticas",
        )

return cuerpo_inicio
}