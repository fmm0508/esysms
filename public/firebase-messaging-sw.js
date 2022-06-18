importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyByRRMhZMb7olnddMDpX4OwS89ct1WiD8M",
  authDomain: "esysms.firebaseapp.com",
  projectId: "esysms",
  storageBucket: "esysms.appspot.com",
  messagingSenderId: "958045728579",
  appId: "1:958045728579:web:f6e6a85390c7af6ae189f6",
  measurementId: "G-SS01P86MTJ"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[service-worker] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});