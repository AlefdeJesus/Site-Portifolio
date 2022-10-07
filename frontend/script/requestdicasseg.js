var tr4 = tbody4.insertRow()
var td_linha4 = tr4.insertCell()

db.collection('dicasseg').onSnapshot(function(data){
	td_linha4.innerHTML = ''
	
	data.docs.map(function(doc){
		td_linha4.innerHTML += `<td class="row ">
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
                                            </div>
                                          </div>
                                      </div>
                                  </div>
                                  </div>
                                </td>`
	})
})