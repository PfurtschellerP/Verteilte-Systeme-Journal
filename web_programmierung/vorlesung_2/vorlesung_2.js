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
                alert('Es wurden ' + fehler + " Fehler gemacht")
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

function dreieck(){
    var dreieckAusgabe = document.getElementById('dreieckAusgabe');
    var anzahl = prompt("Bitte Anzahl angeben:","");

    for(var i = 1; i <= anzahl; i++){
        for(var j = 1; j <= i; j++){
            console.log("*");
            dreieckAusgabe.innerHTML += "*";
        }
        dreieckAusgabe.innerHTML += "<br>";
    }
}

function einMalEins(){
    var einMalEinsAusgabe = document.getElementById('einMalEinsAusgabe');
    // Tabelle erschaffen
    var tabelle = einMalEinsAusgabe.appendChild(document.createElement("table"));

    for(var i = 1; i <= 10; i++){
        // Reihe hinzufügen
        var reihe = tabelle.appendChild(document.createElement("tr"));
        for(var j = 1; j <= 10; j++){
            // Spalte hinzufügen
            spalte = reihe.appendChild(document.createElement("td"))
            spalte.innerHTML = i*j;
        }
    }
}