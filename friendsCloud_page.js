var firebaseConfig = {
    apiKey: "AIzaSyBgmq6y2miten9yX7DzAevIkerPwYKiSY8",
    authDomain: "letschat-a8385.firebaseapp.com",
    databaseURL: "https://letschat-a8385-default-rtdb.firebaseio.com",
    projectId: "letschat-a8385",
    storageBucket: "letschat-a8385.appspot.com",
    messagingSenderId: "225615674821",
    appId: "1:225615674821:web:1b2aea02bbe71122849fac",
    measurementId: "G-Q387TJ8CLW"
  };
  
  firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
