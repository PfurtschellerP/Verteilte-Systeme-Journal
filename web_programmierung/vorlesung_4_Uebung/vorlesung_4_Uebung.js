
function umrechnen(){
    var umrechenfaktor = 0.0;
    var von = "";
    var zu = "";
    var eingangsWert = parseFloat(document.waehrungsrechner.eingabe.value.replace(",","."));
    var ausgangsWert = 0.0;

    // Wenn Euro zu USD ausgewählt ist
    if (document.waehrungsrechner.umrechenAuswahl[0].checked) {
        umrechenfaktor = 1.1698;
        von = "Euro";
        zu = "USD";
    // Wenn USD zu Euro ausgewählt ist
    } else if (document.waehrungsrechner.umrechenAuswahl[1].checked){
        umrechenfaktor = 0.8548;
        von = "USD";
        zu = "Euro";
    }
    ausgangsWert = eingangsWert * umrechenfaktor;

    document.getElementById('ausgabe').innerHTML = eingangsWert.toFixed(2).replace(".",",") + " " + von + " entsprechen " + ausgangsWert.toFixed(2).replace(".",",") + " " + zu;
}