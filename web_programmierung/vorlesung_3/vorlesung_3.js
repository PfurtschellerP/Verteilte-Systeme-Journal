
function addieren(){
    var summe = 0;
    for (var i = 0; i < addieren.arguments.length; i++){
        summe += addieren.arguments[i];
    }
    alert(summe);
}

// globale Variable
var x = 0;

function meineFunktion(){
    // lokale Variable
    var y = 1;
    // weitere globale Variable
    z = 5;
}