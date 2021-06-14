
random cocktail genereren verder afmaken. 
Help field data in een appart bestand?

- try and catch. Stel dat de data niet opgehaald kan worden. 
- inlog systeem (Firebase?)
- error meldingen (laden api) zie random cocktail
- loading meldingen (laden api) zie random cocktail
- firebase variabele in .env
- all cocktails , next en back button 
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
  
- inputfield lock icon en envelop aanpassen. 
- form en register verder afronden. 

- alles nalopen en kijken of het nog verder omgebouwd kan worden tot een component. Bijvoorbeeld de Cocktailby Alcohollist page & Cocktail by ingredient List page!! 
- de link van het resultaat van cocktail by alcohol en cocktail bij ingredient verwijst nu naar Wiskey#20Bla dit moet nog omgebouw worde .replace(" ","+") naar een moooie link



Code beslissingen:
- de info voor het help field in een json bestand gezet zodat mijn code niet vervuild met infomatie. 
Op deze manier kan ik het ook mogelijk aanpassen als er wijzingen zijn.
  - De Api zelft heeft niet de juiste endpoints om een sortering te maken in een categorie op basis van alcohol(vadka, wiskey, rum etc), en op basis van inredienten(appel, banaan , aardbei etc). In de Api zelf staat alles door elkaar. 
    Zoals in mijn ontwerp heb ik besloten om dit uit te specificeren. Voor beide categorien heb ik een lijst(json array) samengesteld in data. Vanuit hier kunnen we mappen naar de juiste cocktail. Ik heb dit express in een json bestand gedaan zodat we dit ook makkelijk weer kunnen toevoegen op een later tijdstip als er veranderingen zijn. 
    Ook kan ik het vanuit hier makkelijk op alfabetische volgorge zetten.
    - de Api heeft alleen een endpoint voor alle cocktails per letter. Daarom heb ik ervoor gekozen om in het design een Selectbox en next/back button toe te voegen. 
    Die naar de uiteindelijke endpoint verwijst met een ${}
      - doormiddel van params de gegevens opgehaald om ze te verwerken in axios.


Adobe XD: 
- lettertype nog aanpassen.