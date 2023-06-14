/******Creamos la clase que va a manejar nuestros productos ********/

class ProductManager{
    constructor(){
        this.products = [];
    }

/******Funcion que nos muestra los productos que manejamos ************/
getProducts = () => {
    return this.products;   
};


/**********Se crea la funcion que genera el producto con sus respectivos parametros *******/
 
addProduct = ( title, description, price, thumbnail, code, stock ) => {
     const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock
     }


     /***Definimos el ID de nuestros productos, el primero es igual a 1, los siguientes el lenght de nuestro arreglo + 1 ****/ 
     this.products.length === 0
     ?
     product.id = 1 
     :
     product.id = this.products.length + 1;


     /*******Generamos la obligatoriedad de los parametros ***********/
     const allParams = [ title, description, price, thumbnail, code, stock ];
     const reqParams = allParams.every (value => value);
    
     if( !reqParams ){
        console.warn('Ingrese todos los parametros para crear el producto');
        return;
     }


     /********Generamos la singularidad del code ************/

     const codeExist = this.products.some (product => product.code === code)
     
     if(codeExist){
        console.warn('Este codigo ya esta en el sistema')
        return;
     }

     /********Agregamos el producto a nuestra lista de productos mediante el push *******/
     this.products.push(product);
};


/*****Funcion que busca productos por el ID ********/
getProductById = (idProduct) => {
    const productIndex = this.products.findIndex( product => product.id === idProduct );

    if(productIndex === -1){
        console.log('Not Found');
        return;
    }
    

    const productAdd = () => this.products.includes(idProduct);

    if (productAdd) {
        console.log(`Se genero un producto con el ID: ${idProduct}`);
        return;
    }
};

}


/******Creamos nuestros primeros productos mediante los metodos previamente definidos******/


manageProducts = new ProductManager ();
manageProducts.addProduct( 'Iphone 14', '128GB', 1500, 'Sin imagen', 'AppIph14', 15 );
manageProducts.addProduct( 'Iphone 14 pro', '128GB', 1700, 'Sin imagen', 'AppIph14P', 10 );
manageProducts.addProduct( 'Iphone 13', '256GB', 1100, 'Sin imagen', 'AppIph13', 8 );


manageProducts.getProductById(1);
manageProducts.getProductById(2);
manageProducts.getProductById(3);

console.log(manageProducts.getProducts());