
  let email = document.getElementById('exampleInputEmail1')
  let senha = document.getElementById('exampleInputPassword1')
  let btnEntrar = document.querySelector('#submit')
  btnEntrar.addEventListener('click',function(e){
 e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email.value, senha.value)
    .then((resultado) => {
      // Signed in
      var user = resultado.user;
      var uid = user.uid;
      window.location.replace('./painel/paineldecontrole.html')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    })
  })