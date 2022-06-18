import firebase from "firebase/app";
import "firebase/messaging";

const VAPID = "BNj9Y1nwOk3kMLXUOCmfNQhYYaiOSI1t2FMFh1p6U5QHZHDRUqEQhLeHl_Q7xWx_PpqP4nzPWz_8-6C1euXsYNQ";

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

const getToken = async setTokenFound => {
  let currentToken = "";
  try {
    currentToken = await messaging.getToken({ vapidKey: VAPID});
    if(currentToken) {
      console.log("setTokenFound true");
    }else {
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
