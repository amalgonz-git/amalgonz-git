
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
    window.location.href = "https://amalgonz-git.github.io/";
}, 1500);
}

function post_sonora(){
    var blog = document.getElementById("sonora-ticket").value
    firebase.database().ref("mex6/sonora/"+uuidv4()).set(blog)
    document.getElementById("sonora-ticket").value="" 
    aviso()
};

function post_division(){
  var blog = document.getElementById("division-ticket").value
  firebase.database().ref("mex6/Division/"+uuidv4()).set(blog)
  document.getElementById("division-ticket").value="" 
  aviso()
};

function post_carla(){
  var blog = document.getElementById("carla-ticket").value
  firebase.database().ref("mex6/carla/"+uuidv4()).set(blog)
  document.getElementById("carla-ticket").value="" 
  aviso()
};

function post_bukis(){
  var blog = document.getElementById("bukis-ticket").value
  firebase.database().ref("mex6/bukis/"+uuidv4()).set(blog)
  document.getElementById("bukis-ticket").value="" 
  aviso()
};

function post_2000(){
  var blog = document.getElementById("2000-ticket").value
  firebase.database().ref("mex6/2000/"+uuidv4()).set(blog)
  document.getElementById("2000-ticket").value="" 
  aviso()
};

function post_bad(){
  var blog = document.getElementById("bad-ticket").value
  firebase.database().ref("mex6/bad/"+uuidv4()).set(blog)
  document.getElementById("bad-ticket").value="" 
  aviso()
};