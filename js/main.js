function show(num){
    var reult =document.getElementById('screen').innerHTML;
    document.getElementById('screen').innerHTML = num + reult;
}

function wipe(){
    document.getElementById('screen') .innerHTML=''; 
}




function calc (){
    var reult =document.getElementById('screen').innerHTML;
    
    if (reult) {
        document.getElementById('screen').innerHTML =eval(reult);
    }
}