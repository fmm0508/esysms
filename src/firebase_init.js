import firebase from "firebase/app";
import "firebase/messaging";

const VAPID = "BP2LUcBRBpCPX8OkoAK0n-hF_kVcI8VK7Pv5nT2BVqno9CRmA--8A342WfXX5pxYsOzKOkRSZQh3uJinRztFpd8";

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

const getToken = async setTokenFound => {
  let currentToken = "";
  try {
    currentToken = await messaging.getToken({ vapidKey:
       VAPID});
    if(currentToken) {
      setTokenFound(true);
      console.log("setTokenFound true");
    }else {
      setTokenFound(false);
      console.log("setTokenFound false");
    }
  }catch(err) {
    console.log("Error occurred while retrieving a token: ", err);
  }
  return currentToken;
}

const onMessageListener = () => {
  return new Promise(resolve => {
    messaging.onMessage(payload => {
      resolve(payload);
    });
  });
}

export { onMessageListener, getToken };
