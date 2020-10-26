function schleifenTest(){
    var ausgabebereich = document.getElementById('ausgabe');
    for (var i = 0; i<10; i++){
        ausgabebereich.innerHTML += "Schleifentest: " + i +"<br>";
    }
}

// Zahlen Raten

function zahlenRaten(){
    var zahl = Math.round(Math.random()*100 +0.5);
    var fehler = 0;
    var fertig = false;

    while (!fertig){
        eingabe = prompt("Bitte erraten Sie die Zahl:","");
        if (!eingabe){
            fertig = true; //Abbruch durch Anwender
        } else{
            if (eingabe == zahl){
                alert('Gewonnen!');
                alert('Es wurden ' + fehler + " gemacht")
                fertig = true; //Zahl wurde erraten
            } else{
                fehler++;
                if (eingabe < zahl){
                    alert('Geratene Zahl zu klein!\nGemachte Fehler: ' + fehler);
                } else {
                    alert('Geratene Zahl zu groß!\nGemachte Fehler: ' + fehler);
                }
            }
        }
    }
    var ausgabe = document.getElementById('zahlenRatenAusgabe');
    ausgabe.innerHTML = "Spielende!";
}
