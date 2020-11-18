import firebase from 'firebase/app';
import 'firebase/database';
import moment from 'moment';

const firebaseConfig = {
    apiKey: "AIzaSyBN98kAxzvpTyOuarCcA9fBElIPE_AJ--Q",
    authDomain: "budget-app-9e305.firebaseapp.com",
    databaseURL: "https://budget-app-9e305.firebaseio.com",
    projectId: "budget-app-9e305",
    storageBucket: "budget-app-9e305.appspot.com",
    messagingSenderId: "837310059980",
    appId: "1:837310059980:web:0e6bb13de2c1b779863969"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// // database.ref().set({
// //     name: 'Gabriela Leoniec',
// //     age: 25,
// //     isSingle: false,
// //     location: {
// //         city: 'Gdańsk',
// //         country: 'Poland'
// //     }
// // }).then(() => {
// //     console.log('Data saved to the database successfully')
// // }, (e) => {
// //     console.log('Something went wrong', e);
// // });

// // database.ref().on('value', (snapshot)=>{
// //     const data = snapshot.val();
// //     console.log(`${data.name} is a ${data.job}`)
// // }, (e) => {
// //     console.log('Some error occurred', e)
// // });

// // setTimeout(() => {
// //     database.ref().update({
// //         job: 'Software developer'
// //     });
// // }, 3500)

// // database.ref().remove().then(() => {
// //     console.log('Everything is ok');
// // }).catch((e) => {
// //     console.log('Some error on removing', e)
// // });

// // database.ref('expenses').push({
// //     description: 'New glasses',
// //     note: 'I lost the old ones',
// //     amount: 1000,
// //     createdAt: moment().add(3, 'days').valueOf()
// // });

// // database.ref('expenses').push({
// //     description: "Hugo's training",
// //     note:'',
// //     amount: 60,
// //     createdAt: moment().subtract(1, 'day').valueOf()
// // });

// // database.ref('expenses').push({
// //     description: 'Food',
// //     note: '',
// //     amount: 120,
// //     createdAt: moment().subtract(1, 'day').valueOf()
// // });

// const expenses = [];

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })

//         })
//         console.log(expenses);
//     })
//     .catch((e) => {
//         console.log('Error:', e)
//     });

// database.ref('expenses').on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error:', e)
// });

// // database.ref('expenses').push({
// //     description: 'Black shoes',
// //     note: '',
// //     amount: 32900,
// //     cratedAt: moment().add(14, 'days').valueOf()
// // });

// setTimeout(() => {
//     database.ref(`expenses/${expenses[2].id}`).update({
//         amount: 12000
//     });
// }, 1000)

// // Child updated
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log('Added', snapshot.val())
// });

// // Child updated
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log('Changed', snapshot.val())
// });

// // Child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log('Removed', snapshot.val())
// });

export {firebase, database as default};