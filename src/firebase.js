import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyB1e5MwZmL8bn97D2EKcxSDPuSLJ-FhHYA",
    authDomain: "mustikkakotiin-4eee0.firebaseapp.com",
    databaseURL: "https://mustikkakotiin-4eee0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mustikkakotiin-4eee0",
    storageBucket: "mustikkakotiin-4eee0.appspot.com",
    messagingSenderId: "767754927150"
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

    database.ref(`order`).push({
        delivery, name, address, post, number, email, city, deliveryTime, pickupTime, orderList
    })
}

export const addQuestion = (name, email, question) => {
    database.ref(`question`).push({
        name, email, question
    })
}