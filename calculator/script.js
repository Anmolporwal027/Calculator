
const equal = document.querySelector(".equal");

equal.addEventListener('click',(e)=>{
    e.preventDefault();
    const inputs = document.querySelector('#display');
    console.log(inputs.value);
    
    if(inputs.value === ''){
        alert("Please Enter numbers for calculation");
    }
    else{
        inputs.value = eval(inputs.value);
    }
})
