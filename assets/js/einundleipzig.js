// ------------------------------------------------------------------------
// Themen: Hover (http://geekgirllife.com/animate-text-over-images-on-hover-without-javascript/)
// ------------------------------------------------------------------------

$('.descriptionContainer').css({ opacity: 0 });
	
$('.descriptionContainer').hover( function(){ 
	$(this).stop().animate({ opacity: 1 }, 'slow');
}, function(){ 
	$(this).stop().animate({ opacity: 0 }, 'slow'); 
});

	$('.descriptionContainer').hover(function () {
    var projDesc = $(this).find('.descriptionContainer');
    var offset = ($(this).height() / 2) - (projDesc.height() / 2);
	console.log($(this).height());
    $(this).find('.description').css('padding-top', offset -40);
});

// ------------------------------------------------------------------------
// Themen: Quicksand Sort (http://www.evoluted.net/thinktank/web-development/jquery-quicksand-tutorial-filtering)
// ------------------------------------------------------------------------

$(document).ready(function() {
  // get the action filter option item on page load
  var $filterType = $('#filterOptions li.active a').attr('class');

  // get and assign the ourHolder element to the
  // $holder varible for use later
  var $holder = $('ul.ourHolder');

  // clone all items within the pre-assigned $holder element
  var $data = $holder.clone();

  // attempt to call Quicksand when a filter option
  // item is clicked
  $('#filterOptions li a').click(function(e) {
    // reset the active class on all the buttons
    $('#filterOptions li').removeClass('active');

    // assign the class of the clicked filter option
    // element to our $filterType variable
    var $filterType = $(this).attr('class');
    $(this).parent().addClass('active');
    if ($filterType == 'all') {
      // assign all li items to the $filteredData var when
      // the 'All' filter option is clicked
      var $filteredData = $data.find('li');
    }
    else {
      // find all li elements that have our required $filterType
      // values for the data-type element
      var $filteredData = $data.find('li[data-type~=' + $filterType + ']');
    }

    // call quicksand and assign transition parameters
    $holder.quicksand($filteredData, {
      duration: 800,
      easing: 'easeInOutQuad'
    }, function(){
	// recall hover animation
					$('.descriptionContainer').css({ opacity: 0 });
			
					$('.descriptionContainer').hover( function(){ 
						$(this).stop().animate({ opacity: 1 }, 'slow');
					}, function(){ 
						$(this).stop().animate({ opacity: 0 }, 'slow'); 
					});
					
						$('.descriptionContainer').hover(function () {
					    var projDesc = $(this).find('.descriptionContainer');
					    var offset = ($(this).height() / 2) - (projDesc.height() / 2);
					    $(this).find('.description').css('padding-top', offset -40);
					});
					
					// $data.setAttribute('style', '');
	});
    return false;
  });
  
});



// ------------------------------------------------------------------------
// Smooth scroll
// ------------------------------------------------------------------------
$(function() {
  $('a[href*=#]:not([href=#]):not(.disqussion-link):not(.main-disqussion-link)').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// ------------------------------------------------------------------------
// fade in
// ------------------------------------------------------------------------
$(document).ready(function() {
  var element = document.getElementsByClassName("fade-in-element");
  $(element).addClass('js-fade-element-hide');

  $(window).scroll(function() {
    var elementTopToPageTop = $(element).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var windowInnerHeight = window.innerHeight;
    var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
    var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
    var distanceFromBottomToAppear = 300;

    if(elementTopToWindowBottom > distanceFromBottomToAppear) {
      $(element).addClass('js-fade-element-show');
    }
    else if(elementTopToWindowBottom < 0) {
      $(element).removeClass('js-fade-element-show');
      $(element).addClass('js-fade-element-hide');
    }
  });
});

// ------------------------------------------------------------------------
// fade in
// ------------------------------------------------------------------------
/*$(document).ready(function () {
    var offset = $('.container').offset().left;
	
	$('.story-header').css('margin-left', -offset);
	//$('.story-header').css('margin-right', -offset);
});*/


// ------------------------------------------------------------------------
// sidebar affix at footer
// ------------------------------------------------------------------------
$('#sidebaraffix').affix({
  offset: {
    top: 200,
    bottom: function () {
      return (this.bottom = $('#footer').outerHeight(true) + $('#partner').outerHeight(true))
    }
  }
})


// ------------------------------------------------------------------------
// Card flip
// ------------------------------------------------------------------------
$(document).ready(function(){

	$('.flip').click(function(){
		$(this).parents('.card').toggleClass('flipped');
	});
	
});

// ------------------------------------------------------------------------
// Strassennamen autocomplete
// ------------------------------------------------------------------------
$(".toggle-background-info").click(function() {
	$($(this).data("target")).toggleClass('hidden');
})

$(".background-info-close").click(function() {
	$(this).parent().toggleClass('hidden');
})

	
// ------------------------------------------------------------------------
// Strassennamen autocomplete
// ------------------------------------------------------------------------
/*$(function() {
	var availableTags = [
		"Aachener Straße",
		"Abrahamstraße",
		"Abtnaundorfer Straße",
		"Achatstraße",
		"Ackerweg",
		"Adamsweg",
		"Adelgunde-Gottsched-Weg",
		"Adenauerallee",
		"Adlershelmstraße",
		"Adolf-Damaschke-Straße",
		"Adolf-Koppe-Straße",
		"Adolph-Menzel-Straße",
		"Agnesstraße",
		"Agricolastraße",
		"Ahlfeldstraße",
		"Ahorngasse",
		"Ahornstraße",
		"Ahornweg",
		"Akazienweg",
		"Akeleiweg",
		"Albersdorfer Straße",
		"Albersdorfer Weg",
		"Albert-Schweitzer-Straße",
		"Albert-Vollsack-Straße",
		"Albrecht-Dürer-Platz",
		"Albrecht-Dürer-Weg",
		"Albrechtshainer Straße",
		"Alemannenweg",
		"Alexander-Alesius-Straße",
		"Alexanderstraße",
		"Alexis-Schumann-Platz",
		"Alfred-Frank-Platz",
		"Alfred-Frank-Straße",
		"Alfred-Kästner-Straße",
		"Alfred-Schurig-Straße",
		"Altdorferweg",
		"Alte Baumschule",
		"Alte Burghausener Straße",
		"Alte Dorfstraße",
		"Alte Dübener Landstraße",
		"Alte Gärtnerei",
		"Alte Hohe Straße",
		"Alte Holzhausener Straße",
		"Alte Messe",
		"Alte Parkstraße",
		"Alte Salzstraße",
		"Alte Seehausener Straße",
		"Alte Straße",
		"Alte Tauchaer Straße",
		"Alte Theklaer Straße",
		"Altenburger Straße",
		"Alter Amtshof",
		"Alter Kirchweg",
		"Alter Marktweg",
		"Altes Dorf",
		"Althener Anger",
		"Althener Straße",
		"Altranstädter Straße",
		"Am Alten Bahnhof",
		"Am Alten Flugfeld",
		"Am alten Flughafen",
		"Am alten Gasthof",
		"Am Alten Mühlgraben",
		"Am Anger",
		"Am Angerteich",
		"Am Bahndamm",
		"Am Bahngraben",
		"Am Bahnhof",
		"Am Barnecker Gut",
		"Am Bauernsteg",
		"Am Bauernteich",
		"Am Bildersaal",
		"Am Bischofsholz",
		"Am Bogen",
		"Am Börnchen",
		"Am Brunnen",
		"Am Doppeladler",
		"Am Dorfplatz",
		"Am Dorfteich",
		"Am Eichberg",
		"Am Eichenbogen",
		"Am Eichwinkel",
		"Am Elsterbogen",
		"Am Elsterwehr",
		"Am Eselshaus",
		"Am Eulengraben",
		"Am Exer",
		"Am Exerzierplatz",
		"Am Feld",
		"Am Feldrain",
		"Am Fischerhaus",
		"Am Flößgen",
		"Am Flügelrad",
		"Am Freibad",
		"Am Fuchsbau",
		"Am Gänseanger",
		"Am Gartenverein",
		"Am Geleinholz",
		"Am Gothischen Bad",
		"Am Grund",
		"Am Gundorfer Teich",
		"Am Güterring",
		"Am Gutspark",
		"Am Hallischen Tor",
		"Am Hasenberg",
		"Am Hasengraben",
		"Am Hegeanger",
		"Am Hirtenhaus",
		"Am Hohen Graben",
		"Am Hohlweg",
		"Am Hufeisen",
		"Am Jägerhaus",
		"Am Kanal",
		"Am Kellerberg",
		"Am Keulenberg",
		"Am Kirschberg",
		"Am kleinen Feld",
		"Am Klosterfeld",
		"Am Klucksgraben",
		"Am krummen Graben",
		"Am Künstlerbogen",
		"Am langen Felde",
		"Am langen Teiche",
		"Am Lindeneck",
		"Am Lindenhof",
		"Am Lösegraben",
		"Am Luppedeich",
		"Am Markt",
		"Am Meilenstein",
		"Am Mückenschlößchen",
		"Am Mühlengrund",
		"Am Mühlgraben",
		"Am Niederholz",
		"Am Ochsenwinkel",
		"Am Osthang",
		"Am Park",
		"Am Parkteich",
		"Am Pfarrfelde",
		"Am Pfefferbrückchen",
		"Am Pfingstanger",
		"Am Pösgraben",
		"Am Rain",
		"Am Rennsteig",
		"Am Ring",
		"Am Ritterschlößchen",
		"Am Rodeland",
		"Am Röschenhof",
		"Am Russischen Garten",
		"Am Sandberg",
		"Am Schäferhügel",
		"Am Schaukelgraben",
		"Am Schenkberg",
		"Am Schwalbennest",
		"Am Silo",
		"Am Sommerfeld",
		"Am Sonneneck",
		"Am Sonnenwinkel",
		"Am Sperrtor",
		"Am Sportforum",
		"Am Sportpark",
		"Am Sportplatz",
		"Am Stausee",
		"Am Tanzplan",
		"Am Teich",
		"Am Teilungswehr",
		"Am Tore",
		"Am Turnplatz",
		"Am Übergang",
		"Am Viadukt",
		"Am Volksgut",
		"Am Vorwerk",
		"Am Wassergraben",
		"Am Wasserschloß",
		"Am Wasserturm",
		"Am Wasserwerk",
		"Am Wegekreuz",
		"Am Weiher",
		"Am Wiesenblick",
		"Am Wiesengrund",
		"Am Wolfswinkel",
		"Am Zuckmantel",
		"Amalie-Winter-Platz",
		"Amalienstraße",
		"Amazonstraße",
		"Amboldweg",
		"Ambrosius-Barth-Platz",
		"Ameisenstraße",
		"Ammernplatz",
		"Ammernweg",
		"Amorbacher Straße",
		"Ampèreweg",
		"Amselgrund",
		"Amselhöhe",
		"Amselnest",
		"Amselstraße",
		"Amselweg",
		"Amstetter Weg",
		"An den Birken",
		"An den Krutschen",
		"An den Linden",
		"An den Pferdnerkabeln",
		"An den Platanen",
		"An den Theklafeldern",
		"An den Tierkliniken",
		"An der Alten Mühle",
		"An der Alten Post",
		"An der Autobahn",
		"An der Badeanlage",
		"An der Bahn",
		"An der Brauerei",
		"An der Brücke",
		"An der Burgaue",
		"An der Eisenbahn",
		"An der Elster",
		"An der Fasanerie",
		"An der Feuerwehr",
		"An der Friedenseiche",
		"An der Gänseweide",
		"An der Gärtnerei",
		"An der Grundschule",
		"An der Hainkirche",
		"An der Hauptstraße",
		"An der Hebemärchte",
		"An der Hufschmiede",
		"An der Kaninchenfarm",
		"An der Kegelbahn",
		"An der Kirche",
		"An der Kirchgasse",
		"An der Kirschallee",
		"An der Kotsche",
		"An der Lautsche",
		"An der Lehde",
		"An der Luppe",
		"An der Märchenwiese",
		"An der Merseburger Straße",
		"An der Meusdorfer Höhe",
		"An der Milchinsel",
		"An der Mühle",
		"An der Mühlpleiße",
		"An der Parthe",
		"An der Passage",
		"An der Querbreite",
		"An der Rehwiese",
		"An der Rietzschke",
		"An der Salzstraße",
		"An der Sandgrube",
		"An der Schäferei",
		"An der Schule",
		"An der Siedlung",
		"An der Spitze",
		"An der Streuobstwiese",
		"An der Tabaksmühle",
		"An der Teichmühle",
		"An der Telle",
		"An der Trift",
		"An der Verfassungslinde",
		"An der Vogelweide",
		"An der Weide",
		"An der Wendeschleife",
		"An der Windmühle",
		"Andersenweg",
		"Andreasstraße",
		"Andromedaweg",
		"Anemonenweg",
		"Angerstraße",
		"Anhalter Straße",
		"Anna-Kuhnow-Straße",
		"Annaberger Straße",
		"Annenstraße",
		"Ansbacher Straße",
		"Anton-Bruckner-Allee",
		"Anton-Zickmantel-Straße",
		"Antonienstraße",
		"Anzengruberstraße",
		"Apels Garten",
		"Apelsteinweg",
		"Apelstraße",
		"Apitzschgasse",
		"Apoldaer Weg",
		"Apostelstraße",
		"Aprikosenweg",
		"Ariostiweg",
		"Arlandbogen",
		"Arminiushof",
		"Arndts Hufen",
		"Arndtstraße",
		"Arnikaweg",
		"Arno-Bruchardt-Straße",
		"Arno-Nitzsche-Straße",
		"Arnoldplatz",
		"Arnoldstraße",
		"Arnstädter Kehre",
		"Arthur-Hausmann-Straße",
		"Arthur-Heidrich-Platz",
		"Arthur-Hoffmann-Straße",
		"Arthur-Nagel-Straße",
		"Arthur-Polenz-Straße",
		"Arthur-Thiele-Weg",
		"Arthur-Winkler-Straße",
		"Aschaffenburger Straße",
		"Aschenbrödelweg",
		"Asternweg",
		"Atriumstraße",
		"Audorfstraße",
		"Aue",
		"Auenblick",
		"Auenblickstraße",
		"Auengrund",
		"Auenhainer Straße",
		"Auenseestraße",
		"Auenstraße",
		"Auenweg",
		"Auerbachplatz",
		"Auerbachstraße",
		"Auerhahnsteig",
		"Auf dem Colmberg",
		"Auf der Höhe",
		"August-Bebel-Platz",
		"August-Bebel-Siedlung",
		"August-Bebel-Straße",
		"August-Knauer-Straße",
		"August-Scheibe-Straße",
		"Auguste-Hennig-Straße",
		"Auguste-Schmidt-Straße",
		"Auguste-Schulze-Straße",
		"Augustenstraße",
		"Augustinerstraße",
		"Augustusplatz",
		"Aurelienstraße",
		"Auschwitzer Straße",
		"Außenring",
		"Äußere Auenblickstraße",
		"Äußere Friedrich-Naumann-Straße",
		"Äußere Mühlenstraße",
		"Äußere Raustraße",
		"Äußerer Zeisigweg",
		"Azaleenstraße",
		"Baaderstraße",
		"Baalsdorfer Anger",
		"Baalsdorfer Straße",
		"Bachenpfad",
		"Bäckergasse",
		"Badergasse",
		"Badeweg",
		"Baedekerstraße",
		"Bahnhofsallee",
		"Bahnhofstraße",
		"Bahnstraße",
		"Bahnweg",
		"Balderstraße",
		"Balzacstraße",
		"Bamberger Straße",
		"Barbarastraße",
		"Barbussestraße",
		"Barclayweg",
		"Bärenfelser Weg",
		"Barfußgäßchen",
		"Bärlauchweg",
		"Barnecker Straße",
		"Barnet-Licht-Platz",
		"Basedowstraße",
		"Basilikumweg",
		"Basteistraße",
		"Bästleinstraße",
		"Bauerngrabenstraße",
		"Bauernwinkel",
		"Bauhofstraße",
		"Baumannstraße",
		"Baumeister-Günther-Straße",
		"Baumeyerstraße",
		"Baumgarten-Crusius-Straße",
		"Baumschulenweg",
		"Baumwollgasse",
		"Baunackstraße",
		"Bausestraße",
		"Bautzmannstraße",
		"Bautzner Straße",
		"Bayreuther Straße",
		"Bayrischer Platz",
		"Bechsteinweg",
		"Beckerstraße",
		"Beethovenstraße",
		"Begonienweg",
		"Bei der Krähenhütte",
		"Beipertstraße",
		"Belterstraße",
		"Benediktusstraße",
		"Benedixstraße",
		"Bennigsenstraße",
		"Berberitzenstraße",
		"Bergahornstraße",
		"Bergerstraße",
		"Berggartenstraße",
		"Berggartenweg",
		"Bergstraße",
		"Bergweg",
		"Berkaer Weg",
		"Berlichingenweg",
		"Berliner Straße",
		"Bernadotteweg",
		"Bernburger Straße",
		"Bernhard-Göring-Straße",
		"Bernhard-Kellermann-Straße",
		"Bernhardiplatz",
		"Bernhardstraße",
		"Bernsteinstraße",
		"Bertha-Beckmann-Weg",
		"Berthastraße",
		"Bertolt-Brecht-Straße",
		"Beuchaer Straße",
		"Beuthstraße",
		"Beyerleinstraße",
		"Biberpfad",
		"Bibraer Weg",
		"Biedermannstraße",
		"Bielastraße",
		"Bienenwinkel",
		"Bienerstraße",
		"Bienitzblick",
		"Bienitzstraße",
		"Binsengrund",
		"Binzer Straße",
		"Birkengasse",
		"Birkenpilzweg",
		"Birkenring",
		"Birkenstraße",
		"Birkenweg",
		"Birkhahnsteig",
		"Bisamstraße",
		"Bischofstraße",
		"Bismarckstraße",
		"Bistumsweg",
		"Bitterfelder Straße",
		"Björneborgstraße",
		"Blanchardweg",
		"Blankenburger Straße",
		"Blaufichtenweg",
		"Blausternweg",
		"Bleichertstraße",
		"Blochmannstraße",
		"Blochstraße",
		"Blücherstraße",
		"Blumenbogen",
		"Blumenstraße",
		"Blumenweg",
		"Blümnerstraße",
		"Blüthnerstraße",
		"BMW-Allee",
		"Bochumer Straße",
		"Böcklinweg",
		"Bockstraße",
		"Bodenreformweg",
		"Bogenweg",
		"Bogislawstraße",
		"Böhlitzer Mühle",
		"Böhmestraße",
		"Bonhoefferstraße",
		"Bontjes-van-Beek-Straße",
		"Borkumer Weg",
		"Bormannstraße",
		"Bornaer Straße",
		"Bornaische Straße",
		"Borngasse",
		"Borsdorfer Straße",
		"Bösdorfer Ring",
		"Bösdorfer Straße",
		"Bösenbergstraße",
		"Bosestraße",
		"Bothestraße",
		"Böttchergäßchen",
		"Böttcherweg",
		"Böttgerstraße",
		"Brackestraße",
		"Brahestraße",
		"Brahmsplatz",
		"Brambacher Straße",
		"Brandenburger Straße",
		"Brandensteinstraße",
		"Brandesweg",
		"Brandiser Straße",
		"Brandstraße",
		"Brandvorwerkstraße",
		"Brauereistraße",
		"Braunschweiger Straße",
		"Braunstraße",
		"Braustraße",
		"Brehmestraße",
		"Breisgaustraße",
		"Breite Allee",
		"Breite Straße",
		"Breitenfelder Straße",
		"Breiteweg",
		"Breitkopfstraße",
		"Breitschuhstraße",
		"Bremer Straße",
		"Bremer Weg",
		"Brentanostraße",
		"Breslauer Straße",
		"Bretschneiderstraße",
		"Breunsdorffstraße",
		"Brockhausstraße",
		"Brodauer Weg",
		"Brombeerweg",
		"Brommeweg",
		"Brösigkestraße",
		"Brückenstraße",
		"Brückwaldstraße",
		"Brüderstraße",
		"Brühl",
		"Bruhnsstraße",
		"Brunhildstraße",
		"Brunnenstraße",
		"Brunnenweg",
		"Brünner Straße",
		"Brunsweg",
		"Buchener Straße",
		"Buchengasse",
		"Buchenwaldstraße",
		"Buchenweg",
		"Buchfinkenweg",
		"Bucksdorffstraße",
		"Buckyweg",
		"Bühringstraße",
		"Bülowstraße",
		"Bünaustraße",
		"Burgauenstraße",
		"Bürgerstraße",
		"Burghausener Straße",
		"Burgplatz",
		"Burgstädter Straße",
		"Burgstraße",
		"Burgundenstraße",
		"Buschenaustraße",
		"Bussardweg",
		"Bussestraße",
		"Buttergasse",
		"Büttnerstraße",
		"Büttnerweg",
		"Cäcilienstraße",
		"Calaustraße",
		"Calderónweg",
		"Calvisiusstraße",
		"Campestraße",
		"Carl-Hampel-Platz",
		"Carl-Hinné-Straße",
		"Carl-Maria-von-Weber-Straße",
		"Carl-Meyer-Straße",
		"Carl-Munde-Straße",
		"Carl-Weichelt-Straße",
		"Carlebachstraße",
		"Carpzovstraße",
		"Carusstraße",
		"Cervantesweg",
		"Cézanneweg",
		"Chamissoweg",
		"Charlottenstraße",
		"Charlottenweg",
		"Chemnitzer Straße",
		"Cheruskerstraße",
		"Chopinstraße",
		"Christian-Ferkel-Straße",
		"Christian-Grunert-Straße",
		"Christian-Schmid-Straße",
		"Christian-Wille-Weg",
		"Christianstraße",
		"Christoph-Probst-Straße",
		"Christoph-Schubert-Straße",
		"Cichoriusstraße",
		"Clara-Wieck-Straße",
		"Clara-Zetkin-Straße",
		"Claudiusstraße",
		"Claußbruchstraße",
		"Clausewitzstraße",
		"Clemens-Thieme-Straße",
		"Cletzener Weg",
		"Cleudner Straße",
		"Coblenzer Straße",
		"Cocciusstraße",
		"Cohnheimstraße",
		"Colberger Weg",
		"Colmbergsiedlung",
		"Colmblick",
		"Comeniusstraße",
		"Connewitzer Straße",
		"Coppiplatz",
		"Coppistraße",
		"Corinthstraße",
		"Corneliusweg",
		"Corotweg",
		"Cöthner Straße",
		"Cottaweg",
		"Cradefelder Straße",
		"Cranachstraße",
		"Credéstraße",
		"Crednerstraße",
		"Crensitzer Weg",
		"Creuzigerstraße",
		"Cröberner Straße",
		"Crottendorfer Straße",
		"Crusiusstraße",
		"Cunnersdorfer Straße",
		"Curiestraße",
		"Curschmannstraße",
		"Czermaks Garten",
		"Dachauer Straße",
		"Dachsstraße",
		"Dahlienstraße",
		"Dähnhardtstraße",
		"Damaschkebogen",
		"Damaschkestraße",
		"Dammstraße",
		"Dammteichweg",
		"Dankwartstraße",
		"Dantestraße",
		"Darwinstraße",
		"Daumierstraße",
		"Däumlingsweg",
		"Dauthestraße",
		"Dautheweg",
		"Davidstraße",
		"Debyestraße",
		"Defoestraße",
		"Defreggerweg",
		"Deiwitzweg",
		"Delitzscher Landstraße",
		"Delitzscher Straße",
		"Demetriusweg",
		"Demmeringstraße",
		"Denkmalsallee",
		"Denkmalsblick",
		"Dennewitzer Straße",
		"Dessauer Straße",
		"Deutsche Einheit",
		"Deutscher Platz",
		"Deutsches Heim",
		"Diakonissenstraße",
		"Diamantstraße",
		"Diderotstraße",
		"Die Linie",
		"Diebitschweg",
		"Dieselstraße",
		"Dieskaustraße",
		"Diesterwegstraße",
		"Dietzgenstraße",
		"Diezmannstraße",
		"Dimitroffstraße",
		"Dimpfelstraße",
		"Dingolfinger Straße",
		"Dinterstraße",
		"Dittrichring",
		"Dittrichstraße",
		"Döbelner Straße",
		"Dochturowweg",
		"Dohlenweg",
		"Dohnanyistraße",
		"Dohnaweg",
		"Dölitzer Straße",
		"Döllingstraße",
		"Dölziger Straße",
		"Dölziger Weg",
		"Dombrowskistraße",
		"Don-Carlos-Straße",
		"Donarstraße",
		"Dorettenring",
		"Dorfplatz",
		"Dorfstraße",
		"Döringstraße",
		"Dornbergerstraße",
		"Dornburger Weg",
		"Dornröschenweg",
		"Dorotheenplatz",
		"Dorotheenring",
		"Dörrienstraße",
		"Dorstigstraße",
		"Dortmunder Straße",
		"Dösner Straße",
		"Dösner Weg",
		"Dostojewskistraße",
		"Dr.-Hermann-Duncker-Straße",
		"Dr.-Margarete-Blank-Straße",
		"Dr.-Wilhelm-Külz-Straße",
		"Drei-Linden-Höhe",
		"Dreiecksweg",
		"Dreilindenstraße",
		"Drescherweg",
		"Dresdner Straße",
		"Drosselgrund",
		"Drosselhang",
		"Drosselnest",
		"Drosselweg",
		"Druckereistraße",
		"Dübener Landstraße",
		"Dudweiler Straße",
		"Dufourstraße",
		"Durch die Felder",
		"Dürnsteiner Weg",
		"Dürrenberger Straße",
		"Dürrplatz",
		"Dürrstraße",
		"Dybwadstraße",
		"Ebenholzweg",
		"Ebereschenweg",
		"Eberlestraße",
		"Eberpfad",
		"Ecksteinstraße",
		"Edisonstraße",
		"Edlichstraße",
		"Edmond-Kaiser-Straße",
		"Eduard-von-Hartmann-Straße",
		"Eduardstraße",
		"Edvard-Grieg-Allee",
		"Eferdinger Straße",
		"Egelstraße",
		"Eggebrechtstraße",
		"Egon-Erwin-Kisch-Weg",
		"Ehrenberger Straße",
		"Ehrensteinstraße",
		"Eibenweg",
		"Eichbergstraße",
		"Eichelbaumstraße",
		"Eichendorffstraße",
		"Eichenweg",
		"Eichhörnchenweg",
		"Eichlerstraße",
		"Eidechsenweg",
		"Eigene Scholle",
		"Eigenheimstraße",
		"Eilenburger Straße",
		"Einertstraße",
		"Einsteinstraße",
		"Eisenacher Straße",
		"Eisenbahnstraße",
		"Eisenberger Ring",
		"Eisenschmidtplatz",
		"Eitingonstraße",
		"Elchweg",
		"Elfenweg",
		"Elisabeth-Schumacher-Straße",
		"Elisabethstraße",
		"Ellernweg",
		"Elli-Voigt-Straße",
		"Elsa-Brändström-Straße",
		"Elsastraße",
		"Elsbethstraße",
		"Elsteraue",
		"Elsterberg",
		"Elsterblick",
		"Elstergarten",
		"Elstermühlweg",
		"Elsterstraße",
		"Elsterweg",
		"Emil-Altner-Weg",
		"Emil-Fuchs-Straße",
		"Emil-Kluge-Straße",
		"Emil-März-Straße",
		"Emil-Schubert-Straße",
		"Emil-Teich-Straße",
		"Emilienstraße",
		"Emmausstraße",
		"Endersstraße",
		"Endnerstraße",
		"Engelmannstraße",
		"Engelsdorfer Park",
		"Engelsdorfer Straße",
		"Engelsdorfer Weg",
		"Engertstraße",
		"Entsbergerstraße",
		"Enzianweg",
		"Erdmannstraße",
		"Erfurter Straße",
		"Erhardstraße",
		"Erich-Köhn-Straße",
		"Erich-Mühsam-Weg",
		"Erich-Thiele-Straße",
		"Erich-Weinert-Straße",
		"Erich-Zeigner-Allee",
		"Erika-von-Brockdorff-Straße",
		"Erikenstraße",
		"Erkerhof",
		"Erlanger Straße",
		"Erlenstraße",
		"Erlenweg",
		"Erlenzeisigweg",
		"Erlkönigweg",
		"Ernestistraße",
		"Ernst-Guhr-Straße",
		"Ernst-Haeckel-Straße",
		"Ernst-Hasse-Straße",
		"Ernst-Keil-Straße",
		"Ernst-Kießig-Straße",
		"Ernst-Meier-Straße",
		"Ernst-Mey-Straße",
		"Ernst-Pinkert-Straße",
		"Ernst-Schneller-Straße",
		"Ernst-Sommerlath-Weg",
		"Ernst-Toller-Straße",
		"Eschenweg",
		"Espenhainer Straße",
		"Espenweg",
		"Essener Straße",
		"Etkar-André-Straße",
		"Etzelstraße",
		"Eutritzscher Markt",
		"Eutritzscher Straße",
		"Eva-Maria-Buch-Straße",
		"Eythraer Straße",
		"Eythraer Weg",
		"Eythstraße",
		"Fabrikstraße",
		"Falkensteinstraße",
		"Falkenweg",
		"Falladastraße",
		"Falterstraße",
		"Faradaystraße",
		"Färberstraße",
		"Farnweg",
		"Fasanenhöhe",
		"Fasanenhügel",
		"Fasanenpfad",
		"Fasanenweg",
		"Fechnerstraße",
		"Feldahornweg",
		"Feldblumenweg",
		"Feldhasenweg",
		"Feldlerchenweg",
		"Feldstraße",
		"Feldweg",
		"Felsenbirnenstraße",
		"Felsenkellerstraße",
		"Fenchelweg",
		"Ferdinand-Freiligrath-Straße",
		"Ferdinand-Gruner-Straße",
		"Ferdinand-Jost-Straße",
		"Ferdinand-Lassalle-Straße",
		"Ferdinand-Rhode-Straße",
		"Feuerbachstraße",
		"Feuerbachweg",
		"Fichtenstraße",
		"Fichtesiedlung",
		"Fichtestraße",
		"Finkengrund",
		"Finkensteig",
		"Finkenweg",
		"Fleckensteiner Weg",
		"Fleißnerstraße",
		"Flemmingstraße",
		"Fliederhof",
		"Fliederweg",
		"Flinzerstraße",
		"Flöhaer Straße",
		"Floraweg",
		"Florian-Geyer-Platz",
		"Flößenstraße",
		"Floßplatz",
		"Fockestraße",
		"Fontanestraße",
		"Föpplstraße",
		"Forchheimer Straße",
		"Forsetistraße",
		"Forststraße",
		"Forstweg",
		"Fortunabadstraße",
		"Franckestraße",
		"Frankenheimer Weg",
		"Frankenweg",
		"Franz-Flemming-Straße",
		"Franz-Mehring-Straße",
		"Franz-Schlobach-Straße",
		"Franz-Schubert-Platz",
		"Franz-Schubert-Weg",
		"Franzosenallee",
		"Franzosenfeld",
		"Frau-Holle-Weg",
		"Fraunhoferstraße",
		"Freesienweg",
		"Fregestraße",
		"Freiberger Straße",
		"Freiligrathplatz",
		"Freirodaer Straße",
		"Freirodaer Weg",
		"Freisinger Weg",
		"Frettchenweg",
		"Freundschaftsring",
		"Frickestraße",
		"Fridtjof-Nansen-Straße",
		"Friedensstraße",
		"Friederikenstraße",
		"Friedhofstraße",
		"Friedhofsweg",
		"Friedrich-Bosse-Straße",
		"Friedrich-Dittes-Straße",
		"Friedrich-Ebert-Straße",
		"Friedrich-Kram-Weg",
		"Friedrich-List-Platz",
		"Friedrich-List-Straße",
		"Friedrich-Ludwig-Jahn-Straße",
		"Friedrich-Naumann-Straße",
		"Friedrich-Schmidt-Straße",
		"Friedrich-Wolf-Straße",
		"Friedrichshafner Straße",
		"Friedrichstraße",
		"Friesenstraße",
		"Friesenweg",
		"Fritz-Hanschmann-Straße",
		"Fritz-Krebs-Straße",
		"Fritz-Reuter-Straße",
		"Fritz-Schmenkel-Straße",
		"Fritz-Seger-Straße",
		"Fritz-Siemon-Straße",
		"Fritz-Simonis-Straße",
		"Fritz-Zalisz-Straße",
		"Fröbelstraße",
		"Frohburger Straße",
		"Frommannstraße",
		"Fröschelstraße",
		"Froschkönigweg",
		"Froschweg",
		"Fuchshainer Straße",
		"Fuchspfad",
		"Fucikstraße",
		"Fuggerstraße",
		"Fullaweg",
		"Funkenburgstraße",
		"Furnierweg",
		"Fürther Straße",
		"Gabelsbergerstraße",
		"Galileistraße",
		"Ganghoferstraße",
		"Gänseblümchenweg",
		"Garskestraße",
		"Gartenbogen",
		"Gartengrund",
		"Gartenstraße",
		"Gartenweg",
		"Gartenwinkel",
		"Gärtnereiweg",
		"Gärtnergasse",
		"Gärtnerstraße",
		"Gärtnerweg",
		"Gaschwitzer Straße",
		"Gaswerksweg",
		"Gaudigplatz",
		"Gaußstraße",
		"Gebrüder-Weber-Weg",
		"Gedikestraße",
		"Geibelstraße",
		"Geißblattstraße",
		"Geißlerstraße",
		"Geithainer Straße",
		"Gellertplatz",
		"Gellertstraße",
		"Gemeindeamtsstraße",
		"Georg-Fischer-Straße",
		"Georg-Große-Straße",
		"Georg-Herwegh-Straße",
		"Georg-Maurer-Straße",
		"Georg-Reichardt-Straße",
		"Georg-Schumann-Straße",
		"Georg-Schwarz-Straße",
		"George-Bähr-Straße",
		"Georgiring",
		"Georgplatz",
		"Geraer Straße",
		"Geranienweg",
		"Gerberstraße",
		"Gerhard-Ellrodt-Straße",
		"Gerhardstraße",
		"Gerichtsweg",
		"Gerlindeweg",
		"Germannstraße",
		"Gerstäckerstraße",
		"Gerstenweg",
		"Gersterstraße",
		"Gerte",
		"Geschwister-Scholl-Straße",
		"Gesnerstraße",
		"Getreidegasse",
		"Getzelauer Straße",
		"Geutebrückstraße",
		"Gewandgäßchen",
		"Geyerstraße",
		"Giebnerstraße",
		"Gießerstraße",
		"Gildemeisterring",
		"Ginsterstraße",
		"Giordano-Bruno-Straße",
		"Giselherstraße",
		"Gittelstraße",
		"Gladiolenweg",
		"Glafeystraße",
		"Gleisstraße",
		"Gleitsmannstraße",
		"Glesiener Straße",
		"Gletschersteinstraße",
		"Glockenstraße",
		"Gmundener Weg",
		"Gneisenaustraße",
		"Göbschelwitzer Straße",
		"Göbschelwitzer Weg",
		"Goerdelerring",
		"Goetheplatz",
		"Goethesteig",
		"Goethestraße",
		"Goetheweg",
		"Goetzstraße",
		"Gogolstraße",
		"Gohliser Straße",
		"Göhrenzer Straße",
		"Göhrenzer Weg",
		"Goldacher Straße",
		"Goldammerweg",
		"Goldene Hufe",
		"Goldglöckchenstraße",
		"Goldoniweg",
		"Goldrutenweg",
		"Goldschmidtstraße",
		"Goldsternstraße",
		"Goldulmenweg",
		"Gontardweg",
		"Gontscharowstraße",
		"Gorbitzer Straße",
		"Gorkistraße",
		"Görlitzer Straße",
		"Gortschakoffweg",
		"Göschenstraße",
		"Goslarer Straße",
		"Göteborger Straße",
		"Gotenstraße",
		"Gothaer Straße",
		"Gottfried-Jähnichen-Weg",
		"Gottfried-Keller-Straße",
		"Gottfried-Rentzsch-Weg",
		"Gotthelfstraße",
		"Gottlaßstraße",
		"Gottleubaer Straße",
		"Gottlieb-Schöne-Weg",
		"Gottschalkstraße",
		"Gottschallstraße",
		"Gottschedstraße",
		"Gottscheinaer Weg",
		"Gotzkowskystraße",
		"Goyastraße",
		"Grabaustraße",
		"Grabenweg",
		"Graf-Zeppelin-Ring",
		"Gräfestraße",
		"Graffstraße",
		"Graßdorfer Straße",
		"Grassistraße",
		"Grasweg",
		"Grauwackeweg",
		"Gregor-Fuchs-Straße",
		"Gregoriusstraße",
		"Gregoryplatz",
		"Greinerweg",
		"Grenzstraße",
		"Grenzweg",
		"Gretelweg",
		"Gretschelstraße",
		"Grillenstraße",
		"Grimmaische Straße",
		"Grimmaischer Steinweg",
		"Grimmweg",
		"Groitzscher Straße",
		"Gröpplerstraße",
		"Großbeerener Straße",
		"Große Fleischergasse",
		"Große Gartensiedlung",
		"Großer Brockhaus",
		"Großer Marktweg",
		"Großmannstraße",
		"Großmiltitzer Straße",
		"Großpösnaer Straße",
		"Großsteinberger Straße",
		"Grünauer Allee",
		"Grünauer Blick",
		"Grünbacher Weg",
		"Grundstraße",
		"Grüne Gasse",
		"Grüner Bogen",
		"Grüner Weg",
		"Grüner Winkel",
		"Grunertstraße",
		"Grünewaldstraße",
		"Grünfinkenweg",
		"Grunickestraße",
		"Gudrunstraße",
		"Güldengossaer Straße",
		"Gundermannstraße",
		"Gundorfer Kirchweg",
		"Gundorfer Straße",
		"Gundoweg",
		"Günselstraße",
		"Güntheritzer Weg",
		"Güntherstraße",
		"Güntzstraße",
		"Gustav-Adolf-Allee",
		"Gustav-Adolf-Straße",
		"Gustav-Esche-Straße",
		"Gustav-Feilotter-Straße",
		"Gustav-Freytag-Straße",
		"Gustav-Kühn-Straße",
		"Gustav-Mahler-Straße",
		"Gustav-Scheibe-Straße",
		"Gustav-Schmoller-Straße",
		"Gustav-Schwabe-Platz",
		"Gutberletstraße",
		"Gutenbergplatz",
		"Gutenbergstraße",
		"Güterbahnhofstraße",
		"Gutshofstraße",
		"GutsMuthsstraße",
		"Gutsparkstraße",
		"Gutsweg",
		"Gypsbergstraße",
		"Haferkornstraße",
		"Haferring",
		"Hafisweg",
		"Hagebuttenweg",
		"Hahnekamm",
		"Hähnelstraße",
		"Hahnemannstraße",
		"Hainbuchenstraße",
		"Hainburger Weg",
		"Hainstraße",
		"Hainveilchenweg",
		"Halberstädter Straße",
		"Hallbergmooser Straße",
		"Hallesche Straße",
		"Hamburger Straße",
		"Hammerstraße",
		"Hammstraße",
		"Handelsplatz",
		"Handelsring",
		"Handelsstraße",
		"Händelstraße",
		"Handwerkerhof",
		"Hänicher Mühle",
		"Hänischstraße",
		"Hannoversche Straße",
		"Hanns-Eisler-Straße",
		"Hans-Beimler-Straße",
		"Hans-Driesch-Straße",
		"Hans-Grade-Straße",
		"Hans-Marchwitza-Straße",
		"Hans-Oster-Straße",
		"Hans-Otto-Straße",
		"Hans-Poeche-Straße",
		"Hans-Sachs-Straße",
		"Hans-Scholl-Straße",
		"Hans-Weigel-Straße",
		"Hänselweg",
		"Happweg",
		"Harbigweg",
		"Hardenbergstraße",
		"Harkortstraße",
		"Harnackstraße",
		"Harnischstraße",
		"Harpstedter Straße",
		"Härtelstraße",
		"Hartmannsdorfer Straße",
		"Hartmannweg",
		"Hartriegelstraße",
		"Hartungstraße",
		"Hartzstraße",
		"Haselnussweg",
		"Haselstraße",
		"Haselweg",
		"Hasenheide",
		"Hasenholzweg",
		"Hasenpfad",
		"Hauckstraße",
		"Hauffweg",
		"Hauptmannstraße",
		"Hauptstraße",
		"Hauschildstraße",
		"Hausdorffweg",
		"Häußerstraße",
		"Häuslergasse",
		"Haußmannstraße",
		"Haydnstraße",
		"Haynaer Weg",
		"Hebelstraße",
		"Heckenweg",
		"Hedwig-Burgheim-Straße",
		"Hedwigstraße",
		"Hegelstraße",
		"Heidelbeerweg",
		"Heidelberger Straße",
		"Heideweg",
		"Heilbronner Straße",
		"Heilemannstraße",
		"Heimdallstraße",
		"Heimteichstraße",
		"Heinickestraße",
		"Heinkstraße",
		"Heinrich-Büchner-Straße",
		"Heinrich-Budde-Straße",
		"Heinrich-Heine-Straße",
		"Heinrich-Kaps-Straße",
		"Heinrich-Mann-Straße",
		"Heinrich-Mann-Weg",
		"Heinrich-Oelerich-Straße",
		"Heinrich-Schmidt-Straße",
		"Heinrich-Schütz-Platz",
		"Heinrich-Zille-Weg",
		"Heinrichstraße",
		"Heinrothstraße",
		"Heinz-Kapelle-Straße",
		"Heinzelmannweg",
		"Heisenbergstraße",
		"Heiterblickallee",
		"Heiterblickstraße",
		"Helenenstraße",
		"Helgoländer Weg",
		"Hellerstraße",
		"Hellriegelstraße",
		"Helmertstraße",
		"Helmholtzstraße",
		"Hempelstraße",
		"Hendelweg",
		"Henricistraße",
		"Henriettenstraße",
		"Hentschelweg",
		"Herbartstraße",
		"Herbert-Bochow-Straße",
		"Herbert-Thiele-Straße",
		"Herbstweg",
		"Herderstraße",
		"Herloßsohnstraße",
		"Hermann-Brade-Straße",
		"Hermann-Dorner-Straße",
		"Hermann-Keller-Straße",
		"Hermann-Liebmann-Straße",
		"Hermann-Löns-Straße",
		"Hermann-Sander-Straße",
		"Hermann-Schein-Straße",
		"Hermannstraße",
		"Hermelinplatz",
		"Hermelinstraße",
		"Hermundurenstraße",
		"Herrenallee",
		"Herrmann-Meyer-Straße",
		"Herrnhuter Straße",
		"Hersvelder Straße",
		"Hertzstraße",
		"Herwigstraße",
		"Herzberger Straße",
		"Herzenstraße",
		"Hessenstraße",
		"Hettelweg",
		"Heubnerweg",
		"Heuweg",
		"Hickmannstraße",
		"Hildburgstraße",
		"Hildebrandstraße",
		"Hildegardstraße",
		"Hildeweg",
		"Hillerstraße",
		"Hilligerstraße",
		"Himbeerweg",
		"Hinrichsenstraße",
		"Hinter dem Dorf",
		"Hinter dem Zuckelhausener Ring",
		"Hinter den Gärten",
		"Hinter der Kirche",
		"Hirschfelder Flur",
		"Hirschfelder Straße",
		"Hirschsprung",
		"Hirseweg",
		"Hirtenholzstraße",
		"Hirtenweg",
		"Hirzelstraße",
		"Hoepnerstraße",
		"Hofer Straße",
		"Hoffmannstraße",
		"Hofmeisterstraße",
		"Hohe Straße",
		"Hohenheidaer Straße",
		"Hohenheidaer Weg",
		"Hohenossiger Weg",
		"Hohenrodaer Weg",
		"Hohenthalstraße",
		"Hohentichelnstraße",
		"Hohle Gasse",
		"Hohmannstraße",
		"Holbeinstraße",
		"Holbergstraße",
		"Hölderlinstraße",
		"Holsteinstraße",
		"Holteistraße",
		"Höltystraße",
		"Holunderbogen",
		"Holunderweg",
		"Holzhausener Straße",
		"Holzhäuser Straße",
		"Hommelweg",
		"Hopfenbergstraße",
		"Hopfengarten",
		"Hopfenweg",
		"Horburger Straße",
		"Hornissenwinkel",
		"Hornstraße",
		"Horst-Fritsche-Weg",
		"Horst-Heilmann-Straße",
		"Hortensienweg",
		"Hotherstraße",
		"Hoyerstraße",
		"Huberstraße",
		"Hubertusstraße",
		"Hubmaierweg",
		"Hüfferstraße",
		"Hüfnerstraße",
		"Hügelweg",
		"Hugo-Aurig-Straße",
		"Hugo-Junkers-Straße",
		"Hugo-Krone-Platz",
		"Hugo-Licht-Straße",
		"Humboldtstraße",
		"Hummelstraße",
		"Humperdinckstraße",
		"Hünerfeldstraße",
		"Husemannstraße",
		"Hussitenstraße",
		"Huttenstraße",
		"Huygensstraße",
		"Idastraße",
		"Idunweg",
		"Igelstraße",
		"Ihmelsstraße",
		"Ilmenauer Weg",
		"Ilse-Decho-Weg",
		"Iltispfad",
		"Im Birkengrund",
		"Im Blumengrund",
		"Im Dölitzer Holz",
		"Im Grunde",
		"Im Limburgerpark",
		"Im Lindengrund",
		"Im Tannengrund",
		"Im Weidengrund",
		"Im Winkel",
		"Im Zipfel",
		"Immenstraße",
		"Industriestraße",
		"Ingwerweg",
		"Innenring",
		"Inselstraße",
		"Italiaanderstraße",
		"J.-C.-Hinrichs-Straße",
		"Jablonowskistraße",
		"Jack-London-Weg",
		"Jacobstraße",
		"Jadassohnstraße",
		"Jadebogen",
		"Jägerstraße",
		"Jahnallee",
		"Jahnstraße",
		"Jahnweg",
		"Jakobiwinkel",
		"Jaspisstraße",
		"Jenaer Straße",
		"Joachim-Gottschalk-Weg",
		"Jöcherstraße",
		"Jochmontagestraße",
		"Johann-Adolf-Straße",
		"Johann-Eck-Straße",
		"Johann-Jakob-Weber-Platz",
		"Johannaparkweg",
		"Johannastraße",
		"Johannes-Kärner-Straße",
		"Johannes-R.-Becher-Straße",
		"Johannes-Weyrauch-Platz",
		"Johannisallee",
		"Johannisgasse",
		"Johannishöhe",
		"Johannisplatz",
		"Johnsonweg",
		"Jöhstädter Straße",
		"Jonasstraße",
		"Jonsdorfer Straße",
		"Jordanstraße",
		"Jörgen-Schmidtchen-Weg",
		"Josephinenstraße",
		"Josephstraße",
		"Jouleweg",
		"Judith-Auer-Straße",
		"Juister Weg",
		"Julian-Marchlewski-Straße",
		"Julius-Krause-Straße",
		"Juliusstraße",
		"Jungfernstiege",
		"Junghanßstraße",
		"Jungmannstraße",
		"Jupiterstraße",
		"Jupp-Müller-Straße",
		"Jutta-Hipp-Weg",
		"Kaffeegasse",
		"Kahlhoffweg",
		"Kamelienweg",
		"Kamenzer Straße",
		"Kamillenweg",
		"Kanalstraße",
		"Kändlerstraße",
		"Kaninchensteig",
		"Kantatenweg",
		"Kantor-Andrä-Straße",
		"Kantor-Hase-Straße",
		"Kantor-Schmidt-Weg",
		"Kantstraße",
		"Kapellenstraße",
		"Karl-Blechen-Straße",
		"Karl-Bücher-Straße",
		"Karl-Ferlemann-Straße",
		"Karl-Friedrich-Straße",
		"Karl-Härting-Straße",
		"Karl-Heft-Straße",
		"Karl-Heine-Platz",
		"Karl-Heine-Straße",
		"Karl-Helbig-Straße",
		"Karl-Jungbluth-Straße",
		"Karl-Liebknecht-Straße",
		"Karl-Mannsfeld-Straße",
		"Karl-Marx-Platz",
		"Karl-Marx-Straße",
		"Karl-Moor-Weg",
		"Karl-Rothe-Straße",
		"Karl-Schurz-Straße",
		"Karl-Siegismund-Straße",
		"Karl-Tauchnitz-Straße",
		"Karl-Vogel-Straße",
		"Karl-Winkler-Straße",
		"Karlsruher Straße",
		"Karlstädter Straße",
		"Karlstraße",
		"Karolusstraße",
		"Kärrnerstraße",
		"Kärrnerweg",
		"Kasseler Straße",
		"Kastanienallee",
		"Kastanienring",
		"Kastanienstraße",
		"Kastanienweg",
		"Kästnerbogen",
		"Kastorweg",
		"Katharinenstraße",
		"Käthe-Kollwitz-Straße",
		"Katzmannstraße",
		"Katzstraße",
		"Kaulbachweg",
		"Kegelweg",
		"Kehrwieder",
		"Keilstraße",
		"Kelbestraße",
		"Keplerstraße",
		"Kerbelweg",
		"Kernstraße",
		"Kickerlingsberg",
		"Kiebitzstraße",
		"Kiefernweg",
		"Kieler Straße",
		"Kiesgrubenstraße",
		"Kiesweg",
		"Kietzstraße",
		"Kiewer Straße",
		"Kilometerweg",
		"Kindstraße",
		"Kippenbergstraße",
		"Kipsdorfer Weg",
		"Kirchplatz",
		"Kirchstraße",
		"Kirchweg",
		"Kirschbergstraße",
		"Kissinger Straße",
		"Klabundweg",
		"Klarastraße",
		"Klasingstraße",
		"Klausenerstraße",
		"Kleeweg",
		"Kleine Bergstraße",
		"Kleine Fleischergasse",
		"Kleine Gartensiedlung",
		"Kleine Gartenstraße",
		"Kleine Promenade",
		"Kleiner Poetenweg",
		"Kleiner Zipfel",
		"Kleinmesseplatz",
		"Kleinpösnaer Anger",
		"Kleinpösnaer Straße",
		"Kleinzschocher",
		"Kleiststraße",
		"Klemmstraße",
		"Klempererstraße",
		"Klenaustraße",
		"Klettenstraße",
		"Klingenstraße",
		"Klingenthaler Straße",
		"Klingerplatz",
		"Klingerstraße",
		"Klingerweg",
		"Klipphausenstraße",
		"Klopstockstraße",
		"Kloßstraße",
		"Klostergasse",
		"Klosterneuburger Weg",
		"Knaurstraße",
		"Knauthainer Straße",
		"Knautnaundorfer Anger",
		"Knautnaundorfer Straße",
		"Knesebeckstraße",
		"Knöflerstraße",
		"Knopstraße",
		"Knorrstraße",
		"Knuthstraße",
		"Köbisstraße",
		"Koburger Straße",
		"Kochstraße",
		"Koehlerstraße",
		"Kohlenstraße",
		"Kohlgartenstraße",
		"Kohlgartenweg",
		"Kohlweg",
		"Köhraer Straße",
		"Kohrener Straße",
		"Kolbestraße",
		"Kolmstraße",
		"Koloniestraße",
		"Kolonnadenstraße",
		"Kolpingweg",
		"Komarowstraße",
		"Kometenweg",
		"Kommandant-Prendel-Allee",
		"Kömmlitzer Weg",
		"Königsteinstraße",
		"Könneritzstraße",
		"Konrad-Hagen-Platz",
		"Konradstraße",
		"Konstantinstraße",
		"Kopernikusstraße",
		"Kornblumenweg",
		"Körnerplatz",
		"Körnerstraße",
		"Körnerweg",
		"Kornweg",
		"Korolenkostraße",
		"Kosakenweg",
		"Kösner Straße",
		"Kossaer Straße",
		"Köstritzer Straße",
		"Kötzschauer Straße",
		"Kötzschkestraße",
		"Krakauer Straße",
		"Kranichweg",
		"Krätzbergstraße",
		"Krautbreite",
		"Krautgartenweg",
		"Kregelstraße",
		"Kremser Weg",
		"Kresseweg",
		"Kreuzdornstraße",
		"Kreuzstraße",
		"Kriemhildstraße",
		"Kröbelstraße",
		"Krokerstraße",
		"Krokusweg",
		"Krönerstraße",
		"Krostitzer Weg",
		"Krugstraße",
		"Kuchengartenstraße",
		"Küchenholzallee",
		"Kuckhoffstraße",
		"Kuckucksweg",
		"Kuhnaustraße",
		"Kuhturmallee",
		"Kuhturmstraße",
		"Kulkwitzer Straße",
		"Kulmbacher Straße",
		"Kümmelweg",
		"Kunadstraße",
		"Kuntzschmannstraße",
		"Kunzestraße",
		"Kupfergasse",
		"Kursdorfer Weg",
		"Kurt-Eisner-Straße",
		"Kurt-Günther-Straße",
		"Kurt-Hänselmann-Weg",
		"Kurt-Huber-Weg",
		"Kurt-Krah-Straße",
		"Kurt-Kresse-Straße",
		"Kurt-Schumacher-Straße",
		"Kurt-Tucholsky-Straße",
		"Kurt-Weill-Straße",
		"Kurze Straße",
		"Kutschbachweg",
		"Kutscherweg",
		"Kutschweg",
		"Lagerhofstraße",
		"Lähnestraße",
		"Lammertweg",
		"Lampestraße",
		"Lamprechtstraße",
		"Landhausstraße",
		"Landsberger Straße",
		"Landsteinerstraße",
		"Landwaisenhausstraße",
		"Lange Reihe",
		"Lange Straße",
		"Lange Trift",
		"Langhansstraße",
		"Lärchenweg",
		"Laubestraße",
		"Lauchstädter Straße",
		"Lauerscher Weg",
		"Laurentiusstraße",
		"Lauschaer Weg",
		"Lausener Bogen",
		"Lausener Dorfplatz",
		"Lausener Straße",
		"Lausicker Straße",
		"Lausner Weg",
		"Lavendelweg",
		"Lazarusstraße",
		"Leanderweg",
		"Lehdenweg",
		"Leiblweg",
		"Leibnitzstraße",
		"Leibnizstraße",
		"Leibnizweg",
		"Leidholdstraße",
		"Leinestraße",
		"Leipziger Straße",
		"Leisniger Straße",
		"Lemseler Weg",
		"Lenaustraße",
		"Lene-Voigt-Straße",
		"Lengefelder Straße",
		"Lenzstraße",
		"Leo-Tolstoi-Straße",
		"Leonhard-Frank-Straße",
		"Leonhardtstraße",
		"Leopoldstraße",
		"Leostraße",
		"Leplaystraße",
		"Lerchengrund",
		"Lercheninsel",
		"Lerchenrain",
		"Lerchenweg",
		"Lermastraße",
		"Lermontowstraße",
		"Les-Epesses-Straße",
		"Lessingplatz",
		"Lessingstraße",
		"Lessingweg",
		"Leuckartstraße",
		"Leunaer Weg",
		"Leupoldstraße",
		"Leutzscher Allee",
		"Leutzscher Straße",
		"Lewienstraße",
		"Libellenstraße",
		"Libertastraße",
		"Lichtenbergweg",
		"Lichtenfelser Straße",
		"Lidicestraße",
		"Liebensteiner Weg",
		"Liebertwolkwitzer Markt",
		"Liebertwolkwitzer Straße",
		"Liebfrauenstraße",
		"Liebigstraße",
		"Liechtensteinstraße",
		"Ligusterweg",
		"Liliensteinstraße",
		"Lilienstraße",
		"Lilienthalstraße",
		"Lilienweg",
		"Limburgerstraße",
		"Lindenallee",
		"Lindenauer Markt",
		"Lindenauer Straße",
		"Lindengasse",
		"Lindennaundorfer Weg",
		"Lindenpark",
		"Lindenstraße",
		"Lindenthaler Hauptstraße",
		"Lindenthaler Straße",
		"Linkelstraße",
		"Linnéstraße",
		"Lintacherstraße",
		"Lionstraße",
		"Lipinskistraße",
		"Lippendorfer Straße",
		"Liprandisdorfer Straße",
		"Lipsiusstraße",
		"Lise-Meitner-Straße",
		"Liselotte-Herrmann-Straße",
		"Littstraße",
		"Liviastraße",
		"Löbauer Straße",
		"Lobelienweg",
		"Lobensteiner Straße",
		"Lobstädter Straße",
		"Lochmannstraße",
		"Logauweg",
		"Löhrstraße",
		"Lomonossowstraße",
		"Lönsstraße",
		"Lorenzstraße",
		"Lortzingstraße",
		"Losinskiweg",
		"Lößniger Straße",
		"Lotterstraße",
		"Lotzestraße",
		"Louis-Fürnberg-Straße",
		"Louise-Otto-Peters-Allee",
		"Louise-Otto-Peters-Platz",
		"Löwenzahnweg",
		"Luchspfad",
		"Luckaer Straße",
		"Lucknerstraße",
		"Lüderstraße",
		"Ludolf-Colditz-Straße",
		"Ludwig-Beck-Straße",
		"Ludwig-Erhard-Straße",
		"Ludwig-Hupfeld-Straße",
		"Ludwig-Jahn-Straße",
		"Ludwig-Thoma-Weg",
		"Ludwigsburger Straße",
		"Ludwigstraße",
		"Luftschiffstraße",
		"Lukasstraße",
		"Lumumbastraße",
		"Lupinenweg",
		"Luppenaue",
		"Luppenstraße",
		"Lurgensteins Steg",
		"Lutherstraße",
		"Lützner Plan",
		"Lützner Straße",
		"Lützowstraße",
		"Lützschenaer Straße",
		"Luz-Long-Weg",
		"Lyoner Straße",
		"Macherner Straße",
		"Magazingasse",
		"Magdalenenstraße",
		"Magdeborner Straße",
		"Magdeburger Straße",
		"Magnusstraße",
		"Mahlmannstraße",
		"Maienweg",
		"Maiglöckchenweg",
		"Mainzer Straße",
		"Majakowskistraße",
		"Malachitstraße",
		"Malteserstraße",
		"Malvenweg",
		"Manetstraße",
		"Mannheimer Straße",
		"Mansfelder Weg",
		"Marbachstraße",
		"Marcher Straße",
		"Marchlewskiweg",
		"Marcusgasse",
		"Margaretenstraße",
		"Margeritenweg",
		"Maria-Grollmuß-Straße",
		"Mariannenpark",
		"Mariannenstraße",
		"Marienberger Straße",
		"Marienbrunnenstraße",
		"Marienplatz",
		"Marienweg",
		"Markgrafenstraße",
		"Markkleeberger Straße",
		"Markranstädter Straße",
		"Markt",
		"Markthallenstraße",
		"Marktstraße",
		"Marmontstraße",
		"Marpergerstraße",
		"Marschnerstraße",
		"Marsweg",
		"Martin-Drucker-Straße",
		"Martin-Herrmann-Straße",
		"Martin-Luther-Ring",
		"Martinsbogen",
		"Martinshöhe",
		"Martinsplatz",
		"Martinstraße",
		"Mascovstraße",
		"Mathiesenstraße",
		"Mathildenstraße",
		"Matthäikirchhof",
		"Mattheuerbogen",
		"Matthias-Erzberger-Straße",
		"Matthissonstraße",
		"Matzelstraße",
		"Mauersbergerstraße",
		"Maulbeerweg",
		"Maulwurfweg",
		"Max-Beckmann-Straße",
		"Max-Borsdorf-Straße",
		"Max-Liebermann-Straße",
		"Max-Lingner-Straße",
		"Max-Metzger-Straße",
		"Max-Planck-Straße",
		"Max-Pommer-Straße",
		"Max-Reger-Allee",
		"Max-Reger-Straße",
		"Max-Seyfert-Straße",
		"Maximilian-Kolbe-Weg",
		"Maximilianallee",
		"Mechlerstraße",
		"Mecklenburger Straße",
		"Meininger Ring",
		"Meisenweg",
		"Meißner Straße",
		"Melanchthonstraße",
		"Melchthalweg",
		"Melissenweg",
		"Melker Weg",
		"Melscher Straße",
		"Menckestraße",
		"Mendelejewstraße",
		"Mendelssohnstraße",
		"Menzingenweg",
		"Merkurpromenade",
		"Merkwitzer Landstraße",
		"Merkwitzer Straße",
		"Merseburger Straße",
		"Messe-Allee",
		"Meusdorfer Straße",
		"Michael-Kazmierczak-Straße",
		"Michaelisstraße",
		"Miekeweg",
		"Mierendorffstraße",
		"Milanweg",
		"Miltenberger Straße",
		"Miltitzer Allee",
		"Miltitzer Dorfstraße",
		"Miltitzer Straße",
		"Miltitzer Weg",
		"Mistelbacher Weg",
		"Mistelbogen",
		"Mitschurinring",
		"Mitschurinstraße",
		"Mittelgasse",
		"Mittelring",
		"Mittelstraße",
		"Mittelweg",
		"Möbiusplatz",
		"Möbiusstraße",
		"Mockauer Ring",
		"Mockauer Straße",
		"Möckernsche Allee",
		"Möckernsche Straße",
		"Möckernscher Weg",
		"Mohnweg",
		"Molitorstraße",
		"Mölkauer Dorfplatz",
		"Mölkauer Straße",
		"Moltkestraße",
		"Moltrechtstraße",
		"Mommsenstraße",
		"Monarchenhügel",
		"Moosbeerweg",
		"Moränenweg",
		"Morawitzstraße",
		"Morellenweg",
		"Morgensternstraße",
		"Mörikestraße",
		"Morungenstraße",
		"Moschelesstraße",
		"Mosenthinstraße",
		"Mothesstraße",
		"Mottelerstraße",
		"Möwenweg",
		"Mozartstraße",
		"Mückenhainer Weg",
		"Mühlbergsiedlung",
		"Mühlenplatz",
		"Mühlenstraße",
		"Mühlenweg",
		"Mühlgrabenweg",
		"Mühlholzgasse",
		"Mühligstraße",
		"Mühlparkweg",
		"Mühlstraße",
		"Mühlweg",
		"Muldentalstraße",
		"Müllerring",
		"Münzgasse",
		"Nachtigallenhain",
		"Nachtigallenweg",
		"Nagelstraße",
		"Narsdorfer Straße",
		"Narzissenweg",
		"Naschmarkt",
		"Natalienstraße",
		"Nathanaelstraße",
		"Nathusiusstraße",
		"Natonekstraße",
		"Naumburger Straße",
		"Naundörfchen",
		"Naunhofer Landstraße",
		"Naunhofer Straße",
		"Nelkenweg",
		"Neptunweg",
		"Nerchauer Straße",
		"Nernststraße",
		"Neubauernstraße",
		"Neuberinstraße",
		"Neuburghausener Weg",
		"Neudorfgasse",
		"Neue Gutenbergstraße",
		"Neue Hallesche Straße",
		"Neue Leipziger Straße",
		"Neue Linie",
		"Neue Straße",
		"Neuenburger Weg",
		"Neuer Ring",
		"Neuer Weg",
		"Neumannstraße",
		"Neumarkt",
		"Neunkirchener Straße",
		"Neuscherbitzer Gasse",
		"Neustädter Markt",
		"Neustädter Straße",
		"Neutzscher Straße",
		"Newtonstraße",
		"Nibelungenring",
		"Nickelmannweg",
		"Niederkirchnerstraße",
		"Nienborgstraße",
		"Nieritzstraße",
		"Nietzschestraße",
		"Nikischplatz",
		"Nikischstraße",
		"Nikolai-Rumjanzew-Straße",
		"Nikolaikirchhof",
		"Nikolaistraße",
		"Nimrodstraße",
		"Nixenweg",
		"Nobbeweg",
		"Nollendorfstraße",
		"Nonnenmühlgasse",
		"Nonnenstraße",
		"Nonnenweg",
		"Norderneyer Weg",
		"Nordhäuser Weg",
		"Nordplatz",
		"Nordstraße",
		"Nordweg",
		"Nürnberger Straße",
		"Nußbaumallee",
		"Nußbaumweg",
		"Oberdorfstraße",
		"Obere Eichstädtstraße",
		"Obere Mühlenstraße",
		"Obere Nordstraße",
		"Oberhofer Weg",
		"Oberholzstraße",
		"Oberläuterstraße",
		"Obernaundorfer Straße",
		"Obludastraße",
		"Ochsenweg",
		"Odermannstraße",
		"Oelßnerstraße",
		"Oelsnitzer Straße",
		"Oertgering",
		"Oeserstraße",
		"Offenbachweg",
		"Offenburger Straße",
		"Ohmweg",
		"Olbernhauer Straße",
		"Olbrichtstraße",
		"Olchinger Straße",
		"Oldenburger Straße",
		"Oleanderweg",
		"Ölhafenstraße",
		"Onckenstraße",
		"Opalstraße",
		"Opferweg",
		"Orchideenweg",
		"Orenburger Weg",
		"Ortrunweg",
		"Oschatzer Straße",
		"Oskar-Calov-Straße",
		"Ossietzkystraße",
		"Osten-Sacken-Weg",
		"Ostende",
		"Österreicherweg",
		"Ostheimstraße",
		"Osthöhe",
		"Ostplatz",
		"Ostrowskistraße",
		"Oststraße",
		"Ostwaldstraße",
		"Oswald-Kahnt-Ring",
		"Oswaldstraße",
		"Otterstraße",
		"Otto-Adam-Straße",
		"Otto-Engert-Straße",
		"Otto-Heinze-Straße",
		"Otto-Michael-Straße",
		"Otto-Militzer-Straße",
		"Otto-Runki-Platz",
		"Otto-Schill-Straße",
		"Otto-Schmiedt-Straße",
		"Otto-Thiele-Straße",
		"Ottostraße",
		"Packhofstraße",
		"Pahlenweg",
		"Palmstraße",
		"Panitzstraße",
		"Pansastraße",
		"Papiermühlstraße",
		"Papitzer Straße",
		"Pappelblick",
		"Pappelhof",
		"Pappelweg",
		"Parkallee",
		"Parkring",
		"Parkstraße",
		"Parkweg",
		"Parthenstraße",
		"Pater-Aurelius-Platz",
		"Pater-Gordian-Straße",
		"Paul-Ernst-Straße",
		"Paul-Flechsig-Straße",
		"Paul-Gerhardt-Weg",
		"Paul-Gruner-Straße",
		"Paul-Heyse-Straße",
		"Paul-Klöpsch-Straße",
		"Paul-Küstner-Straße",
		"Paul-Langheinrich-Straße",
		"Paul-List-Straße",
		"Paul-Michael-Straße",
		"Paul-Schneider-Straße",
		"Paulinengrund",
		"Paulinenstraße",
		"Paulinerweg",
		"Paunsdorfer Allee",
		"Paunsdorfer Straße",
		"Paußnitzstraße",
		"Payrstraße",
		"Peilickestraße",
		"Pelzgasse",
		"Penckstraße",
		"Perlickstraße",
		"Perlpilzweg",
		"Permoserstraße",
		"Perrestraße",
		"Perthesstraße",
		"Pestalozzistraße",
		"Peter-Breuer-Weg",
		"Peterskirchhof",
		"Peterssteinweg",
		"Petersstraße",
		"Pettenkoferstraße",
		"Petzscher Straße",
		"Pfaffendorfer Straße",
		"Pfaffensteinstraße",
		"Pfaffenweg",
		"Pfarrholzstraße",
		"Pfarrweg",
		"Pfeffingerstraße",
		"Pfeilstraße",
		"Pferdnerstraße",
		"Pfingstweide",
		"Pflaumenallee",
		"Pflaumestraße",
		"Pflugkstraße",
		"Philipp-Reis-Straße",
		"Philipp-Rosenthal-Straße",
		"Philippine-Arndt-Weg",
		"Phoenixweg",
		"Pilzanger",
		"Pirolweg",
		"Pistorisstraße",
		"Pitschkestraße",
		"Pittlerstraße",
		"Plantagenweg",
		"Platanenstraße",
		"Platanenweg",
		"Platnerstraße",
		"Platostraße",
		"Platz des 20. Juli 1944",
		"Plauensche Straße",
		"Plaußiger Dorfstraße",
		"Plaußiger Straße",
		"Plaußiger Weg",
		"Plautstraße",
		"Plösener Straße",
		"Ploßstraße",
		"Plovdiver Straße",
		"Podelwitzer Straße",
		"Podelwitzer Weg",
		"Poetenweg",
		"Pögnerstraße",
		"Pohlentzstraße",
		"Pohlestraße",
		"Polenweg",
		"Pölitzstraße",
		"Polluxweg",
		"Pommernstraße",
		"Poniatowskiplan",
		"Ponickaustraße",
		"Popitzweg",
		"Pöppelmannstraße",
		"Pöppigstraße",
		"Porschestraße",
		"Pörstener Straße",
		"Portitzer Allee",
		"Portitzer Straße",
		"Portitzer Winkel",
		"Portitzmühlweg",
		"Porzcikstraße",
		"Porzellangasse",
		"Posadowskyanlagen",
		"Posastraße",
		"Poserstraße",
		"Pösgrabenweg",
		"Pösnaer Straße",
		"Postreitergasse",
		"Poststraße",
		"Potschkaustraße",
		"Pötzschker Weg",
		"Prager Straße",
		"Preiselbeerweg",
		"Prellerstraße",
		"Preußenseite",
		"Preußenstraße",
		"Preußergäßchen",
		"Prießnitzstraße",
		"Primavesistraße",
		"Primelweg",
		"Prinz-Eugen-Straße",
		"Prinzenweg",
		"Probsteistraße",
		"Probstheidaer Straße",
		"Prof.-Andreas-Schubert-Straße",
		"Prof.-Dr.-Koch-Straße",
		"Pröttitzer Weg",
		"Prünstraße",
		"Püchauer Straße",
		"Pufendorfstraße",
		"Puschkinstraße",
		"Puschstraße",
		"Quasnitzer Höhe",
		"Quasnitzer Weg",
		"Queckstraße",
		"Quedlinburger Straße",
		"Quermaße",
		"Querstraße",
		"Querweg",
		"Quittenweg",
		"Rabenerstraße",
		"Rabensteinplatz",
		"Rabenweg",
		"Rabet",
		"Rackwitzer Straße",
		"Radefelder Allee",
		"Radefelder Straße",
		"Radefelder Weg",
		"Radiusstraße",
		"Raiffeisenstraße",
		"Raimundstraße",
		"Ranftsche Gasse",
		"Rankestraße",
		"Ranstädter Steinweg",
		"Räpitzer Straße",
		"Rapsweg",
		"Rapunzelweg",
		"Raschwitzer Straße",
		"Rasenweg",
		"Rathausring",
		"Rathausstraße",
		"Rathenaustraße",
		"Ratsfreischulstraße",
		"Ratzelstraße",
		"Rauchfussweg",
		"Raustraße",
		"Rebhuhnsteig",
		"Reclamstraße",
		"Regenbogen",
		"Regensburger Straße",
		"Reginenstraße",
		"Rehbacher Anger",
		"Rehbacher Straße",
		"Rehpfad",
		"Rehwagenstraße",
		"Reichelstraße",
		"Reichenberger Straße",
		"Reichpietschstraße",
		"Reichsbahnerstraße",
		"Reichsstraße",
		"Reiherweg",
		"Reineckestraße",
		"Reinhardtstraße",
		"Reinhold-Krüger-Straße",
		"Reinhold-Schulze-Straße",
		"Reinmuthweg",
		"Reiskestraße",
		"Reiterallee",
		"Rembrandtplatz",
		"Rembrandtstraße",
		"Renftstraße",
		"Renkwitzstraße",
		"Rennbahnweg",
		"Renoirstraße",
		"Resedaweg",
		"Residenzstraße",
		"Reudnitzer Straße",
		"Reuningstraße",
		"Richard-Dittrich-Straße",
		"Richard-Lehmann-Straße",
		"Richard-Leisebein-Straße",
		"Richard-Springer-Weg",
		"Richard-Strauss-Platz",
		"Richard-Wagner-Platz",
		"Richard-Wagner-Straße",
		"Richterstraße",
		"Riebeckstraße",
		"Riedelstraße",
		"Riemannstraße",
		"Riesaer Straße",
		"Riesenweg",
		"Rietschelstraße",
		"Rietzschkebogen",
		"Rietzschkegrund",
		"Rietzschkeweg",
		"Rietzschkewiesen",
		"Rinckartstraße",
		"Ringelnatzweg",
		"Ringstraße",
		"Ringweg",
		"Rippachtalstraße",
		"Ritter-Pflugk-Straße",
		"Rittergutsstraße",
		"Ritterlingsweg",
		"Ritterspornweg",
		"Ritterstraße",
		"Robert-Blum-Platz",
		"Robert-Blum-Straße",
		"Robert-Hanf-Weg",
		"Robert-Koch-Platz",
		"Robert-Koch-Straße",
		"Robert-Koch-Weg",
		"Robert-Mayer-Straße",
		"Robert-Schumann-Straße",
		"Robert-Volkmann-Straße",
		"Robinienweg",
		"Rochlitzstraße",
		"Röckener Straße",
		"Rodelandstraße",
		"Rodelbahn",
		"Rödelstraße",
		"Rodinweg",
		"Roggenring",
		"Rohrteichstraße",
		"Rolf-Axen-Straße",
		"Rollerweg",
		"Romain-Rolland-Weg",
		"Römhilder Weg",
		"Röntgenstraße",
		"Rosa-Luxemburg-Straße",
		"Roßbachstraße",
		"Roscherstraße",
		"Roseggerstraße",
		"Roseggerweg",
		"Rosenbaumstraße",
		"Rosenholzweg",
		"Rosenmüllerstraße",
		"Rosenowstraße",
		"Rosenstraße",
		"Rosentalgasse",
		"Rosenweg",
		"Rosestraße",
		"Roßlauer Straße",
		"Rosmarinweg",
		"Roßmarkt",
		"Roßmarktstraße",
		"Roßmäßlerstraße",
		"Roßplatz",
		"Roßstraße",
		"Rostocker Straße",
		"Rotbuchenweg",
		"Rotdornstraße",
		"Rotfuchsstraße",
		"Rothenburger Straße",
		"Rotheplatz",
		"Röthische Straße",
		"Rotkäppchenweg",
		"Rotkehlchenweg",
		"Rousseaustraße",
		"Rubensstraße",
		"Rübezahlweg",
		"Rubinstraße",
		"Rückertstraße",
		"Rückmarsdorfer Straße",
		"Rudi-Opitz-Straße",
		"Rüdigerstraße",
		"Rudolf-Breitscheid-Hof",
		"Rudolf-Breitscheid-Straße",
		"Rudolph-Herrmann-Straße",
		"Rudolph-Sack-Straße",
		"Rudolphstraße",
		"Rundkapellenweg",
		"Russenstraße",
		"Ruststraße",
		"Saalecker Straße",
		"Saalfelder Straße",
		"Saarbrückenstraße",
		"Saarländer Straße",
		"Saarlouiser Straße",
		"Sabinenstraße",
		"Sachsenhöhe",
		"Sachsenlinie",
		"Sachsenseite",
		"Sachsenstraße",
		"Sackestraße",
		"Safranweg",
		"Salamanderstraße",
		"Salbeiweg",
		"Salomonstraße",
		"Salzgäßchen",
		"Salzhandelsstraße",
		"Salzmannstraße",
		"Salzstraße",
		"Salzweg",
		"Samuel-Lampel-Straße",
		"Sandberg",
		"Sanddornweg",
		"Sandgrubenweg",
		"Sandmännchenweg",
		"Sandweg",
		"Saphirstraße",
		"Sasstraße",
		"Sattelhofstraße",
		"Sattlerweg",
		"Saturnstraße",
		"Saxoniastraße",
		"Schacherstraße",
		"Schachtstraße",
		"Schadowstraße",
		"Schäferweg",
		"Schäferwinkel",
		"Schandauer Weg",
		"Scharnhorststraße",
		"Schatzweg",
		"Schauerstraße",
		"Scheffelstraße",
		"Scheibenholzweg",
		"Schellingstraße",
		"Schenderleinstraße",
		"Schenkendorfstraße",
		"Scherlstraße",
		"Scheumannstraße",
		"Schiebestraße",
		"Schildberger Weg",
		"Schillerplatz",
		"Schillerstraße",
		"Schillerweg",
		"Schillingstraße",
		"Schimmelstraße",
		"Schinkelstraße",
		"Schirmerstraße",
		"Schkeitbarer Weg",
		"Schkeuditzer Straße",
		"Schkorlopper Straße",
		"Schladitzer Straße",
		"Schlegelstraße",
		"Schlehdornweg",
		"Schlehenweg",
		"Schlesierstraße",
		"Schletterstraße",
		"Schleußiger Weg",
		"Schlippe",
		"Schlößchenweg",
		"Schloßgasse",
		"Schloßweg",
		"Schlotterbeckstraße",
		"Schmalkaldener Weg",
		"Schmetterlingsweg",
		"Schmidstraße",
		"Schmidt-Rühl-Straße",
		"Schmiedeberger Straße",
		"Schmiedegasse",
		"Schmiedestraße",
		"Schmitzstraße",
		"Schmutzlerstraße",
		"Schneeballweg",
		"Schneeberger Straße",
		"Schneewittchenweg",
		"Schneiderstraße",
		"Schnittergasse",
		"Schnorrstraße",
		"Schöfflerweg",
		"Schomburgkstraße",
		"Schönauer Allee",
		"Schönauer Lachen",
		"Schönauer Landstraße",
		"Schönauer Ring",
		"Schönauer Straße",
		"Schönauer Weg",
		"Schönbachstraße",
		"Schönbergstraße",
		"Schönefelder Allee",
		"Schönefelder Straße",
		"Schongauerstraße",
		"Schopenhauerstraße",
		"Schorlemmerstraße",
		"Schorndorfer Weg",
		"Schrägweg",
		"Schrammsteinstraße",
		"Schrebergäßchen",
		"Schreberstraße",
		"Schreiberstraße",
		"Schreinerweg",
		"Schröderstraße",
		"Schröterstraße",
		"Schubarthstraße",
		"Schubertstraße",
		"Schuhmachergäßchen",
		"Schulgasse",
		"Schulstraße",
		"Schulweg",
		"Schulze-Boysen-Straße",
		"Schulze-Delitzsch-Straße",
		"Schulzeweg",
		"Schützenhausstraße",
		"Schützenstraße",
		"Schützstraße",
		"Schwabacher Straße",
		"Schwägrichenstraße",
		"Schwalbenweg",
		"Schwanenweg",
		"Schwantesstraße",
		"Schwartzestraße",
		"Schwarzackerstraße",
		"Schwarzdornweg",
		"Schwarzenbergweg",
		"Schwarzer Weg",
		"Schwedenstraße",
		"Schweinfurter Straße",
		"Schweizerbogen",
		"Schwimmerstraße",
		"Schwindstraße",
		"Schwylststraße",
		"Scipiostraße",
		"Sebastian-Bach-Straße",
		"Seebenischer Straße",
		"Seebogen",
		"Seeburgstraße",
		"Seegeritzer Straße",
		"Seegeritzer Weg",
		"Seehausener Allee",
		"Seehausener Straße",
		"Seelenbinderstraße",
		"Seelestraße",
		"Seemannstraße",
		"Seestraße",
		"Seeweg",
		"Seffnerstraße",
		"Segerstraße",
		"Seidelstraße",
		"Seidengasse",
		"Seifertshainer Straße",
		"Seiffener Straße",
		"Seilerweg",
		"Seipelweg",
		"Seitengasse",
		"Seitenstraße",
		"Seitenweg",
		"Sellerhausen-Stünz",
		"Sellerhäuser Straße",
		"Selliner Straße",
		"Selneckerstraße",
		"Semmelweisstraße",
		"Semperstraße",
		"Senefelderstraße",
		"Sesenheimer Straße",
		"Seumestraße",
		"Shakespeareplatz",
		"Shakespearestraße",
		"Shukowstraße",
		"Siedlereck",
		"Siedlerweg",
		"Siegfriedplatz",
		"Siegfriedstraße",
		"Siemensstraße",
		"Siemeringstraße",
		"Sigebandweg",
		"Sigismundstraße",
		"Silbermannstraße",
		"Silcherstraße",
		"Simildenstraße",
		"Simón-Bolívar-Straße",
		"Simonsplatz",
		"Simsonplatz",
		"Simsonstraße",
		"Singdrosselweg",
		"Siriusweg",
		"Slevogtstraße",
		"Smaragdstraße",
		"Söllichauer Straße",
		"Sommerfelder Straße",
		"Sommerfelder Weg",
		"Sommerlindenstraße",
		"Sonneberger Weg",
		"Sonnenblumenweg",
		"Sonnengasse",
		"Sonnenweg",
		"Sonnenwinkel",
		"Sophie-Scholl-Straße",
		"Sophienstraße",
		"Sorbenstraße",
		"Sorbenweg",
		"Sosaer Straße",
		"Spalierweg",
		"Spatzenweg",
		"Spechtweg",
		"Spendegasse",
		"Sperlingsgasse",
		"Sperlingsgrund",
		"Sperontesstraße",
		"Spetlakstraße",
		"Spinnereistraße",
		"Spittastraße",
		"Spitzwegstraße",
		"Spohrstraße",
		"Sporergäßchen",
		"Sportplatzstraße",
		"Sportplatzweg",
		"Sprikkenweg",
		"Sprikkenwinkel",
		"Springerstraße",
		"Staffelsteinstraße",
		"Stahmelner Allee",
		"Stahmelner Anger",
		"Stahmelner Höhe",
		"Stahmelner Straße",
		"Stallbaumstraße",
		"Stammerstraße",
		"Stammstraße",
		"Stannebeinplatz",
		"Stauffacherweg",
		"Stauffenbergstraße",
		"Stefan-Zweig-Straße",
		"Steffensstraße",
		"Stegerwaldstraße",
		"Steinbachweg",
		"Steinberger Straße",
		"Steinbergstraße",
		"Steinpilzweg",
		"Steinstraße",
		"Steinweg",
		"Stentzlerstraße",
		"Stephaniplatz",
		"Stephanstraße",
		"Sternbachstraße",
		"Sternenstraße",
		"Sternenwinkel",
		"Sternheimstraße",
		"Sterntalerweg",
		"Sternwartenstraße",
		"Sternwartenweg",
		"Stieglitzstraße",
		"Stieglitzweg",
		"Stifterstraße",
		"Stiftsstraße",
		"Stockartstraße",
		"Stöckelplatz",
		"Stöckelstraße",
		"Stockmannstraße",
		"Stockstraße",
		"Stöhrerstraße",
		"Stollberger Straße",
		"Stollestraße",
		"Storchenweg",
		"Stormstraße",
		"Störmthaler Straße",
		"Stötteritzer Landstraße",
		"Stötteritzer Straße",
		"Stralsunder Straße",
		"Straßbergerstraße",
		"Straße am Park",
		"Straße am See",
		"Straße der 53",
		"Straße der Einheit",
		"Straße des 17. Juni",
		"Straße des 18. Oktober",
		"Strelitzer Straße",
		"Stresemannstraße",
		"Stroganowweg",
		"Strümpellstraße",
		"Stünz-Mölkauer Weg",
		"Stünzer Straße",
		"Stünzer Weg",
		"Sturmweg",
		"Stuttgarter Allee",
		"Südblick",
		"Südplatz",
		"Südstraße",
		"Südtangente",
		"Suhler Straße",
		"Sulzbacher Straße",
		"Swiftstraße",
		"Sybelstraße",
		"Sylter Straße",
		"Szendreistraße",
		"Tabakgasse",
		"Talstraße",
		"Tannenwaldstraße",
		"Tannenweg",
		"Tarostraße",
		"Täschners Garten",
		"Täschnerstraße",
		"Täubchenweg",
		"Taubenbergweg",
		"Taubestraße",
		"Tauchaer Straße",
		"Taurusweg",
		"Teerosenweg",
		"Teichgräberstraße",
		"Teichmannstraße",
		"Teichstraße",
		"Teichweg",
		"Telemannstraße",
		"Tellweg",
		"Tennstedter Weg",
		"Teschstraße",
		"Teslastraße",
		"Teubnerstraße",
		"Thaerstraße",
		"Thärigenstraße",
		"Theklaer Straße",
		"Theobald-Beer-Straße",
		"Theodor-Heuss-Straße",
		"Theodor-Kunz-Ring",
		"Theodor-Neubauer-Straße",
		"Theodor-Voigt-Straße",
		"Theresienstraße",
		"Thiemstraße",
		"Thierbacher Straße",
		"Thierschstraße",
		"Thietmarstraße",
		"Thomas-Mann-Straße",
		"Thomas-Müntzer-Straße",
		"Thomas-Wagner-Straße",
		"Thomasgasse",
		"Thomasiusstraße",
		"Thomaskirchhof",
		"Thonberg",
		"Thonberger Straße",
		"Threnaer Straße",
		"Thünenstraße",
		"Thüringer Straße",
		"Thymianweg",
		"Tieckstraße",
		"Tiefe Straße",
		"Tiemannstraße",
		"Tilman-Riemenschneider-Weg",
		"Tintlingsweg",
		"Tirolerweg",
		"Tischbeinstraße",
		"Titaniaweg",
		"Tollweg",
		"Topasstraße",
		"Töpferstraße",
		"Töpferweg",
		"Torgauer Platz",
		"Torgauer Straße",
		"Tornauer Straße",
		"Torstensonring",
		"Torweg",
		"Toskastraße",
		"Trattendorfer Weg",
		"Traubengasse",
		"Travniker Straße",
		"Trendelenburgstraße",
		"Tresckowstraße",
		"Triftsiedlung",
		"Triftstraße",
		"Triftweg",
		"Trinitatisstraße",
		"Tröndlinring",
		"Trötzschelstraße",
		"Trufanowstraße",
		"Trusetaler Weg",
		"Tschaikowskistraße",
		"Tschammerstraße",
		"Tschechenbogen",
		"Tschernyschewskistraße",
		"Tübkebogen",
		"Tucholskystraße",
		"Tulpenweg",
		"Turgenjewstraße",
		"Türkisstraße",
		"Turmalinstraße",
		"Turmgutstraße",
		"Turmweg",
		"Turnerstraße",
		"Uferstraße",
		"Uhlandstraße",
		"Uhlandweg",
		"Uhrigstraße",
		"Ulmenweg",
		"Ulmer Straße",
		"Ulrichstraße",
		"Undinenweg",
		"Ungerstraße",
		"Universitätsstraße",
		"Untere Eichstädtstraße",
		"Untere Mühlenstraße",
		"Untere Nordstraße",
		"Unterer Sandweg",
		"Uranusstraße",
		"Ursula-Götze-Straße",
		"Václav-Neumann-Straße",
		"Vater-Jahn-Straße",
		"Veilchenweg",
		"Verdistraße",
		"Verlängerte Max-Liebermann-Straße",
		"Verlängerte Schwedenstraße",
		"Verlängerte Wilhelmstraße",
		"Verrinaweg",
		"Viaduktweg",
		"Vierackerwiesen",
		"Viertelsweg",
		"Vierzehn-Bäume-Weg",
		"Viktoriastraße",
		"Virchowstraße",
		"Vivaldistraße",
		"Vlamenstraße",
		"Voigtstraße",
		"Volbedingstraße",
		"Volckmarstraße",
		"Volkmarsdorfer Markt",
		"Volksgartenstraße",
		"Vollhardtstraße",
		"Voltairestraße",
		"Voltaweg",
		"Vor dem Hospitaltore",
		"Vordere Schlobachstraße",
		"Wachauer Straße",
		"Wachberg",
		"Wachbergallee",
		"Wacholderweg",
		"Wachsmuthstraße",
		"Wachtelsteig",
		"Wächterstraße",
		"Wahrener Straße",
		"Waldbaurstraße",
		"Waldblick",
		"Waldemar-Götze-Straße",
		"Waldkerbelstraße",
		"Waldmeisterweg",
		"Waldplatz",
		"Waldrebenweg",
		"Waldstraße",
		"Waldweg",
		"Waldwinkel",
		"Waldzieststraße",
		"Walnußweg",
		"Walter-Albrecht-Weg",
		"Walter-Barth-Straße",
		"Walter-Cramer-Straße",
		"Walter-Günther-Weg",
		"Walter-Heinze-Straße",
		"Walter-Heise-Straße",
		"Walter-Köhn-Straße",
		"Walter-Markov-Ring",
		"Walterweg",
		"Walther-Rathenau-Straße",
		"Wangerooger Weg",
		"Wartenburgstraße",
		"Wasserstraße",
		"Wasserturmstraße",
		"Wasserturmweg",
		"Wasserwerkstraße",
		"Wasserwerksweg",
		"Wasunger Straße",
		"Watestraße",
		"Watzdorfstraße",
		"Weberknechtstraße",
		"Wegastraße",
		"Weheweg",
		"Wehrmannstraße",
		"Weickmannweg",
		"Weidenbachplan",
		"Weidenhof",
		"Weidenhofweg",
		"Weidenweg",
		"Weidlichstraße",
		"Weidmannstraße",
		"Weidmannweg",
		"Weigandtweg",
		"Weigelienstraße",
		"Weimarer Straße",
		"Weinberg",
		"Weinbergstraße",
		"Weinbrennerstraße",
		"Weinligstraße",
		"Weißdornstraße",
		"Weißdornweg",
		"Weißenfelser Straße",
		"Weißeplatz",
		"Weißestraße",
		"Weizenweg",
		"Wenckstraße",
		"Wendelin-Hipler-Weg",
		"Wendenstraße",
		"Wendlerstraße",
		"Werfelstraße",
		"Werkstättenstraße",
		"Werkstättenweg",
		"Werkstraße",
		"Wermsdorfer Straße",
		"Wernerstraße",
		"Wertheimer Straße",
		"Westplatz",
		"Weststraße",
		"Wettiner Straße",
		"Wetzelweg",
		"Wichernstraße",
		"Wiebelstraße",
		"Wiedebachplatz",
		"Wiedebachstraße",
		"Wiederitzscher Landstraße",
		"Wiederitzscher Straße",
		"Wiederitzscher Weg",
		"Wielandstraße",
		"Wieselsteig",
		"Wieselstraße",
		"Wiesenblumenweg",
		"Wiesengrund",
		"Wiesenrain",
		"Wiesenring",
		"Wiesenstraße",
		"Wiesenweg",
		"Wiesenwinkel",
		"Wigandstraße",
		"Wigmanstraße",
		"Wildbuschweg",
		"Wildentensteig",
		"Wildschweinpfad",
		"Wilhelm-Busch-Straße",
		"Wilhelm-His-Straße",
		"Wilhelm-Leuschner-Platz",
		"Wilhelm-Liebknecht-Platz",
		"Wilhelm-Michel-Straße",
		"Wilhelm-Pfennig-Straße",
		"Wilhelm-Plesse-Straße",
		"Wilhelm-Sammet-Straße",
		"Wilhelm-Seyfferth-Straße",
		"Wilhelm-Wild-Straße",
		"Wilhelm-Winkler-Straße",
		"Wilhelm-Wundt-Platz",
		"Wilhelminenstraße",
		"Wilhelmstraße",
		"Willi-Bredel-Straße",
		"William-Zipperer-Straße",
		"Willmar-Schwabe-Ring",
		"Willmar-Schwabe-Straße",
		"Willy-Brandt-Platz",
		"Wilsnacker Straße",
		"Wincklerstraße",
		"Windmühlenstraße",
		"Windmühlenweg",
		"Windorfer Straße",
		"Windscheidstraße",
		"Windsheimer Straße",
		"Wingertgasse",
		"Winkelstraße",
		"Wintergartenstraße",
		"Wintzingerodeweg",
		"Winzerweg",
		"Wiprechtstraße",
		"Wiskenstraße",
		"Witkowskistraße",
		"Wittenberger Straße",
		"Wittestraße",
		"Wittgensteinweg",
		"Wittstockstraße",
		"Witzgallstraße",
		"Witzlebenstraße",
		"Wöbbeliner Straße",
		"Wodanstraße",
		"Wognaundorfer Gasse",
		"Wohlgemuthstraße",
		"Wolfener Straße",
		"Wolffstraße",
		"Wolfgang-Heinze-Straße",
		"Wolfshainer Straße",
		"Wölkauer Weg",
		"Wolkenweg",
		"Wollkämmereistraße",
		"Wöllnerstraße",
		"Wolteritzer Weg",
		"Wörlitzer Straße",
		"Wunderlichstraße",
		"Wundtstraße",
		"Würkertstraße",
		"Würzburger Straße",
		"Wurzner Straße",
		"Wustmannstraße",
		"Wuttkestraße",
		"Yorck-Diebitsch-Straße",
		"Yorckstraße",
		"Zadestraße",
		"Zauberweg",
		"Zaucheblick",
		"Zaucheweg",
		"Zaunkönigweg",
		"Zedernholzweg",
		"Zehmenstraße",
		"Zehmischstraße",
		"Zeisigweg",
		"Zeitzer Straße",
		"Zentralstraße",
		"Zerbster Straße",
		"Zeumerstraße",
		"Ziegeleiweg",
		"Ziegelstraße",
		"Zillerstraße",
		"Zillstraße",
		"Zimmerstraße",
		"Zingster Straße",
		"Zinnienweg",
		"Ziolkowskistraße",
		"Zirkonstraße",
		"Zittauer Straße",
		"Ziustraße",
		"Zolaweg",
		"Zollikoferstraße",
		"Zöllnerweg",
		"Zollschuppenstraße",
		"Zschampertaue",
		"Zschochersche Allee",
		"Zschochersche Straße",
		"Zschölkauer Weg",
		"Zschopauer Straße",
		"Zschortauer Straße",
		"Zu den Bruchwiesen",
		"Zu den Drei Kugeln",
		"Zu den Gärten",
		"Zu den Wiesen",
		"Zuckelhausener Ring",
		"Zuckelhäuser Straße",
		"Zum Alten Seebad",
		"Zum Alten Wasserwerk",
		"Zum Althener Sportplatz",
		"Zum Apelstein",
		"Zum Auwald",
		"Zum Bahnhof",
		"Zum Birkenwäldchen",
		"Zum Denkmal",
		"Zum Dölitzer Schacht",
		"Zum Feld",
		"Zum Förderturm",
		"Zum Forstgut",
		"Zum Frischemarkt",
		"Zum Haksch",
		"Zum Harfenacker",
		"Zum Kalten Born",
		"Zum Kleewinkel",
		"Zum Kleingartenpark",
		"Zum Leutzscher Holz",
		"Zum Lippenplan",
		"Zum Rosengarten",
		"Zum Schwinderplan",
		"Zum Sonnenblick",
		"Zum Wald",
		"Zum Waldbad",
		"Zum Wäldchen",
		"Zum Wasserturm",
		"Zum Winkel",
		"Zur Alten Bäckerei",
		"Zur Alten Sandgrube",
		"Zur Alten Schmiede",
		"Zur Alten Weintraube",
		"Zur Bauernwiese",
		"Zur Grünen Ecke",
		"Zur Heide",
		"Zur Kuhweide",
		"Zur Lehmbahn",
		"Zur Lindenhöhe",
		"Zur Loberaue",
		"Zur Rodelbahn",
		"Zur Sägemühle",
		"Zur Schule",
		"Zur Weißen Mark",
		"Zur Ziegelei",
		"Zusestraße",
		"Zweenfurther Straße",
		"Zweifelstraße",
		"Zweinaundorfer Straße",
		"Zwenkauer Straße",
		"Zwergasternweg",
		"Zwergenweg",
		"Zwergmispelstraße",
		"Zwetschgenweg",
		"Zwickauer Straße",
		"Zwiebelweg"
	];
	
	$( "#inputStrasse" ).autocomplete({
		source: availableTags,
		minLength: 3
	});
});*/	

// ------------------------------------------------------------------------
// contact_me.js: https://github.com/y7kim/agency-jekyll-theme/blob/gh-pages/js/contact_me.js
// ------------------------------------------------------------------------

$(function() {

    $("#contactForm :input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "././contact.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Nachricht wurde abgeschickt. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Entschuldigung " + firstName + ", anscheinend funktioniert unser Mailserver nicht richtig. Bitte versuche es später nochmal!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

// ------------------------------------------------------------------------
// contact_me.js: https://github.com/y7kim/agency-jekyll-theme/blob/gh-pages/js/contact_me.js
// ------------------------------------------------------------------------
/* jqBootstrapValidation
 * A plugin for automating validation on Twitter Bootstrap formatted forms.
 *
 * v1.3.6
 *
 * License: MIT <http://opensource.org/licenses/mit-license.php> - see LICENSE file
 *
 * http://ReactiveRaven.github.com/jqBootstrapValidation/
 */

(function( $ ){

	var createdElements = [];

	var defaults = {
		options: {
			prependExistingHelpBlock: false,
			sniffHtml: true, // sniff for 'required', 'maxlength', etc
			preventSubmit: true, // stop the form submit event from firing if validation fails
			submitError: false, // function called if there is an error when trying to submit
			submitSuccess: false, // function called just before a successful submit event is sent to the server
            semanticallyStrict: false, // set to true to tidy up generated HTML output
			autoAdd: {
				helpBlocks: true
			},
            filter: function () {
                // return $(this).is(":visible"); // only validate elements you can see
                return true; // validate everything
            }
		},
    methods: {
      init : function( options ) {

        var settings = $.extend(true, {}, defaults);

        settings.options = $.extend(true, settings.options, options);

        var $siblingElements = this;

        var uniqueForms = $.unique(
          $siblingElements.map( function () {
            return $(this).parents("form")[0];
          }).toArray()
        );

        $(uniqueForms).bind("submit", function (e) {
          var $form = $(this);
          var warningsFound = 0;
          var $inputs = $form.find("input,textarea,select").not("[type=submit],[type=image]").filter(settings.options.filter);
          $inputs.trigger("submit.validation").trigger("validationLostFocus.validation");

          $inputs.each(function (i, el) {
            var $this = $(el),
              $controlGroup = $this.parents(".control-group").first();
            if (
              $controlGroup.hasClass("warning")
            ) {
              $controlGroup.removeClass("warning").addClass("error");
              warningsFound++;
            }
          });

          $inputs.trigger("validationLostFocus.validation");

          if (warningsFound) {
            if (settings.options.preventSubmit) {
              e.preventDefault();
            }
            $form.addClass("error");
            if ($.isFunction(settings.options.submitError)) {
              settings.options.submitError($form, e, $inputs.jqBootstrapValidation("collectErrors", true));
            }
          } else {
            $form.removeClass("error");
            if ($.isFunction(settings.options.submitSuccess)) {
              settings.options.submitSuccess($form, e);
            }
          }
        });

        return this.each(function(){

          // Get references to everything we're interested in
          var $this = $(this),
            $controlGroup = $this.parents(".control-group").first(),
            $helpBlock = $controlGroup.find(".help-block").first(),
            $form = $this.parents("form").first(),
            validatorNames = [];

          // create message container if not exists
          if (!$helpBlock.length && settings.options.autoAdd && settings.options.autoAdd.helpBlocks) {
              $helpBlock = $('<div class="help-block" />');
              $controlGroup.find('.controls').append($helpBlock);
							createdElements.push($helpBlock[0]);
          }

          // =============================================================
          //                                     SNIFF HTML FOR VALIDATORS
          // =============================================================

          // *snort sniff snuffle*

          if (settings.options.sniffHtml) {
            var message = "";
            // ---------------------------------------------------------
            //                                                   PATTERN
            // ---------------------------------------------------------
            if ($this.attr("pattern") !== undefined) {
              message = "Not in the expected format<!-- data-validation-pattern-message to override -->";
              if ($this.data("validationPatternMessage")) {
                message = $this.data("validationPatternMessage");
              }
              $this.data("validationPatternMessage", message);
              $this.data("validationPatternRegex", $this.attr("pattern"));
            }
            // ---------------------------------------------------------
            //                                                       MAX
            // ---------------------------------------------------------
            if ($this.attr("max") !== undefined || $this.attr("aria-valuemax") !== undefined) {
              var max = ($this.attr("max") !== undefined ? $this.attr("max") : $this.attr("aria-valuemax"));
              message = "Too high: Maximum of '" + max + "'<!-- data-validation-max-message to override -->";
              if ($this.data("validationMaxMessage")) {
                message = $this.data("validationMaxMessage");
              }
              $this.data("validationMaxMessage", message);
              $this.data("validationMaxMax", max);
            }
            // ---------------------------------------------------------
            //                                                       MIN
            // ---------------------------------------------------------
            if ($this.attr("min") !== undefined || $this.attr("aria-valuemin") !== undefined) {
              var min = ($this.attr("min") !== undefined ? $this.attr("min") : $this.attr("aria-valuemin"));
              message = "Too low: Minimum of '" + min + "'<!-- data-validation-min-message to override -->";
              if ($this.data("validationMinMessage")) {
                message = $this.data("validationMinMessage");
              }
              $this.data("validationMinMessage", message);
              $this.data("validationMinMin", min);
            }
            // ---------------------------------------------------------
            //                                                 MAXLENGTH
            // ---------------------------------------------------------
            if ($this.attr("maxlength") !== undefined) {
              message = "Too long: Maximum of '" + $this.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->";
              if ($this.data("validationMaxlengthMessage")) {
                message = $this.data("validationMaxlengthMessage");
              }
              $this.data("validationMaxlengthMessage", message);
              $this.data("validationMaxlengthMaxlength", $this.attr("maxlength"));
            }
            // ---------------------------------------------------------
            //                                                 MINLENGTH
            // ---------------------------------------------------------
            if ($this.attr("minlength") !== undefined) {
              message = "Too short: Minimum of '" + $this.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->";
              if ($this.data("validationMinlengthMessage")) {
                message = $this.data("validationMinlengthMessage");
              }
              $this.data("validationMinlengthMessage", message);
              $this.data("validationMinlengthMinlength", $this.attr("minlength"));
            }
            // ---------------------------------------------------------
            //                                                  REQUIRED
            // ---------------------------------------------------------
            if ($this.attr("required") !== undefined || $this.attr("aria-required") !== undefined) {
              message = settings.builtInValidators.required.message;
              if ($this.data("validationRequiredMessage")) {
                message = $this.data("validationRequiredMessage");
              }
              $this.data("validationRequiredMessage", message);
            }
            // ---------------------------------------------------------
            //                                                    NUMBER
            // ---------------------------------------------------------
            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "number") {
              message = settings.builtInValidators.number.message;
              if ($this.data("validationNumberMessage")) {
                message = $this.data("validationNumberMessage");
              }
              $this.data("validationNumberMessage", message);
            }
            // ---------------------------------------------------------
            //                                                     EMAIL
            // ---------------------------------------------------------
            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "email") {
              message = "Keine gültige Mailadresse!<!-- data-validator-validemail-message to override -->";
              if ($this.data("validationValidemailMessage")) {
                message = $this.data("validationValidemailMessage");
              } else if ($this.data("validationEmailMessage")) {
                message = $this.data("validationEmailMessage");
              }
              $this.data("validationValidemailMessage", message);
            }
            // ---------------------------------------------------------
            //                                                MINCHECKED
            // ---------------------------------------------------------
            if ($this.attr("minchecked") !== undefined) {
              message = "Not enough options checked; Minimum of '" + $this.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->";
              if ($this.data("validationMincheckedMessage")) {
                message = $this.data("validationMincheckedMessage");
              }
              $this.data("validationMincheckedMessage", message);
              $this.data("validationMincheckedMinchecked", $this.attr("minchecked"));
            }
            // ---------------------------------------------------------
            //                                                MAXCHECKED
            // ---------------------------------------------------------
            if ($this.attr("maxchecked") !== undefined) {
              message = "Too many options checked; Maximum of '" + $this.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->";
              if ($this.data("validationMaxcheckedMessage")) {
                message = $this.data("validationMaxcheckedMessage");
              }
              $this.data("validationMaxcheckedMessage", message);
              $this.data("validationMaxcheckedMaxchecked", $this.attr("maxchecked"));
            }
          }

          // =============================================================
          //                                       COLLECT VALIDATOR NAMES
          // =============================================================

          // Get named validators
          if ($this.data("validation") !== undefined) {
            validatorNames = $this.data("validation").split(",");
          }

          // Get extra ones defined on the element's data attributes
          $.each($this.data(), function (i, el) {
            var parts = i.replace(/([A-Z])/g, ",$1").split(",");
            if (parts[0] === "validation" && parts[1]) {
              validatorNames.push(parts[1]);
            }
          });

          // =============================================================
          //                                     NORMALISE VALIDATOR NAMES
          // =============================================================

          var validatorNamesToInspect = validatorNames;
          var newValidatorNamesToInspect = [];

          do // repeatedly expand 'shortcut' validators into their real validators
          {
            // Uppercase only the first letter of each name
            $.each(validatorNames, function (i, el) {
              validatorNames[i] = formatValidatorName(el);
            });

            // Remove duplicate validator names
            validatorNames = $.unique(validatorNames);

            // Pull out the new validator names from each shortcut
            newValidatorNamesToInspect = [];
            $.each(validatorNamesToInspect, function(i, el) {
              if ($this.data("validation" + el + "Shortcut") !== undefined) {
                // Are these custom validators?
                // Pull them out!
                $.each($this.data("validation" + el + "Shortcut").split(","), function(i2, el2) {
                  newValidatorNamesToInspect.push(el2);
                });
              } else if (settings.builtInValidators[el.toLowerCase()]) {
                // Is this a recognised built-in?
                // Pull it out!
                var validator = settings.builtInValidators[el.toLowerCase()];
                if (validator.type.toLowerCase() === "shortcut") {
                  $.each(validator.shortcut.split(","), function (i, el) {
                    el = formatValidatorName(el);
                    newValidatorNamesToInspect.push(el);
                    validatorNames.push(el);
                  });
                }
              }
            });

            validatorNamesToInspect = newValidatorNamesToInspect;

          } while (validatorNamesToInspect.length > 0)

          // =============================================================
          //                                       SET UP VALIDATOR ARRAYS
          // =============================================================

          var validators = {};

          $.each(validatorNames, function (i, el) {
            // Set up the 'override' message
            var message = $this.data("validation" + el + "Message");
            var hasOverrideMessage = (message !== undefined);
            var foundValidator = false;
            message =
              (
                message
                  ? message
                  : "'" + el + "' validation failed <!-- Add attribute 'data-validation-" + el.toLowerCase() + "-message' to input to change this message -->"
              )
            ;

            $.each(
              settings.validatorTypes,
              function (validatorType, validatorTemplate) {
                if (validators[validatorType] === undefined) {
                  validators[validatorType] = [];
                }
                if (!foundValidator && $this.data("validation" + el + formatValidatorName(validatorTemplate.name)) !== undefined) {
                  validators[validatorType].push(
                    $.extend(
                      true,
                      {
                        name: formatValidatorName(validatorTemplate.name),
                        message: message
                      },
                      validatorTemplate.init($this, el)
                    )
                  );
                  foundValidator = true;
                }
              }
            );

            if (!foundValidator && settings.builtInValidators[el.toLowerCase()]) {

              var validator = $.extend(true, {}, settings.builtInValidators[el.toLowerCase()]);
              if (hasOverrideMessage) {
                validator.message = message;
              }
              var validatorType = validator.type.toLowerCase();

              if (validatorType === "shortcut") {
                foundValidator = true;
              } else {
                $.each(
                  settings.validatorTypes,
                  function (validatorTemplateType, validatorTemplate) {
                    if (validators[validatorTemplateType] === undefined) {
                      validators[validatorTemplateType] = [];
                    }
                    if (!foundValidator && validatorType === validatorTemplateType.toLowerCase()) {
                      $this.data("validation" + el + formatValidatorName(validatorTemplate.name), validator[validatorTemplate.name.toLowerCase()]);
                      validators[validatorType].push(
                        $.extend(
                          validator,
                          validatorTemplate.init($this, el)
                        )
                      );
                      foundValidator = true;
                    }
                  }
                );
              }
            }

            if (! foundValidator) {
              $.error("Cannot find validation info for '" + el + "'");
            }
          });

          // =============================================================
          //                                         STORE FALLBACK VALUES
          // =============================================================

          $helpBlock.data(
            "original-contents",
            (
              $helpBlock.data("original-contents")
                ? $helpBlock.data("original-contents")
                : $helpBlock.html()
            )
          );

          $helpBlock.data(
            "original-role",
            (
              $helpBlock.data("original-role")
                ? $helpBlock.data("original-role")
                : $helpBlock.attr("role")
            )
          );

          $controlGroup.data(
            "original-classes",
            (
              $controlGroup.data("original-clases")
                ? $controlGroup.data("original-classes")
                : $controlGroup.attr("class")
            )
          );

          $this.data(
            "original-aria-invalid",
            (
              $this.data("original-aria-invalid")
                ? $this.data("original-aria-invalid")
                : $this.attr("aria-invalid")
            )
          );

          // =============================================================
          //                                                    VALIDATION
          // =============================================================

          $this.bind(
            "validation.validation",
            function (event, params) {

              var value = getValue($this);

              // Get a list of the errors to apply
              var errorsFound = [];

              $.each(validators, function (validatorType, validatorTypeArray) {
                if (value || value.length || (params && params.includeEmpty) || (!!settings.validatorTypes[validatorType].blockSubmit && params && !!params.submitting)) {
                  $.each(validatorTypeArray, function (i, validator) {
                    if (settings.validatorTypes[validatorType].validate($this, value, validator)) {
                      errorsFound.push(validator.message);
                    }
                  });
                }
              });

              return errorsFound;
            }
          );

          $this.bind(
            "getValidators.validation",
            function () {
              return validators;
            }
          );

          // =============================================================
          //                                             WATCH FOR CHANGES
          // =============================================================
          $this.bind(
            "submit.validation",
            function () {
              return $this.triggerHandler("change.validation", {submitting: true});
            }
          );
          $this.bind(
            [
              "keyup",
              "focus",
              "blur",
              "click",
              "keydown",
              "keypress",
              "change"
            ].join(".validation ") + ".validation",
            function (e, params) {

              var value = getValue($this);

              var errorsFound = [];

              $controlGroup.find("input,textarea,select").each(function (i, el) {
                var oldCount = errorsFound.length;
                $.each($(el).triggerHandler("validation.validation", params), function (j, message) {
                  errorsFound.push(message);
                });
                if (errorsFound.length > oldCount) {
                  $(el).attr("aria-invalid", "true");
                } else {
                  var original = $this.data("original-aria-invalid");
                  $(el).attr("aria-invalid", (original !== undefined ? original : false));
                }
              });

              $form.find("input,select,textarea").not($this).not("[name=\"" + $this.attr("name") + "\"]").trigger("validationLostFocus.validation");

              errorsFound = $.unique(errorsFound.sort());

              // Were there any errors?
              if (errorsFound.length) {
                // Better flag it up as a warning.
                $controlGroup.removeClass("success error").addClass("warning");

                // How many errors did we find?
                if (settings.options.semanticallyStrict && errorsFound.length === 1) {
                  // Only one? Being strict? Just output it.
                  $helpBlock.html(errorsFound[0] + 
                    ( settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : "" ));
                } else {
                  // Multiple? Being sloppy? Glue them together into an UL.
                  $helpBlock.html("<ul role=\"alert\"><li>" + errorsFound.join("</li><li>") + "</li></ul>" +
                    ( settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : "" ));
                }
              } else {
                $controlGroup.removeClass("warning error success");
                if (value.length > 0) {
                  $controlGroup.addClass("success");
                }
                $helpBlock.html($helpBlock.data("original-contents"));
              }

              if (e.type === "blur") {
                $controlGroup.removeClass("success");
              }
            }
          );
          $this.bind("validationLostFocus.validation", function () {
            $controlGroup.removeClass("success");
          });
        });
      },
      destroy : function( ) {

        return this.each(
          function() {

            var
              $this = $(this),
              $controlGroup = $this.parents(".control-group").first(),
              $helpBlock = $controlGroup.find(".help-block").first();

            // remove our events
            $this.unbind('.validation'); // events are namespaced.
            // reset help text
            $helpBlock.html($helpBlock.data("original-contents"));
            // reset classes
            $controlGroup.attr("class", $controlGroup.data("original-classes"));
            // reset aria
            $this.attr("aria-invalid", $this.data("original-aria-invalid"));
            // reset role
            $helpBlock.attr("role", $this.data("original-role"));
						// remove all elements we created
						if (createdElements.indexOf($helpBlock[0]) > -1) {
							$helpBlock.remove();
						}

          }
        );

      },
      collectErrors : function(includeEmpty) {

        var errorMessages = {};
        this.each(function (i, el) {
          var $el = $(el);
          var name = $el.attr("name");
          var errors = $el.triggerHandler("validation.validation", {includeEmpty: true});
          errorMessages[name] = $.extend(true, errors, errorMessages[name]);
        });

        $.each(errorMessages, function (i, el) {
          if (el.length === 0) {
            delete errorMessages[i];
          }
        });

        return errorMessages;

      },
      hasErrors: function() {

        var errorMessages = [];

        this.each(function (i, el) {
          errorMessages = errorMessages.concat(
            $(el).triggerHandler("getValidators.validation") ? $(el).triggerHandler("validation.validation", {submitting: true}) : []
          );
        });

        return (errorMessages.length > 0);
      },
      override : function (newDefaults) {
        defaults = $.extend(true, defaults, newDefaults);
      }
    },
		validatorTypes: {
      callback: {
        name: "callback",
        init: function ($this, name) {
          return {
            validatorName: name,
            callback: $this.data("validation" + name + "Callback"),
            lastValue: $this.val(),
            lastValid: true,
            lastFinished: true
          };
        },
        validate: function ($this, value, validator) {
          if (validator.lastValue === value && validator.lastFinished) {
            return !validator.lastValid;
          }

          if (validator.lastFinished === true)
          {
            validator.lastValue = value;
            validator.lastValid = true;
            validator.lastFinished = false;

            var rrjqbvValidator = validator;
            var rrjqbvThis = $this;
            executeFunctionByName(
              validator.callback,
              window,
              $this,
              value,
              function (data) {
                if (rrjqbvValidator.lastValue === data.value) {
                  rrjqbvValidator.lastValid = data.valid;
                  if (data.message) {
                    rrjqbvValidator.message = data.message;
                  }
                  rrjqbvValidator.lastFinished = true;
                  rrjqbvThis.data("validation" + rrjqbvValidator.validatorName + "Message", rrjqbvValidator.message);
                  // Timeout is set to avoid problems with the events being considered 'already fired'
                  setTimeout(function () {
                    rrjqbvThis.trigger("change.validation");
                  }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
                }
              }
            );
          }

          return false;

        }
      },
      ajax: {
        name: "ajax",
        init: function ($this, name) {
          return {
            validatorName: name,
            url: $this.data("validation" + name + "Ajax"),
            lastValue: $this.val(),
            lastValid: true,
            lastFinished: true
          };
        },
        validate: function ($this, value, validator) {
          if (""+validator.lastValue === ""+value && validator.lastFinished === true) {
            return validator.lastValid === false;
          }

          if (validator.lastFinished === true)
          {
            validator.lastValue = value;
            validator.lastValid = true;
            validator.lastFinished = false;
            $.ajax({
              url: validator.url,
              data: "value=" + value + "&field=" + $this.attr("name"),
              dataType: "json",
              success: function (data) {
                if (""+validator.lastValue === ""+data.value) {
                  validator.lastValid = !!(data.valid);
                  if (data.message) {
                    validator.message = data.message;
                  }
                  validator.lastFinished = true;
                  $this.data("validation" + validator.validatorName + "Message", validator.message);
                  // Timeout is set to avoid problems with the events being considered 'already fired'
                  setTimeout(function () {
                    $this.trigger("change.validation");
                  }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
                }
              },
              failure: function () {
                validator.lastValid = true;
                validator.message = "ajax call failed";
                validator.lastFinished = true;
                $this.data("validation" + validator.validatorName + "Message", validator.message);
                // Timeout is set to avoid problems with the events being considered 'already fired'
                setTimeout(function () {
                  $this.trigger("change.validation");
                }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
              }
            });
          }

          return false;

        }
      },
			regex: {
				name: "regex",
				init: function ($this, name) {
					return {regex: regexFromString($this.data("validation" + name + "Regex"))};
				},
				validate: function ($this, value, validator) {
					return (!validator.regex.test(value) && ! validator.negative)
						|| (validator.regex.test(value) && validator.negative);
				}
			},
			required: {
				name: "required",
				init: function ($this, name) {
					return {};
				},
				validate: function ($this, value, validator) {
					return !!(value.length === 0  && ! validator.negative)
						|| !!(value.length > 0 && validator.negative);
				},
        blockSubmit: true
			},
			match: {
				name: "match",
				init: function ($this, name) {
					var element = $this.parents("form").first().find("[name=\"" + $this.data("validation" + name + "Match") + "\"]").first();
					element.bind("validation.validation", function () {
						$this.trigger("change.validation", {submitting: true});
					});
					return {"element": element};
				},
				validate: function ($this, value, validator) {
					return (value !== validator.element.val() && ! validator.negative)
						|| (value === validator.element.val() && validator.negative);
				},
        blockSubmit: true
			},
			max: {
				name: "max",
				init: function ($this, name) {
					return {max: $this.data("validation" + name + "Max")};
				},
				validate: function ($this, value, validator) {
					return (parseFloat(value, 10) > parseFloat(validator.max, 10) && ! validator.negative)
						|| (parseFloat(value, 10) <= parseFloat(validator.max, 10) && validator.negative);
				}
			},
			min: {
				name: "min",
				init: function ($this, name) {
					return {min: $this.data("validation" + name + "Min")};
				},
				validate: function ($this, value, validator) {
					return (parseFloat(value) < parseFloat(validator.min) && ! validator.negative)
						|| (parseFloat(value) >= parseFloat(validator.min) && validator.negative);
				}
			},
			maxlength: {
				name: "maxlength",
				init: function ($this, name) {
					return {maxlength: $this.data("validation" + name + "Maxlength")};
				},
				validate: function ($this, value, validator) {
					return ((value.length > validator.maxlength) && ! validator.negative)
						|| ((value.length <= validator.maxlength) && validator.negative);
				}
			},
			minlength: {
				name: "minlength",
				init: function ($this, name) {
					return {minlength: $this.data("validation" + name + "Minlength")};
				},
				validate: function ($this, value, validator) {
					return ((value.length < validator.minlength) && ! validator.negative)
						|| ((value.length >= validator.minlength) && validator.negative);
				}
			},
			maxchecked: {
				name: "maxchecked",
				init: function ($this, name) {
					var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
					elements.bind("click.validation", function () {
						$this.trigger("change.validation", {includeEmpty: true});
					});
					return {maxchecked: $this.data("validation" + name + "Maxchecked"), elements: elements};
				},
				validate: function ($this, value, validator) {
					return (validator.elements.filter(":checked").length > validator.maxchecked && ! validator.negative)
						|| (validator.elements.filter(":checked").length <= validator.maxchecked && validator.negative);
				},
        blockSubmit: true
			},
			minchecked: {
				name: "minchecked",
				init: function ($this, name) {
					var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
					elements.bind("click.validation", function () {
						$this.trigger("change.validation", {includeEmpty: true});
					});
					return {minchecked: $this.data("validation" + name + "Minchecked"), elements: elements};
				},
				validate: function ($this, value, validator) {
					return (validator.elements.filter(":checked").length < validator.minchecked && ! validator.negative)
						|| (validator.elements.filter(":checked").length >= validator.minchecked && validator.negative);
				},
        blockSubmit: true
			}
		},
		builtInValidators: {
			email: {
				name: "Email",
				type: "shortcut",
				shortcut: "validemail"
			},
			validemail: {
				name: "Validemail",
				type: "regex",
				regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\.[A-Za-z]{2,4}",
				message: "Not a valid email address<!-- data-validator-validemail-message to override -->"
			},
			passwordagain: {
				name: "Passwordagain",
				type: "match",
				match: "password",
				message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
			},
			positive: {
				name: "Positive",
				type: "shortcut",
				shortcut: "number,positivenumber"
			},
			negative: {
				name: "Negative",
				type: "shortcut",
				shortcut: "number,negativenumber"
			},
			number: {
				name: "Number",
				type: "regex",
				regex: "([+-]?\\\d+(\\\.\\\d*)?([eE][+-]?[0-9]+)?)?",
				message: "Must be a number<!-- data-validator-number-message to override -->"
			},
			integer: {
				name: "Integer",
				type: "regex",
				regex: "[+-]?\\\d+",
				message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
			},
			positivenumber: {
				name: "Positivenumber",
				type: "min",
				min: 0,
				message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
			},
			negativenumber: {
				name: "Negativenumber",
				type: "max",
				max: 0,
				message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
			},
			required: {
				name: "Required",
				type: "required",
				message: "This is required<!-- data-validator-required-message to override -->"
			},
			checkone: {
				name: "Checkone",
				type: "minchecked",
				minchecked: 1,
				message: "Check at least one option<!-- data-validation-checkone-message to override -->"
			}
		}
	};

	var formatValidatorName = function (name) {
		return name
			.toLowerCase()
			.replace(
				/(^|\s)([a-z])/g ,
				function(m,p1,p2) {
					return p1+p2.toUpperCase();
				}
			)
		;
	};

	var getValue = function ($this) {
		// Extract the value we're talking about
		var value = $this.val();
		var type = $this.attr("type");
		if (type === "checkbox") {
			value = ($this.is(":checked") ? value : "");
		}
		if (type === "radio") {
			value = ($('input[name="' + $this.attr("name") + '"]:checked').length > 0 ? value : "");
		}
		return value;
	};

  function regexFromString(inputstring) {
		return new RegExp("^" + inputstring + "$");
	}

  /**
   * Thanks to Jason Bunting via StackOverflow.com
   *
   * http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string#answer-359910
   * Short link: http://tinyurl.com/executeFunctionByName
  **/
  function executeFunctionByName(functionName, context /*, args*/) {
    var args = Array.prototype.slice.call(arguments).splice(2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(this, args);
  }

	$.fn.jqBootstrapValidation = function( method ) {

		if ( defaults.methods[method] ) {
			return defaults.methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return defaults.methods.init.apply( this, arguments );
		} else {
		$.error( 'Method ' +  method + ' does not exist on jQuery.jqBootstrapValidation' );
			return null;
		}

	};

  $.jqBootstrapValidation = function (options) {
    $(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments);
  };

})( jQuery );
