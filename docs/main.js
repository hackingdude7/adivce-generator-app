const button=document.querySelector(".dice")
const id=document.querySelector(".id")
const text=document.querySelector(".text")
button.addEventListener("click",()=>{
fetch("https://api.adviceslip.com/advice",{method: 'GET'})
        .then(response=>response.json())
        .then(json=>{
                id.innerHTML=json.slip.id
                text.innerHTML="\""+json.slip.advice+"\""
            })
        })

