function mapaRuta(event) {
  let file = event.target.files[0];

  if (file && file.type === 'application/vnd.google-earth.kml+xml') {
      let reader = new FileReader();

      reader.onload = function (e) {
        let kmlString = e.target.result;
        let coordinates = parseKML(kmlString);
      //   console.log(coordinates)


          let arreglo_ruta = []
          coordinates.forEach(element => {
              let l_a = parseFloat(element[1])
              // console.log(l_a)
              let l_b = parseFloat(element[0])
              // console.log(l_b)
              let punto = ol.proj.fromLonLat([l_b, l_a])
              //   console.log(punto)
              arreglo_ruta.push(punto)
          });
          arreglo_ruta.pop()
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

      reader.readAsText(file);
    } else {
      console.error('Por favor, carga un archivo KML válido.');
  }
}

function parseKML(kmlString) {
  let parser = new DOMParser();
  let xmlDoc = parser.parseFromString(kmlString, 'text/xml');
  let coordinates = [];

  let placemarks = xmlDoc.querySelectorAll('Placemark');
  placemarks.forEach(placemark => {
      if (placemark===placemarks[0]) {
          // console.log(placemark)
          // console.log(placemark.querySelector("name"))

          let arreglo_coordenadas = placemark.querySelector("coordinates").innerHTML
          
          arreglo_coordenadas = (arreglo_coordenadas.replace(/[\n]/g,","))
          arreglo_coordenadas = (arreglo_coordenadas.replace(/[\s]/g,""))
          arreglo_coordenadas = arreglo_coordenadas.slice(1)
          coordinates = arreglo_coordenadas.split(",")

          // Función para dividir el arreglo en grupos de 3
          function dividirEnGrupos(arreglo, tamaño_grupo) {
              var grupos = [];
              
              for (var i = 0; i < arreglo.length; i += tamaño_grupo) {
              var grupo = arreglo.slice(i, i + tamaño_grupo);
              grupos.push(grupo);
              }
              
              return grupos;
          }
          
          // Llamar a la función para dividir en grupos de 3
          var gruposDeTres = dividirEnGrupos(coordinates, 3);
          
          // console.log(gruposDeTres);
          // console.log(coordinates)
          coordinates=gruposDeTres
      }
  });
  return coordinates
}

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

          let arreglo_coordenadas = insertarCoordenadas(datos);
          // console.log(arreglo_coordenadas)
          

          let arreglo_ruta = []
          arreglo_coordenadas.forEach(element => {
              let l_a = parseFloat(element[0])
              // console.log(l_a)
              let l_b = parseFloat(element[1])
              // console.log(l_b)
              let punto = ol.proj.fromLonLat([l_b, l_a])
              //   console.log(punto)
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
          // console.log(`No se pudieron extraer coordenadas para: ${element[1]}`);
      }
  });
  return arreglo_coordenadas
}

function mostrarMapa(event){
  // obtener archivo
  let file_input = event.target
  let file = file_input.files[0]

  if (file) {
      console.log("archivo | "+file)
      console.log("ruta | "+file.name)

      var reader = new FileReader();

      reader.onload = function (e) {
        // Aquí puedes manipular el contenido del archivo KML (e.target.result)
        var kmlContent = e.target.result;
        console.log(kmlContent.coordinates);


      // DOMParser para analizar el contenido del archo KML
      let parser = new DOMParser()
      let doucmento_xml = parser.parseFromString(kmlContent,'text/xml')
      // obtener los elementos de coordenadas (en este caso, Placemark)
      let placemarks = doucmento_xml.getElementsByTagName("Placemark")
      console.log(placemarks)

      };
      
      reader.readAsText(file);



  }
}
