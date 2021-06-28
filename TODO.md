
TO DO LIST: 
- try and catch. Stel dat de data niet opgehaald kan worden. 
- inlog systeem (Firebase?) & misschien firestore voor de namen.
  - de authencitaded uit app.js bij de Public en private route ombouwen met context. (is straks overbodig)
    - succesvol geregistreerd melding aanmaken.
  
  - pagina hoogte algemeen aanpassen. Nu zie je nog een scrollbar
  
- error meldingen (laden api) zie random cocktail, ook setErrors vanuit de catch.
- loading meldingen (laden api) zie random cocktail
  - zorgen dat de foutmeldingen bij het inloggen niet meegaan vanuit vorige paginas
  - Cocktail Loader. De loading h1 ombouwen naar deze
  
- mobile responsive (header met titel van de pagina of cocktail. Dus hier moet een setter functie voor komen.)
- login en register en forgot wachtwoord uitlijnen. 

-forgotpasword .

Search

- helpfield bij welcome aanpssen. Staat net te hoog.
- img groote van het gebroken glass aanpassen is te klein i.v.m. de andere
- search text error aanpssen in styling
  - Random cocktails moeten pas starten wanneer de button wordt aangeklikt
  
-diable op de buttons instellen als we aan het zoeken zijn.
  disable en foutmlding bij zoeken. Dus wanneer er bijv geen zoekresultaat is.

  - de cocktail (useState moet weer op 0 gezet worden. Zodat oude resultaten niet weergegeven worden)

  - ombouwen naar context. Dus de useStates verplaatsen.
  - cocktailview / cocktail card goed uitlijnen in het mideen. 
  -consequent overal de error en loading gebruiken. Dus setError (en deze weergeven op de pagina. ) Zie voorbeeld bij search. Niets ingevuld
    - Navbar checken of hij open blijft staan.
- inputfield lock icon en envelop aanpassen. 
- form en register verder afronden.
- alles nalopen en kijken of het nog verder omgebouwd kan worden tot een component. Bijvoorbeeld de Cocktailby Alcohollist page & Cocktail by ingredient List page!! 
- de link van het resultaat van cocktail by alcohol en cocktail bij ingredient verwijst nu naar Wiskey#20Bla dit moet nog omgebouw worde .replace(" ","+") naar een moooie link
-  De data die binnenkomst via de api ombouwen naar { } zoals de tip uit de pokemon opdracht die is binnengekomen.
- alle tips die ik heb gehad van het nakijkwerk erbij pakken en doorlopen.

  - all cocktails, de next en back button controleren.
- 2 context maken. 1 voor user en 1 voor cocktail info. Goed bekijken waar deze omheen gezet dienen te worden. !!Zie voorbeeld rein les.
ALLES GOED NALOPEN OF ER NOG COMPONENTEN OMGEBOUWD KUNNEN WRODEN. 

Code beslissingen:
- de info voor het help field in een json bestand gezet zodat mijn code niet vervuild met infomatie. 
Op deze manier kan ik het ook mogelijk aanpassen als er wijzingen zijn.
  - De Api zelft heeft niet de juiste endpoints om een sortering te maken in een categorie op basis van alcohol(vadka, wiskey, rum etc), en op basis van inredienten(appel, banaan , aardbei etc). In de Api zelf staat alles door elkaar. 
    Zoals in mijn ontwerp heb ik besloten om dit uit te specificeren. Voor beide categorien heb ik een lijst(json array) samengesteld in data. Vanuit hier kunnen we mappen naar de juiste cocktail. Ik heb dit express in een json bestand gedaan zodat we dit ook makkelijk weer kunnen toevoegen op een later tijdstip als er veranderingen zijn. 
    Ook kan ik het vanuit hier makkelijk op alfabetische volgorge zetten.
  
- de Api heeft alleen een endpoint voor alle cocktails per letter. Daarom heb ik ervoor gekozen om in het design een Selectbox en next/back button toe te voegen. 
    Die naar de uiteindelijke endpoint verwijst met een ${}. Ik heb een array aangemaakt op basis van letters. De U is niet weergegeven. Omdat er geen cocktails zijn met een U. 
      Doormiddel van de positie in de array verwijs ik naar de juiste endpoint.
- doormiddel van params de gegevens opgehaald om ze te verwerken in axios.
  
- Bij de cocktail bij ingredient list & alcoholby ingredient list een errormelding ingebouw "Nothing Fount" omdat er in het database oook lege ingredienten staan.
- De keuze gemaakt om de paginas door te verwijzen met useparams. Dit zodat de gebruiker makkelijk naar de vorige pagina kan gaan.

- De useStates die door de app op meerdere plaatsen gebruikt worden. Zoals de cocktail info staan in de CocktailContext.


Wat kan er nog doorontwikkeld worden?
- delete account. 
- meer profiel info. 
- dat iemand een cocktail kan toevoegen. 
- Een update op de frontpage(ingelogd) met nieuwe cocktails. 



Adobe XD: 
- lettertype nog aanpassen.
- FOUMELDINGEN IN HET DESIGN toevoegen!

TO DO VOOR EINDOPDTRACHT

BELANGRIJK: IN README.MD BENOEMEN HOE DEVELOPERS DEZE WAARDES KAN AANKOMEN (API KEY) DUS DUIDELIJK AANGEVEN. KEY= 9973533
navragen waar de .env codes te vermelden in de eindopdracht.