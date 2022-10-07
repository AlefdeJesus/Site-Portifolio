const btnpjandamento = document.querySelector('#btnpjandamento')
///////MANDANDO DADOS PARA O BANCO/////////////////////
btnpjandamento.addEventListener('click',()=>{
    const andamentonome = document.querySelector('#andamentonome').value
    const andamentolink = document.querySelector('#andamentolink').value
   
    db.collection('pjandamento').add({
        NomeAnd: andamentonome,
        LinkAnd: andamentolink
    })
    .then(function(docRef){
        console.log("document written with ID:", docRef.id)
        alert("Nome e Link gravados com sucesso!")
    })
    .catch(function(error){
        console.log("Erro adding document:",error)
    })
})

/////////////PEGANDO OS DADOS DO BANCO PARA IMPRIMIR NA TELA//////
var tr1 = tbody1.insertRow()
var td_linha1 = tr1.insertCell()
db.collection('pjandamento').onSnapshot(function(data){
    td_linha1.innerHTML=''
    data.docs.map(function(doc){
        td_linha1.innerHTML +=`<td class="container"> 
        <div class='row bg-white p-2 bgcard rounded-3'>
        <div class='col d-flex'>
        <div class="border bglink text-center rounded-pill m-1"><a class="bgdark fw-bold link m-1" href="${doc.data().LinkAnd}">${doc.data().NomeAnd}</a></div>                    
        <button class="fw-bold btnboasvindas rounded-3" id="${doc.id}">Apagar</button>
        </div>
        </div>
       </td>`
    })
})

//////////EXCLUIR////////////////

db.collection('pjandamento').onSnapshot(function(val){
    val.docs.map((doc)=>{
        ////PEGA O DOC.ID DEFINIDO COMO ID NO BOTAO DE EXCLUIR
        let apagarlink1 = document.getElementById(`${doc.id}`)
        apagarlink1.addEventListener('click',function(){
            const confdellinkand = confirm('Realmente deseja apagar esse link?')
            if(confdellinkand == true){
            db.collection('pjandamento').doc(doc.id).delete()
        }
        })
    })
})