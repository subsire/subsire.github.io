# Skill: Timeline Update

Questa skill valuta se un contenuto generato per l’universo Mangrovia deve aggiornare `timeline.md` e, se sì, produce una nuova entry coerente con il formato canonico.

La timeline non è un archivio di tutto ciò che accade. Funziona quasi come una roadmap storica di Mangrovia: registra solo milestone aziendali, strategiche, organizzative o di prodotto centrale.

Non deve registrare dinamiche tra personaggi, gag ricorrenti, piccoli processi interni, singoli ticket, meeting, onboarding individuali o concetti da wiki che non cambiano lo stato dell’azienda.

---

## Obiettivo

Dato un contenuto `research`, `blog/diary`, `wiki` o altro materiale canonico, determinare:

- se introduce una milestone aziendale o strategica;
- quale stato canonico ha l’evento;
- se serve aggiornare `timeline.md`;
- quale entry aggiungere;
- se servono aggiornamenti anche a wiki, personaggi, relazioni o world knowledge.

La skill deve evitare sia di perdere eventi aziendali importanti sia di riempire la timeline con materiale narrativo che appartiene meglio a wiki, characters, relationships o dev-diary.

---

## Fonti canoniche da consultare

Prima di valutare il contenuto, leggere e rispettare:

1. `canon-rules.md`
2. `timeline.md`
3. `characters.md`
4. `relationships.md`
5. `mangrovia-world.md`
6. `tone-and-style.md`
7. eventuale skill usata per generare il contenuto originale:
  - `research-article.md`
  - `dev-diary-entry.md`
  - `wiki-entry.md`

Se il contenuto contraddice la timeline o il canon, non aggiornare automaticamente. Segnalare la contraddizione e proporre correzione o aggiornamento esplicito.

---

## Input atteso

La skill riceve:

```md
Content type: research / dev-diary / wiki / other
Content title: titolo del contenuto
Content date: data del contenuto, se presente
Canon status from source: episodic / minor canon / major canon / undecided
Content: testo da valutare
Notes: eventuali istruzioni aggiuntive
```

Esempio:

```md
Content type: dev-diary
Content title: Il keynote della piattaforma AI wealth
Content date: Dopo la fusione
Canon status from source: major canon
Content: [testo]
Notes: il contenuto stabilisce una nuova iniziativa prodotto ufficiale
```

Se la data non è presente, usare una data relativa coerente. Non inventare date precise senza necessità.

---

## Output finale

La skill deve produrre:

```md
# Timeline Update Assessment

## Verdict
No update needed / Update recommended / Update required / Blocked

## Reason
Breve spiegazione.

## Suggested timeline status
None / Potential company milestone / Major company milestone

## Timeline entry
Entry pronta da aggiungere a `timeline.md`, se necessaria.

## Other canon updates needed
Wiki / Characters / Relationships / World / None

## Notes
Eventuali osservazioni.
```

---

## Verdict

### No update needed

Il contenuto è episodico, utile solo per una pagina wiki o rilevante per i personaggi, ma non cambia la roadmap aziendale.

Usare quando:

- racconta una giornata senza conseguenze persistenti;
- rafforza una dinamica già nota;
- introduce una gag isolata;
- descrive un concetto già canonico senza cambiarlo;
- propone un’idea non approvata;
- cambia una relazione o percezione interna senza diventare decisione aziendale;
- introduce una pratica locale non riconosciuta come milestone strategica.

### Update recommended

Il contenuto suggerisce una possibile milestone aziendale, ma lo stato ufficiale è ancora ambiguo.

Usare quando:

- un’iniziativa strategica sembra avviata ma non è ancora chiaramente approvata;
- un prodotto centrale cambia direzione, ma il contenuto non stabilisce ancora se sia decisione ufficiale;
- una fase aziendale emerge come tendenza, ma manca una formulazione canonica esplicita;
- un evento potrebbe essere roadmap-level, ma conviene confermare prima di aggiungerlo.

### Update required

Il contenuto introduce una milestone aziendale canonica.

Usare quando:

- nasce Mangrovia o Qadra;
- avviene una fusione, acquisizione, annessione o rebrand;
- cambia il CEO o una figura di leadership aziendale centrale;
- nasce, muore o viene rilanciato un progetto strategico importante;
- una nuova linea di prodotto diventa ufficiale;
- un grande incidente cambia governance, roadmap o offerta aziendale;
- The Rock prende una decisione strutturale;
- il Design System Qadra cambia stato in modo ufficiale;
- una fase aziendale cambia.

### Blocked

Il contenuto non può aggiornare la timeline perché contraddice il canon o richiede autorizzazione dell’autore.

Usare quando:

- completa il Design System Qadra senza permesso;
- licenzia, promuove o trasforma personaggi senza autorizzazione;
- cambia Mangrovia, Qadra o The Rock in modo incompatibile;
- introduce eventi troppo grandi senza supporto canonico;
- rende ufficiale una cosa che doveva restare informale.

---

## Criteri timeline-worthy

Un evento merita timeline solo se risponde “sì” ad almeno una di queste domande:

- Cambia lo stato aziendale di Mangrovia o Qadra?
- Cambia la leadership o la governance aziendale?
- Segna una fusione, acquisizione, annessione, rebrand o ristrutturazione?
- Avvia, chiude o rilancia una linea di prodotto centrale?
- Cambia la fase strategica dell’azienda, per esempio da blockchain ad AI?
- Rende ufficiale una grande iniziativa commerciale o tecnologica?
- Cambia lo stato di un asset centrale come il Design System Qadra?
- Produce conseguenze operative abbastanza grandi da modificare roadmap, governance o offerta?

Se la risposta è no a tutte, non aggiornare la timeline.

---

## Cosa NON mettere in timeline

Non aggiungere:

- singole battute;
- pause sigaretta senza conseguenze;
- meeting senza impatto;
- bug minori risolti;
- piccoli scambi tra personaggi;
- arrivi di personaggi non dirigenziali;
- cambiamenti di relazione tra personaggi;
- esempi isolati di una dinamica già nota;
- pratiche informali del team;
- nuovi tipi di ticket o categorie operative locali;
- research proposal non adottate;
- pagine wiki descrittive senza evento;
- episodi che servono solo come colore;
- stati d’animo non trasformati in evento aziendale;
- “prime volte” interessanti solo per una gag o una voce wiki.

Esempio:

```md
Adriano e Andrea fumano dopo un meeting e commentano che il progetto è condannato.
```

Non serve timeline se resta solo una scena.

---

## Cosa mettere in timeline

Aggiungere:

- fondazione di aziende;
- fusioni e acquisizioni;
- cambi di CEO o leadership aziendale centrale;
- finanziamenti strutturali;
- riconversioni tecnologiche o strategiche;
- nascita, rilancio o chiusura di prodotti centrali;
- cambi ufficiali di stato del Design System Qadra;
- decisioni strutturali di The Rock;
- nuove iniziative AI ufficiali;
- grandi fallimenti o successi di progetti centrali;
- incidenti importanti che modificano governance, roadmap o offerta;
- eventi che cambiano come Mangrovia si racconta, vende o organizza.

Esempio:

```md
Dopo la fusione, Mangrovia annuncia una linea di prodotto AI per il wealth management che integra asset Qadra e automazioni interne Mangrovia.
```

Questo richiede timeline.

---

## Date

Usare la precisione minima necessaria.

### Date precise

Usare solo se il contenuto fornisce una data precisa o se l’autore l’ha stabilita.

Esempio:

```md
## 2026-04-17 — Annuncio ufficiale della fusione Qadra-Mangrovia
```

### Date approssimative

Usare se il contenuto indica mese, stagione o periodo.

Esempio:

```md
## Primavera, anno non definito — Prima offerta AI-first per clienti wealth
```

### Date relative

Usare come default quando il canon non ha date precise.

Esempio:

```md
## Dopo la fusione — The Rock diventa CEO di Mangrovia
```

### Date undefined

Usare per eventi canonici senza collocazione temporale chiara.

Esempio:

```md
## Periodo non definito — Riconversione di Mangrovia all’AI
```

Non inventare date precise per dare falsa solidità.

---

## Timeline entry format

Ogni nuova entry deve seguire il formato di `timeline.md`:

```md
## Data o periodo — Titolo milestone

### Date status
Precise / Approximate / Relative / Undefined

### Summary
Descrizione breve dell’evento.

### Impact
Conseguenze persistenti sul canon.

### Official interpretation
Come l’azienda descrive l’evento.

### Team perception
Come il team percepisce l’evento.

### Related characters
- Personaggio 1
- Personaggio 2

### Related entries
- Voce 1
- Voce 2
```

Non omettere sezioni, salvo richiesta esplicita.

---

## Official interpretation vs Team perception

Ogni evento timeline deve distinguere tra:

### Official interpretation

Come l’evento viene raccontato da Mangrovia/Qadra, da Giulia, da The Rock o nei documenti aziendali.

### Team perception

Come l’evento viene percepito dal team tecnico o dagli stakeholder interni.

Questa distinzione è centrale per il tono Mangrovia.

Esempio:

```md
### Official interpretation
La nuova piattaforma viene presentata come convergenza tra AI, wealth management e operational excellence.

### Team perception
Il team considera l’annuncio come il momento in cui una direzione strategica diventa lavoro da consegnare, anche se i sistemi esistenti non sono ancora pronti.
```

---

## Aggiornamenti collegati

Quando viene prodotta una timeline entry, valutare anche altri aggiornamenti.

### Wiki update

Necessario se:

- nasce un nuovo concetto;
- nasce un nuovo progetto;
- un evento merita una pagina propria;
- un processo aziendale centrale diventa ufficiale;
- una nuova fase o iniziativa strategica ha bisogno di contesto.

### Character update

Necessario se:

- cambia ruolo dirigenziale o aziendale rilevante;
- viene aggiunto un tratto persistente;
- cambia funzione narrativa;
- arriva un nuovo personaggio canonico con ruolo strutturale.

### Relationships update

Necessario se:

- una relazione cambia stato a causa di una milestone aziendale;
- nasce un’alleanza o tensione ricorrente legata a un cambiamento organizzativo ufficiale;
- un evento roadmap-level modifica la dinamica tra gruppi o funzioni.

### World update

Necessario se:

- cambia lo stato di Mangrovia o Qadra;
- nasce una nuova fase aziendale;
- cambia il ruolo dell’AI nel mondo;
- cambia la struttura organizzativa.

---

## Canon status mapping

### Source: Episodic

Default: no timeline update.

Eccezione: se il contenuto è stato classificato male e introduce una milestone aziendale, proporre `Update required`.

### Source: Minor canon

Default: valutare caso per caso.

- Se introduce solo una voce wiki: `No update needed`.
- Se introduce una pratica ricorrente locale: `No update needed`.
- Se suggerisce una possibile milestone aziendale non ancora ufficiale: `Update recommended`.
- Se modifica una fase strategica, un prodotto centrale o la governance: `Update required`.

### Source: Major canon

Default: `Update required` solo se l’evento è roadmap-level.

Se un contenuto major canon cambia solo personaggi, relazioni o concetti narrativi, può richiedere aggiornamenti a `characters.md`, `relationships.md` o `wiki`, ma non necessariamente `timeline.md`.

### Source: Undecided

Valutare con i criteri timeline-worthy.

---

## Regole specifiche

### Design System Qadra

Il Design System Qadra richiede timeline solo quando cambia stato come asset o progetto centrale dell’azienda.

Richiedono timeline:

- completamento ufficiale;
- abbandono ufficiale;
- sostituzione con nuovo design system;
- scoperta di una versione funzionante;
- decisione di non usarlo più;
- incidente grave causato dal suo stato che cambia roadmap, governance o offerta.

Non richiedono timeline:

- gag singola sul fatto che sia incompleto;
- piccolo bug legato a un componente;
- Nikita che dice ancora che è quasi finito.

### The Rock

Una frase di The Rock non richiede timeline da sola.

Richiede timeline se:

- diventa iniziativa ufficiale;
- cambia roadmap;
- modifica organizzazione, prodotto o strategia;
- viene citata come origine di una fase o linea strategica aziendale.

### Giorgio

Un ticket di Giorgio non richiede timeline da solo.

Richiede timeline se:

- il ticket documenta una decisione aziendale già roadmap-level;
- un processo nato operativamente viene adottato ufficialmente come governance aziendale;
- l’evento modifica roadmap, responsabilità o offerta.

### Adriano / Andrea

Una pausa sigaretta non richiede timeline da sola.

Richiede timeline se:

- produce o documenta una decisione aziendale roadmap-level;
- porta alla chiusura, apertura o modifica ufficiale di un progetto centrale.

### Giulia / Vas

Una tensione singola non richiede timeline.

Richiede timeline se:

- una delle due ottiene o perde responsabilità aziendali centrali;
- l’evento coincide con un cambio ufficiale di governance, prodotto o strategia.

### Mattia / Nikita

Un episodio di onboarding non richiede timeline.

Richiede timeline se:

- uno dei due assume un ruolo strutturale in un progetto centrale;
- il Design System Qadra cambia stato ufficiale;
- un errore legato al loro lavoro produce un incidente che cambia governance, roadmap o offerta.

---

## Contraddizioni

Se il contenuto propone un evento che contraddice `timeline.md` o `canon-rules.md`, produrre `Blocked`.

Esempio:

```md
Nikita completa ufficialmente il Design System Qadra e viene promosso senza che l’autore lo abbia autorizzato.
```

Output corretto:

```md
## Verdict
Blocked

## Reason
Il contenuto modifica uno stato canonico centrale senza autorizzazione. Il Design System Qadra è attualmente incompleto e mitologico.
```

Se la contraddizione è solo tra interpretazioni di personaggi, non bloccare.

Esempio valido:

```md
Giulia sostiene che il Design System Qadra sia pronto per il consolidamento, mentre Adriano dice che non è pronto per essere nominato.
```

Questa è una differenza di prospettiva, non una contraddizione canonica.

---

## No update needed: esempio

```md
# Timeline Update Assessment

## Verdict
No update needed

## Reason
Il contenuto racconta una pausa sigaretta tra Adriano e Andrea dopo un meeting, ma non introduce milestone aziendali, cambi di roadmap, leadership, governance o prodotto centrale. Rafforza una dinamica già canonica.

## Suggested timeline status
None

## Timeline entry
None.

## Other canon updates needed
None

## Notes
Il contenuto può restare episodico. Se la Pausa Sigaretta non avesse ancora una pagina wiki, si potrebbe suggerire una wiki entry, ma non è necessario aggiornare la timeline.
```

---

## Update recommended: esempio

```md
# Timeline Update Assessment

## Verdict
Update recommended

## Reason
Il contenuto suggerisce che Mangrovia stia preparando una piattaforma AI per il wealth management basata su asset Qadra, ma non stabilisce ancora se l’iniziativa sia stata approvata ufficialmente come linea di prodotto.

## Suggested timeline status
Potential company milestone

## Timeline entry

## Dopo la fusione — Avvio della piattaforma AI wealth management

### Date status
Relative

### Summary
Mangrovia prepara una nuova piattaforma AI per il wealth management che integra automazioni Mangrovia, dati Qadra e strumenti di advisory.

### Impact
Potrebbe segnare la prima linea di prodotto chiaramente nata dalla fusione Qadra-Mangrovia, ma lo stato canonico richiede conferma.

### Official interpretation
L’iniziativa viene descritta come convergenza naturale tra AI, operational intelligence e wealth management.

### Team perception
Il team tecnico la percepisce come una nuova promessa commerciale costruita sopra sistemi che non hanno ancora finito di conoscersi.

### Related characters
- The Rock
- Giulia
- Gigi
- Adriano
- Andrea

### Related entries
- Qadra
- Mangrovia Blockchain Solutions
- Wealth Management
- AI-first Transformation
- Operational Intelligence

## Other canon updates needed
World, Wiki — only if confirmed.

## Notes
Non aggiungere automaticamente la timeline entry finché il contenuto non chiarisce che l’iniziativa è ufficiale o canonica.
```

---

## Update required: esempio

```md
# Timeline Update Assessment

## Verdict
Update required

## Reason
Il contenuto stabilisce che la piattaforma AI wealth management è stata approvata come iniziativa ufficiale post-fusione. Questo cambia la roadmap aziendale e collega direttamente la riconversione AI di Mangrovia agli asset Qadra.

## Suggested timeline status
Major company milestone

## Timeline entry

## Dopo la fusione — Lancio dell’iniziativa AI Wealth Platform

### Date status
Relative

### Summary
Mangrovia approva una nuova iniziativa di prodotto che combina automazione AI, dati e workflow Qadra per costruire una piattaforma dedicata al wealth management.

### Impact
La roadmap post-fusione assume una direzione commerciale più chiara: l’AI non è più solo trasformazione interna o narrativa strategica, ma diventa offerta di prodotto collegata al mercato wealth.

### Official interpretation
L’iniziativa viene presentata come prova della sinergia tra competenze AI di Mangrovia, posizionamento finanziario di Qadra e leadership AI-first.

### Team perception
Il team tecnico la percepisce come la prima grande promessa post-fusione abbastanza concreta da avere una roadmap, ma non abbastanza concreta da avere tutti i sistemi pronti.

### Related characters
- The Rock
- Giulia
- Gigi
- Adriano
- Andrea

### Related entries
- Qadra
- Mangrovia Blockchain Solutions
- Wealth Management
- AI-first Transformation
- Operational Excellence
- AI Wealth Platform

## Other canon updates needed
Wiki, World

## Notes
Aggiornare `mangrovia-world.md` se l’iniziativa diventa una linea di prodotto stabile. Creare o aggiornare una pagina wiki dedicata alla piattaforma.
```

---

## Blocked: esempio

```md
# Timeline Update Assessment

## Verdict
Blocked

## Reason
Il contenuto dichiara completato il Design System Qadra senza autorizzazione. Questo modifica lo stato di un asset centrale e richiede decisione esplicita dell’autore.

## Suggested timeline status
Major canon event, not authorized

## Timeline entry
None.

## Other canon updates needed
Timeline, Wiki, Characters — only if authorized.

## Notes
Per rendere pubblicabile il contenuto senza cambiare il canon, trasformare il completamento in demo parziale, interpretazione di Giulia o dichiarazione soggettiva di Nikita.
```

---

## Controllo finale

Prima di produrre il risultato, verificare:

- il contenuto introduce una milestone aziendale?
- è già coperto da una timeline entry esistente?
- è una variazione episodica di un pattern già canonico?
- è un concetto da wiki più che da timeline?
- richiede aggiornamento di wiki, characters, relationships o world knowledge senza timeline?
- ci sono contraddizioni con il canon?
- la data è precisa solo se serve davvero?
- `Official interpretation` e `Team perception` sono entrambe presenti?

---

## Regola finale

La timeline deve restare utile, non completa.

Un mondo come Mangrovia produce molti eventi, ma solo alcuni cambiano davvero la storia aziendale, la strategia, la leadership o le linee di prodotto.
