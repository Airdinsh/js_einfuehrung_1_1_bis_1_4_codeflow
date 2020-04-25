function myFunction()
{   var alarm = alert ( "Hallo Welt" );
} 


function myFunction2()
{   var name = prompt( "Gib mir bitte deinen Namen an:" );
/*     window.prompt(name);
 */} 


function myFunction3()
{   var name2 = prompt( "Gib mir bitte deinen Namen an:", "Hier namen eingeben");
} 


function myFunction4()
{   var zustimmen = confirm ( "Stimmen Sie meiner Meinung zu?");
} 


function myFunction5() {
    var b = 5;
    var a = b * 5 -3;
    window.alert(a);
}


let mann = "Robert Wadlow der größte Mann der Welt";
let grosse = "2,72m";

function myFunction6() {
    window.alert(mann + " ist " + grosse + " gross");
}



function myFunction7() {
    visiter_name = prompt("Schreibe dein Name : "); 
    if (visiter_name != null && visiter_name != "" && visiter_name != " ")
    alert("Dein Name ist: " + visiter_name);
    else alert("Leerer Name...!");
}

function myFunction8() {
message = "Drücken Sie Ok, um weiterzumachen.";
x = confirm(message);

if (x == true) {
    window.alert("Du hast auf den Ok-Button geklickt.");
} else {
    window.alert("Sie haben auf die Taste Cancel geklickt.");
}
}






