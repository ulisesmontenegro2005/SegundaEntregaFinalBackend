import mongoose from 'mongoose';
import * as models from "../db/config/models.js";

const URL = 'mongodb+srv://ulisesmontenegro:Dragonci170605@backendpractice.enqgm9k.mongodb.net/Database?retryWrites=true&w=majority';

export class Mongo {
    static products = []

    async getProducts (req, res) {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const products = await models.productos.find();

        mongoose.disconnect();

        res.json({products: products})
    }

    async getOneProduct (code) {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const product = await models.productos.find({codigo: code})

        mongoose.disconnect();

        return product
    }

    async addProductsMongo (producto) {
        while (Mongo.products.find(prod => prod.id == producto.id) != undefined) {
            producto.id++
        };

        Mongo.products.push(producto);

        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const newuser = new models.productos(producto);
        await newuser.save();

        mongoose.disconnect();
    }

    async modifyProductsMongo (productoModificado) {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const modifiedProduct = await models.productos.updateOne({codigo: productoModificado.codigo}, {nombre: productoModificado.nombre, descripcion: productoModificado.descripcion, precio: productoModificado.precio, stock: productoModificado.stock, thumbnail: productoModificado.thumbnail})

        mongoose.disconnect();
    }

    async deleteProductsMongo (req, res) {
        const codigo = req.params.codigo;

        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const deletedProduct = await models.productos.deleteOne({codigo: codigo})

        mongoose.disconnect();

        res.json({estado: 'metodo DELETE realizado correctamente'})
    }
}


