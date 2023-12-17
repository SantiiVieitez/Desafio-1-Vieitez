class ProductManager {
    constructor(Id,Nombre, Precio, Descripcion, Stock, Imagen) {
        this.Id = Id;
        this.Nombre = Nombre;
        this.Precio = Precio;
        this.Descripcion = Descripcion;
        this.Stock = Stock;
        this.Imagen = Imagen;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(id) {
        this.products = this.products.filter(product => product.id !== id);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        return this.products.find(product => product.id === id);
    }
}

const productManager = new ProductManager();

const product1 = {
    id: 1,
    nombre: "Producto 1",
    precio: 100,
    descripcion: "Descripcion 1",
    stock: 10,
    imagen: "https://via.placeholder.com/150"
};

const product2 = {
    id: 2,
    nombre: "Producto 2",
    precio: 200,
    descripcion: "Descripcion 2",
    stock: 20,
    imagen: "https://via.placeholder.com/150"
};

productManager.addProduct(product1);
productManager.addProduct(product2);

console.log(productManager.getProducts());
