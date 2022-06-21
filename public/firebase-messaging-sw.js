importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyDCLsrbVemTfG7geA0blN1CltMXHFJtt_0",
  authDomain: "push-notification-app-f486d.firebaseapp.com",
  projectId: "push-notification-app-f486d",
  storageBucket: "push-notification-app-f486d.appspot.com",
  messagingSenderId: "230606958907",
  appId: "1:230606958907:web:e1ffc0bc19203edfd8471e",
  measurementId: "G-2K7HM54HPW"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[service-worker] Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});