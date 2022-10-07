////pegando a imagem no storage e pegando os daos do firestore///////

let imagemperfil = document.querySelector('#imagemperfil')   
db.collection('linkimg').onSnapshot(function(data){
   imagemperfil.innerHTML=''
    data.docs.map(function(doc){
        imagemperfil.innerHTML += `<img src=${doc.data().linkImg} alt="Foto de Perfil" class="position-absolute  start-50 translate-middle mt-3" id="imgperfil" >`
    })
})