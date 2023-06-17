const cantidadCarrito = document.querySelector(".carrito-boton")

function mostrarCantidadCarrito(){
    return `<img class="icon-carrito" src="./img/carrito-icono.svg" alt="">
            <p>${carrito.length} items</p>`
}

function cambiarCantidadCarrito(){
    cantidadCarrito.innerHTML = mostrarCantidadCarrito(carrito)
}  

cambiarCantidadCarrito()