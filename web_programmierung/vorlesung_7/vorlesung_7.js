$(document).ready( function(){
    // Übung 1
    $("#uebung h2").prepend('<span class="streifenEffekt"></span>');
    // Übung 2
    $("span.pq").each(function(){
        var quote = $(this).clone();
        quote.removeClass("pq");
        quote.addClass("pullquote");
        $(this).before(quote);
    })
})