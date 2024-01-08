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
            "Automatización de tareas repetitivas",
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



        let contenido_etiquetas_actividades = mkObj(cuerpo_inicio,"contenido_etiquetas_actividades","contenido_etiquetas_actividades")

            let etiqueta_actividades_sistema_usuarios = etiquetaElemento(contenido_etiquetas_actividades,"etiqueta_actividades","etiqueta_actividades_sistema_usuarios","Sistema de Usuarios.","./vista/img/actividades_login.png","Registro, autentificación, gestión de perfiles, seguridad de contraseñas...")
            let etiqueta_actividades_tablas_calculo = etiquetaElemento(contenido_etiquetas_actividades,"etiqueta_actividades","etiqueta_actividades_tablas_calculo","Tablas de Cálculo.","./vista/img/actividades_tablas_calculo.png","Tablas de cálculo dinámicas en navegador completamente personalizadas, ...")
            let etiqueta_actividades_reportes_automaticos = etiquetaElemento(contenido_etiquetas_actividades,"etiqueta_actividades","etiqueta_actividades_tablas_calculo","Reportes automáticos.","./vista/img/actividades_reportes_automaticos.png","Reportes automaticos con bases de datos...")
            // let etiqueta_actividades_formularios = etiquetaElemento(contenido_etiquetas_actividades,"etiqueta_actividades","etiqueta_actividades_forumularios","Formularios.","./vista/img/actividades_formularios.png","Formularios con validaciones de datos...")
            // let etiqueta_actividades_encuestas_sugerencias = etiquetaElemento(contenido_etiquetas_actividades,"etiqueta_actividades","etiqueta_actividades_forumularios","encuestas_sugerencias.","./vista/img/actividades_encuestas_sugerencias.png","encuestas_sugerencias con validaciones de datos...")

        

            


return cuerpo_inicio
}
