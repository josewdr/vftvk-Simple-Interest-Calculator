//Creamos una funcion que enlace la etiqueta <span> con el imput type "range", de nuestro html
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval; //El atributo .innetText, permite reescribir el valor actual del "rate", en la etiqueta <span>
}


//La siguiente funcion, hace los calculos que permite que las personas sepan cuanto recibirán si depositan "x" cantidad de dinero y lo mantienen en el banco durante "x" años por "x" tasa de interés.
function compute()
{
    //Hacemos llamado a cada uno de los "input" de nuestro html
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = document.getElementById("rate").value;
    var year = document.getElementById("years").value;
    
    //Hacemos la operacion que nos permite saber cuál será el monto que recibirá una persona que deposita su dinero en el banco.
    var amount = principal * year * rate/100
     
    //Validamos que el número ingresado no sea ni negativo ni cero 
    if(principal <= 0){
        alert( "Enter a positive number")
        principal.focus(); //En caso de que esta esta parte de la función se ejecu, se seleccionar´
        return false;
    }else{
        //En caso se que el número sea entero, se escribe la stiqueta <span> id = "result" el siguiente información.
        document.getElementById("result").innerHTML = "If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
    }
}
