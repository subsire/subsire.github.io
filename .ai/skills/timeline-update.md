# Skill: Timeline Update

Questa skill valuta se un contenuto generato per l’universo Mangrovia deve aggiornare `timeline.md` e, se sì, produce una nuova timeline entry coerente con il formato canonico.

La timeline non è un archivio di tutto ciò che accade. Registra solo eventi con impatto persistente su azienda, personaggi, relazioni, progetti, processi o concetti interni.

---

## Obiettivo

Dato un contenuto `research`, `blog/diary`, `wiki` o altro materiale canonico, determinare:

- se introduce un evento timeline-worthy;
- quale stato canonico ha l’evento;
- se serve aggiornare `timeline.md`;
- quale entry aggiungere;
- se servono aggiornamenti anche a wiki, personaggi, relazioni o world knowledge.

La skill deve evitare sia di perdere eventi importanti sia di riempire la timeline con gag episodiche.

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
Content title: Il giorno in cui la metafora è diventata un requisito
Content date: Dopo la fusione
Canon status from source: minor canon
Content: [testo]
Notes: l’episodio introduce la Classificazione delle Metafore Dirigenziali
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
None / Minor canon event / Major canon event

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

Il contenuto è episodico o utile solo per una pagina wiki, ma non cambia lo stato del mondo.

Usare quando:

- racconta una giornata senza conseguenze persistenti;
- rafforza una dinamica già nota;
- introduce una gag isolata;
- descrive un concetto già canonico senza cambiarlo;
- propone un’idea non approvata.

### Update recommended

Il contenuto introduce un concetto ricorrente o un evento minore che potrebbe essere utile in timeline, ma non è indispensabile.

Usare quando:

- una pratica informale diventa ricorrente;
- nasce una metrica o un processo non ancora ufficiale;
- un research formalizza un concetto riutilizzabile;
- un evento minore spiega l’origine di una voce wiki.

### Update required

Il contenuto introduce un cambiamento canonico persistente.

Usare quando:

- cambia il ruolo di un personaggio;
- cambia una relazione principale;
- nasce o muore un progetto importante;
- un processo diventa ufficiale;
- un grande incidente cambia l’organizzazione;
- The Rock prende una decisione strutturale;
- il Design System Qadra cambia stato;
- entra un nuovo personaggio canonico;
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

Un evento merita timeline se risponde “sì” ad almeno una di queste domande:

- Cambia lo stato di Mangrovia o Qadra?
- Cambia un prodotto, progetto o sistema importante?
- Cambia ruolo, funzione o percezione di un personaggio?
- Cambia una relazione principale?
- Introduce un nuovo processo stabile?
- Introduce un nuovo concetto ricorrente e influente?
- Spiega l’origine di una voce wiki importante?
- Produce conseguenze operative persistenti?
- È citabile come “prima volta” di qualcosa?
- Modifica la percezione del team su un tema centrale?

Se la risposta è no a tutte, non aggiornare la timeline.

---

## Cosa NON mettere in timeline

Non aggiungere:

- singole battute;
- pause sigaretta senza conseguenze;
- meeting senza impatto;
- bug minori risolti;
- piccoli scambi tra personaggi;
- esempi isolati di una dinamica già nota;
- research proposal non adottate;
- pagine wiki descrittive senza evento;
- episodi che servono solo come colore;
- stati d’animo non trasformati in evento.

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
- arrivo di personaggi canonici;
- cambi di ruolo;
- incidenti importanti;
- nascita di processi ricorrenti;
- formalizzazione di concetti interni;
- cambi di stato del Design System Qadra;
- decisioni strutturali di The Rock;
- nuove iniziative AI ufficiali;
- grandi fallimenti o successi di progetti centrali;
- eventi che modificano come il team lavora.

Esempio:

```md
Dopo vari episodi, Giorgio introduce ufficialmente un nuovo tipo di ticket per distinguere metafore dirigenziali, requisiti funzionali e frasi motivazionali non azionabili.
```

Questo richiede timeline.

---

## Date

Usare la precisione minima necessaria.

### Date precise

Usare solo se il contenuto fornisce una data precisa o se l’autore l’ha stabilita.

Esempio:

```md
## 2026-04-17 — Primo ticket di classificazione delle metafore dirigenziali
```

### Date approssimative

Usare se il contenuto indica mese, stagione o periodo.

Esempio:

```md
## Aprile, anno non definito — Ultimo commit noto di Nikita
```

### Date relative

Usare come default quando il canon non ha date precise.

Esempio:

```md
## Dopo la fusione — Formalizzazione della Classificazione delle Metafore Dirigenziali
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
## Data o periodo — Titolo evento

### Date status
Precise / Approximate / Relative / Undefined

### Summary
Descrizione breve dell’evento.

### Impact
Conseguenze persistenti sul canon.

### Official interpretation
Come l’azienda descrive l’evento.

### Team perception
Come il team o i personaggi percepiscono l’evento.

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

Come l’evento viene percepito dal team tecnico o dai personaggi coinvolti.

Questa distinzione è centrale per il tono Mangrovia.

Esempio:

```md
### Official interpretation
La nuova tassonomia viene presentata come strumento per aumentare chiarezza, ownership e velocità decisionale.

### Team perception
Il team la considera il primo caso documentato in cui una frase motivazionale ha ottenuto uno stato operativo prima di avere un significato.
```

---

## Aggiornamenti collegati

Quando viene prodotta una timeline entry, valutare anche altri aggiornamenti.

### Wiki update

Necessario se:

- nasce un nuovo concetto;
- nasce un nuovo progetto;
- un evento merita una pagina propria;
- un processo diventa ricorrente;
- un personaggio o gruppo ha una nuova voce collegata.

### Character update

Necessario se:

- cambia ruolo;
- cambia relazione stabile;
- viene aggiunto un tratto persistente;
- cambia funzione narrativa;
- arriva un nuovo personaggio canonico.

### Relationships update

Necessario se:

- una relazione cambia stato;
- nasce un’alleanza o tensione ricorrente;
- un evento modifica la dinamica tra due personaggi.

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

Eccezione: se il contenuto è stato classificato male e introduce conseguenze persistenti, proporre `Update required`.

### Source: Minor canon

Default: valutare caso per caso.

- Se introduce solo una voce wiki: `Update recommended` o `No update needed`.
- Se introduce una pratica ricorrente con origine chiara: `Update recommended`.
- Se modifica processi stabili: `Update required`.

### Source: Major canon

Default: `Update required`.

Se un contenuto major canon non richiede timeline, probabilmente lo stato è sbagliato.

### Source: Undecided

Valutare con i criteri timeline-worthy.

---

## Regole specifiche

### Design System Qadra

Qualsiasi cambiamento di stato del Design System Qadra richiede timeline.

Richiedono timeline:

- completamento ufficiale;
- abbandono ufficiale;
- sostituzione con nuovo design system;
- scoperta di una versione funzionante;
- decisione di non usarlo più;
- incidente grave causato dal suo stato.

Non richiedono timeline:

- gag singola sul fatto che sia incompleto;
- piccolo bug legato a un componente;
- Nikita che dice ancora che è quasi finito.

### The Rock

Una frase di The Rock non richiede timeline da sola.

Richiede timeline se:

- diventa iniziativa ufficiale;
- cambia roadmap;
- genera nuovo processo stabile;
- modifica organizzazione, prodotto o strategia;
- viene citata come origine di un concetto ricorrente.

### Giorgio

Un ticket di Giorgio non richiede timeline da solo.

Richiede timeline se:

- introduce una nuova categoria di ticket stabile;
- formalizza un processo;
- trasforma un evento in pratica aziendale;
- cambia il modo in cui il team lavora.

### Adriano / Andrea

Una pausa sigaretta non richiede timeline da sola.

Richiede timeline se:

- viene riconosciuta o formalizzata, anche involontariamente;
- diventa origine di un concetto wiki rilevante;
- produce una decisione stabile;
- cambia una dinamica relazionale canonica.

### Giulia / Vas

Una tensione singola non richiede timeline.

Richiede timeline se:

- la rivalità cambia ruolo o intensità in modo persistente;
- una delle due ottiene o perde responsabilità a causa dell’altra;
- un evento modifica il rapporto con il team.

### Mattia / Nikita

Un episodio di onboarding non richiede timeline.

Richiede timeline se:

- Mattia assume un ruolo stabile in un progetto centrale;
- Nikita lo prende ufficialmente sotto la propria guida;
- l’azienda formalizza il pattern dell’economico programmatore;
- un errore di onboarding produce conseguenze persistenti.

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
Il contenuto racconta una pausa sigaretta tra Adriano e Andrea dopo un meeting, ma non introduce nuovi processi, eventi persistenti o cambiamenti relazionali. Rafforza una dinamica già canonica.

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
Il contenuto introduce per la prima volta la `Classificazione delle Metafore Dirigenziali` come pratica ricorrente, nata da un fraintendimento operativo di una frase di The Rock. Non è ancora un processo ufficiale, ma ha potenziale come concetto minor canon.

## Suggested timeline status
Minor canon event

## Timeline entry

## Dopo la fusione — Prima classificazione operativa di una metafora dirigenziale

### Date status
Relative

### Summary
Una frase motivazionale di The Rock viene trattata come possibile requisito funzionale, portando Giorgio e Gigi a distinguere tra metafora, direzione strategica e lavoro effettivamente assegnabile.

### Impact
Introduce il concetto di Classificazione delle Metafore Dirigenziali come pratica informale e potenzialmente ricorrente.

### Official interpretation
L’episodio viene descritto come occasione per migliorare chiarezza, allineamento e traduzione della visione strategica in azione.

### Team perception
Il team lo percepisce come il primo caso in cui una frase motivazionale ha richiesto triage operativo.

### Related characters
- The Rock
- Giulia
- Giorgio
- Gigi
- Adriano
- Andrea

### Related entries
- The Rock
- Executive Metaphors
- Ticketizzazione
- AI-first Transformation
- Giorgio

## Other canon updates needed
Wiki

## Notes
Creare o aggiornare una pagina wiki per `Classificazione delle Metafore Dirigenziali`.
```

---

## Update required: esempio

```md
# Timeline Update Assessment

## Verdict
Update required

## Reason
Il contenuto stabilisce che Mangrovia ha introdotto ufficialmente un nuovo processo per distinguere metafore dirigenziali, indicazioni strategiche e requisiti funzionali. Questo cambia il modo in cui il team gestisce le comunicazioni di The Rock.

## Suggested timeline status
Major canon event

## Timeline entry

## Dopo la fusione — Formalizzazione della Classificazione delle Metafore Dirigenziali

### Date status
Relative

### Summary
Mangrovia formalizza un processo interno per classificare le frasi di The Rock in metafore motivazionali, direzioni strategiche, requisiti funzionali e contenuti non azionabili.

### Impact
Il processo modifica stabilmente il rapporto tra comunicazione dirigenziale, product management e backlog tecnico. Giorgio introduce categorie operative dedicate e Giulia presenta la pratica come strumento di allineamento.

### Official interpretation
La formalizzazione viene presentata come iniziativa di operational excellence per migliorare la traduzione della visione AI-first in azioni misurabili.

### Team perception
Il team tecnico interpreta l’evento come la conferma che nessuna frase di The Rock può più essere considerata innocua.

### Related characters
- The Rock
- Giulia
- Giorgio
- Gigi
- Adriano
- Andrea

### Related entries
- Executive Metaphors
- Ticketizzazione
- AI-first Transformation
- Operational Excellence
- Giorgio

## Other canon updates needed
Wiki, World

## Notes
Aggiornare anche la wiki con una pagina `Classificazione delle Metafore Dirigenziali`. Valutare se aggiungere il processo tra i concetti ricorrenti di `mangrovia-world.md`.
```

---

## Blocked: esempio

```md
# Timeline Update Assessment

## Verdict
Blocked

## Reason
Il contenuto dichiara completato il Design System Qadra e promuove Nikita a lead frontend senza autorizzazione. Questo modifica fatti canonici centrali e richiede decisione esplicita dell’autore.

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

- il contenuto introduce un evento persistente?
- è già coperto da una timeline entry esistente?
- è una variazione episodica di un pattern già canonico?
- è un concetto da wiki più che da timeline?
- richiede aggiornamento di personaggi, relazioni o world knowledge?
- ci sono contraddizioni con il canon?
- la data è precisa solo se serve davvero?
- `Official interpretation` e `Team perception` sono entrambe presenti?

---

## Regola finale

La timeline deve restare utile, non completa.

Un mondo come Mangrovia produce molti eventi, ma solo alcuni cambiano davvero il modo in cui l’azienda racconta se stessa, lavora o fallisce con metodo.
