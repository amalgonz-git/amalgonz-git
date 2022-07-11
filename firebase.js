
var firebaseConfig = {
	apiKey: "AIzaSyAUURAIvtgGFPF1fzGhGJc23ldDSD-I8vg",  
	authDomain: "rifa-amzn.firebaseapp.com",
	databaseURL: "https://rifa-amzn-default-rtdb.firebaseio.com",
	projectId: "rifa-amzn",
	storageBucket: "rifa-amzn.appspot.com",
	messagingSenderId: "36339791681",
	appId: "1:36339791681:web:5a3af7337054fe329793c0"
  };
// Initialize Firebase
var firebase;
firebase.initializeApp(firebaseConfig);

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
  var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
  return v.toString(16);
  });
  }


function aviso() {
  setTimeout(function(){
    alert("La rifa esta limitada a un registro, mas intentos de registro seran motivo de descalificacion ");
    window.location.href = "https://zexceed7.github.io/";
}, 1500);
}

function post_daddy(){
    var blog = document.getElementById("daddy-ticket").value
    firebase.database().ref("OV7/"+uuidv4()).set(blog)
    document.getElementById("daddy-ticket").value="" 
    aviso()
};

function post_maluma(){
  var blog = document.getElementById("maluma-ticket").value
  firebase.database().ref("DLD/"+uuidv4()).set(blog)
  document.getElementById("maluma-ticket").value="" 
  aviso()
};

function post_fobia(){
  var blog = document.getElementById("fobia-ticket").value
  firebase.database().ref("90's Pop Tour/"+uuidv4()).set(blog)
  document.getElementById("fobia-ticket").value="" 
  aviso()
};