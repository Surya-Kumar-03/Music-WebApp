// Import the functions you need from the SDKs you need
import {getApp, getApps, initializeApp} from 'firebase/app';
import {getStorage} from 'firebase/storage';

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBlD2RkD2rMcUCtuOcS0IiyZ7wz3rNfQPw',
	authDomain: 'music-app-724a7.firebaseapp.com',
	projectId: 'music-app-724a7',
	storageBucket: 'music-app-724a7.appspot.com',
	messagingSenderId: '1005863015985',
	appId: '1:1005863015985:web:821c6356e4ef554c222710',
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);

export {app, storage};
