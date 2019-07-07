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

export const addOrder = (delivery, name, address, post, number, email, city, deliverTime, pickupTime, orderList) => {
    database.ref(`order`).push({
        delivery, name, address, post, number, email, city, deliverTime, pickupTime, orderList
    })
}

export const addQuestion = (name, email, question) => {
    database.ref(`question`).push({
        name, email, question
    })
}