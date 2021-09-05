"use strict";
window.onload = function() {
    document.getElementById("extraer").onclick = function() {
    let apenom=document.getElementById("nombres").value;
    let paterno=apenom.split(' ');
    if( apenom == null || apenom.length == 0 || /^\s+$/.test(apenom) ) {
        return false;
    }
    else{
        //Extrayendo apellido paterno
        document.getElementById("paterno").value=paterno[0];
        
        //Extrayendo apellido materno
        document.getElementById("materno").value=paterno[1];
        
        //Extrayendo nombres completos
        if(paterno[3]==null ){
            document.getElementById("names").value=paterno[2];
        }
        else{
            document.getElementById("names").value=paterno[2]+" "+paterno[3];
        }

        //Extrayendo lomgitud del apellido completo
        document.getElementById("longitud").value=(paterno[0]+paterno[1]).length +" caracteres";
    
    }
    //Obteniendo la edad de nacimiento
    let año = new Date(document.getElementById("fecha").value);
    if( isNaN(año) ) {
        return false;
    }
    else{
        let fecha = new Date();
        let edad = fecha.getFullYear()-año.getFullYear();
        if( (fecha.getMonth()) >  (año.getMonth())){
            edad++;
        }
        else{
            edad--;
        }
        document.getElementById("edad").value=edad+" años";
    }

        //Obteniendo el nombre del mes de nacimiento
        let month = año.toLocaleString('default', { month: 'long' });
        document.getElementById("mes").value=month;
    }; 

    //Cambiando los colores de los elementos
    let band=1;
    document.getElementById("colorear").onclick = function() {
        let otro =document.getElementsByClassName("color");
        let otro2 =document.getElementsByClassName("color2");
        let i;
        if(band){
            //De rojo a azul
            document.getElementById("colorear").style.background="red";
            for (i = 0; i < otro.length; i++) {
            otro[i].style.backgroundColor = "red";}
            for (i = 0; i < otro2.length; i++) {
                otro2[i].style.backgroundColor = "blue";}
            band=0;
        }else{
            //De azul a rojo
            document.getElementById("colorear").style.background="blue";
            for (i = 0; i < otro.length; i++) {
                otro[i].style.backgroundColor = "blue";}
            for (i = 0; i < otro2.length; i++) {
                    otro2[i].style.backgroundColor = "red";}  
            band=1;
        }
    };
};   


