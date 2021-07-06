TO DO LIST:
- inlog systeem (Firebase?) & misschien firestore voor de namen.
  - alles nalopen vanuit de edhub
- alle tips die ik heb gehad van het nakijkwerk erbij pakken en doorlopen.
  - all cocktails, de next en back button controleren.
-alle gele foutmeldingen ui developerstools doorlopen
-test met Steef bekijken
-buttons nalopen. Zij nog niet allemaal perfect uitgelijnt
    
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
- Bij het search gedeelte wanneer er een zoekterm is ingevoerd komt het resultaat naar boven. Hier heb ik de keuze gemaakt om een de search again button bovenaan te zetten. Dit voor extra gebruiktgemak. Daarnaast heb ik een back button toegevoegd.
- Ik heb er voor gekozen om met 2 contexten te werken. 1 context voor de auth en 1 context voor de cocktail-informatie. Op deze manier houdt ik de info overzichtelijk gescheiden. 
- Ik heb er voor gekozen om de error meldingen te verwerken in een appart component (ErrorMessages). Omdat de endpoint zelf geen foutmelding geeft heb ik ervoor gekozen om een useEffect te gebruiken die doormiddel van een if statement leest of er niets in het resultaat zit. 
Doormiddel van een useState zet ik dan een tekst in deze melding. Hierdoor is de ErrorMessage Component herbruikbaar bij elk onderdeel(component en pagina)
- De buttons onder een inputfield heb ik ervoor gekozen om ze disabled te maken. Zodat het voor een gebruiker niet mogelijk is om een actie uit te voeren zonder er iets is ingegeven.
- Gekozen voor een firebase database. 


Wat kan er nog doorontwikkeld worden?
- delete account. 
- meer profiel info. 
- dat iemand een cocktail kan toevoegen. 
- Een update op de frontpage(ingelogd) met nieuwe cocktails. 



Adobe XD: 
- lettertype nog aanpassen in XD
- FOUMELDINGEN IN HET DESIGN toevoegen!

TO DO VOOR EINDOPDTRACHT

BELANGRIJK: IN README.MD BENOEMEN HOE DEVELOPERS DEZE WAARDES KAN AANKOMEN (API KEY) DUS DUIDELIJK AANGEVEN. KEY= 9973533
navragen waar de .env codes te vermelden in de eindopdracht.