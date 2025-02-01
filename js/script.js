// Creamos un arreglo de objetos que representan los productos
const productos = [
    { id: 'id', nombre: 'Smartphone', descripcion: 'Un smartphone de alta gama', precio: "999.99"},
  { id:'id' , nombre:'Tableta', descripcion:'Una tableta para ver videos y jugar juegos', precio:"499.99"},
  { id:'id' , nombre :'Laptop', descripcion:'Un laptop para trabajar y estudiar', precio:"1299.99"},
  ];
  
  // Creamos una función que muestra la lista de productos en la página
  function mostrarProductos() {
  
   // Obtenemos el elemento HTML donde se mostrará la lista de productos 
   const listaProductos = document.getElementById("lista-productos-ul");
  
   // Limpiamos la lista de productos anterior 
   listaProductos.innerHTML = "";
  
   // Recorremos el arreglo de productos y creamos un elemento HTML para cada uno 
  
  productos.forEach((producto) => {
  
  const elementoProducto = document.createElement("LI");
  elementoProducto.classList.add("producto");
  
  elementoProducto.innerHTML = `
  
  <h2>${producto.nombre}</h2>
  
  <p>${producto.descripcion}</p>
  
  <p>Precio:$${producto.precio}</p>
  
  `;
  
  
  
  listaProductos.appendChild(elementoProducto);
  
  });
  
  }
  mostrarProductos();
  
  document.addEventListener("DOMContentLoaded", function(event) {
  
  });