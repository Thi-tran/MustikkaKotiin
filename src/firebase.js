import * as firebase from 'firebase';
import 'firebase/database';
import { EmailTemplate } from './email/template';

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyBgoYwIodHCBaTwsnYmDXLTAQLCfyq_7SU',
    authDomain: 'mustikkakotiin.firebaseapp.com',
    projectId: 'mustikkakotiin',
    storageBucket: 'mustikkakotiin.appspot.com',
    messagingSenderId: '25641049607',
    databaseURL: 'https://mustikkakotiin.eur3.firebaseio.com',
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