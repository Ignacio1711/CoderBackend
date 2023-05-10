class ProductManager {
    #products // set a private property
    #error
    constructor () {
        this.#products = []
        this.#error = undefined
    }

    getProducts = () =>this.#products

    getProductById = (id) => {
        const product = this.#products.find (item => item.id === id)
        if (product) return product
        return 'Not Found'
    }
    
    // verify if the array is empty, if not, add 1 to the last id.
    #generateId = () =>(this.#products.length === 0) ? 1 :  this.#products[this.#products.length - 1].id +1 

    #validateProduct = (title, description, price, thumbnail, code, stock) => {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            this.#error = 'Error! Todos los datos del producto son obligatorios.'
        }else {
            const found = this.#products.find(item => item.code === code)
            if (found) this.#error = 'Error! El código de producto ya existe'
            else this.#error = undefined //reset the value of the error
        }
        
    }
    
    addProduct = (title, description, price, thumbnail, code, stock) => {
        this.#validateProduct(title, description, price, thumbnail, code, stock)
        if (this.#error === undefined)
            this.#products.push({id: this.#generateId() ,title, description, price, thumbnail, code, stock}) // add the product into the array
        else 
            console.log(this.#error)

    }
}

const productManager = new ProductManager()
productManager.addProduct('Reinado', 'Juego de guerra medieval', 500, 'imagen_juego1', 'JG001') //class instance and add product
productManager.addProduct('Vikingos', 'Juego de guerra vikinga', 300, 'imagen_juego2', 'JG078', 3)
productManager.addProduct('Estanciero', 'Juego multijugador', 1200, 'imagen_juego3', 'JG045', 1)
productManager.addProduct('Pictionary', 'Juego de dibujos', 200, 'imagen_juego4', 'JG045', 5)
console.log(productManager.getProducts())
console.log(productManager.getProductById(22))