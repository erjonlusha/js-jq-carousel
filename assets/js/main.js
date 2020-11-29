/**********************************************************************************
Carousel 
Descrizione:
Creare uno slider di immagini
Potete usare le immagini che desiderate.
Per facilitarvi la vita usate immagini delle stesse dimensioni :)
Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider

In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera

Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider


Bonus:
Clicchiamo sui pallini e mostriamo l’immagine corrispondente
Generiamo i pallini con JS
Consiglio del giorno:
Come sempre è importante usare la documentazione di jQuery per scoprire/rinfrescare memoria sulle funzioni che potrebbero esserci utili
************************************************************************/

/*******************************    AVANTI    *************************/
var nextImg = $(".next"), prevImg = $(".prev");
nextImg.on("click", function () {
    var immagine, pallino, primaImmagine, prossimaImmagine, primoPallino, prossimoPallino, immagineAttiva, pallinoAttivo;
    immagine = $(".images img.active");
    prossimaImmagine = immagine.next();
    primaImmagine = $(".images img.first");
    primoPallino = $("div.nav > i.first");
    pallino = $("div.nav > i.active");
    prossimoPallino = pallino.next();
    immagineAttiva = $(".images img.active");
    pallinoAttivo = $("div.nav > i.active");

if (immagine.hasClass("active") && !immagine.hasClass("last")) {
        immagine.removeClass("active");
        pallino.removeClass("active");
        prossimaImmagine.addClass("active");
        prossimoPallino.addClass("active");
    } else {
        immagine.removeClass("active");
        pallino.removeClass("active");
        primaImmagine.addClass("active");
        primoPallino.addClass("active");
    }
});

/*******************************    INDIETRO    *************************/
prevImg.on("click", function () {
    var immagine, pallino, ultimaImmagine, prossimaImmagine, ultimoPallino, prossimoPallino, immagineAttiva, pallinoAttivo;
    immagine = $(".images img.active");
    prossimaImmagine = immagine.prev();
    ultimaImmagine = $(".images img.last");
    ultimoPallino = $("div.nav > i.last");
    pallino = $("div.nav > i.active");
    prossimoPallino = pallino.prev();
    immagineAttiva = $(".images img.active");
    pallinoAttivo = $("div.nav > i.active");

if (immagine.hasClass("active") && !immagine.hasClass("first")) {
        immagine.removeClass("active");
        pallino.removeClass("active");
        prossimaImmagine.addClass("active");
        prossimoPallino.addClass("active");
    } else {
        immagine.removeClass("active");
        pallino.removeClass("active");
        ultimaImmagine.addClass("active");
        ultimoPallino.addClass("active");
    }
});


// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera

$(function() {
      $(window).keypress(function(e) {
          var key = e.which;
          //do stuff with "key" here...
      });
});