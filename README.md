# einundleipzig

## Was ist einundleipzig?

einundleipzig versteht sich als lokales Projekt in Leipzig, das klassischen
Journalismus mit modernen Darstellungsformen verbindet und dabei den Ansatz
des Data Driven Journalism verfolgt. einundleipzig ist dabei nichtkommerziell
und offen - wir verstehen uns als **städtisches Gemeingut**, das die Bürgerschaft
über Stadtentwicklungsprozesse informieren soll.

## Lizenzen
einundleipzig versteht sich als Teil der "Open Knowledge Bewegung", weswegen -
so weit wie möglich - alle Inhalte mit möglichst freien Lizenzen zur Verfügung
gestellt werden.

Sofern nicht anders angegeben gilt:
* Von Autoren verfasste Texte stehen unter der [Creative Commons BY-NC-SA 4.0] Lizenz
* Daten stehen unter der [CC0 1.0] Lizenz
* Programmierte Elemente stehen unter der [GNU GPL]

Im Zweifelsfall bitte bei den unten stehenden Kontaktdaten melden.

##Tech
einundleipzig basiert auf folgenden Open Source Projekten:
* [jekyll] - Ein simpler Generator für statische Webseiten basierend auf Ruby

**Javascript:**
* [jquery]
 * [jquery Quicksand] - Reorder and filter items with a nice shuffling animation
* [d3-queue.js]
* [underscore.js]
* [OpenStreetMap]
 * [leaflet]
* [video.js] - HTML5 Video Player
* [d3.js] - JavaScript-Bibliothek zur Visualisierung von Daten
* [c3.js] - Auf D3 basierende JavaScript-Bibliothek für Diagramme
* [impress.js] - An prezi angelehntes JavaScript-Tool für interaktive Präsentationen
* [timeline.js]
* [ekko-lightbox] - auf Bootstrap basierende Lightboxes

**CSS:**
* [bootstrap] - CSS Framework
* [bourbon] in Verbindung mit [bitters] - Eine SASS Mixin Bibliothek
* [font awesome] - Nice Icons

Visualisierungen liegen im Ordner `_includes/visualizations/`,
Daten liegen im Ordner `assets/visualizations/`

## ToDos
Lust, mitzuwirken? Folgende Dinge müssen noch eingebunden/verbessert werden:

* Internet Explorer
 * Flip Cards: fehlende Unterstützung von preserve-3d
 * HTML5 Slider
* Firefox
 * Full Screen bei Flip Cards Videos
 * Ladeverhalten von video.js optimieren


* Formular zum Eintragen von Mietpreisen durch User (HALF DONE)
* Visualisierung von `_includes/visualizations/umzugsmatrix.html` verbessern
* Getting rid of Bootstrap: Vollständige Umstellung auf die Bourbon-Familie: Neat als Grid-System verwenden
* Inhalte in `_pages/` auf Markdown umstellen

## Kontakt

* Bei inhaltlichen Anmerkungen wenden Sie sich bitte an kontakt@einundleipzig.de
* Bei technischen Anmerkungen (Bug Reports etc.) bitte bei wolfgang@einundleipzig.de melden.

## Kompatibilität
* node 10
* jekyll 3.6.x

[GNU GPL]: http://www.gnu.org/copyleft/gpl.html
[CC0 1.0]: http://creativecommons.org/publicdomain/zero/1.0/deed.de
[Creative Commons BY-NC-SA 4.0]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[jekyll]: http://www.jekyllrb.com
[jquery]: http://jquery.com
[jQuery Quicksand]: http://razorjack.net/quicksand/
[OpenStreetMap]: http://www.openstreetmap.org/
[video.js]: http://www.videojs.com/
[bootstrap]: http://www.getbootstrap.com
[bourbon]: http://bourbon.io
[bitters]: http://bitters.bourbon.io/
[d3.js]: http://d3js.org
[c3.js]: http://c3js.org
[impress.js]: http://bartaz.github.io/impress.js
[ekko-lightbox]: http://ashleydw.github.io/lightbox/
[font awesome]: http://fortawesome.github.io/Font-Awesome/
[leaflet]: http://leafletjs.com/
[timeline.js]: http://timeline.knightlab.com/
[underscore.js]: http://underscorejs.org/
[d3-queue.js]: https://github.com/mbostock/queue
