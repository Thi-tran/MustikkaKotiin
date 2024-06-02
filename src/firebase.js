import * as firebase from 'firebase';
import 'firebase/database';
import { EmailTemplate } from './email/template';

// Initialize Firebase
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
};
firebase.initializeApp(config);

const database = firebase.database();

export const addOrder = (delivery, name, address, post, number, email, city, deliverTimeObject, pickupTimeObject, orderList) => {
    let deliveryTime = '';
    let pickupTime = '';
    if (delivery === "home") {
        for (let [key, value] of Object.entries(deliverTimeObject)) {
            if (value) {
                deliveryTime += key + ' ';
            }
        }
    }
    if (delivery === "pickup") {
        for (let [key, value] of Object.entries(pickupTimeObject)) {
            if (value) {
                pickupTime += key + ' ';
            }
        }
    }
    const orderTime = new Date().toDateString();
    const orderNumber = Math.floor(Math.random() * 1000000000);
		const db = firebase.firestore();
    db.collection('order').add({
        delivery, name, address, post, number, email, city, deliveryTime, pickupTime, orderList, orderTime, orderNumber
    })

    const deliveryAddress = `${address} ${post} ${city}`;

    db.collection('mail').add({
        to: email,
        message: {
            subject: `🫐 Tilausvahvistus ${orderNumber}`,
            html: EmailTemplate(orderList, delivery, orderNumber, deliveryAddress),
        },
    })
}

export const addQuestion = (name, email, question) => {
    database.ref(`question`).push({
        name, email, question
    })
}