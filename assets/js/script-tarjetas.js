// Funcionalidad para actualizar el DOM de forma interna mas adelante con nuevos proyectos

const divTarjetas = document.getElementsByClassName("div-tarjetas");

function imprimirTarjetas() {
    let contenidoTarjeta = "";
    for (const tarjeta of tarjetas) {
        contenidoTarjeta += (`
            <div class="card">
                    <img src="${tarjeta.imagen}"
                        class="card-img-top" alt="logo latam">
                    <div class="card-body">
                        <h5 class="card-title">${tarjeta.tituloTarj}</h5>
                        <p class="card-text">${tarjeta.textoTarj}</p>
                        <!-- Botón de modal -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                            data-bs-target="#${tarjeta.idTarj}">
                            Detalles
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="${tarjeta.idTarj}" tabindex="-1" aria-labelledby="${tarjeta.idModal}"
                            aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="${tarjeta.idModal}">${tarjeta.modTitle}</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <img class="img-fluid" src="${tarjeta.imagenMod}" alt="oficinas latam airlines">
                                        <p>${tarjeta.textoMod}</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal">Cerrar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);
    };
    
    divTarjetas.innerHTML = contenidoTarjeta
}

document.addEventListener("DOMContentLoaded", function(){
    imprimirTarjetas();
})


