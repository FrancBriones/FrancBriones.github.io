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
};   


