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
});