import mongoose from 'mongoose';

const productsCollection = 'productos';

const productsSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: String,
    stock: String,
    thumnail: String,
    codigo: String
})

export const productos = mongoose.model(productsCollection, productsSchema);

