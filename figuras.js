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
    document.getElementById("label").innerHTML = `<p>Resultado: ${calcularPerimetro}</p>`;

}

function getAreaCuadrado() {
    const input = document.getElementById("perCuadrado").value;

    const calcularArea = areaCuadrado(input);
    document.getElementById("label").innerHTML = `<p>Resultado: ${calcularArea}</p>`;
}
function limpiarResultado() {
    const limpiar = "";
    document.getElementById("label").innerHTML = limpiar;
}

function triangulo() {
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value;
    if (lado1 === lado2 && lado1 !== base) {
        document.getElementById("label").innerHTML = `<p>Es un triangulo Isosceles</p>`;
    } else {
        document.getElementById("label").innerHTML = `<p>No es un triangulo Isosceles</p>`;
    }

    if (base === lado1 && base === lado2) {
        const altura = ((lado1 * Math.sqrt(3))/2);
        document.getElementById("label2").innerHTML = `<p>La altura es: ${altura.toFixed(2)}</p>`;
    } else if (base > lado2 && base < lado1 || base === lado2) {
        const altura = Math.sqrt((lado1 * lado1) - (base * base));
        document.getElementById("label2").innerHTML = `<p>La altura es: ${altura.toFixed(2)}</p>`;
    }else if(base < lado1 && base < lado2) { 
        const altura = Math.sqrt((lado1 * lado1) - (base * base));
        document.getElementById("label2").innerHTML = `<p>La altura es: ${altura.toFixed(2)}</p>`;
    }else{
        document.getElementById("label2").innerHTML = `<p>No es posible realizar operacion, la base es mayor a c/u de los lados</p>`;
    }
}