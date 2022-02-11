// perimetro y area de im cuadrad//
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

// perimetro y area de un triangulo//
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//perimtero y area de un circulo/
function perimetroCirculo(radio) {
    const diametro = radio * 2;
    return diametro * Math.PI;
}

function areaCirculo(radio) {
    return (radio * radio) * Math.PI
}


function getPerimetroCuadrado() {
    const input = document.getElementById("perCuadrado");
    const valor = input.value;

    const calcularPerimetro = perimetroCuadrado(valor);
    alert(calcularPerimetro)
    //return calcularPerimetro;
}

function getAreaCuadrado() {
    const input = document.getElementById("perCuadrado").value;

    const calcularArea = areaCuadrado(input);
    document.getElementById("label").innerHTML = calcularArea;
}