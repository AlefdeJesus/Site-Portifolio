const btndicasseg = document.querySelector('#btndicasseg')

////MANDANDO DADOS PARA O BANCO DE DADOS//////////////
btndicasseg.addEventListener('click',()=>{
	const nomedica = document.querySelector('#nomedica').value
	const textarea1 = document.querySelector('#floatingTextarea1').value
	const textarea2 = document.querySelector('#floatingTextarea2').value
	const titulodica = document.querySelector('#titulodica').value
	
	db.collection('dicasseg').add({
		NomeDica: nomedica,
		TituloDica: titulodica,
		Text1: textarea1,
		Text2:textarea2
		
	})
	.then(function(docRef){
		console.log("document written with ID:", docRef.id)
		alert("Dados gravados com sucesso!")
	})
	.catch(function(error){
		console.log("Erro adding Document:",error)
	})
	
})

/////////////PEGANDO OS DADOS DO BANCO PARA IMPRIMIR NA TELA//////

var tr3 = tbody3.insertRow()
//criar linhas
var td_nome = tr3.insertCell()

db.collection('dicasseg').onSnapshot(function(data){
	td_nome.innerHTML = ''
	
	data.docs.map(function(doc){
		td_nome.innerHTML += `<td class="row ">
                                      <!-- Button trigger modal -->
                                <button type="button" class="btn btn-primary m-1 colorbtn" data-bs-toggle="modal" data-bs-target="#exampleModal${doc.id}">${doc.data().NomeDica}</button>
                                  <!-- Modal -->
                                  <div class="modal fade" id="exampleModal${doc.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                      <div class="modal-dialog">
                                          <div class="modal-content">
                                            <div class="modal-header">
                                              <h5 class="modal-title" id="exampleModalLabel">${doc.data().TituloDica}</h5>
                                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body text-start">
                                              ${doc.data().Text1}<br>${doc.data().Text2} 
                                            </div>
                                            <div class="modal-footer">
                                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
											                         <button type="button" class="btn btn-primary btnexcluir" id="${doc.id}">Apagar esse poste</button>
                                            </div>
                                          </div>
                                      </div>
									                  </div>
								                  </div>
                                </td>`
	})
})

//////////EXCLUIR////////////////

db.collection('dicasseg').onSnapshot(function(val){
    val.docs.map((doc)=>{
        ////PEGA O DOC.ID DEFINIDO COMO ID NO BOTAO DE EXCLUIR
        let delpost = document.getElementById(`${doc.id}`)
        delpost.addEventListener('click',function(){
            const confdelpost = confirm('Realmente deseja apagar esse post?')
            if(confdelpost == true){
            db.collection('dicasseg').doc(doc.id).delete()
        }
		
        })
    })
})
