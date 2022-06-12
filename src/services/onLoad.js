// window.addEventListener('load', function() {
//   subscribe();
//   if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js')
//   .then(initialiseState);
//   } else {
//   console.warn('Service workers aren\'t supported in this browser.');
//   }
// });

function initialiseState() {
  if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
    console.warn('Notifications aren\'t supported.');
    return;
  }
  if (Notification.permission === 'denied') {
    console.warn('The user has blocked notifications.');
    return;
  }
  if (!('PushManager' in window)) {
  console.warn('Push messaging isn\'t supported.');
  return;
  }
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
  serviceWorkerRegistration.pushManager.getSubscription()
    .then(function(subscription) {
      if (!subscription) {
        return;
      }
    }).catch(function(err) {
      console.warn('Error during getSubscription()', err);
    });
  });
}

function subscribe() {
  navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
  serviceWorkerRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: 'BFWrjD5cfIdG7imaQfV59T-uoVKIYOF7_GV1inlpac1dvZCXG6y88RM0Ix4JOPYRASQCmr1nj1l-gTDinan9ldg'
    })
    .then(function(subscription) {
      console.log(subscription);
    //return sendSubscriptionToServer(subscription);
    })
    .catch(function(e) {
    if (Notification.permission === 'denied') {
        console.warn('Permission for Notifications was denied');
    } else {
        console.error('Unable to subscribe to push.', e);
    }
    });
  });
}

export { subscribe, initialiseState };