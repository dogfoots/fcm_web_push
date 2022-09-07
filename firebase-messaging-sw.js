//you must not code in korean or comment! browser will confuse charsets and return error. only use english for safe

// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/9.9.4/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.4/firebase-messaging-compat.js');

firebase.initializeApp( {
  /*
  you must copy and paste your firebase config 
  
  the location of your firebase config : firebase console -> your project settings -> common -> scrolldown page 
  -> sdk setting and configure -> CDN radio type -> const firebaseConfig attributes and values in javascript code snippet
  
  */
  });

const messaging = firebase.messaging();


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically 
// and you should use data messages for custom notifications.
// For more info see: 
// https://firebase.google.com/docs/cloud-messaging/concept-options
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  /*
  showing the notification card of the Notification DOM
  self.registration.showNotification(notificationTitle,
    notificationOptions);
    */
});
