const db = firebase.firestore();
const auth = firebase.auth();
///////conexão com o storage firebase/////////
const storage = firebase.storage();
var storageRef = storage.ref();
const btnboasvindas = document.querySelector('#btnboasvindas');

btnboasvindas.addEventListener('click', ()=>{
   const inputboasvindas = document.querySelector("#inputboasvindas").value;
////////////conexão como banco///////////////
   db.collection('boasvindas').add({
        Msg: inputboasvindas
   })
   .then(function(docRef){
    console.log("document written with ID:", docRef.id)
    alert("Mensagem gravada com suncesso!")
  })
  .catch(function(error){
    console.log("Erro adding document:", error)
  })
})
//////////////puxando dados do banco//////////////////
const saida = document.querySelector('#saida')
db.collection('boasvindas').onSnapshot(function(data){
  saida.innerHTML=''
    data.docs.map(function(doc){
        saida.innerHTML += `<span class=" fw-bold fs-3 colormsg">${doc.data().Msg}</span>`
    }) 
})
//////////apagar mensagem/////////////
const apagarmsg = document.querySelector('#apagarmsg')
apagarmsg.addEventListener('click',()=>{
  const confirmacao = confirm('Realmente deseja apagar essa mensagem?')
  if(confirmacao == true){
  db.collection('boasvindas').onSnapshot(function(val){
    val.docs.map((doc)=>{
      db.collection('boasvindas').doc(doc.id).delete()
    })
  })
}
}) 


