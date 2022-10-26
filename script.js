let articulo1 = Number(prompt("Bienvenido al carrito de compras. ¿Qué producto desea comprar? ( 1 - Playstation5 - 2 Xbox Series X - 3 Nintendo Switch)"))

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