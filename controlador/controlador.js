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

        let texto_actualizacion = mkText(cuerpo_inicio,"texto_actualizacion","texto_actualizacion","Version anterior: kinichdev.github.io/Portafolio/index_.html")
            texto_actualizacion.addEventListener("mouseup",function(){
                window.open("https://kinichdev.github.io/Portafolio/index_.html","_blank")
            })
            texto_actualizacion.style.heigth = "80px"
            texto_actualizacion.style.padding = "16px"
            texto_actualizacion.style.color = "blue"
    
        let contenido_experiencia_destacada = mkTextList(cuerpo_inicio,"contenido_experiencia_destacada","contenido_experiencia_destacada",
            "Experiencia Destacada",

            "Automatización de tareas repetitivas, ",
            "Mejora continua en metodología y toma de desiciones",
            "Conocimiento amplio en el manejo de PC"
        )

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

        let contenido_constancias = mkTextList(cuerpo_inicio,"descripcion_calendario","contenido_constancias",
            "Constancias.",
            "Introducción al Plan de Negocios. CECATI.",
            "Mantenimiento Básico a PC. CECATI.",
            "Mantenimiento Básico a Laptop. CECATI.",
        )

        let contenido_habilidades_destacadas = mkTextList(cuerpo_inicio,"descripcion_calendario","contenido_habilidades_destacadas",
            "Habilidades Destacadas.",
            "Programación Funcional. (programación)",
            "Diseño de imágenes.",
            "Diseño de Formatos.",
            ".",
            ".",
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

        let contenido_mapas = mkObj(cuerpo_inicio,"contenido_mapas","contenido_mapas")

            let descripcion_mapa = mkTextList(contenido_mapas,"descripcion_calendario","descripcion_mapa",
                "Almacenamiento de rutas a travéz de archivos .csv (kmz,kml)",
            )

            let input_mapa = mkObjInput(contenido_mapas,"calendario_input","input_mapa","file","Inserta una ruta de Mymaps en csv","INSERTA UN ARCHIVO KMZ","helvetica","13px","black");
            let mapa = mkObj(contenido_mapas,"mapa","mapa");         
            
            // Escuchar el evento 'change' del input
            let in_mapa = input_mapa.querySelector("input")
            console.log(in_mapa)
            

            // Agregar un evento de cambio al elemento con el id 'in_mapa'
            in_mapa.addEventListener('change', handleFileSelect);
            

            // Función que maneja la selección de un archivo
            function handleFileSelect(event) {



                // Obtener el archivo seleccionado
                let fileInput = event.target;
                let file = fileInput.files[0];

                // Verificar si se ha seleccionado un archivo
                if (file) {
                    // Crear un lector de archivos
                    let reader = new FileReader();

                    // Configurar la función que se ejecutará cuando se cargue el archivo
                    reader.onload = function (e) {
                        // Obtener el contenido del archivo
                        let contenido = e.target.result;

                        // Parsear el contenido CSV
                        let datos = parseCSV(contenido);

                        // Mostrar las coordenadas
                        // mostrarCoordenadas(datos);

                        let arreglo_coordenadas = insertarCoordenadas(datos);

                        let arreglo_ruta = []
                        arreglo_coordenadas.forEach(element => {
                            let l_a = parseFloat(element[0])
                            console.log(l_a)
                            let l_b = parseFloat(element[1])
                            console.log(l_b)
                            let punto = ol.proj.fromLonLat([l_b, l_a])
                            console.log(punto)
                            arreglo_ruta.push(punto)
                        });
                        console.log(arreglo_ruta)


                        // Converit las coordenadas de la Ciudad de México de longitud/latidu a la proyeccion del mapa
                        let ciudad_mexico = ol.proj.fromLonLat([-99.1332, 19.4326])

                        // Crear una capa de mapa base utilizando OpenStreetMap (OSM)
                        let capa_osm = new ol.layer.Tile({
                            source: new ol.source.OSM()
                        })

                        // Crear una capa de vectores para la ruta
                        let capa_ruta = new ol.layer.Vector({
                            source: new ol.source.Vector()
                        })

                        let mapa = new ol.Map({
                            target:"mapa",
                            layers: [capa_osm,capa_ruta], // las capas que se mostraran en el mapa
                            view: new ol.View({
                                center: ciudad_mexico,
                                zoom: 11
                            })
                        })

                        // let arreglo_ruta = []
                        // respuesta.forEach(element => {
                        //     let punto = ol.proj.fromLonLat([element["latitud"], element["longitud"]])
                
                        //     arreglo_ruta.push(punto)
                        // });
                        // console.log(arreglo_ruta)
                
                        // Crear una linea (ruta) que pasa por los puntos de inicio intermedio y fin
                        let ruta_feature = new ol.Feature({
                            geometry: new ol.geom.LineString(arreglo_ruta)
                        })
                
                        // Definir el estilo de la linea de la ruta
                        let estilo_ruta = new ol.style.Style({
                            stroke: new ol.style.Stroke({
                                color: 'blue',
                                width: 5
                            })
                        })
                
                        // Aplicar el estilo de ruta
                        ruta_feature.setStyle(estilo_ruta)
                
                        // Agregregar la ruta a la capa de vectores
                        capa_ruta.getSource().addFeature(ruta_feature)
                
                

                    };



                    // Leer el contenido del archivo como texto
                    reader.readAsText(file);
                }
            }

            // Función para parsear contenido CSV en un arreglo bidimensional
            function parseCSV(content) {
                // Dividir el contenido en filas y luego cada fila en columnas
                let filas = content.split('\n');
                let datos = [];

                // Iterar sobre las filas
                filas.forEach(function (fila) {
                    // Dividir la fila en columnas
                    let columnas = fila.split(',');

                    // Agregar las columnas al arreglo de datos
                    datos.push(columnas);
                });

                // Devolver el arreglo de datos
                return datos;
            }

            // Función para extraer las coordenadas de una cadena WKT
            function extraerCoordenadas(wkt) {
                // Utilizar una expresión regular para extraer las coordenadas
                var matches = wkt.match(/\((-?\d+\.\d+) (-?\d+\.\d+)\)/);

                // Verificar si se encontraron las coordenadas
                if (matches && matches.length === 3) {
                    // Devolver un objeto con las coordenadas de latitud y longitud
                    return { latitud: parseFloat(matches[2]), longitud: parseFloat(matches[1]) };
                }

                // Devolver null si no se pudieron extraer las coordenadas
                return null;
            }

            // Función para mostrar las coordenadas en la consola
            function mostrarCoordenadas(datos) {
                // Iterar sobre los datos e imprimir las coordenadas
                datos.forEach(function (element) {
                    // Extraer las coordenadas de la primera columna de cada fila
                    let coordenadas = extraerCoordenadas(element[0]);
                    // console.log(coordenadas)

                    // Verificar si se extrajeron las coordenadas
                    if (coordenadas) {
                        // Mostrar el nombre y las coordenadas en la consola
                        // console.log(`Nombre: ${element[1]}, Coordenadas: ${coordenadas.latitud}, ${coordenadas.longitud}`);
                    } else {
                        // Mostrar un mensaje si no se pudieron extraer las coordenadas
                        console.log(`No se pudieron extraer coordenadas para: ${element[1]}`);
                    }
                });
            }

            function insertarCoordenadas(datos) {
                let arreglo_coordenadas = []

                datos.forEach(function (element) {
                    // Extraer las coordenadas de la primera columna de cada fila
                    let coordenadas = extraerCoordenadas(element[0]);


                    // Verificar si se extrajeron las coordenadas
                    if (coordenadas) {
                        // Mostrar el nombre y las coordenadas en la consola
                        // console.log(`Nombre: ${element[1]}, Coordenadas: ${coordenadas.latitud}, ${coordenadas.longitud}`);
                        arreglo_coordenadas.push([coordenadas.latitud,coordenadas.longitud])
                    } else {
                        // Mostrar un mensaje si no se pudieron extraer las coordenadas
                        console.log(`No se pudieron extraer coordenadas para: ${element[1]}`);
                    }
                });
                return arreglo_coordenadas
            }





        




        // !
        // !
        // !
        // !

        let contenido_footer = mkTextList(cuerpo_inicio,"descripcion_calendario","contenido_footer",
                "Diseño es completamente personalizado desde 0",
                "Codigo limpio",
                "Rendimiento - Seguridad",
        )





            
            

return cuerpo_inicio
}