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

/* meglio mettere let al posto di var all'interno delle function e usare var
 * se si usa in maniera globale che vale per tutte le function*/


function calcolo() {
    var ris ="";
    var voto = document.getElementById("in_voto").value * 1;
    var valutMin = document.getElementById("in_votoMin").value * 1;
    var name = document.getElementById("in_nome").value;
    var familyName = document.getElementById("in_cognome").value;
    var text = name + " " + familyName;
    document.getElementById("sp_name1").innerHTML = text;
    if (voto >= valutMin) {
        ris = "promosso!";
    } else {
        ris = "bocciato!";
    }
    document.getElementById("sp_esito").innerHTML = ris;
}
