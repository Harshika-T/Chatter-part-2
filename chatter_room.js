
const firebaseConfig = {
      apiKey: "AIzaSyAoZLqjmVJBlxNOhB6QQ4ZVuSrKpnmpUmE",
      authDomain: "chatter-app-53c87.firebaseapp.com",
      databaseURL: "https://chatter-app-53c87-default-rtdb.firebaseio.com",
      projectId: "chatter-app-53c87",
      storageBucket: "chatter-app-53c87.appspot.com",
      messagingSenderId: "472516358107",
      appId: "1:472516358107:web:d925d6a2392db1bce401fe",
      measurementId: "G-ZQC2S1B98W"
    };
    
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
