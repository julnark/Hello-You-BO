const { copyFileSync } = require('fs');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function start_game() {
  rl.question('Wat is je naam? ', function(naam) {
    console.log('Welkom ${naam} Je gaat een spel spelen, er is één simpele regel en dat is... Je krijgt elke ronde een input van (0,1) elke waarde doet een actie dat jou uiteindelijk tot het einde zal brengen ! Are u ready?');
    console.log('Het is een lang moeizame dag geweest. Je komt thuis aan na een lange dagje en gaat lekker in bed liggen, je ogen beginnen langzaam dicht te klappen en langzaam val je in slaap. Je bent in slaap gevallen en je wordt wakker doordat je telefoon af gaat.');
    console.log('Je wordt wakker en je kijkt naar wat voor melding het was, het is een alarm melding, iedereen heeft het binnen gekregen. Je bent nog half aan het slapen dus je zit te denken of je verder wilt slapen of juist het bericht wilt gaan lezen, het is een lange bericht namelijk.');
    rl.question('Wat ga je doen? [0] Het bericht te negeren en verder te gaan slapen of [1] Het bericht te lezen: ', function(verder_slapen) {
      if (verder_slapen == 0 ) {
        console.log('Je negeert het berichtje en gaat verder slapen, het is waarschijnlijk niks belangrijks. Je valt weer in slaap en je wordt een uurtje later wakker. Je zet je TV aan en gaat door alles heen kijken. Je komt het nieuws tegen en er wordt iets verteld over een nieuwe virus. Je gaat iets anders kijken want het boeit je niet wat er allemaal gezegd wordt. Je zet je TV uit en gaat met je vrienden bellen, ze willen uitgaan met zn allen en je bent uitgenodigd. Je weet nie of je mee wilt gaan.');
        rl.question('Wat ga je doen? [0] Met je vrienden te gaan of [1] Thuis te blijven: ', function(keuze_2) {
          if (keuze_2 == 0 ) {
            console.log('Je besluit om met je vrienden mee te gaan want je hebt toch niks te doen. Je vrienden zeggen dat ze naar Utrecht willen gaan, lekker shoppen en uiteindelijk uiteten. Jullie gaan met een hele groepje naar Utrecht, sommige gaan met de trein en andere gaan met eigen vervoer. Je mag zelf weten hoe je naar Utrecht gaat.');
            rl.question('Hoe ga je? [0] Met eigen vervoer of [1] Met de trein: ', function(keuze_3){
              if (keuze_3 == 1) {
                console.log('Je gaat met de trein. Het is extreem druk op het station maar dat boeit je niet. Je loopt door naar je trein en stapt in je trein. Alles ging normaal totdat er iemand in je trein iedereen aanviel en prbeerde te bijten.Langzaam werd iedereen in je trein een zombie. Jij zelf bent ook gebeten door iemand en bent een zombie geworden.');
                console.log('Helaas, Game over !!! :(');
                askToPlayAgain(false);
              } else {
                console.log('Je gaat met eigen vervoer. Je neemt je eigen auto en neemt 2 van je vrienden mee. Het is druk, er is overal file. Je weet niet hoe dat komt. Veel wegen zijn dicht. Je vraagt iemaand wat er aan de hand is. Je krijgt te horen dat mensen zich apart gedragen, ze vallen elkaar aan, ze lijken op hongerige monsters. Iedereen stapt uit hun autos en rennen weg.Je weet niet of je in je auto wilt blijven of je juist wilt weg rennen.');
                rl.question('Wat ga je doen? [0] In de auto blijven of [1] Weg rennen: ', function(keuze_4){
                  if (keuze_4 == 0) {
                    console.log('Jij en je vrienden blijven in de auto maar jullie worden helaas aangevallen door de zombies en jullie worden gebeten en worden zelf zombies.');
                    console.log('Game over!! Je bent een zombie!! :(');
                    askToPlayAgain(false);
                  } else {
                    console.log('Jij en je vrienden stappen de auto uit en rennen zo snel mogelijk weg.Jullie vinden een onbewoond kelder het is helemaal donker maar het ziet er veiliger uit dan buiten blijven.Jullie twijfelen of jullie naar binnen willen gaan.');
                    rl.question('Wat gaan jullie doen? [0] Naar binnen gaan of [1] Buiten blijven: ', function(keuze_5){
                      if (keuze_5 == 0) {
                        console.log('Je gaat naar binnen. Het is extreem donker je kan niks zien je loopt door en heel random word je door iemand neergestoken. Het was een persoon diee dacht dat je een zombie was.');
                        console.log('Het is te laat en je gaat dood!!! Game over !!! :(');
                        askToPlayAgain(false);
                      } else {
                        console.log('Je gaat niet naar binnen, je blijft buiten omdat je het niet vertrouwt en het eng vindt. Je wordt aangevallen door een groep zombies en je probeert weg te rennen maar het lukt niet. Je wordt gebeten en wordt uiteindelijk zelf een zombie.');
                        console.log('GAME OVER JE BENT EEN ZOMBIE!!! :(');
                        askToPlayAgain(false);
                      }
                    })
                  }
                })
              }
            })
          } else {
            console.log('Je besluit dat je geen zin hebt om met je vrienden mee te gaan en blijft alleen thuis. Je verveelt je een beetje dus je gaat naar de winkel om spullen te halen. Het is donker en amper mensen zijn buiten maar je hebt het gevoel dat iemand je achtervolgt. Je denkt of je moet rennen of juist calm moet blijven.');
            rl.question('Wat ga je doen? [0] Snel weg rennen of [1] Calm blijven: ', function(keuze_6){
              if (keuze_6 == 0) {
                console.log('Je rent zo snel mogelijk weg en komt uiteindelijk velig thuis. Helemaal uitgeput, je hebt genoeg eten thuis dus je blijft thuis. Na een weekje word je gered en ergens veilig gebracht terwijl de overheid aan een medicatie werkt en uiteindelijk iedereen weer normaal is maar sommige mensen hun leven kwijt zijn geraakt waar we niks aan kunnen doen.');
                console.log('Yippieee je hebt gewonnen!!!');
                askToPlayAgain(true);
              } else {
                console.log('Je blijft calm en je denkt dat het je eigen gedachten zijn, waarom the fuck zou hij jou volgen? Je doet je oortjes in en loopt gewoon normaal door. Ineens voel je een klap op je achterhoofd en val je in slaap. Je wordt wakker in een donkere kelder. Je hebt geen idee hoe je hier bland bent, maar je hoort een rare geluid. Geluiden van kreunende zombies. Je staat op en beseft dat je in een ware zombie-apocalyps beland bent en dat het toch wel handig was om te gaan rennen. Je zit te denken wat je nu gaat doen.');
                rl.question('Wat ga je doen? [0] Wapens zoeken of [1] Overlevenden zoeken: ', function(keuze_7){
                  if (keuze_7 == 0) {
                    console.log('Je besluit dat je wapens nodig hebt om te overleven. Je doorzoekt de kelder en vindt een roestige schop en een gebroken baseballbat. Ze zijn niet ideaal, maar het is beter dan niets. Met je nieuwe wapens in de hand ga je opzoek naar veiligheid. Terwijl je door de verlaten straten dwaalt, kom je een verlatn winkel tegen. Binnen vind je een oude jacht geweer met een beperkte hoeveelheid munitie. Je voelt je al wat zelfverzekerder met dit krachtigere wapen in je handen.Met je nieuwe jachtgeweer kun je enkele zombies uitschakelen maar uiteindelijk word je overmand door hun aantallen. Je hebt een heroïsche laatste strijd, maar je overleeft het niet.');
                    console.log('Rip je bent dood, GAME OVER!! :(');
                    askToPlayAgain(false);
                  } else {
                    console.log('Je hebt geen zin om alleen te zijn in deze enge wereld je besluit op zoek te gaan naar andere overlevenden. Je verlaat de kelder en sluipt door de verlaten straten op zoek naar tekenen van menselijke activiteit. Na een tijdje kom je eene groepje overlevenden tegen. Ze lijken vriendelijk en nodigen je uit om met hen mee te gaan naar hun schuitplaats.Je besluit mee te gaan en samen hebben jullie een betere kans om te overleven. Jullie vinden een veilige plek en jullie bouwen samen iets om de zombies op afstand te houden. Na een tijdje komt er hulp aan en worden jullie naar een veilige eiland gebracht waar jullie normaal jullie leven leven.');
                    console.log('YIPPIEE PARTYY je hebt gewonnen!!!');
                    askToPlayAgain(true);
                  }
                })
              }
            })
          }
        })
      } else {
        console.log('Je stapt uit je bed en gaat rustig je gezicht wassen en vervolgens eten maken. In de tijd dat je eten aan het koken is open je je telefoon en lees je het bericht die je binneen hebt gekregen. Het is een alarm bericht, je opent het bericht en leest het. "Dit is geen test, dit is een serieuze alarm bericht. Er is een nieuwe virus gevonden, we weten nog niet zeker wat voor virus het is maar we weten dat het een rare virus is. Mensen gedragen zich apart en eten elkaar op. De virus verspreid snel door je lichaam heen als je gebeten wordt door iemand die de virus al heeft. We weten nog niet zeker wat we er aan kunnen doen maar blijf thuis en probeer contact met mensen te ontwijken. We geven de virus tijdelijk de naam Zombie. Dit is het einde van de bericht." Je denkt dat dit allemaal een grappje is maar aan de andere kant denk je ook dat het echt is, je zit te twijfeleln over of je de bericht moet negeren of juist moet geloven.');
        rl.question('Wat ga je doen? [0] Het bericht geloven of [1] Het berichtje negeren: ', function(keuze_8){
          if (keuze_8 == 0) {
            console.log('Na het lezen van het bericht ben je er aan gaan denken en je gelooft wat er allmaal in staat. Je zoekt zelfs verder wat op het internet in de hoop dat je iets kan vinden, mer informatie misschien? Je zoekt en zoekt, er is niet veel te vinden maar er zijn veel films over het onderwerp zombiess gemaakt. Misschien geeft het een betere beeld van wat het is? Je kijkt later naar een filmpje maar nu schrijf je wat regeles op zodat je de virus ontwijkt, je wilt niet ziek worden. Heel random wordt er op je deur geklopt en aangeeld. Iemand staat voor je deur maar je weet niet wie. Je twijfelt of je open moet doen. ');
            rl.question('Wat ga je doen? [0] Je doet de deur open of [1] Je doet de deur niet open: ', function(keuze_9){
              if (keuze_9 == 0) {
                console.log('Je doet de deur open en wordt aangevallen door iemand die je probeert te bijten. Het is een zombie. Je deed je best om terug te vechten maar de zombie was sterker en uiteindelijk ben je gebeten en zelf een zombie geworden.')
                console.log('Tja wat jammer weer je bent een zombie, GAME OVER!!! :(');
                askToPlayAgain(false);
              } else {
                console.log('Je doet de deur niet open en je blijft thuis. Je hebt genoeg eten voor een tijdjee dus je bent zuinig met je eten tot dat er iemand je komt redden. Na een weekje word je gered met een helicopter en naar een veilige plek gebracht waar je normaal je leven kon leven.');
                console.log('YIPPIEE JE LEEFTT!!');
                askToPlayAgain(true);
              }
            })
          } else {
            console.log('Je gaat verder met je leven en negeert wat er allemaal gezegd wordt. Je vindt het apart maar je kan er niks aan doen. Je buurvrouw nodigt je uit om bij haar te gaan logeren, jullie zijn best close. Je hebt er zin in maar aan de andere kant wil je liever thuis blijven.');
            rl.question('Wat ga je doen? [0] Bij je buurvrouw logeren of [1] Thuis blijven: ', function(keuze_10){
              if (keuze_10 == 0) {
                console.log('Je gaat bij je buurvrouw logeren. Je hoort rare geluiden uit haar badkamer komen je vraagt ernaar, ze ontwijkt je vraagt en doet alsof ze niks heeft gehoord. Je probeert de deur van de badkamer te openen en wanneer je dat doet werd jee neergestoken, Je valt op de grond en de deur van de badkamer ging langzaam op. Er zit een zombie in de badkamer. Je gaat dood doordat je buurvrouw jou neer had gestoken en vervolgens aan de zombie had gegeven. Je gaat dood.');
                console.log('Game over want tja je bent dood!! :(');
                askToPlayAgain(false);
              } else {
                console.log('Je blijft liever thuis en ziet wat er allemaal buiten gebeurt. Je hoopt dat je zo snel mogelijk geholpen wordt want iedereen om je heen is al een zombie en je hebt weinig eten om langer dan een maand te overleven. Na een weekje staat er op het nieuws dat er een helicopter mensen komt helpen om naar een andere land te brenge. Na 2 weken werd je opgehaald en naar een veilige land gebracht.');
                console.log('YIPPIEEEE JE LEEFTT!!!');
                askToPlayAgain(true);
              }
            })
          }
        })
      }
    })
  })
}
function askToPlayAgain(success) {
  const message = success ? 'WOW you made it !!!! ' : 'Game Over !!! :(';
  console.log(message);
  rl.question('Wil je opnieuw spelen ??? [0] Nee [1] Ja: ', function(opnieuw) {
    if (opnieuw == '1') {
      start_game();
    } else {
      console.log('Bedankt voor het spelen!');
      rl.close();
    }
  });
}

start_game();
