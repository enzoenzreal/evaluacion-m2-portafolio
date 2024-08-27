// EFECTO DE CLICK EN FOTO DE PERFIL
$(document).ready(function(){
    const foto1 = $("#foto1");
    const foto2 = $("#foto2");
    const foto3 = $("#foto3");
    const foto4 = $("#foto4");

    foto1.click(function(){
        foto1.css("display", "none");
        foto2.css("display", "block");
    });

    foto2.click(function(){
        foto2.hide();
        foto3.show();
    });

    foto3.click(function(){
        foto3.hide();
        foto4.show();
    });

    foto4.click(function(){
        foto4.hide();
        foto2.show();
    });

// ENVÍO DE FORM DE CONTACTO
    const enviarForm = $("#enviarFormulario");
    const formulario = $("#form");

        enviarForm.submit(function(event){
            formulario.hide();
        });
})

// $(document).ready(function(){
//     const small1 = $("#small1");
//     const small2 = $("#small2");

//     small2.click(function(){
//         small2.css("display", "none");
//         small1.css("display", "block");
//     })

//     small1.click(function(){
//         small1.css("display", "none");
//         small2.css("display", "block");
//     })
// })


