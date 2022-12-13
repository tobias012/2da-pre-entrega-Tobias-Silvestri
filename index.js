function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 320;
    var euro = 325;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("el cambio de Pesos a Dolar es: $" + resultado.toFixed(2))
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("el cambio de pesos a euros es: $" + resultado.toFixed(2));
    }
    else{
        alert("tienes que completar todos los requerimientos")
    }
}
