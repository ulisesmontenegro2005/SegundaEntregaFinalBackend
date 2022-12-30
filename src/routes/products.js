import Router from 'express';
import { Memoria } from '../containers/containerMemoria.js';
import { Archivos } from '../containers/containerArchivos.js';
import { Mongo } from '../containers/containerMongo.js';

export const productsRoutes = Router();

// obtener todos los productos de mongo atlas.

productsRoutes.get('/', (new Mongo).getProducts);

// agregar producto mediante memoria, file system y mongo atlas.

const {pathname: form} = new URL('./../../public/index.html', import.meta.url)

productsRoutes.get('/post', (req, res) => {res.sendFile(form)});
productsRoutes.post('/post', (req, res) => {
    if (!req.body) return res.json({error: 'no se obtuvieron los datos'});

    (new Memoria).addProductsMemoria({
        ...req.body,
        id: Memoria.products.length + 1
    });

    (new Archivos).addProductsArchivos({
        ...req.body,
        id: Archivos.products.length + 1
    });

    (new Mongo).addProductsMongo({
        ...req.body,
    })

    res.json({estado: 'metodo POST realizado correctamente'})
});

// modificar producto mediante codigo en mongo atlas.

productsRoutes.put('/put', (req, res) => {
    if (!req.body) return res.json({error: 'no se obtuvieron los datos'});

    (new Mongo).modifyProductsMongo({
        ...req.body
    })

    res.json({estado: 'metodo PUT realizado correctamente'});
});

// eliminar un producto mediante codigo en mongo atlas.

productsRoutes.delete('/delete/:codigo', (new Mongo).deleteProductsMongo);
