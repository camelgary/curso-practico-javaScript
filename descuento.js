function calcularDescuento(precio, descuento) {
    const procentajeDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajeDescuento) / 100;
    return precioConDescuento;
}

function validar() {
    if (precio == null || descuento == null) {
        return false;
    } else {
        return true;
    }
}
function quitar() {
    if (true) {
        document.getElementById("alerta")
    }
}
function onClickCalcularDescuento() {
    const precio = document.getElementById("precio").value;
    const descuento = document.getElementById("descuento").value;
    if (precio == null || precio == "", descuento == null || descuento == "") {
        document.getElementById("alerta").innerHTML = `<p style="color: red;">Faltan llenar campos</p>`;
    } else{
        document.getElementById("alerta").remove();
        document.getElementById("conDescuento").innerHTML = `<p>Precio con descuento ${calcularDescuento(precio, descuento)}</p>`;
    }
}
function myOnLoad() {
    cargar_provincias()
   }
   
   // funcion para Cargar Provincias al campo <select>
   function cargar_provincias() {
    var array = ["Cantabria", "Asturias", "Galicia", "Andalucia", "Extremadura"];
   
    // Ordena el Array Alfabeticamente, es muy facil ;)):
    array.sort();
   
    addOptions("provincia", array);
   }
   
   // Rutina para agregar opciones a un <select>
   function addOptions(domElement, array) {
    var select = document.getElementsByName(domElement)[0];
   
    for (value in array) {
     var option = document.createElement("option");
     option.text = array[value];
     select.add(option);
    }
   }