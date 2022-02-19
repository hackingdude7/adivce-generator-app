const button=document.querySelector(".dice")
const advice_id=document.querySelector(".id")
const text=document.querySelector(".text")

const delay = (ms) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, ms)
    })
  }

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
await delay()
await updateadvice()
})