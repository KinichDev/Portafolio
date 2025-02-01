const body = document.body
// let ejemplo.mkObj()
let contenedor_principal = mkObj(body,"contenedor_principal","contenedor_principal")
    let header = mkObj(contenedor_principal,"header","header")
    header.style.display = "none"
        let  = mkObj(header,"contenedor_img_header","contenedor_img_header")

            let container = mkObj(contenedor_img_header,"container")
                let circle = mkObj(container,"cheader_opcion_xircle")

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
            let pestaña_menu_header = mkObj(contenedor_principal,"pestaña_menu_header","pestaña_menu_header")
                let header_opcion_github = mkText(pestaña_menu_header,"header_opcion","header_opcion_github","Github")
                let header_opcion_mkdom = mkText(pestaña_menu_header,"header_opcion","header_opcion_mkdom","mkDom.js")
                let header_opcion_linkedin = mkText(pestaña_menu_header,"header_opcion","header_opcion_linkedin","LinkedIn")
                let header_opcion_instagram = mkText(pestaña_menu_header,"header_opcion","header_opcion_instagram","Instagram")
                // let header_opcion_facebook = mkText(pestaña_menu_header,"header_opcion","header_opcion_facebook","Facebook")
                let header_opcion_x = mkText(pestaña_menu_header,"header_opcion","header_opcion_x","X")
    placerMenu(menu,pestaña_menu_header)

    document.addEventListener("mouseup",function (event) {
        if (header_opcion_github.contains(event.target)) {
            window.open("https://github.com/KinichDev","_blank","width=800,height=600")
        }
        if (header_opcion_mkdom.contains(event.target)) {
            window.open("https://github.com/KinichDev/mkDom.js","_blank","width=800,height=600")
        }
        if (header_opcion_linkedin.contains(event.target)) {
            window.open("https://www.linkedin.com/in/leonardo-kinich-7a22902a9/","_blank","width=800,height=600")
        }
        if (header_opcion_instagram.contains(event.target)) {
            window.open("https://www.instagram.com/leonardo_luna.tdt/","_blank","width=800,height=600")
        }
        // if (header_opcion_facebook.contains(event.target)) {
        //     window.open("https://web.facebook.com/Siklalcuicani/","_blank","width=800,height=600")
        // }
        if (header_opcion_x.contains(event.target)) {
            window.open("https://x.com/Leonard85961498","_blank","width=800,height=600")
        }
    })

    let cuerpo = mkObj(contenedor_principal,"cuerpo","cuerpo")
    // cuerpo.contenidoInfografiaPHP()


    contenidoInicio()
function contenidoInicio() {

    cuerpo.innerHTML=""

    let cuerpo_inicio = mkObj(cuerpo,"cuerpo","cuerpo_inicio")

        let img_fondo = mkObjImg(cuerpo_inicio,"img_fondo","img_fondo")
        img_fondo.style.display = "none"

        function contenidoDesktopScreen(ventana) {
            if (document.getElementById("barra_herramientas")) {
                document.getElementById("barra_herramientas").remove()
            }
            let barra_herramientas = mkObj(ventana,"barra_herramientas","barra_herramientas")
            barra_herramientas.style.display = "flex"

            cuerpo_inicio.addEventListener('scroll', function () {
                let porcentaje = cuerpo_inicio.nivelScroll();
                // console.log(porcentaje)
                if (parseFloat(porcentaje)<=0.75) {
                    // barra_herramientas.displayFlex()
                    barra_herramientas.style.display = "flex"
                    header.style.display = "none"
                    cuerpo_inicio.style.scrollbarWidth = "inherit"
                    img_fondo.querySelector("img").src = ""
                } else {
                    // barra_herramientas.displayNone()
                    barra_herramientas.style.display = "none"
                    header.style.display = "flex"
                    cuerpo_inicio.style.scrollbarWidth = "none"
                }

            });

                let menu_opciones = mkObjImg(barra_herramientas,"menu_opciones","menu_opciones","./vista/img/menu_opciones.png")

                    let barra_aplicaciones = mkObj(contenedor_principal,"barra_aplicaciones","barra_aplicaciones")
                    barra_aplicaciones.style.display = "none"
                    placerMenu(menu_opciones,barra_aplicaciones)

                        // let opcion_aplicaciones_imagenes = mkObjImg(barra_aplicaciones,"opcion_aplicaciones","opcion_aplicaciones_imagenes","./vista/img/imagen.png")

                        //     opcion_aplicaciones_imagenes.addEventListener("click", function () {
                        //         ventana_imagenes.style.display = "flex";
                        //         contenidoImagenes(ventana_imagenes)
                        //     });

                        //     let ventana_imagenes = mkObj(cuerpo,"ventana","ventana_imagenes")
                        //     ventana_imagenes.style.display="none"

                        //     flexWindow(ventana_imagenes)

                        //     document.addEventListener("mouseup", function (event) {
                        //         if (!ventana_imagenes.contains(event.target) && !opcion_aplicaciones_imagenes.contains(event.target)) {
                        //             ventana_imagenes.style.display = "none";
                        //         }
                            // });

                        let opcion_screen_x = mkObjImg(barra_aplicaciones,"opcion_screen","opcion_screen_x","./vista/img/x.png")
                        let opcion_screen_curriculum = mkObjImg(barra_aplicaciones,"opcion_screen","opcion_screen_curriculum","./vista/img/cv.png")
                        let opcion_screen_github = mkObjImg(barra_aplicaciones,"opcion_screen","opcion_screen_github","./vista/img/github.png")
                        // let opcion_screen_facebook = mkObjImg(barra_aplicaciones,"opcion_screen","opcion_screen_curriculum","./vista/img/cv.png")
                        let opcion_screen_linkedin = mkObjImg(barra_aplicaciones,"opcion_screen","opcion_screen_x","./vista/img/linkedin.png")
                        opcion_screen_linkedin.style.display = "none"

                        // let window_x = mkObj(contenido_imagen_ciudad,"window","window_x",)
                        // window_x.style.display = "none"
                        // window_x.innerHTML = `
                        //     <blockquote class="twitter-tweet"><p lang="es" dir="ltr">Ante adversidades crea tus propias herramientas, no solo resuelves problemas, sino que diseñas el futuro de tu proyecto con tus propias manos.</p>&mdash; Leonardo (@Leonard85961498) <a href="https://twitter.com/Leonard85961498/status/1877655224598347868?ref_src=twsrc%5Etfw">January 10, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                        // `
                        // flexWindow(window_x)


                        opcion_screen_x.addEventListener("click", function () {
                            window_x.style.display = "flex"
                        });

                        opcion_screen_curriculum.addEventListener("click", function () {
                            window_cv.style.display = "flex"
                        });

                        opcion_screen_linkedin.addEventListener("click", function () {
                            window_linkedin.style.display = "flex"
                        });

                    // let ventana_estatus = mkObj(cuerpo,"ventana","ventana_estatus")
                    //         ventana_estatus.style.display="none"

                    //         flexWindow(ventana_estatus)

                    //         document.addEventListener("mouseup", function (event) {
                    //             if (!ventana_estatus.contains(event.target) && !opcion_aplicaciones_imagenes.contains(event.target)) {
                    //                 ventana_estatus.style.display = "none";
                    //             }
                    //         });
        }




    // let contenido_imagen_ciudad = mkObjImg(cuerpo_inicio,"contenido_imagen_ciudad","contenido_imagen_ciudad","./vista/img/ciudad.jpg")octopus-8562474_1920
    let contenido_imagen_ciudad = mkObjImg(cuerpo_inicio,"contenido_imagen_ciudad","contenido_imagen_ciudad","./vista/img/octopus-8562474_1920.jpg")
    contenido_imagen_ciudad.style.position = "relative"
    contenido_imagen_ciudad.querySelector("img").entradaSuave()

    let window_x = mkObj(contenido_imagen_ciudad,"window","window_x",)
    window_x.style.display = "none"
    window_x.innerHTML = `
        <blockquote class="twitter-tweet"><p lang="es" dir="ltr">Ante adversidades crea tus propias herramientas, no solo resuelves problemas, sino que diseñas el futuro de tu proyecto con tus propias manos.</p>&mdash; Leonardo (@Leonard85961498) <a href="https://twitter.com/Leonard85961498/status/1877655224598347868?ref_src=twsrc%5Etfw">January 10, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    `
    flexWindow(window_x)

    
    let window_cv = mkObj(contenido_imagen_ciudad,"window","window_cv",)
    window_cv.style.display = "none"
    window_cv.innerHTML = `
        <iframe src="./vista/pdf/cv.pdf" width="800px" height="550px"></iframe>
    `
    flexWindow(window_cv)
    // contenidoDesktopScreen(contenido_imagen_ciudad)

    let window_linkedin = mkObj(contenido_imagen_ciudad,"window","window_linkedin",)
    window_linkedin.style.display = "none"
    window_linkedin.innerHTML = `
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7210490409691566080" height="465" width="504" frameborder="0" allowfullscreen="" title="Publicación integrada"></iframe>
    `
    flexWindow(window_linkedin)

    
    contenidoDesktopScreen(contenido_imagen_ciudad)

    let capa_difuminado = mkObj(contenido_imagen_ciudad,"capa_difuminado","capa_difuminado")

    let contenido_colage = mkObj(contenido_imagen_ciudad,'contenido_colage','contenido_colage')
    contenido_colage.style.position = "absolute"

    let contenedor_colage = mkObj(contenido_colage,"contenedor_colage","contenedor_colage")
    contenedor_colage.contenidoColage(10)

        let texto_code = mkTextList(contenido_imagen_ciudad,"text","text",
            "Leonardo K. Luna",
            "Pasión y creatividad por soluciones digitales",
            "Informático Administrativo profesional y dedicado",
            "Desarrollo de Software y Administración Operativa",
        )

        function animateText(texts) {
            let lines = texts.querySelectorAll("p");
            let delay = 0;
            lines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.display = "inline";
                    line.style.animation = `typing 2s steps(40, end) forwards`;

                    // Remover cursor al terminar la animación
                    setTimeout(() => {
                        line.style.borderRight = "none";
                    }, 4000); // Duración de la animación de typing
                }, delay);
                delay += 4000; // Aumenta el tiempo para cada línea en 4 segundos
            });
        }


        animateText(texto_code);

        // let inicio_mapa = mkObj(contenido_imagen_ciudad,"inicio_mapa","inicio_mapa")

        // function initMapa(div) {
        //     const mapaDiv = document.createElement('div');
        //     mapaDiv.className = 'mapa';

        //     // Crear la ruta
        //     const rutaDiv = document.createElement('div');
        //     rutaDiv.className = 'ruta';
        //     const svgRuta = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        //     svgRuta.setAttribute('id', 'svgRuta');
        //     rutaDiv.appendChild(svgRuta);
        //     mapaDiv.appendChild(rutaDiv);

        //     // Crear la ubicación
        //     const ubicacionDiv = document.createElement('div');
        //     ubicacionDiv.className = 'ubicacion';
        //     const svgUbicacion = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        //     svgUbicacion.setAttribute('viewBox', '0 0 24 24');
        //     svgUbicacion.setAttribute('fill', 'none');
        //     svgUbicacion.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        //     svgUbicacion.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C8.13401 2 5 5.13401 5 9C5 13.25 8 19 12 22C16 19 19 13.25 19 9C19 5.13401 15.866 2 12 2ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z" fill="#0984e3"/>';
        //     ubicacionDiv.appendChild(svgUbicacion);
        //     mapaDiv.appendChild(ubicacionDiv);

        //     // Crear contenedor de edificios
        //     const edificiosContainer = document.createElement('div');
        //     edificiosContainer.setAttribute('id', 'edificios');
        //     mapaDiv.appendChild(edificiosContainer);

        //     // Añadir el mapa al div proporcionado
        //     div.appendChild(mapaDiv);

        //     // Funciones para generar y animar la ruta
        //     let edificios = [];

        //     function getRandomPoint(maxX, maxY) {
        //         return `${Math.floor(Math.random() * maxX)},${Math.floor(Math.random() * maxY)}`;
        //     }

        //     function generarRutaAleatoria() {
        //         const puntos = [
        //             `M${getRandomPoint(300, 200)}`,
        //             `C${getRandomPoint(300, 200)}`,
        //             `${getRandomPoint(300, 200)}`,
        //             `${getRandomPoint(300, 200)}`
        //         ].join(' ');
        //         svgRuta.innerHTML = `<path id="path" d="${puntos}" stroke="#74b9ff" stroke-width="4" stroke-linecap="round" fill="none"/>`;
        //     }

        //     function checkOverlap(top, left, width, height) {
        //         return edificios.some(edificio => {
        //             return !(top + height < edificio.top ||
        //                      top > edificio.top + edificio.height ||
        //                      left + width < edificio.left ||
        //                      left > edificio.left + edificio.width);
        //         });
        //     }

        //     function generarEdificiosAleatorios() {
        //         edificiosContainer.innerHTML = '';
        //         edificios = [];
        //         const numeroEdificios = 6;
        //         for (let i = 0; i < numeroEdificios; i++) {
        //             let width, height, top, left;
        //             do {
        //                 width = Math.floor(Math.random() * 30) + 20;
        //                 height = Math.floor(Math.random() * 80) + 40;
        //                 top = Math.min(Math.floor(Math.random() * 160) + 20, 200 - height);
        //                 left = Math.min(Math.floor(Math.random() * 280), 300 - width);
        //             } while (checkOverlap(top, left, width, height));

        //             const edificio = { top, left, width, height };
        //             edificios.push(edificio);

        //             const divEdificio = document.createElement('div');
        //             divEdificio.className = 'edificio';
        //             divEdificio.style.width = `${width}px`;
        //             divEdificio.style.height = `${height}px`;
        //             divEdificio.style.top = `${top}px`;
        //             divEdificio.style.left = `${left}px`;
        //             edificiosContainer.appendChild(divEdificio);
        //         }
        //     }

        //     function moveIcon() {
        //         const path = document.querySelector('#path');
        //         ubicacionDiv.style.offsetPath = `path('${path.getAttribute('d')}')`;
        //         ubicacionDiv.style.offsetDistance = '0%';
        //         ubicacionDiv.style.animation = 'seguirRuta 5s linear infinite';
        //         ubicacionDiv.addEventListener('animationiteration', () => {
        //             generarRutaAleatoria();
        //             generarEdificiosAleatorios();
        //             moveIcon();
        //         }, { once: true });
        //     }

        //     generarRutaAleatoria();
        //     generarEdificiosAleatorios();
        //     moveIcon();
        // }
        // initMapa(inicio_mapa);

        // let contenido_linkedin_oublicacion = mkObj(cuerpo_inicio,"contenido_linkedin_oublicacion","contenido_linkedin_oublicacion",
        //     '<iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7210490409691566080" height="465" width="504" frameborder="0" allowfullscreen="" title="Publicación integrada"></iframe>')
    
        let contenido_experiencia_destacada = mkTextList(
            cuerpo_inicio,
            "contenido_experiencia_destacada",
            "contenido_experiencia_destacada",
            "Experiencia Profesional Destacada",
            "Más de 11 años de experiencia en diversos entornos empresariales.",
            "Especialización en Control y Automatización de Inventarios.",
            "Experiencia en Administración Logística y Gestión de Operaciones.",
            "Competencias en Bitácora y Monitoreo de Procesos.",
            "Desarrollo de Software: Diseño, Implementación y Mantenimiento."
        );
        
        let contenido_etiquetas_actividades = mkObj(cuerpo_inicio,"contenido_etiquetas_actividades","contenido_etiquetas_actividades")
        contenido_etiquetas_actividades.style.borderBottom = "solid 1px rgba(0, 0, 0, 0.33)"

            let etiqueta_actividades_sistema_usuarios = etiquetaElemento(contenido_etiquetas_actividades,"etiqueta_actividades","etiqueta_actividades_sistema_usuarios","Sistema de Usuarios.","./vista/img/actividades_login.png",
                // "Registros, autentificación, gestión de perfiles, seguridad de contraseñas...")

                "Un sistema de usuarios es una herramienta que permite registrar, identificar y gestionar perfiles dentro de una aplicación, incluyendo sus roles, permisos y acciones específicas.")


            let etiqueta_actividades_formularios = etiquetaElemento(contenido_etiquetas_actividades,"etiqueta_actividades","etiqueta_actividades_forumularios","Formularios.","./vista/img/actividades_formularios.png",
                "Crear formularios con validaciones de datos puede ser muy útil para asegurar que la información ingresada sea precisa y correcta."
            )


            let etiqueta_actividades_encuestas_sugerencias = etiquetaElemento(contenido_etiquetas_actividades,"etiqueta_actividades","etiqueta_actividades_forumularios","Encuestas  y cajas de sujerencias.","./vista/img/actividades_encuestas_sugerencias.png",
                "Crear encuestas y cajas de sugerencias es una excelente manera de obtener opiniones y retroalimentación."
            )

        let video_web = mkObjVideoLoop(cuerpo_inicio,"video_web","video_web","./vista/video/web.mp4")

        let contenido_etiquetas_actividades_catalogo = mkObj(cuerpo_inicio,"contenido_etiquetas_actividades_catalogo","contenido_etiquetas_actividades_catalogo")
        contenido_etiquetas_actividades_catalogo.style.borderTop = "solid 1px rgba(0, 0, 0, 0.33)"

            let etiqueta_actividades_catalogo_sistemas_de_alarmado = etiquetaElemento(contenido_etiquetas_actividades_catalogo,"etiqueta_actividades","etiqueta_actividades_catalogo_sistemas_de_alarmado","Sistemas de agenda con alarmado.","./vista/img/ota.png","Software para control de tablas con sistema de alarmado.")
            let etiqueta_actividades_catalogo_fichas_tecnicas = etiquetaElemento(contenido_etiquetas_actividades_catalogo,"etiqueta_actividades","etiqueta_actividades_catalogo_fichas_tecnicas","Catálogos y fichas técnicas.","./vista/img/catalogo_fichas_tecnicas.png","Catágos con fichas técnicas, sistema de pedidos")
            let etiqueta_actividades_catalogo_cotizacion = etiquetaElemento(contenido_etiquetas_actividades_catalogo,"etiqueta_actividades","etiqueta_actividades_catalogo_cotizacion","Sistema de Cotizaciones.","./vista/img/catalogo_cotizacion.png","Catágos con fichas técnicas, sistema de pedidos ")

        let contenido_etiquetas_actividades_ = mkObj(cuerpo_inicio,"contenido_etiquetas_actividades","contenido_etiquetas_actividades")

            let etiqueta_actividades_tablas_calculo = etiquetaElemento(contenido_etiquetas_actividades_,"etiqueta_actividades","etiqueta_actividades_tablas_calculo","Tablas de Cálculo.","./vista/img/actividades_tablas_calculo.png",
                "Herramientas utilizadas para realizar operaciones matemáticas, analizar datos y automatizar cálculos repetitivos."
            )
            let etiqueta_actividades_reportes_automaticos = etiquetaElemento(contenido_etiquetas_actividades_,"etiqueta_actividades","etiqueta_actividades_tablas_calculo","Reportes automáticos.","./vista/img/actividades_reportes_automaticos.png",
                "Es una excelente manera de mantener la información actualizada y accesible."
            )




        let img_escritorio = mkObjImg(cuerpo_inicio,"img_escritorio","img_escritorio",)
            let capa_difuminado_escritorio = mkObj(img_escritorio,"capa_difuminado","capa_difuminado_escritorio")
            img_escritorio.onScrollIntoView((entry) => {
                if (entry.isIntersecting) {
                  console.log('The element is visible:', entry.target);
                  img_fondo.querySelector("img").setAttribute("src","./vista/img/js_letters.jpg" + "?" + new Date().getTime())
                  img_fondo.style.display = "flex"; // Show the element
                  header.style.backgroundColor = "#c41515"

                } 
                // else {
                //   console.log('The element is out of view:', entry.target);
                //   img_fondo.style.display = "none"
                //   setTimeout(() => {
                //     img_fondo.querySelector("img").setAttribute("src","")
                // }, 500);
                // }
              });

              

        let contenido_habilidades_software_js = mkObj(cuerpo_inicio,"contenido_habilidades_software","contenido_habilidades_software_js")
            let img_js = mkObjImg(contenido_habilidades_software_js,"img_habilidades_software","img_js","./vista/img/img_js.png")
            let descripcion_habilidades_js = mkTextList(contenido_habilidades_software_js,"descripcion_habilidades","descripcion_habilidades",
                "Habilidades JavaScript:",
                "Ajax y comunicación asíncrona.",
                "Desarrollo de aplicaciones de una sola página (SPA).",
                "Uso de frameworks como React, Angular",
                "Pruebas unitarias y pruebas de integración.",
            )




            let diagrama_js = mkObjImg(cuerpo_inicio,"diagrama","diagrama_js","./vista/img/diagrama_js.png")


            let contenido_habilidades_software_php = mkObj(cuerpo_inicio,"contenido_habilidades_software","contenido_habilidades_software_php")
                let descripcion_habilidades_php = mkTextList(contenido_habilidades_software_php,"descripcion_habilidades","descripcion_habilidades",
                    "Habilidades PHP:",
                    "PDO (PHP Data Objects), interacción con bases de datos.",
                    "POO (Programación orientada a objetos).",
                    "Aplicación de patrones de diseño orientado a objetos en PHP.",
                    "Seguridad en la manipulación de datos y prevención de vulnerabilidades.",
                )
                let img_php = mkObjImg(contenido_habilidades_software_php,"img_habilidades_software","img_php","./vista/img/img_php.png")
            let img_seguridad = mkObj(cuerpo_inicio,"img_seguridad","img_seguridad")
                let capa_difuminado_seguridad = mkObj(img_seguridad,"capa_difuminado","capa_difuminado_seguridad")
                img_seguridad.onScrollIntoView((entry) => {
                    if (entry.isIntersecting) {
                    console.log('The element is visible:', entry.target);
                    img_fondo.querySelector("img").setAttribute("src","./vista/img/seguridad.jpg")
                    img_fondo.style.display = "flex"; // Show the element
                    header.style.backgroundColor = "#2a584d"
                    } 
                //     else {
                //     console.log('The element is out of view:', entry.target);
                //     img_fondo.style.display = "none"
                //     setTimeout(() => {
                //       img_fondo.querySelector("img").setAttribute("src","")
                //   }, 500);

                //     }
                });

            let contenido_seguridad_informatica = mkObj(cuerpo_inicio,"contenido_infografia","contenido_seguridad_informatica")
            contenido_seguridad_informatica.contenidoInfografiaPHP()


        let contenido_habilidades_software_excel = mkObj(cuerpo_inicio,"contenido_habilidades_software","contenido_habilidades_software_excel")
            let img_excel = mkObjImg(contenido_habilidades_software_excel,"img_habilidades_software","img_excel","./vista/img/img_excel.svg")
            let descripcion_habilidades_excel = mkTextList(contenido_habilidades_software_excel,"descripcion_habilidades","descripcion_habilidades",
                "Habilidades Excel:",
                "Diseño de tablas dinámicas.",
                "Macros.",
                "Control de inventario.",
                "Gráficas.",
            )

        let contenido_excel = mkObj(cuerpo_inicio,"contenido_infografia","contenido_excel")
        contenido_excel.contenidoInfografiaExcel()


        let img_graficas = mkObj(cuerpo_inicio,"img_graficas","img_graficas",)
            let capa_difuminado_graficas = mkObj(img_graficas,"capa_difuminado","capa_difuminado_graficas")
            img_graficas.onScrollIntoView((entry) => {
                if (entry.isIntersecting) {
                  console.log('The element is visible:', entry.target);
                  img_fondo.querySelector("img").setAttribute("src","./vista/img/graficas.jpg")
                  img_fondo.style.display = "flex"; // Show the element
                  header.style.backgroundColor = "#002a51"

                } 
              });



        let contenido_habilidades_software_windows = mkObj(cuerpo_inicio,"contenido_habilidades_software","contenido_habilidades_software_windows")
            let descripcion_habilidades_windows = mkTextList(contenido_habilidades_software_windows,"descripcion_habilidades","descripcion_habilidades",
                "Habilidades Microsoft Windows:",
                "Solución de problemas comunes.",
                "Mantenimiento general del equipo físico.",
                "Administración y consultoría remota.",
                "Gestión de software y actualizaciones.",
            )
            let img_windows = mkObjImg(contenido_habilidades_software_windows,"img_habilidades_software","img_windows","./vista/img/img_windows.svg")

        let img_pc = mkObjImg(cuerpo_inicio,"img_pc","img_pc","./vista/img/red.png")


            let img_windows_fondo = mkObj(cuerpo_inicio,"img_windows_fondo","img_windows_fondo")
            let capa_difuminado_windows = mkObj(img_windows_fondo,"capa_difuminado","capa_difuminado_windows")
            img_windows_fondo.onScrollIntoView((entry) => {
                if (entry.isIntersecting) {
                console.log('The element is visible:', entry.target);
                img_fondo.querySelector("img").setAttribute("src","./vista/img/digital.jpg")
                img_fondo.style.display = "flex"; // Show the element
                header.style.backgroundColor = "black"

                } 
            });



        let contenido_infografia_windows = mkObj(cuerpo_inicio,"contenido_infografia_windows","contenido_infografia_windows")
        displayScroll(contenido_infografia_windows)
        contenido_infografia_windows.contenidoInfografiaWindows()


        let contenido_habilidades_software_debian = mkObj(cuerpo_inicio,"contenido_habilidades_software","contenido_habilidades_software_debian")
            let img_debian = mkObjImg(contenido_habilidades_software_debian,"img_habilidades_software","img_debian","./vista/img/img_debian.svg")
            let descripcion_habilidades_debian = mkTextList(contenido_habilidades_software_debian,"descripcion_habilidades","descripcion_habilidades",
                "Habilidades Debian:",
                "Instalación y configuración.",
                "Shell Script.",
                "Virtualización.",
                "Gestión de paquetería y depencias.",
                "Virtualización de entornos.",
                "Soporte general.",
            )

        let video_programacion = mkObjVideoLoop(cuerpo_inicio,"video_programacion","video_programacion","./vista/video/programming.mp4")

        let img_debian_fondo = mkObj(cuerpo_inicio,"img_debian_fondo","img_debian_fondo",)
            let capa_difuminado_debian = mkObj(img_debian_fondo,"capa_difuminado","capa_difuminado_debian")
            img_debian_fondo.onScrollIntoView((entry) => {
                if (entry.isIntersecting) {
                console.log('The element is visible:', entry.target);
                img_fondo.querySelector("img").setAttribute("src","./vista/img/servers.jpg")
                img_fondo.style.display = "flex"; // Show the element
                header.style.backgroundColor = "black"

                } 
            });


        let contenido_infografia_debian = mkObj(cuerpo_inicio,"contenido_infografia_windows","contenido_infografia_debian")
        contenido_infografia_debian.contenidoInfografiaDebian()

        let contenido_habilidades_software_ubuntu = mkObj(cuerpo_inicio,"contenido_habilidades_software","contenido_habilidades_software_ubuntu")
            let descripcion_habilidades_ubuntu = mkTextList(contenido_habilidades_software_ubuntu,"descripcion_habilidades","descripcion_habilidades",
                "Habilidades Ubuntu:",
                "Instalación y configuración.",
                "Shell Script.",
                "Virtualización.",
                "Gestión de paquetería y depencias.",
                "Virtualización de entornos.",
                "Soporte general.",
            )
            let img_ubuntu = mkObjImg(contenido_habilidades_software_ubuntu,"img_habilidades_software","img_ubuntu","./vista/img/img_ubuntu.svg")

        let video_ubuntu = mkObjVideoLoop(cuerpo_inicio,"video_programacion","video_ubuntu","./vista/video/ubuntu.mp4")

        let img_ubuntu_fondo = mkObj(cuerpo_inicio,"img_ubuntu_fondo","img_ubuntu_fondo",)
            let capa_difuminado_ubuntu = mkObj(img_ubuntu_fondo,"capa_difuminado","capa_difuminado_ubuntu")
            img_ubuntu_fondo.onScrollIntoView((entry) => {
                if (entry.isIntersecting) {
                console.log('The element is visible:', entry.target);
                img_fondo.querySelector("img").setAttribute("src","./vista/img/ubuntu_deco.jpg")
                img_fondo.style.display = "flex"; // Show the element
                header.style.backgroundColor = "black"

                } 
            });



        let contenido_infografia_ubuntu = mkObj(cuerpo_inicio,"contenido_infografia_windows","contenido_infografia_ubuntu")
            contenido_infografia_ubuntu.contenidoInfografiaUbuntu()


        

        let contenido_habilidades_software_gimp = mkObj(cuerpo_inicio,"contenido_habilidades_software","contenido_habilidades_software_gimp")
            let img_gimp = mkObjImg(contenido_habilidades_software_gimp,"img_habilidades_software","img_gimp","./vista/img/img_gimp.svg")
            let descripcion_habilidades_gimp = mkTextList(contenido_habilidades_software_gimp,"descripcion_habilidades","descripcion_habilidades",
                "Habilidades Gimp:",
                "Diseño Gráfico.",
                "Familiaridad de interfáz.",
                "Eliminación de fondos.",
                "Creación de logos con diseño original.",
            )




        let contenido_habilidades_software_mastrack = mkObj(cuerpo_inicio,"contenido_habilidades_software","contenido_habilidades_software_mastrack")
            let descripcion_habilidades_mastrack = mkTextList(contenido_habilidades_software_mastrack,"descripcion_habilidades","descripcion_habilidades",
                "Habilidades Mastrack:",
                "Localización.",
                "Generación de reportes.",
                "Alertas y notificaciones.",
                "Geocercas.",
            )
            let img_mastrack = mkObjImg(contenido_habilidades_software_mastrack,"img_habilidades_software","img_mastrack","./vista/img/img_mastrack.svg")


        let contenido_habilidades_software_pase_tag = mkObj(cuerpo_inicio,"contenido_habilidades_software","contenido_habilidades_software_pase_tag")
            let img_pase_tag = mkObjImg(contenido_habilidades_software_pase_tag,"img_habilidades_software","img_pase_tag","./vista/img/img_pase_tag.svg")
            let descripcion_habilidades_pase_tag = mkTextList(contenido_habilidades_software_pase_tag,"descripcion_habilidades","descripcion_habilidades",
                "Habilidades Pase Tag:",
                "Sistema corporativo Pase Tag App.",
                "Automatización de recarga.",
                "Gestión de aclaraciones.",
                "Mapeo de casetas (MyMaps - Pase Tag).",
                "Sistema PHP local para elaboración automática de reportes con información de plataforma.",
            )

        let contenido_habilidades_software_github = mkObj(cuerpo_inicio,"contenido_habilidades_software","contenido_habilidades_software_github")
            let descripcion_habilidades_github = mkTextList(contenido_habilidades_software_github,"descripcion_habilidades","descripcion_habilidades",
                "Habilidades Github:",
                "[Proyecto] mkDom.js - Respositorio de Libreria (abierta al público en general).",
                "Control de versiones.",
                "Documentación (.md).",
                "Github Pages.",
            )
            let img_github = mkObjImg(contenido_habilidades_software_github,"img_habilidades_software","img_github","./vista/img/img_github.svg")

        let carrusel_mkDom = mkCarrusel(cuerpo_inicio,"carrusel","carrusel_mkDom",
            "vista/img/mkDom.png",
            "vista/img/mkDomDinamico.png",
            )
    
        let contenido_infografia_github = mkObj(cuerpo_inicio,"contenido_infografia_github","contenido_infografia_github")
            let cuerpo_infografia_github = mkObj(contenido_infografia_github,"markdown-body","readme-content")

            async function loadReadme() {
                const response = await fetch('https://raw.githubusercontent.com/kinichdev/mkDom.js/main/README.md');
                const text = await response.text();
                
                const converter = new showdown.Converter();
                const html = converter.makeHtml(text);
                
                cuerpo_infografia_github.innerHTML = html;
            }

            loadReadme();

        





        // let habilidades_destacadas_web = mkTextList(cuerpo_inicio, "contenido_experiencia_destacada", "habilidades_destacadas_web",
        //     "Habilidades Destacadas en Desarrollo Web",
        //     "Diseño responsivo y adaptativo.",
        //     "Desarrollo front-end con tecnologías modernas (HTML5, CSS3, JavaScript).",
        //     "Integración de APIs y servicios web.",
        //     "Optimización de rendimiento y velocidad del sitio.",
        //     "Manejo de control de versiones (Git).",
        //     "Conocimientos en seguridad web.",
        //     "Creación de biblioteca orientada a programación funcional - mkDom.",
        //     "Diseño de contenido.",
        // );



        // let habilidades_destacadas_administracion = mkTextList(cuerpo_inicio, "contenido_experiencia_destacada", "habilidades_destacadas_administracion",
        //     "Habilidades Destacadas en Administracion",

        //     "Mecanografía fluida.",
        //     "Aplicaciones de sistemas excel para empresas.",
        //     "Diseño y control de reportes.",
        //     "Diseño de formularios.",
        //     "Control de bases de datos.",
        //     "Graficación Javascrip - CSS.",
        // );

        // let contenido_constancias = mkTextList(cuerpo_inicio,"descripcion_inicio","contenido_constancias",
        //     "Estudios Educativas.",
        //     "Introducción al Plan de Negocios. CECATI.",
        //     "Mantenimiento Básico a PC. CECATI.",
        //     "Mantenimiento Básico a Laptop. CECATI.",
        //     "Instituto de Educación Avanzada Plantel Prados.",
        //     "Casa de la Música Méxicana.",
        // )

        // let contenido_habilidades_destacadas = mkTextList(cuerpo_inicio,"descripcion_inicio","contenido_habilidades_destacadas",
        //     "Habilidades Destacadas.",
        //     "Programación Funcional. (JavaScript)",
        //     "Programación orientada a objetos. (php)",
        //     "Automatización bases de datos. (php,SQL)",
        //     "Diseño de imágenes. (GIMP, Adobe Ilustrator)",
        //     "Diseño de Formatos. (PDF, GIMP, Adobe Ilustrator)",
        // )

        // let contenido_dominio_lenguajes_html = mkTextList(cuerpo_inicio,"descripcion_inicio","contenido_dominio_lenguajes_html",
        //     "HTML",
        //     "Maquetación dinámica con JS",
        //     "Uso exclusivo de scripts para dinámica de DOM",
        //     "Optimización de rendimiento",
        //     "Diseño personalizado y cómodo.",
        //     "Formularios para captura de datos, registro de usuarios/productos/clientes/trabajadores.",
        //     "Documentación web para publicitar productos o servicios, información personal, opinion pública, CV o Carpetas de Trabajo.",
        //     "Sistema web automatizada con tareas.",
        // )

        // let contenido_dominio_lenguajes_css = mkTextList(cuerpo_inicio,"descripcion_inicio","contenido_dominio_lenguajes_css",
        //     "CSS",
        //     "Diseño dinámico.",
        //     "Completa personalizacion de diseño.",
        //     "Animaciones.",
        // )

        // let carrusel_programacion = mkCarrusel(cuerpo_inicio,"carrusel","carrusel_programacion",
        //     "vista/img/diagrama_html.png",
        //     "vista/img/diagrama_css.png",
        // )

        // let contenido_dominio_lenguajes_js = mkTextList(cuerpo_inicio,"descripcion_inicio","contenido_dominio_lenguajes_js",
        //     "Java Script",
        //     "Diseño dinámico.",
        //     "Completa personalizacion de diseño.",
        //     "Animaciones.",
        // )

        // let contenido_dominio_lenguajes_php = mkTextList(cuerpo_inicio,"descripcion_inicio","contenido_dominio_lenguajes_php",
        //     "PHP",
        //     "Diseño dinámico.",
        //     "Completa personalizacion de diseño.",
        //     "Animaciones.",
        // )

        // let carrusel_programacion_sec = mkCarrusel(cuerpo_inicio,"carrusel","carrusel_programacion",
        //     "vista/img/diagrama_js.png",
        //     "vista/img/diagrama_php.png",
        // )


        let contenido_proyectos = mkTextList(cuerpo_inicio,"descripcion_inicio","contenido_proyectos",

        "Proyectos.",

        "Bloquera Vac",
        "<a href='https://bloqueravac.com'>bloqueraVac.com</a>",

        "Tranportes Aldoli.",
        "<a href='https://transportesaldoli.com.mx'>https://transportesaldoli.com.mx</a>",

        "LunaKar.",
        "<a href='https://lunakarcp.github.io/LunaKar'>https://lunakarcp.github.io/LunaKar.github.io/LunaKar</a>",

        "Refacciones La Barata",
        "<a href='https://labaratamr.com'>https://labaratamr.com</a>",

        "Un Mundo de Cancelería",
        "<a href='https://cristalesycanceles.com'>https://cristalesycanceles.com</a>",

    )



        let contenido_footer = mkTextList(cuerpo_inicio,"descripcion_inicio_footer","contenido_footer",
            "Diseño",
            "Programación",
            "Administración",
            "Seguridad Informática",
        )
        displayScroll(cuerpo_inicio)
return cuerpo_inicio
}
