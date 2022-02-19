const button=document.querySelector(".dice")
const advice_id=document.querySelector(".id")
const text=document.querySelector(".text")

const getrandom=()=>{
    return new Promise((resolve)=>{
        fetch("https://api.adviceslip.com/advice",{method: 'GET'})
        .then(response=>response.json())
        .then(json=>resolve(json))
        .catch(() => {
            resolve({
              slip: {
                id: -1,
                advice: 'failed to fetch advice'
              }
            })
        });
    });
}
const updateadvice= async()=>{
    const newadvice=await getrandom();
    const {id,advice}=newadvice.slip;
    advice_id.innerHTML=id;
    text.innerHTML=advice
}

button.addEventListener("click",async ()=>{
await updateadvice()
// console.log("Hello")
})