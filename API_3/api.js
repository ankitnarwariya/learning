let fact = document.querySelector('#fact')

// let data = fetch('https://catfact.ninja/fact');
// data.then((res) =>{
//     //console.log(res.json())
//     return res.json()
// }).then((facts) => {
//     console.log(facts.fact);
//     fact.innerHTML = facts.fact;
// }).catch((err) =>{
//     console.log("Error:" , err)
// })


//Async Await

async function callApi(){
    try{
        let res = await fetch('https://catfact.ninja/fact');
    let data = await res.json()
    fact.innerHTML = data.fact;
    }catch(err){
        console.log(err);
    }
}

callApi();