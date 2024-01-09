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
            texto_actualizacion.style.padding = "6px"
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
            let etiqueta_actividades_encuestas_sugerencias = etiquetaElemento(contenido_etiquetas_actividades,"etiqueta_actividades","etiqueta_actividades_forumularios","encuestas_sugerencias.","./vista/img/actividades_encuestas_sugerencias.png","encuestas_sugerencias con validaciones de datos...")

        let contenido_calendarios_personalizados = mkObj(cuerpo_inicio,"contenido_calendarios_personalizados","contenido_calendarios_personalizados")

            let descripcion_calendario = mkTextList(contenido_calendarios_personalizados,"descripcion_calendario","descripcion_calendario",
                "Calendario",
                "Registro de eventos a traves de calendarios personalizados.",
                "Distribución de la informacion a través de un solo registro",
            )
        
            let ventana_calendarios = mkObj(contenido_calendarios_personalizados,"ventana_calendarios","ventana_calendarios") 

                let calendario_input = mkObjInput(ventana_calendarios,"calendario_input","calendario_input","date","Inserta Una Fecha")
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

                // TODO CALENDARIO

                function mkCalendario(n, c, i, t, input_fecha, ...filas) { // nodo clase id titulo fecha filas
                    n = n || "";c = c || "";i = i || "";t = t || "";input_fecha = input_fecha || "";
                    filas = filas || [];

                    let array_dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];

                    let expresion_regular_1 = /^\d{2}-\d{2}-\d{4}$/; // dd-mm-aa
                    let expresion_regular_2 = /^\d{2}\/\d{2}\/\d{4}$/; // dd/mm/aa
                    let fecha_;let dia_;let dias_transcurridos;let lunes;let dates = [];

                    let milisegundos_dia = 24 * 60 * 60 * 1000 //86,400,000 milisegundos por dia

                    if (
                            input_fecha && 
                            (Date.parse(input_fecha) || 
                            expresion_regular_1.test(input_fecha) || 
                            expresion_regular_2.test(input_fecha))
                            
                        ) {

                        function mkFormatoInputFechaCalendario() {
                            if (expresion_regular_1.test(input_fecha)) {
                                let [d, m, y] = input_fecha.split("-").map(Number);
                                fecha_ = new Date(y, m - 1, d);

                            } else if (expresion_regular_2.test(input_fecha)) {
                                let [d, m, y] = input_fecha.split("/").map(Number);
                                fecha_ = new Date(y, m - 1, d);

                            } else {
                                fecha_=new Date(input_fecha)
                            }    
                        }
                        mkFormatoInputFechaCalendario()

                        
                        console.log("fecha: "+fecha_)

                        function mkFormatoIsoString() {
                            dia_ = fecha_.getDay()+1;
                            dias_transcurridos = dia_ === 0 ? 6 : dia_
                            lunes = new Date(fecha_.getTime() - (dias_transcurridos * milisegundos_dia) + milisegundos_dia);
                            martes = new Date(lunes.getTime() + milisegundos_dia)
                            miercoles = new Date(martes.getTime() + milisegundos_dia)
                            jueves = new Date(miercoles.getTime() + milisegundos_dia)
                            viernes = new Date(jueves.getTime() + milisegundos_dia)
                            sabado = new Date(viernes.getTime() + milisegundos_dia)
                            domingo = new Date(sabado.getTime() + milisegundos_dia)
                    
                            lunes.setUTCHours(0, 0, 0, 0)
                            martes.setUTCHours(0, 0, 0, 0)
                            miercoles.setUTCHours(0, 0, 0, 0)
                            jueves.setUTCHours(0, 0, 0, 0)
                            viernes.setUTCHours(0, 0, 0, 0)
                            sabado.setUTCHours(0, 0, 0, 0)
                            domingo.setUTCHours(0, 0, 0, 0)
                    
                            lunes = lunes.toISOString()
                            martes = martes.toISOString()
                            miercoles = miercoles.toISOString()
                            jueves = jueves.toISOString()
                            viernes = viernes.toISOString()
                            sabado = sabado.toISOString()
                            domingo = domingo.toISOString()
                        }

                        mkFormatoIsoString()

                    } else {
                        console.error("Formato de fecha incorrecto, revisa el formato: " + input_fecha)
                        return
                    }

                    dates.push(lunes,martes,miercoles,jueves,viernes,sabado,domingo)
                    let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

                    let obj_temp = mkObj(n,c,i)
                        obj_temp.style.flexDirection="column"

                    for (let j = 0; j < filas.length + 1; j++) {
                        let element_j = filas[j]
                        let fila_calendario = div(c + "_fila", i + "_fila_" + filas[j-1]);
                        fila_calendario.setAttribute("date", input_fecha);
                        obj_temp.appendChild(fila_calendario);

                        for (let j_ = 0; j_ < array_dias.length + 1; j_++) {
                            let element_day = array_dias[j_]

                            let celda_calendario = div(c + "_celda", i + "_celda_" + array_dias[j_ - 1] + "_fila_" + filas[j - 1]+"_columna_"+array_dias[j_-1]);
                            if (j === 0 && j_ === 0) {  //ESQUINA
                                let p_titulo_table_celda_calendario = mkText(celda_calendario,"p_celda_titulo_"+c,"p_celda_titulo_"+i,t+"<br>"+meses[fecha_.getMonth()])
                                celda_calendario.setAttribute("class", c + "_celda_titulo_table");
                                celda_calendario.setAttribute("id", i + "_celda_titulo_table_");
                    
                            } else if (j === 0 && j_ > 0) { //HEADER
                                let dateCalendario = dates[j_-1].replace(/T00:00:00.000Z/,"")//;console.log(dateCalendario)
                                let [año,mes,dia]=dateCalendario.split("-")
                                dateCalendario=dia+" - "+meses[parseInt(mes-1)]
                                let p_head_table_celda_calendario = mkText(celda_calendario,"p_celda_head_"+c,"p_celda_head_"+i,array_dias[j_-1]+"<br>"+dateCalendario)
                                celda_calendario.setAttribute("class", c + "_celda_day");
                                celda_calendario.setAttribute("id", i + "_day_table" + "_celda_" + array_dias[j_ - 1] + "_" + j_);
                    
                            } else if (j > 0 && j_ === 0) { //COLUMNA PRINCIPAL
                                let p_columna_main_table_celda_calendario = mkText(celda_calendario,"p_columna_main_"+c,"p_columna_main_"+i,filas[j-1])
                                celda_calendario.setAttribute("class", c + "_celda_titulo_fila");
                                celda_calendario.setAttribute("id", i + "_celda_titulo_fila_main" + filas[j-1] + "_columna_main");
                            } else {                        //CONTENIDO TABLA
                                celda_calendario.setAttribute("date",dates[j_-1])
                                celda_calendario.setAttribute("id","cell_fila_"+filas[j-1]+"_columna_"+array_dias[j_-1])
                                celda_calendario.setAttribute("fila_name",filas[j - 1])
                    
                                peticionCategoriaFecha(celda_calendario,"./modelo/solicitudCeldaCalendario.php")

                                function peticionCategoriaFecha(obj,dir) {
                                    let ot_c = obj.getAttribute("class")
                                    let ot_i = obj.getAttribute("id")
                                    let ot_date = obj.getAttribute("date")
                                    let ot_r_name = obj.getAttribute("fila_name")
                                
                                    let formData = new FormData()
                                    formData.append("categoria",ot_r_name)
                                    formData.append("fecha",ot_date)
                                
                                    let peticionCellCalendario = new XMLHttpRequest()
                                    peticionCellCalendario.open("POST",dir)
                                    peticionCellCalendario.send(formData)
                                    peticionCellCalendario.onreadystatechange=function() {
                                        if (peticionCellCalendario.readyState==4&&peticionCellCalendario.status==200) {
                                            let res = peticionCellCalendario.response
                                            console.log(res)
                                            let obj_text = mkText(obj,"p_"+ot_c,"p_"+ot_i,res)
                                        }
                                    }
                                }
                                // celda_calendario.innerHTML="Registro dinámico"
                                let obj_text = mkText(celda_calendario,"p_","p_","Registro en bases de datos")

                    
                                celda_calendario.addEventListener("click",(x)=>{

                                let ventana_update_celda = mkObj(obj_temp,"ventana_update_celda_"+c,"ventana_update_celda_"+i)
                                    ventana_update_celda.innerHTML=""
                                    let header_update_celda = mkObj(ventana_update_celda,"header_update_celda","header_update_celda")
                                        let header_update_celda_titulo = mkText(header_update_celda,"header_update_celda_titulo","header_update_celda_titulo","Editar: "+celda_calendario.getAttribute("fila_name")+" | "+celda_calendario.getAttribute("date").replace("T00:00:00.000Z",""))
                                        let cerrar_ventana = mkObjImg(header_update_celda,"cerrar_ventana","cerrar_ventana","./vista/img/cerrar_ventana.png")
                                            cerrar_ventana.addEventListener("mouseup",function () {
                                                ventana_update_celda.remove()
                                            })
                                    let input_update_celda_titulo = mkObjTextarea(ventana_update_celda,"input_update_celda_"+c,"input_update_celda_titulo"+i,"Actualizar Celda")
                                    let input_update_celda_descripcion = mkObjTextarea(ventana_update_celda,"input_update_celda_"+c,"input_update_celda_descripcion"+i,"Actualizar Descripción")
                                    let btn_update_celda = mkObjButton(ventana_update_celda,"btn_update_celda","btn_update_celda","Actualizar Información")


                                    input_update_celda_titulo.querySelector("textarea").value = (celda_calendario.querySelector("p").innerHTML).replace(/<br>/g, '');
                                    input_update_celda_titulo.querySelector("textarea").focus()

                                        btn_update_celda.addEventListener("click",function () {
                                            let in_update_celda_titulo = input_update_celda_titulo.querySelector("textarea")
                                            let in_update_celda_descripcion = input_update_celda_descripcion.querySelector("textarea")

                                            let p_celda = celda_calendario.querySelector("p")
                                            console.log(p_celda)
                                            p_celda.innerHTML = input_update_celda_descripcion.value

                    
                                                // console.log(in_update_celda.value)

                                                let formData = new FormData()
                                                formData.append("titulo",encodeURIComponent(in_update_celda_titulo.value))
                                                formData.append("descripcion",encodeURIComponent(in_update_celda_descripcion.value))
                                                formData.append("categoria",celda_calendario.getAttribute("fila_name"))
                                                formData.append("fecha",celda_calendario.getAttribute("date"))
                    
                                                let peticion = new XMLHttpRequest()
                                                peticion.open("POST","./modelo/actualizarCeldaCalendario.php")
                                                peticion.send(formData)
                                                peticion.onreadystatechange=function() {
                                                    if (peticion.readyState==4&&peticion.status==200) {
                                                        let res = peticion.response
                                                        console.log(res)
                                                        if (verificarPeticion(res)) {
                                                            celda_calendario.innerHTML=""
                                                            peticionCategoriaFecha(celda_calendario,"./modelo/solicitudCeldaCalendario.php")
                                                            ventana_update_celda.remove()
                                                            celda_calendario.scrollIntoView()
                                                        } else {
                                                            console.log(res)
                                                        }
                                                    }
                                                }

                                        })

                            })
                        }
                        fila_calendario.appendChild(celda_calendario);


                    }
                    }
                    console.log(obj_temp)
                    return obj_temp
                }

        let contenido_etiquetas_actividades_ = mkObj(cuerpo_inicio,"contenido_etiquetas_actividades","contenido_etiquetas_actividades")

            let etiqueta_actividades_tablas_calculo = etiquetaElemento(contenido_etiquetas_actividades_,"etiqueta_actividades","etiqueta_actividades_tablas_calculo","Tablas de Cálculo.","./vista/img/actividades_tablas_calculo.png","Tablas de cálculo dinámicas en navegador completamente personalizadas, ...")
            let etiqueta_actividades_reportes_automaticos = etiquetaElemento(contenido_etiquetas_actividades_,"etiqueta_actividades","etiqueta_actividades_tablas_calculo","Reportes automáticos.","./vista/img/actividades_reportes_automaticos.png","Reportes automaticos con bases de datos...")

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



            
            

return cuerpo_inicio
}