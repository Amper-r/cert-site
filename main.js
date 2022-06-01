async function Rsespons(){
    alert("Подтвердите действие в консоли приложения");
    let responsr = await fetch('http://localhost:5235/connection')
    let content = await responsr.json()
    console.log(content)


    let list = document.querySelector('.posts')
    for(let i =0;i<content.length;i++){
     list.insertAdjacentHTML("beforeend",`
     <li class="post">
     <p>"Name": ${content[i].name}</p>
     <p>"Date": ${content[i].date.date_not_after}</p>
     <p>"Date": ${content[i].date.date_not_before}</p>
     <p>"Serial_Num:" ${content[i].serial_number}</p>
     <p>"has_private_key": ${content[i].has_private_key}</p>
     <p>"Private key": ${content[i].private_key == "" ? "-" : content[i].private_key}</p>
     <p>"Publick key": ${content[i].public_key}</p>
     <p>"Thumbrint": ${content[i].thumbprint}</p>
 </li>`)
    }
}
Rsespons()



