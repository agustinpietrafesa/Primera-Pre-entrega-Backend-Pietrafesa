class ProductManager{
    constructor(){
        this.products = [];
    }


getProducts = () => {
    return this.products;   
};
 
addProduct = ( title, description, price, thumbnail, code, stock ) => {
     const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        products: []
     }

     this.products.length === 0
     ?
     product.id = 1 
     :
     product.id = this.products [ this.products.length - 1 ].id + 1;


     this.products.push(product);
};



getProductById = (idProduct) => {
    const productIndex = this.products.findIndex( product => product.id === idProduct );

    if(productIndex === -1){
        console.log('Not Found');
        return;
    }
    
    const productAdd = this.products [productIndex].products.includes(idProduct);

    if (productAdd) {
        console.log('El producto se agrego correctamente');
        return;
    }
    this.products[productIndex].products.push(idProduct)
};

}


manageProducts = new ProductManager ();
manageProducts.addProduct( 'Iphone 14', '128GB', 1500, 'Sin imagen', 'AppIph14', 15 );
manageProducts.addProduct( 'Iphone 14 pro', '128GB', 1700, 'Sin imagen', 'AppIph14P', 10 );
manageProducts.addProduct( 'Iphone 13', '256GB', 1100, 'Sin imagen', 'AppIph13', 8 );


manageProducts.getProductById(1);
manageProducts.getProductById(2);
manageProducts.getProductById(3);

console.log(manageProducts.getProducts());