const containerProductos = document.querySelector(".productos-container")
const popUp = document.querySelector("#popup")

function generarCards(producto){  
    return `<div class="card-producto">
                <div class="img-producto-container">
                    <img src="${producto.imagen}" alt="" class="img-producto">
                </div>
                <h5 class="card-nombre-producto">${producto.nombre}</h5>
                <p class="descripcion">${producto.descripcion}</p>
                <div class="card-cta">
                    <h4 class="card-precio">$${producto.precio}</h4>
                    <button id="${producto.codigo}" class="btn-card">Agregar</button>
                </div>
            </div>`
}

function cargarProductos(){
    productos.forEach((producto) => {containerProductos.innerHTML += generarCards(producto)});
    activarClickEnBotones()
}

cargarProductos()

function abrirPopUp(){
    popUp.classList.add("abrir-pop-up")
    setTimeout(function(){
        popUp.classList.remove("abrir-pop-up")
    },2700)
}

function activarClickEnBotones(){
    const botones = document.querySelectorAll (".btn-card") 
    for (let boton of botones){boton.addEventListener("click", (e)=>{   
        const eleccion = productos.find((producto)=> producto.codigo === parseInt(e.target.id))   
        carrito.push (eleccion)
        localStorage.setItem ("carrito", JSON.stringify(carrito)) 
        cambiarCantidadCarrito()
        abrirPopUp()
        }) 
    }
}