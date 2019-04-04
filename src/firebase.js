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

export const addOrder = (name, address, post, number, city, deliverTime, orderList) => {
    database.ref(`order`).push({
        name, address, post, number, city, deliverTime, orderList
    })
}

export const addQuestion = (name, email, question) => {
    database.ref(`question`).push({
        name, email, question
    })
}