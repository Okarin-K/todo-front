// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBRi5EdYi7ScCEgY5y806icv3ndJtEi2c8',
    authDomain: 'todo-kun-741ac.firebaseapp.com',
    projectId: 'todo-kun-741ac',
    storageBucket: 'todo-kun-741ac.appspot.com',
    messagingSenderId: '440964760385',
    appId: '1:440964760385:web:673920f340bef0c329d7c0',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
