var btn = document.getElementById("boton");
var btndos = document.getElementById("botondos");
var circo1 = document.getElementById("circulouno");
var circo2 = document.getElementById("circulodos");
var circo3 = document.getElementById("circulotres");

$(document).ready(function(){
    btn.click(function(){
        btn.Toggle(
        circo1.setAttribute("class", "color1"),
        circo2.setAttribute("class", "color2"),
        circo3.setAttribute("class", "color3");
        );
    });
});





/*
var btn = document.getElementById("boton");
    btn.addEventListener("click", function() {
        $("div").toggle(
        $(circulouno.css("border-color", "yellow 1px solid");
        $(circulodos.css("border-color", "blue 1px solid");
        $(circulotres.css("border-color", "green 1px solid"); )
    } ); 

window.addEventListener("load", function() {
    var btn = document.getElementById("boton");
    btn.addEventListener("click", function() {        
});
 });

    var numero1 = parseInt(document.getElementById("numero1").value);
        var numero2 = parseInt(document.getElementById("numero2").value);
        var numero3 = parseInt(document.getElementById("numero3").value);

        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "<p>El resultado es " + porcentaje(numero1,numero2,numero3) + "</p>";
    });

    function porcentaje(numero1, numero2, numero3) {
        var total = numero2*numero1;
        return total- (total * (numero3 / 100));
    }

 var btndos = document.getElementById("botondos");
    btndos.addEventListener("click", function() {

$("p").toggle(
        function(){$("p").css({"color": "red"});},
        function(){$("p").css({"color": "blue"});},
        function(){$("p").css({"color": "green"});
    });

    }

     $("div").toggle(
        function(){$("div").css({"border-color": "1px solid red"});},
        function(){$("div").css({"border-color": "1px solid blue"});},
        function(){$("div").css({"border-color": "1px solid green"});

    });

    */