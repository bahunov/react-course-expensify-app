import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDEn9kLALXI90UTRXgGLMPs7fpTXrbaaJ4",
    authDomain: "expensify-d9fed.firebaseapp.com",
    databaseURL: "https://expensify-d9fed.firebaseio.com",
    projectId: "expensify-d9fed",
    storageBucket: "expensify-d9fed.appspot.com",
    messagingSenderId: "115953490770",
    appId: "1:115953490770:web:4f0df01d9f6155f713f88b",
    measurementId: "G-RJCXYCQ5V0"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.database().ref().set({
      name: 'Bahaderjon csfsdsdfdsf',
      info: {
          age: 33,
          profession: 'engineer',
          hobby: 'not sure...'
      }
  });

