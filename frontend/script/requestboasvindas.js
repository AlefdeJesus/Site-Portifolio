const db = firebase.firestore();
const storage = firebase.storage();
const requestboasvindas = document.querySelector('#requestboasvindas')
db.collection('boasvindas').onSnapshot(function(data){
  requestboasvindas.innerHTML=''
    data.docs.map(function(doc){
        requestboasvindas.innerHTML += `<h2 class=" fw-bold fs-3">${doc.data().Msg}</h2>`
    })
})