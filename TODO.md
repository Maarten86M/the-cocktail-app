
random cocktail genereren verder afmaken.

- try and catch. Stel dat de data niet opgehaald kan worden. 
- inlog systeem (Firebase?)
- error meldingen (laden api) zie random cocktail
- loading meldingen (laden api) zie random cocktail
  
- firebase variabele in .env
- Search Cocktail nu alleen mogelijk op cocktail naam maar ook ingredienten moet mogelijk zijn.
  - Random cocktails moeten pas starten wanneer de button wordt aangeklikt
- Cocktail Loader. De loading h1 ombouwen naar deze
- intro page. 
- Uittekenen van de grid!! en een handige (herbruikbare CSS)
-diable op de buttons instellen als we aan het zoeken zijn.
  disable en foutmlding bij zoeken. Dus wanneer er bijv geen zoekresultaat is.
  - Bij zoekresultaat functie maken die Eerste letter hoofdletter maakt en de rest kleine letters.
- op dit moment zoeken we alleen nog op ingredient (OOk op naam toevoegen)SEARCH
- cocktailcard is vanuit props. Misschien ook via context
- useHistory toevoegen zodat mensen ook via een terugknop bovenin de browser terug kunnen.
De ingredienten ophalen doormiddel van de api (afbeeldingen)
  - een intro die de cocktail loader weergeeft
  - de cocktail (useState moet weer op 0 gezet worden. Zodat oude resultaten niet weergegeven worden)
  - Loading bij Cocktail bij ingredient en alchol bij ingrdient (2de lijst)nu alleen foutmelding
  - ombouwen naar context. Dus de useStates verplaatsen.
  
- inputfield lock icon en envelop aanpassen. 
- form en register verder afronden. 

- alles nalopen en kijken of het nog verder omgebouwd kan worden tot een component. Bijvoorbeeld de Cocktailby Alcohollist page & Cocktail by ingredient List page!! 
- de link van het resultaat van cocktail by alcohol en cocktail bij ingredient verwijst nu naar Wiskey#20Bla dit moet nog omgebouw worde .replace(" ","+") naar een moooie link
-  De data die binnenkomst via de api ombouwen naar { } zoals de tip uit de pokemon opdracht die is binnengekomen.
- alle tips die ik heb gehad van het nakijkwerk erbij pakken en doorlopen. 
-Nalopen of Params wel handig is en niet gewoon useState met useContext.
      - Voorbeeld rein gebruiken met de stappen.Dus bij cocktail by ingredient & cocktail by alcohol.
        hierdoor minder pagina's.
  
- 2 context maken. 1 voor user en 1 voor cocktail info. Goed bekijken waar deze omheen gezet dienen te worden. !!Zie voorbeeld rein les.

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

Wat kan er nog doorontwikkeld worden?



Adobe XD: 
- lettertype nog aanpassen.

TO DO VOOR EINDOPDTRACHT

BELANGRIJK: IN README.MD BENOEMEN HOE DEVELOPERS DEZE WAARDES KAN AANKOMEN (API KEY) DUS DUIDELIJK AANGEVEN. KEY= 9973533