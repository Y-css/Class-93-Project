// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyA3XyELOZRN5GCbGc8oXbf55bMUbaUNao0",
  authDomain: "kwitter-a7c35.firebaseapp.com",
  projectId: "kwitter-a7c35",
  storageBucket: "kwitter-a7c35.appspot.com",
  messagingSenderId: "860405536319",
  appId: "1:860405536319:web:ade88615d203916ec84a8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
