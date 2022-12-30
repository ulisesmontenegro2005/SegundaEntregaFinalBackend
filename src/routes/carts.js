import Router from 'express';
import { MemoriaCarts } from '../containers/containerMemoria.js';
import { ArchivosCarts } from '../containers/containerArchivos.js';
import { Firebase } from '../containers/containerFirebase.js'; 

export const cartsRoutes = Router();

// obtener todos los carritos de firestore.

cartsRoutes.get('/', (new Firebase).getCartsFirebase);

// crear carrito mediante memoria, file system y firebase.

cartsRoutes.post('/post/:user', (req, res) => {
    const nombreCarrito = req.params.user;

    (new Firebase).createCartsFirebase(nombreCarrito);

    (new MemoriaCarts).createCartsMemoria(nombreCarrito);

    (new ArchivosCarts).createCartsArchivos(nombreCarrito);

    res.json({estado: 'metodo POST realizado correctamente'});
})

// eliminar carrito mediante firebase.

cartsRoutes.delete('/delete/:user', (req, res) => {
    const nombreCarrito = req.params.user;

    (new Firebase).deleteCartsFirestore(nombreCarrito)

    res.json({estado: 'metodo DELETE realizado correctamente'})
})

// agregar producto a un carrito mediante memoria, file system y firebase.

cartsRoutes.post('/post/:user/productos/:code', (req, res) => {
    const nombreCarrito = req.params.user;
    const codigoProducto = req.params.code;

    (new Firebase).addProductToCart(nombreCarrito, codigoProducto);

    res.json({estado: 'metodo POST realizado correctamente'});
})

// delete producto de carrito mediante firebase.

cartsRoutes.delete('/delete/:user/productos/:code', (req, res) => {
    const nombreCarrito = req.params.user;
    const codigoProducto = req.params.code;

    (new Firebase).deleteProductFromCart(nombreCarrito, codigoProducto)

    res.json({estado: 'metodo DELETE realizado correctamente'});
})





