
export class Memoria {
    static products = []

    getProductsMemoria (req, res) {
        res.json({products: Memoria.products})
    }

    addProductsMemoria (producto) {
        while (Memoria.products.find(prod => prod.id == producto.id) != undefined) {
            producto.id++
        }

        Memoria.products.push(producto)
    }
}

export class MemoriaCarts {
    static carts = []

    createCartsMemoria (user) {
        MemoriaCarts.carts.push({
            usuario: user,
            timestamp: Date.now(),
            productos: []
        })
    }
}