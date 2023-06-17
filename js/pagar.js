const inputNombre = document.querySelector(".container-nombre").getElementsByTagName("input")[0]
const inputEmail = document.querySelector(".container-email").getElementsByTagName("input")[0]
const inputDireccion = document.querySelector(".container-direccion").getElementsByTagName("input")[0]

const errorNombre =  document.querySelector("#error-nombre")
const errorEmail =  document.querySelector("#error-email")
const errorDireccion =  document.querySelector("#error-direccion")
const errorMedioPago = document.querySelector("#error-medio-pago")

const medioPago = document.getElementsByName("medio-pago")
const popUpPagar = document.querySelector("#pop-up-pagar")
const botonPagar = document.querySelector("#boton-pagar")
const totalPagar = document.querySelector("span")

let nombreValido
let emailValido
let direccionValida
let medioPagoValido


class Cliente {
    constructor(nombre,email,direccion,mediopago){
        this.nombre = nombre
        this.email = email
        this.direccion = direccion
        this.mediopago = mediopago
    }

    validarDatosCliente(){ 
        botonPagar.addEventListener("click", e=>{
            e.preventDefault()
            let validacionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

            inputNombre.value !== "" && isNaN(inputNombre.value) ?  // Valido nombre 
                (nombreValido = true,  this.nombre = inputNombre.value,  errorNombre.textContent = "") 
                : (nombreValido = false,  errorNombre.textContent = "Ingresa un nombre válido")


            inputEmail.value !== "" &&  validacionEmail.test(inputEmail.value) ?   // Valido email
                (emailValido = true, this.email = inputEmail.value,  errorEmail.textContent = "")
                : (emailValido = false , errorEmail.textContent = "Ingresa un email válido")


            inputDireccion.value !== "" ?  // Valido direccion
                (direccionValida = true, this.direccion = inputDireccion.value, errorDireccion.textContent = "")
                : (direccionValida = false, errorDireccion.textContent = "Ingresa una dirección")


            verificarMedio() !== undefined ?  // Valido medio de pago
                (medioPagoValido = true, this.mediopago = verificarMedio(), errorMedioPago.textContent = "")
                : (medioPagoValido = false, errorMedioPago.textContent = "Elige una opcion")


            if (nombreValido == true &&  emailValido == true && direccionValida == true && medioPagoValido == true){
                localStorage.setItem ("Cliente",JSON.stringify(nuevoCliente))
                abrirPopUp()
            } 
        })
    }
}

const nuevoCliente = new Cliente
nuevoCliente.validarDatosCliente()

function verificarMedio(){
    for (i = 0; i < medioPago.length;  i++) {
        if (medioPago[i].checked) {
        return medioPago[i].value;
        }
    }
}

function abrirPopUp(){
    popUpPagar.classList.add("pop-up-abierto")
    }

function mostrarTotalPagar(){
    let totalCarrito = carrito.reduce ((acc,producto)=> acc + producto.precio, 0) 
    totalPagar.innerHTML = "$" + totalCarrito
}

mostrarTotalPagar()