$(document).ready(function( ) {
    // Tabelle
    $('table.gestreift tr:even').addClass('gerade');
    
	$('table.gestreift tbody tr').mouseover(function() {
        $(this).addClass('hervorheben')
    })

    $('table.gestreift tbody tr').mouseout(function() {
        $(this).removeClass('hervorheben')
    })

    // Akkordion
    $("#akkordeon h2").click(function() {
        if($(this).next().is(":visible")){
            $(this).next().hide();
        } else {
            $(this).next().show();
        }
    })

    // Event Objekt
    $("#eventButton").click(function(evt){
        var xPos = evt.pageX;
        var yPos = evt.pageY;
        alert("X: " + xPos + " Y: " + yPos);
    })

    // Event Verhalten überschreiben

    $("#eventVerhalten").click(function(evt){
        if ($("#eventVerhaltenCheck").is(":checked")){
            alert("Mutter: Wir haben noch Google zu Hause");
            alert("Google zu Hause:");
            window.open("https://bing.com");
            evt.preventDefault();
        }
    })
});

