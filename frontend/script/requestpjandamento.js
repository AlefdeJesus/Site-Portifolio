const carregandoand = document.getElementById('carregandoand')
var tr2 = tbody2.insertRow()
var td_linha2 = tr2.insertCell()
db.collection('pjandamento').onSnapshot(function(data){
    td_linha2.innerHTML=''
    data.docs.map(function(doc){
       td_linha2.innerHTML +=`<td class="row gx-1 ">
        <div class="border bg-light text-center rounded-pill m-2 p-2 pesofont"><a class="bgdark link m-1" href="${doc.data().LinkAnd}">${doc.data().NomeAnd}</a></div>               
        </td>`
    })
})