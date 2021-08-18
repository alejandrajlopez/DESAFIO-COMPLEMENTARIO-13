
let servicios = [
    { id: 1, nombre: "Lectura de gemas", precio: 1000 },
    { id: 2, nombre: "Lectura de tarot", precio: 900 },
    { id: 3, nombre: "Análisis astrológico", precio: 1500 },
    { id: 4, nombre: "Análisis numerológico", precio: 1200 },
    { id: 5, nombre: "Lectura de Runas", precio: 950 },
    { id: 6, nombre: "Terapia transpersonal", precio: 920 }
];

let carrito = [];

for (const servicio of servicios) {
    
    $("#app").append(`<div>
                        
                        <h4>  Servicio: ${servicio.nombre}</h4>
                        <b> $ ${servicio.precio}</b>
                        <button class="btn btn-primary ${servicio.id}">Comprar</button>
                        </div>`);
    
    $(".btn").on('click', function() {
        console.log(`Compraste ${servicio.nombre}`);
        carrito.push(servicios[servicio.id - 1]);
        console.log(carrito);
    });
}
$(".btn").click((e) => {
    let hijos= $(e.target).parent().children();
    console.log(hijos[0].value);
    $(e.target).parent().slideUp("slow");
})


$("#botonBorrar").on('click', () => {
    while(carrito.length > 0)
  carrito.pop() })

let visibilidad = true;
$("#botonBorrar").on('click', () => {
    
    visibilidad ? $("#borrar").css({ display: "none" }) : $("#borrar").css({ display: "inline-block" });
    visibilidad = !visibilidad;
    
});

$("#botonBorrar").on('click', () => {
    
    $('body').prepend('<h2 >Hola Juan</h2>')
    
});

$("#muestraParrafo").on('click', () => {
    
    $("#parrafo").show();

    
});
$("#ocultaParrafo").on('click', () => {
    
    $("#parrafo").hide();

    
});


$("#slideImagenUp").click(() => {
    
    $("#gemas").slideUp("fast");

    
});
$("#slideImagenUp").click(() => {
    
    $("#tarot").slideUp("fast");

    
});

$("#muestraOculta").click(() => {
    
    $("#gemas").toggle("fast");

    
});
$("#muestraOculta").click(() => {
    
    $("#tarot").toggle("fast");

    
});

$("h1").css({"background-color":"red",
"border":"5px solid"}) .slideUp(2000) .slideDown(2000);

$('body').append('<h2 id="compraya">Compra ya!!</h2>')
$("#compraya").css("background-color","yellow")
.slideUp(2000)
.slideDown(2000);