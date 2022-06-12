let push = require("web-push");

let vapidKeys = {
  publicKey: 'BFWrjD5cfIdG7imaQfV59T-uoVKIYOF7_GV1inlpac1dvZCXG6y88RM0Ix4JOPYRASQCmr1nj1l-gTDinan9ldg',
  privateKey: '2Euaha2RAzNQQ3wZ9j0Thgaqh1dEfRKgW-JC2kt0d9o'
}
push.setVapidDetails("",vapidKeys.publicKey, vapidKeys.privateKey);
let sub = {};
push.sendNotification(sub,"You have a patient ready for transport");