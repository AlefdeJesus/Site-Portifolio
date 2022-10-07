
const btnpjconcluido = document.querySelector('#btnpjconcluido')
////MANDANDO DADOS PARA O BANCO DE DADOS//////////////
btnpjconcluido.addEventListener('click',()=>{
    const nomeprojeto = document.querySelector('#nomeprojeto').value
    const linkprojeto = document.querySelector('#linkprojeto').value

    db.collection('pjconcluido').add({
        Nome: nomeprojeto,
        Link: linkprojeto
    })
    .then(function(docRef){
        console.log("document written with ID:", docRef.id)
        alert("Nome e Link gravados com sucesso!")
        
    })
    .catch(function(error){
        console.log("Erro adding document:", error)
    })
   
})

/////////////PEGANDO OS DADOS DO BANCO PARA IMPRIMIR NA TELA//////
var tr = tbody.insertRow()
var td_linha = tr.insertCell()
db.collection('pjconcluido').onSnapshot(function(data){
    td_linha.innerHTML=''
    data.docs.map(function(doc){
        td_linha.innerHTML +=`<td class="container"> 
        <div class='row bg-white p-2 bgcard rounded-3'>
        <div class='col d-flex'>
        <div class=" border bglink text-center rounded-pill m-1"><a class="bgdark fw-bold link m-1" href="${doc.data().Link}">${doc.data().Nome}</a></div>                    
        <button class=" fw-bold btnboasvindas rounded-3" id="${doc.id}">Apagar</button>
        </div>
        </div>
       </td>`
    })
})

//////////EXCLUIR////////////////

db.collection('pjconcluido').onSnapshot(function(val){
    val.docs.map((doc)=>{
        ////PEGA O DOC.ID DEFINIDO COMO ID NO BOTAO DE EXCLUIR
        let apagarlink = document.getElementById(`${doc.id}`)
        apagarlink.addEventListener('click',function(){
            const confdellink = confirm('Realmente deseja apagar esse link?')
            if(confdellink == true){
            db.collection('pjconcluido').doc(doc.id).delete()
        }
        })
    })
})