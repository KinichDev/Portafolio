let animacionActivada = false;
contenedor_principal.addEventListener("click", function() {

  if (!animacionActivada) {
    letterAnimation.classList.add("letterAnimation-active");
    animacionActivada = true;
  } else {
    letterAnimation.classList.remove("letterAnimation-active");
    animacionActivada = false;
    setTimeout(function() {
      letterAnimation.classList.add("letterAnimation-active");
      animacionActivada = true;
    }, 100); // Cambia el valor de 1000 por el tiempo de retraso deseado en milisegundos (por ejemplo, 2000 para 2 segundos)
  }
});
