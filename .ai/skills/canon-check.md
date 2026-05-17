# Skill: Canon Check

Questa skill controlla se un contenuto generato per l’universo Mangrovia è coerente con il canon, con il tono e con lo stato del mondo.

Va usata dopo la generazione di contenuti `research`, `blog/diary`, `wiki` o `timeline`, e prima di considerarli pubblicabili o canonici.

---

## Obiettivo

Verificare che un contenuto:

- non contraddica i file canonici;
- usi correttamente personaggi e relazioni;
- rispetti il tono della sezione di destinazione;
- distingua tra evento episodico e cambiamento canonico;
- segnali gli aggiornamenti necessari a timeline, wiki o schede personaggio;
- non introduca modifiche strutturali senza autorizzazione.

La skill deve produrre un report sintetico ma utile, con eventuali correzioni consigliate.

---

## Quando usarla

Usare `canon-check.md` quando:

- viene generato un nuovo articolo research;
- viene generata una nuova dev diary entry;
- viene generata una pagina wiki;
- viene proposta una timeline entry;
- un contenuto introduce nuovi personaggi, concetti o eventi;
- un contenuto sembra modificare personaggi, ruoli, relazioni o stato dell’azienda;
- un contenuto è stato prodotto automaticamente e deve essere validato prima della pubblicazione.

Non serve usarla per bozze scartate, appunti interni o esperimenti dichiaratamente non canonici.

---

## Fonti canoniche da consultare

Controllare il contenuto rispetto a:

1. `canon-rules.md`
2. `timeline.md`
3. `characters.md`
4. `relationships.md`
5. `mangrovia-world.md`
6. `tone-and-style.md`
7. skill specifica usata per generare il contenuto:
   - `research-article.md`
   - `dev-diary-entry.md`
   - `wiki-entry.md`
   - `timeline-update.md`

Se due fonti sembrano in conflitto, applicare la gerarchia definita in `canon-rules.md`.

---

## Input atteso

La skill riceve:

```md
Content type: research / dev-diary / wiki / timeline / other
Target status: non-canon / episodic / minor canon / major canon / undecided
Content: testo da controllare
Source notes: eventuali istruzioni usate per generarlo
```

Esempio:

```md
Content type: dev-diary
Target status: minor canon
Content: [testo generato]
Source notes: episodio su The Rock, Giorgio e la classificazione delle metafore dirigenziali
```

Se il tipo di contenuto non è indicato, dedurlo dal testo.

Se lo stato canonico non è indicato, proporlo nel report.

---

## Output finale

La skill deve produrre questo report:

```md
# Canon Check Report

## Verdict
Pass / Pass with notes / Needs revision / Blocked

## Suggested canon status
Non-canon / Episodic / Minor canon / Major canon

## Summary
Breve valutazione complessiva.

## Issues
Lista dei problemi trovati, divisi per gravità.

## Required changes
Modifiche necessarie prima della pubblicazione.

## Optional improvements
Miglioramenti consigliati ma non obbligatori.

## Canon updates needed
Timeline / Wiki / Characters / Relationships / World / None

## Notes
Eventuali osservazioni aggiuntive.
```

---

## Verdict

### Pass

Il contenuto è coerente e può essere pubblicato così com’è.

Usare solo se:

- non ci sono contraddizioni;
- il tono è corretto;
- i personaggi sono usati bene;
- l’impatto canonico è correttamente dichiarato;
- non servono modifiche.

### Pass with notes

Il contenuto è pubblicabile, ma ci sono piccole osservazioni o aggiornamenti consigliati.

Usare quando:

- il testo è coerente;
- eventuali problemi sono minori;
- il report canonico può essere migliorato;
- servono piccole correzioni non bloccanti.

### Needs revision

Il contenuto ha problemi correggibili prima della pubblicazione.

Usare quando:

- un personaggio è leggermente fuori voce;
- il tono della sezione non è del tutto corretto;
- l’impatto canonico non è chiaro;
- mancano voci correlate importanti;
- ci sono dettagli ambigui ma non distruttivi.

### Blocked

Il contenuto non deve essere pubblicato nella forma attuale.

Usare quando:

- contraddice fatti canonici fondamentali;
- cambia ruolo o personalità di un personaggio senza autorizzazione;
- introduce eventi major canon senza segnalarli;
- completa archi narrativi importanti senza permesso;
- rende canonico qualcosa che dovrebbe restare episodico;
- usa The Rock, Giorgio, Giulia, Andrea o altri personaggi in modo incompatibile con il canon.

---

## Livelli di gravità

Classificare ogni problema con una gravità.

### Critical

Blocca la pubblicazione.

Esempi:

- The Rock non è più CEO.
- Nikita ha completato il Design System Qadra senza evento canonico.
- Andrea diventa apertamente sabotatore.
- Giorgio abbandona i ticket per diventare psicologo del team.
- Giulia viene descritta come villain dichiarata.
- Mangrovia non è più nata dalla blockchain.

### Major

Richiede revisione prima della pubblicazione.

Esempi:

- tono troppo narrativo per una pagina wiki;
- research troppo comico, narrativo o poco misurabile;
- diary con troppi personaggi fuori voce;
- evento importante senza valutazione nel report privato;
- nuova metrica presentata come già ufficiale senza timeline;
- relazione cambiata senza spiegazione.

### Minor

Non blocca necessariamente la pubblicazione.

Esempi:

- mancano alcuni suggerimenti di wiki update nel report privato;
- report canonico poco preciso;
- titolo migliorabile;
- un personaggio è leggermente troppo esplicito;
- tono un po’ troppo brillante ma ancora accettabile.

---

## Checklist canonica generale

Controllare sempre:

- Il contenuto rispetta `canon-rules.md`?
- Il contenuto rispetta i fatti fondamentali su Mangrovia, Qadra e The Rock?
- Il Design System Qadra resta incompleto salvo evento canonico autorizzato?
- I personaggi mantengono ruolo, voce e funzione?
- Le relazioni principali restano coerenti?
- L’eventuale assurdità ha una forma aziendale riconoscibile?
- L’AI dentro il mondo non funziona come magia?
- Il contenuto segnala se introduce eventi persistenti?
- Il report privato segnala correttamente impatto canonico, wiki update e timeline update?
- Il Markdown pubblicabile è privo di `Related Entries`, `Canon Notes`, `Canon Impact` e altre note private?
- Il Markdown pubblicabile in italiano usa accenti UTF-8 corretti, senza degradare la prosa a ASCII-only?
- La destinazione del contenuto è rispettata?

---

## Checklist personaggi

### Adriano

Verificare che:

- resti frontendista Mangrovia;
- sia cinico, sarcastico, competente;
- non diventi stupido;
- non sia ridotto solo ad Augusta/Lentini;
- la ludopatia e il fumo restino dettagli coerenti, non gag totali.

### Andrea

Verificare che:

- resti backendista torinese;
- assomigli ad Alexis Saelemaekers;
- fumi spesso;
- odi i colleghi in modo segreto e trattenuto;
- non diventi aggressivo in pubblico;
- non diventi sabotatore o villain.

### Nikita

Verificare che:

- resti nutria antropomorfa frontendista;
- sia l’“economico programmatore” legato a Qadra;
- non completi il Design System Qadra senza aggiornamento canonico;
- non sia solo incapace;
- mantenga ansia, difensività e lucidità intermittente.

### Giulia

Verificare che:

- resti designer/PM torinese;
- sia un po’ hipster ma non troppo;
- sia corporate, morbida, falsa in modo sottile;
- resti persona di fiducia di The Rock;
- non diventi villain esplicita;
- non perda la sua plausibile ragionevolezza.

### Vas

Verificare che:

- resti product owner Mangrovia;
- sia concreta, simpatica, amata dal team;
- non venga ridotta alla bellezza;
- non diventi figura salvifica perfetta;
- la tensione con Giulia resti sottile.

### Fiorenzo

Verificare che:

- resti backendista competente;
- il suo culto del corpo e del Clean Code resti integrato;
- non diventi solo un palestrato;
- non perda il suo peso tecnico.

### Salvo

Verificare che:

- resti backendista siciliano che vive a Como;
- sia paziente, pratico, benvoluto;
- non diventi caricatura regionale;
- le esplosioni in siciliano restino occasionali.

### Giorgio

Verificare che:

- resti un piccione antropomorfo romano;
- nel parlato usi un romanaccio diretto, secco e operativo;
- nei ticket scriva in italiano perfetto, burocratico e leggermente carabinieresco;
- si occupi di task e ticket;
- non abbia troppa introspezione;
- non diventi psicologo, poeta o personaggio sentimentale.

### Lorenzo

Verificare che:

- resti data scientist;
- abbia tic, tratti da Fabio Capello attuale e tifo per il Milan;
- non parli solo di calcio;
- usi dati, modelli e caveat.

### The Rock

Verificare che:

- sia CEO di Qadra/Mangrovia;
- sia figura reale e mitologica;
- appaia poco e pesi molto;
- non venga usato come personaggio quotidiano banale;
- il suo linguaggio resti keynote, motivazionale, fisico, capitalista, AI-first.

### Gigi

Verificare che:

- resti CTO romanaccio;
- abbia autorità tecnica reale;
- parli in modo ruvido e diretto;
- non diventi pura macchietta dialettale.

### Mattia

Verificare che:

- resti frontendista di Latina;
- abbia fatto un corso online;
- sia inesperto, disponibile, genuino;
- non diventi malizioso o troppo competente di colpo;
- funzioni come giovane “economico programmatore”.

---

## Checklist relazioni

Controllare che siano rispettate:

- Adriano / Andrea: compagni di sigarette e sventure, solidarietà minimale.
- Adriano / Giulia: tensione tra frontend cinico e PM aziendalista.
- Andrea / Giulia: cordialità superficiale, disprezzo interno.
- Andrea / Fiorenzo: attrito backend tra rigori diversi.
- Fiorenzo / Salvo: coppia backend consolidata.
- Giulia / Vas: rivalità sottile, soprattutto da parte di Giulia.
- Giulia / Nikita: protezione, responsabilità e scarico di colpe.
- Giulia / The Rock: traduzione del potere in processo.
- The Rock / team tecnico: distanza mitologica.
- Gigi / Giorgio: decisione tecnica e formalizzazione burocratica.
- Mattia / Nikita: due forme di economico programmatore.
- Mattia / Adriano: diffidenza e possibile protezione indiretta.
- Vas / team tecnico: fiducia pratica.

Segnalare se una relazione cambia senza evento canonico.

---

## Checklist per tipo di contenuto

### Research

Controllare che:

- sembri un paper frontier-lab fittizio;
- non sia troppo narrativo;
- non faccia battute esplicite;
- abbia struttura coerente con abstract, metodo, metriche, risultati e limiti;
- includa metriche, tabelle, grafici testuali, figure o dataset quando la lunghezza lo consente;
- la comicità emerga dal metodo applicato all’oggetto, non dal tono;
- i personaggi siano assenti o anonimizzati salvo richiesta esplicita;
- non importi lore da dev-diary nel testo pubblicato;
- non renda ufficiale un progetto senza valutazione nel report privato.

Problemi tipici:

- titolo troppo comico;
- tono troppo da blog;
- tono troppo da white paper corporate generico;
- assenza di dati, metodo o risultati;
- personaggi citati come ammiccamento;
- AI trattata come magia;
- The Rock usato troppo direttamente;
- research che introduce major canon senza segnalarlo.

### Dev Diary

Controllare che:

- sia editoriale, asciutto e orientato al lavoro;
- funzioni come developer log, non come racconto breve;
- chiarisca contesto, lavoro svolto, evidenze, decisione e prossimi passi;
- i dialoghi siano brevi e in voce;
- non costruisca la gag come obiettivo del testo;
- non usi troppi personaggi;
- non cambi il mondo senza segnalarlo;
- se contiene materiali firmati o citati, rispetti la voce del personaggio.

Problemi tipici:

- finale troppo da sketch;
- personaggi che parlano tutti uguali;
- Andrea troppo aggressivo;
- Giulia troppo apertamente cattiva;
- Giorgio troppo psicologico;
- Mattia troppo esperto.

### Wiki

Controllare che:

- sia neutra, asciutta e breve;
- cataloghi invece di raccontare;
- non importi troppo tono narrativo dai diary;
- non importi il tono metodologico dei research;
- non inventi backstory;
- distingua fatti, interpretazioni e percezioni;
- sia comprensibile a un lettore esterno senza conoscere la scena originale;
- abbia related entries e canon notes nel report privato, non nel Markdown pubblicato;
- non trasformi concetti episodici in major canon senza motivo.

Problemi tipici:

- voce troppo da blog;
- troppa ironia esplicita;
- frasi ammiccanti o riferimenti interni non spiegati;
- status ironici non necessari;
- pagina troppo lunga rispetto alla funzione di reference;
- nuove informazioni sui personaggi non autorizzate;
- mancanza di stato canonico.

### Timeline

Controllare che:

- registri solo eventi con impatto persistente;
- abbia data o periodo;
- abbia summary, impact e related entries;
- non includa gag isolate;
- non salti eventi necessari;
- non renda canonici eventi solo episodici.

Problemi tipici:

- timeline troppo piena;
- eventi senza conseguenze;
- date inventate inutilmente precise;
- mancata distinzione tra evento ufficiale e percezione del team.

---

## Controllo del tono

Verificare che il contenuto rispetti il registro della sezione.

### Tono corretto generale

- asciutto;
- tecnico quando serve;
- aziendale quando serve;
- grottesco ma credibile;
- serio in superficie;
- satirico nel sottotesto.

### Segnali di tono sbagliato

- troppe battute esplicite;
- troppa enfasi;
- comicità spiegata;
- personaggi ridotti a tormentoni;
- linguaggio corporate usato a caso;
- realismo tecnico assente;
- caos senza conseguenze operative;
- The Rock troppo presente;
- assurdismo scollegato dal lavoro aziendale.

---

## Controllo del report canonico

Verificare che il report canonico privato sia coerente con il contenuto pubblicabile. Se il Markdown contiene `Related Entries`, `Canon Notes`, `Canon Impact` o altre note private, richiedere revisione prima della pubblicazione.

### Episodic

Corretto se:

- l’evento non modifica il mondo;
- non introduce concetti ricorrenti;
- non cambia relazioni, ruoli o processi.

### Minor canon

Corretto se:

- introduce o rafforza un concetto ricorrente;
- crea una pagina wiki utile;
- non cambia la struttura del mondo.

### Major canon

Corretto se:

- modifica timeline, ruoli, processi, prodotti o relazioni;
- introduce un evento aziendale importante;
- cambia lo stato di un progetto centrale.

Ogni major canon deve richiedere timeline update.

Se un contenuto è dichiarato episodic ma contiene cambiamenti persistenti, segnalarlo come problema major o critical.

---

## Cosa fare con contraddizioni intenzionali

Alcune contraddizioni possono essere interne al mondo e quindi valide.

Esempio valido:

```md
Giulia descrive il Design System Qadra come opportunità di consolidamento, mentre Adriano lo considera una forma di archeologia frontend.
```

Questa è una differenza di prospettiva.

Esempio non valido:

```md
La wiki dice che il Design System Qadra è stato completato da Nikita ad aprile.
```

Questo contraddice il canon, salvo evento timeline autorizzato.

Quando trovi una contraddizione, chiediti:

- è una contraddizione tra personaggi o punti di vista?
- oppure è una contraddizione tra contenuto e canon?

Solo la seconda blocca o richiede revisione.

---

## Regole per nuovi elementi

### Nuovi personaggi

Se il contenuto introduce un nuovo personaggio:

- verificare se era necessario;
- non considerarlo canonico senza aggiunta a `characters.md`;
- segnalarlo nel report privato;
- proporre eventuale scheda personaggio.

### Nuovi concetti

Se introduce un nuovo concetto:

- decidere se è episodico o ricorrente;
- se ricorrente, suggerire pagina wiki;
- se cambia processi, suggerire timeline update.

### Nuovi eventi

Se introduce un evento:

- valutare impatto;
- se persistente, suggerire timeline update;
- se non persistente, mantenerlo episodico.

---

## Required changes

Quando il contenuto richiede correzioni, fornire modifiche concrete.

Non scrivere solo:

```md
Andrea è fuori personaggio.
```

Scrivere:

```md
Andrea è troppo apertamente aggressivo nella scena del meeting. Renderlo più trattenuto: deve rispondere in modo formalmente corretto, lasciando il giudizio nel sottotesto o esprimendolo solo più tardi nella pausa sigaretta con Adriano.
```

Non scrivere solo:

```md
Il tono non va.
```

Scrivere:

```md
Il tono della pagina wiki è troppo narrativo. Ridurre dialoghi e sequenze di azione, trasformando l’episodio in definizione, contesto, uso e note canoniche.
```

---

## Optional improvements

Gli optional improvements devono aiutare a migliorare il contenuto senza bloccarlo.

Esempi:

- aggiungere wiki updates suggeriti più precisi nel report privato;
- rendere il titolo meno brillante e più documentale;
- spostare una frase comica da wiki a diary;
- rafforzare una limitation nel research;
- aggiungere un riferimento al Design System Qadra;
- indicare meglio se una nuova metrica è proposta o ufficiale.

---

## Esempio di report: Pass with notes

```md
# Canon Check Report

## Verdict
Pass with notes

## Suggested canon status
Minor canon

## Summary
Il contenuto è coerente con il canon e rafforza il ruolo della Pausa Sigaretta come spazio informale di diagnosi tecnica. Adriano e Andrea sono in voce, e l’episodio non introduce cambiamenti strutturali.

## Issues

### Minor
- I wiki updates suggeriti dovrebbero includere `Andrea` oltre ad `Adriano`.
- Il report canonico indica correttamente `Minor canon`, ma dovrebbe specificare che non serve aggiornamento timeline.

## Required changes
None.

## Optional improvements
- Aggiungere `Informal Incident Review` come possibile futura pagina wiki.
- Ridurre leggermente l’ultima frase, che chiude troppo come punchline.

## Canon updates needed
Wiki.

## Notes
La voce `Pausa Sigaretta` può essere creata o aggiornata come concetto ricorrente.
```

---

## Esempio di report: Needs revision

```md
# Canon Check Report

## Verdict
Needs revision

## Suggested canon status
Episodic

## Summary
L’episodio è coerente come idea, ma alcuni personaggi risultano fuori voce e il testo tratta una giornata ordinaria come se fosse un evento strutturale.

## Issues

### Major
- Giulia è troppo apertamente ostile verso Vas. La rivalità deve restare sottile e professionalmente plausibile.
- Il testo dichiara che l’evento cambia il modo in cui Mangrovia gestisce tutti i progetti, ma non fornisce un evento sufficiente per un major canon.

### Minor
- Il titolo è troppo comico per il tono dev diary.

## Required changes
- Riscrivere Giulia in modo più corporate e indiretto.
- Cambiare lo status suggerito nel report canonico da `Major canon` a `Episodic`, oppure aggiungere un evento reale e persistente che giustifichi il major canon.
- Rendere il titolo più asciutto.

## Optional improvements
- Aggiungere una breve conseguenza operativa concreta: ticket, follow-up meeting o update wiki.

## Canon updates needed
None, se l’entry resta episodica.

## Notes
Il contenuto può funzionare dopo revisione, ma non deve modificare la timeline nella forma attuale.
```

---

## Esempio di report: Blocked

```md
# Canon Check Report

## Verdict
Blocked

## Suggested canon status
Major canon, but not authorized

## Summary
Il contenuto contraddice il canon perché dichiara che Nikita ha completato ufficialmente il Design System Qadra senza un evento timeline autorizzato e senza aggiornare `characters.md` o la pagina wiki del progetto.

## Issues

### Critical
- Il Design System Qadra viene dichiarato completato. Nel canon attuale deve restare incompleto o parziale.
- Nikita viene presentato come pienamente riabilitato e promosso a lead frontend, cambiando il suo ruolo senza autorizzazione.

## Required changes
- Rimuovere il completamento ufficiale del Design System Qadra.
- Trasformare l’episodio in un falso allarme, una percezione di Giulia, una demo parziale o una dichiarazione soggettiva di Nikita.
- Se invece si vuole rendere canonico il completamento, aggiornare prima timeline, wiki e scheda personaggio.

## Optional improvements
- Usare l’ambiguità tra “demo riuscita” e “completamento reale” come materiale narrativo.

## Canon updates needed
Timeline, Wiki, Characters — solo se l’autore decide di autorizzare il cambiamento.

## Notes
Non pubblicare nella forma attuale.
```

---

## Regola finale

Il compito della skill non è rendere ogni testo più prudente o meno divertente.

Il compito è proteggere la continuità: Mangrovia può essere assurda, ma deve restare coerente abbastanza da poter essere raccontata, indicizzata e aggiornata nel tempo.
