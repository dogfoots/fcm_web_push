### fcm_web_push

# firebase push message in web app

version on firebase 9.9.4
2022.09.07



#### fcm build step
-----------

1. you can access your site the hosted file `firebase-messaging-sw.js` for your browser's background service.
브라우저 백그라운드 서비스에서 사용할 자바스크립트 소프트웨어 코드 'firebase-messaging-sw.js' 파일이 접속하는 웹사이트에서
접근이 가능해야한다.


2. the url of the file is must accessible like `http://example.host.com/firebase-messaging-sw.js`.
그리고 `http://example.host.com/firebase-messaging-sw.js`와 같은 주소로 파일을 받을 수 있어야 한다.


3. and client side javascript code snippet contents in body tag in the html file will be like the contents in the file named `example.html`.
`example.html`파일에 있는 body 태그 내 내용처럼 구성된 자바스크립트 코드가 클라이언트 브라우저에서 동작하고 있어야한다.


4. background push service(in `firebase-messaging-sw.js` > `messaging.onBackgroundMessage(function(payload) {...});`) acts when the browser program or the browser tab are hidden from your sight.
브라우저 탭이나 브라우저가 뒤로 숨게되었을 때, `firebase-messaging-sw.js` 파일에 정의한 `messaging.onBackgroundMessage(function(payload) {...});` 백그라운드 이벤트가
동작한다.


5. when the browser is foreground, you can receive push notification message in the message handler `onMessage(messaging,(payload) => {...});` at `example.html`
브라우저가 foreground 상태일때는 푸쉬 메시지가 `example.html` 파일에 있는 `onMessage(messaging,(payload) => {...});` 메시지 핸들러에서 확인이 가능하다.


----

the comments of other details are in the specific files.
자세한 내용들은 각 파일들에 주석을 달아놓았다.


added

using the Notification DOM

```javascript

//이걸로 해당 브라우저가 지원하는지 확인가능하고
typeof Notification !== "undefined"


//이걸로 노티 메시지 창 알림 권한받고
Notification.requestPermission().then(function (permission) {
    console.log(permission);
});

//아래 코드로 노티 띄울 수 있다.
let title = "JavaScript Jeep";
let icon = 'https://example.host.com/ppp.png';
let body = "Message to be displayed";
var notification = new Notification('Title', { body, icon });
notification.onclick = () => {
    notification.close();
    window.parent.focus();
}

```

