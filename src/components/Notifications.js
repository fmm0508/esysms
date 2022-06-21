import React, { useState, useEffect } from "react";
import { getToken } from "../firebase_init";

const Notifications = props => {
  const [isTokenFound, setTokenFound] = useState(false);
  console.log("Token found ", isTokenFound);
  useEffect(() => {
    let data;
    async function tokenFunc() {
      data = await getToken(setTokenFound);
      if(data) {
        alert(data);
        console.log("Token: ", data);
      }
      return data;
    }
    tokenFunc();
  }, [setTokenFound]);
  return <></>;
}
Notifications.prototype = {};
export default Notifications;