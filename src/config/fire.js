import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCh2yZ5UltdpyshAjtY5aAkOxXKycSdJ_Q',
  authDomain: 'stockshow-df361.firebaseapp.com',
  databaseURL: 'https://stockshow-df361.firebaseio.com',
  projectId: 'stockshow-df361',
  storageBucket: 'stockshow-df361.appspot.com',
  messagingSenderId: '150408762285',
  appId: '1:150408762285:web:1bd9374e9f07f773c9c724',
  measurementId: 'G-BQNN09C2GZ',
};

const fire = firebase.initializeApp(config);
export default fire;
