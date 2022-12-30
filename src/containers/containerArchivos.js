import fs from 'fs'

const {pathname: file} = new URL('./../db/fs/products.txt', import.meta.url)

export class Archivos {
    static products = []

    addProductsArchivos (producto) {
        while (Archivos.products.find(prod => prod.id == producto.id) != undefined) {
            producto.id++
        }

        Archivos.products.push(producto)

        fs.promises.writeFile(file, JSON.stringify(Archivos.products));
    }
}

const {pathname: fileCarts} = new URL('./../db/fs/carts.txt', import.meta.url)

export class ArchivosCarts {
    static carts = []

    createCartsArchivos (user) {
        ArchivosCarts.carts.push({
            usuario: user,
            timestamp: Date.now(),
            productos: []
        })

        fs.promises.writeFile(fileCarts, JSON.stringify(ArchivosCarts.carts));
    }


}