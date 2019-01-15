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
