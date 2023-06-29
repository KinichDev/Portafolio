var contenedor_principal = document.getElementById("contenedor_principal")
var letterAnimation = document.getElementById("letterAnimation")
var btn_menu_header_principal = document.getElementById("btn_menu_header_principal")
var menu_header_principal = document.getElementById("menu_header_principal")
// MENÚ
btn_menu_header_principal.addEventListener("click",function() {
    menu_header_principal.style.display="flex"

    document.addEventListener("mouseup",function(x) {
        if (!menu_header_principal.contains(x.target)) {
            menu_header_principal.style.display="none"
        }
    })
    
})
// FUNCION VISUALIZAR VENTANAS
var pestaña_inicio = document.getElementById("pestaña_inicio")
var pestaña_dominio_lenguajes = document.getElementById("pestaña_dominio_lenguajes")
var pestaña_acerca_de_mi = document.getElementById("pestaña_acerca_de_mi")
var pestaña_portafolio_trabajo = document.getElementById("pestaña_portafolio_trabajo")
var pestaña_cv = document.getElementById("pestaña_cv")

var btn_logo = document.getElementById("contenedor_logo")
var btn_inicio = document.getElementById("btn_inicio")
var btn_ddl = document.getElementById("btn_ddl")
var btn_acm = document.getElementById("btn_acm")
var btn_pdt = document.getElementById("btn_pdt")
var btn_cv = document.getElementById("btn_cv")

var obj_ddl = document.getElementById("obj_ddl")
var obj_adm = document.getElementById("obj_adm")
var obj_ptfoll = document.getElementById("obj_ptfoll")
var obj_cv = document.getElementById("obj_cv")

document.addEventListener("click",function(x) {

  // console.log(x)
  
  if (btn_logo.contains(x.target)) {
    verInicio()
  }
  if (btn_inicio.contains(x.target)) {
    verInicio()
    objHash(x)
  }
  if (btn_ddl.contains(x.target)){
    verDominioLenguajes()
    objHash(x)
  }
  if (obj_ddl.contains(x.target)){
    verDominioLenguajes()
    objHash(x)
  }
  if(obj_adm.contains(x.target)){
    verAcercaDeMi()
    objHash(x)
  }
  if (obj_ptfoll.contains(x.target)) {
    verPortafolioTrabajo()
    objHash(x)
  }

  if (obj_cv.contains(x.target)) {
    verCV()
    objHash(x)
  }

})

function verInicio(event) {
  pestaña_inicio.style.display="flex"
  pestaña_dominio_lenguajes.style.display="none"
  pestaña_acerca_de_mi.style.display="none"
  pestaña_portafolio_trabajo.style.display="none"
  pestaña_cv.style.display="none"
  pestaña_inicio.style.animation="fadeIn .5s forwards"
  resetHash()
}

function verDominioLenguajes() {
  pestaña_inicio.style.display="none"
  pestaña_dominio_lenguajes.style.display="flex"
  pestaña_acerca_de_mi.style.display="none"
  pestaña_portafolio_trabajo.style.display="none"
  pestaña_cv.style.display="none"
  pestaña_dominio_lenguajes.style.animation="fadeIn .5s forwards"
  resetHash()
}

function verAcercaDeMi() {
  pestaña_inicio.style.display="none"
  pestaña_dominio_lenguajes.style.display="none"
  pestaña_acerca_de_mi.style.display="flex"
  pestaña_portafolio_trabajo.style.display="none"
  pestaña_cv.style.display="none"
  pestaña_acerca_de_mi.style.animation="fadeIn .5s forwards"
  resetHash()
}

function verPortafolioTrabajo() {
  pestaña_inicio.style.display="none"
  pestaña_dominio_lenguajes.style.display="none"
  pestaña_acerca_de_mi.style.display="none"
  pestaña_portafolio_trabajo.style.display="flex"
  pestaña_cv.style.display="none"
  pestaña_portafolio_trabajo.style.animation="fadeIn .5s forwards"
  resetHash()
}

function verCV() {
  pestaña_inicio.style.display="none"
  pestaña_dominio_lenguajes.style.display="none"
  pestaña_acerca_de_mi.style.display="none"
  pestaña_portafolio_trabajo.style.display="none"
  pestaña_cv.style.display="flex"
  pestaña_cv.style.animation="fadeIn .5s forwards"
  resetHash()
}

//cript
let img_perfil = document.getElementById("img_perfil")
img_perfil.addEventListener("contextmenu",function(e) {
  e.preventDefault()
})
function i_cv() {

  let pso_cv = document.getElementById("pso_cv")
  if (!pso_cv) {
    let mk_img_pso_cv = document.createElement("img")
    mk_img_pso_cv.setAttribute("id","pso_cv")
      document.getElementById("fila_pestaña_cuerpo_foto_cv").appendChild(mk_img_pso_cv)
  }
}
// FUNCION IMAGENES
function verImg(event){

  let temp_img = event.target

  let mk_hipercapa_img = document.createElement("div")
  mk_hipercapa_img.setAttribute("class","hipercapa")
    contenedor_principal.appendChild(mk_hipercapa_img)

    let mk_ventana_img = document.createElement("div")
    mk_ventana_img.setAttribute("class","ventana_img")
      mk_hipercapa_img.appendChild(mk_ventana_img)

      let mk_header_ventana_img = document.createElement("div")
      mk_header_ventana_img.setAttribute("class","header_ventana_img")
        mk_ventana_img.appendChild(mk_header_ventana_img)

        let mk_titulo_hvi = document.createElement("div")
        mk_titulo_hvi.setAttribute("class","mk_titulo_header_ventana_img")
        mk_titulo_hvi.innerHTML=temp_img.getAttribute("src").split("/").pop()
          mk_header_ventana_img.appendChild(mk_titulo_hvi)

        let mk_btn_cerrar_ventana_img = document.createElement("div")
        mk_btn_cerrar_ventana_img.setAttribute("class","btn_cerrar_ventana_img")
        mk_btn_cerrar_ventana_img.innerHTML="X"
          mk_header_ventana_img.appendChild(mk_btn_cerrar_ventana_img)

          mk_btn_cerrar_ventana_img.addEventListener("click",function() {
            history.replaceState({},document.title,window.location.href.replace(/#.*$/,""))
            mk_hipercapa_img.remove()
          })

      let mk_cuerpo_ventana_img = document.createElement("div")
      mk_cuerpo_ventana_img.setAttribute("class","cuerpo_ventana_img")
          mk_ventana_img.appendChild(mk_cuerpo_ventana_img)

        let mk_img_hipercap = document.createElement("img")
        mk_img_hipercap.setAttribute("class","img_hipercap")
        mk_img_hipercap.setAttribute("src",temp_img.getAttribute("src"))
          mk_cuerpo_ventana_img.appendChild(mk_img_hipercap)

          history.pushState({},"",'#img')
}
function clickImg(event) {
  let e=event.target.closest(".obj_pestaña_carpeta_trabajo")
  let i=e.querySelector("img")
  // console.log(i)
  i.click()
}

window.addEventListener("popstate",function(){
  if (location.hash !== "#img") {
    let f = document.querySelectorAll(".hipercapa")
    for (let i = 0; i < f.length; i++) {
      f[i].remove()
    }
  }
  if (location.hash=="") {
    verInicio()
  }
})
window.addEventListener("popstate",function(x) {
  console.log(location)
})

///HASHING
resetHash=()=>history.replaceState({},document.title,window.location.pathname) 
objHash=(event)=>history.pushState([],"","#"+event.target.innerHTML)





function name(params) {
  
}