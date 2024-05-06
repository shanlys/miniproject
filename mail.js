const firebaseConfig = {
    apiKey: "AIzaSyDtwtreWdhDbfuI6O_8s8hCfjlXL4VIIts",
    authDomain: "synapsed-58679.firebaseapp.com",
    databaseURL: "https://synapsed-58679-default-rtdb.firebaseio.com",
    projectId: "synapsed-58679",
    storageBucket: "synapsed-58679.appspot.com",
    messagingSenderId: "148964527509",
    appId: "1:148964527509:web:110500fba794da18b1ba9c",
    measurementId: "G-5KZG06CKY3"
  };
  firebase.initializeApp(firebaseConfig);

  var synapsedDB =firebase.database().ref('synapsed');
  document.getElementById('synapsed').addEventListener('submit',submitForm);

  function submitForm(e)
  {
    e.preventDefault();
    var email = getElementVal('email');
    var password = getElementVal('password');
    var mobile = getElementVal('mobile');

   saveMessages(email,password,mobile);
   document.getElementById("synapsed").reset();
  }
const saveMessages = (email,password,mobile) => {
    var newsynapsed = synapsedDB.push();
    newsynapsed.set({
        email : email,
        password : password,
        mobile : mobile,
    });
        };
    

  const getElementVal=(id) => {
    return document.getElementById(id).value;
  }