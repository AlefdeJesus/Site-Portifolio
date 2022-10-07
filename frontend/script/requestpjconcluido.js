var tr = tbody.insertRow()
var td_linha = tr.insertCell()
db.collection('pjconcluido').onSnapshot(function(data){
    td_linha.innerHTML=''
    data.docs.map(function(doc){
        td_linha.innerHTML +=`<td class="row gx-1 "> 
        <div class="border bg-light text-center rounded-pill m-2 p-2 pesofont"><a class="bgdark link m-1" href="${doc.data().Link}">${doc.data().Nome}</a></div>                    
       </td>`
    })
})