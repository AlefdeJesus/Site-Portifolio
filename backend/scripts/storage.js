/////pegando o valor do input file////////
const input = document.querySelector('#inputGroupFile01')
//////ao escolher o arquivo automaticamente dispara o evento para salvar//////
input.addEventListener('change', function(e){
    ///linha de codigo abaixo pega 1 arquivo selecionado///////
   let file = e.target.files[0];
   let nome = file.name
    upload = storage.ref(`${ file.name}`).put( file)
    /////código para a barra de progresso/////
     upload.on("state_changed", function(snapshot){
        let progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 1;
        document.querySelector("progress").value = progress;
     },function(error){
          alert("Erro no Upload!")
     },function(){
      alert("Upload realisado com sucesso!")
      upload.snapshot.ref.getDownloadURL().then(url=>{
////////salvando o link da imagem no banco firestore//////
        db.collection('linkimg').add({
            linkImg: url,
            nomeImg: nome
       })
       .then(function(docRef){
        console.log("document written with ID:", docRef.id)
        alert("Link e nome da imagem gravado com sucesso no banco!")
      })
      .catch(function(error){
        console.log("Erro adding document:", error)
      })
    })
  })
})
////pegando a imagem no storage///////
//////////////puxando dados do banco//////////////////
let imgperfil = document.querySelector('#imgperfil')   
db.collection('linkimg').onSnapshot(function(data){
  imgperfil.innerHTML=''
    data.docs.map(function(doc){
        imgperfil.innerHTML += `<img src=${doc.data().linkImg} alt="Foto de Perfil"  id="imglink" > <br>
        <button class="p-1 fw-bold btnboasvindas rounded-3" id="${doc.id}">Apagar a Imagem</button>`
    })
})
///////apagando a imagem do storage usando o nome que é salvo no banco quando adiciona a
/////////////////imagem apagando o nome e link da imagem do banco 
    db.collection('linkimg').onSnapshot(function(val){
        val.docs.map((doc)=>{
            let apagarImagem = document.getElementById(`${doc.id}`)
            apagarImagem.addEventListener('click',function(){
            const confdelimage = confirm('Realmente deseja apagar a imagem de perfil?')
            if(confdelimage == true){
              db.collection('linkimg').doc(doc.id).delete()
                 storageRef.child(`${doc.data().nomeImg}`).delete();
            }
        })
      })
    })
 
   
  
  
   
