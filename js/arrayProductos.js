const productos =   [{codigo: 1, imagen: "img/Taza4.jpg", nombre: "Taza de Mariposas", descripcion: "330c", precio: 2400, categoria: "TAZA"},
                    {codigo: 2, imagen: "img/Taza2.jpg" ,nombre: "Taza Primaveral", descripcion: "330c", precio: 2400, categoria: "TAZA"},  
                    {codigo: 3,imagen: "img/Taza3.jpg" , nombre: "Taza Lobo Lunar", descripcion: "350c", precio: 2600, categoria: "TAZA"},
                    {codigo: 4, imagen: "img/Taza5.jpg" ,nombre: "Taza Zorro Invernal", descripcion: "350c", precio: 2600, categoria: "TAZA"},
                    {codigo: 5, imagen: "img/Taza6.jpg" ,nombre: "Taza Peces Tropicales", descripcion: "340c", precio: 2500, categoria: "TAZA"},
                    {codigo: 6, imagen: "img/Taza7.jpg" ,nombre: "Taza Flamenco", descripcion: "330c", precio: 2400, categoria: "TAZA"},
                    {codigo: 7, imagen: "img/Taza8.jpg" ,nombre: "Taza Conejo", descripcion: "340c", precio: 2500, categoria: "TAZA"},
                    {codigo: 8, imagen: "img/Taza9.jpg" ,nombre: "Taza Mariposa", descripcion: "340c", precio: 2500, categoria: "TAZA"},
                    ]

function recuperarCarrito(){
    if(localStorage.getItem("carrito")){   
        return  JSON.parse(localStorage.getItem("carrito"))
    } else{
        return []
    }
}

const carrito = recuperarCarrito()







