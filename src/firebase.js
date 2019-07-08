import * as firebase from 'firebase';
  
// Initialize Firebase
const config = {
apiKey: "AIzaSyD4KaAxgIbOmqSBInYAXTGNuvSwtU7Fh5Y",
authDomain: "mustikkakotiin-8272c.firebaseapp.com",
databaseURL: "https://mustikkakotiin-8272c.firebaseio.com",
projectId: "mustikkakotiin-8272c",
storageBucket: "mustikkakotiin-8272c.appspot.com",
messagingSenderId: "169771178793"
};
firebase.initializeApp(config);

const database = firebase.database();

export const addOrder = (delivery, name, address, post, number, email, city, deliverTimeObject, pickupTimeObject, orderList) => {

    let deliveryTime = '';
    let pickupTime = '';
    console.log(deliverTimeObject);
    console.log(pickupTimeObject);
    if (delivery === "home"){
        for (let [key, value] of Object.entries(deliverTimeObject)) {
            if (value) {
                deliveryTime += key + ' ';
            }
        }
        console.log(deliveryTime)
    }
    if (delivery === "pickup") {
        for (let [key, value] of Object.entries(pickupTimeObject)) {
            if (value) {
                pickupTime += key + ' ';
            }
        }
        console.log(pickupTime)
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