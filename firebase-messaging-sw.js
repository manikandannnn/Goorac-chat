// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.1/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyALTVtHfBQfyG76tR7azNqoOLG2pggi8Po",
    authDomain: "chatapp-254e2.firebaseapp.com",
    databaseURL: "https://chatapp-254e2-default-rtdb.firebaseio.com",
    projectId: "chatapp-254e2",
    storageBucket: "chatapp-254e2.appspot.com",
    messagingSenderId: "892687806116",
    appId: "1:892687806116:web:3f4029510eb7952e6b8031",
    measurementId: "G-Q6MJLNC5GQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'You have new message';
    const notificationOptions = {
        body: payload.data.message,
        icon: payload.data.icon
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});



