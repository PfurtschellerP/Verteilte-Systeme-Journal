var userCount = 0;
userList = new Array();

function eintragHinzufuegen(){
    // Ausgabe clearen
    clearScreen();

    // Geschlecht überprüfen
    var geschlecht;
    if (document.userForm.geschlecht[0].checked){
        geschlecht = "männlich";
    } else{
        geschlecht = "weiblich";
    }

    // User Objekt anlegen
    var newUser = new User(
        document.userForm.vorname.value,
        document.userForm.nachname.value,
        document.userForm.alter.value,
        geschlecht,
        document.userForm.userName.value,
        document.userForm.passwort.value
        );

    // User zum Array hinzufügen
    userList[userCount] = newUser;
    // User Anzahl erhöhen
    userCount++;
    // Tabelle für die Ausgabe bereitstellen
    table = document.getElementById("ausgabe").appendChild(document.createElement("table"));
    var kopfzeile = table.appendChild(document.createElement("tr"));
    kopfzeile.appendChild(document.createElement("th")).innerHTML = "ID";
    kopfzeile.appendChild(document.createElement("th")).innerHTML = "Name";
    kopfzeile.appendChild(document.createElement("th")).innerHTML = "Alter";
    kopfzeile.appendChild(document.createElement("th")).innerHTML = "Geschlecht";
    kopfzeile.appendChild(document.createElement("th")).innerHTML = "Username";
    // neue Liste Ausgeben
    printOutUsers();
    // Formular resetten
    document.userForm.reset();
}

// Der User Konstruktor
function User(vorname,nachname,alter,geschlecht,username,passwort){
    var vorname = vorname;
    var nachname = nachname;
    var alter = alter;
    var geschlecht = geschlecht;
    var username = username;
    var passwort = passwort;

    this.getName = function(){
        return vorname + " " + nachname;
    }

    this.getAlter = function(){
        return alter;
    }

    this.getGeschlecht = function(){
        return geschlecht;
    }

    this.getUserName = function(){
        return username;
    }

    this.checkUserPW = function(pw){
        if (passwort == pw){
            return true;
        } else{
            return false;
        }
    }
}

// Überprüfen der Zugangsdaten
function loginCheck(){
    // User im Array Suchen
    var userIndex = searchUser(document.userLogin.userName.value);
    // Checken ob der User gefunden wurde
    if(userIndex < 0){
        alert("User nicht gefunden");
        return;
    } else{
        // Passwort prüfen
        if (userList[userIndex].checkUserPW(document.userLogin.passwort.value)){
            alert("Login erfolgreich! Hallo " + userList[userIndex].getName());
        } else{
            alert("Login fehlgeschlagen!");
        }
    }
}

// Lineare Suche auf dem userList Array
function searchUser(user){
    for (i = 0; i < userList.length; i++){
        var username = userList[i].getUserName();
        if (username == user){
            return i;
        }
    }
    return -1;
}


// Alle User ausgeben
function printOutUsers(){
    userList.forEach(printOutUser);
}

function printOutUser(item, index){
    var row = table.appendChild(document.createElement("tr"));
    // ID
    var spalte = row.appendChild(document.createElement("td"));
    spalte.innerHTML = index+1;
    // Name
    var spalte = row.appendChild(document.createElement("td"));
    spalte.innerHTML = item.getName();
    // Alter
    var spalte = row.appendChild(document.createElement("td"));
    spalte.innerHTML = item.getAlter();
    // Geschlecht
    var spalte = row.appendChild(document.createElement("td"));
    spalte.innerHTML = item.getGeschlecht();
    // Username
    var spalte = row.appendChild(document.createElement("td"));
    spalte.innerHTML = item.getUserName();

    //old
    //document.getElementById("ausgabe").innerHTML += index+1 + " " + item.getName() + "<br>";
}

// Die Ausgabe clearen
function clearScreen(){
    document.getElementById("ausgabe").innerHTML = "";
}