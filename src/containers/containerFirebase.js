import admin from "firebase-admin"
import fs from 'fs'
import { productos } from "../db/config/models.js"
import { Mongo } from "./containerMongo.js"
import { FieldValue } from 'firebase-admin/firestore'


const {pathname: file} = new URL("./../db/config/practicabackendcoderhouse-firebase-adminsdk-18rhl-36904a7fb6.json", import.meta.url)

const serviceAccount = JSON.parse(fs.readFileSync(file))

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const query = db.collection('carritos');

export class Firebase {

    async getCartsFirebase (req, res) {
        let carts = []

        const allCarts = await query.get();

        allCarts.forEach(el => {
            carts.push(el.data())
        })

        res.json({carts: carts})
    }

    async createCartsFirebase (user) {
        db.collection("carritos").doc(user).set({
            usuario: user,
            timestamp: Date.now(),
            productos: []
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    async deleteCartsFirestore (user) {
        db.collection("carritos").doc(user).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    async addProductToCart (cartName, productCode) {
        let product = await (new Mongo).getOneProduct(productCode);
        product = product[0]

        let json = JSON.parse(JSON.stringify(product));

        let doc = db.collection("carritos").doc(cartName);

        doc.update({
            productos: FieldValue.arrayUnion(json)
        });
    }

    async deleteProductFromCart (cartName, productCode) {
        let product = await (new Mongo).getOneProduct(productCode);
        product = product[0]

        let json = JSON.parse(JSON.stringify(product));

        let doc = db.collection("carritos").doc(cartName);

        doc.update({
            productos: FieldValue.arrayRemove(json)
        });
    }
}