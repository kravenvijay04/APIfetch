let select=document.querySelectorAll('#dropbox')
let input=document.getElementById('input')
let button=document.getElementById('btn')
let Result=document.getElementById('result')
fetch('https://api.frankfurter.app/currencies')
.then(resp=>resp.json())
.then(resp=>displaydropbox(resp))




function displaydropbox(resp){
    //Object.entries is used to covert object to array
    let curr=Object.entries(resp);

    for(let i=0;i<curr.length;i++){
        let option = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML +=option;
        select[1].innerHTML +=option;
    }
}
button.addEventListener('click',()=>{
    let curr1=select[0].value
    let curr2=select[1].value
    let inputval=input.value
    if (curr1===curr2){
        alert("invalid input")
    }
    else{
        convert(curr1,curr2,inputval)
    }
});

function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
      Result.value = Object.values(data.rates)[0]
    });
}