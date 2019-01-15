/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function login() {
    var name = document.getElementById("in_nome").value;
    var familyName = document.getElementById("in_cognome").value;
    var text = name + " " + familyName;
    document.getElementById("sp_name").innerHTML = text;
}

function calcolo() {
    var voto = document.getElementById("in_voto").value * 1;
    var valutMin = document.getElementById("in_votoMin").value * 1;
    var name = document.getElementById("in_nome").value;
    var familyName = document.getElementById("in_cognome").value;
    var text = name + " " + familyName;
    document.getElementById("sp_name1").innerHTML = maiusc(text);
    if (voto >= valutMin) {
        document.getElementById("sp_esito").innerHTML = maiusc("promosso!");
    } else {
        document.getElementById("sp_esito").innerHTML = maiusc("bocciato!");        
    }   
}

function maiusc(testo){
    let ris ="";
    ris = testo.toUpperCase();   
    return ris;    
}