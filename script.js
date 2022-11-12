const carrito = []
let nombre = prompt("Ingrese su Nombre")
alert("Bienvenido al Rincon del Gamer " + nombre)
let articulo1 = Number(prompt("Bienvenido al carrito de compras. ¿Qué producto desea comprar? ( 1 - Playstation5 - 2 Xbox Series X - 3 Nintendo Switch)"))

//const producto1 = new Producto("Playstation 5", 10000, 500);
//const producto2 = new Producto("Xbox Series X", 15000, 300);
//const producto3 = new Producto("Nintendo Switch", 8000, 50);



if(articulo1 == 1){

    precio = "$10.000"
    alert("Playstation 5 " + precio)
}
else if(articulo1 ==2){

    precio = "$15.000"
    alert("Xbox Series X " + precio)
}
else if(articulo1 ==3){

    precio = "$8.000"
    alert("Nintendo Switch " + precio)
}
else{

    alert("El producto elegido no está en nuestro catálogo")
}

class Producto{
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
        
    }
}



productos.push(new Producto("Playstation 5", 10000, 500));
productos.push(new Producto("xbox Series X", 15000, 300));
productos.push(new Producto("Nintendo Switch", 8000, 50));

const productos = [];



