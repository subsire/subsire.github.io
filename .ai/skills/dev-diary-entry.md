# Skill: Dev-Diary Entry

Questa skill genera contenuti per la sezione `blog` / `dev-diary` dell’universo Mangrovia.

Il dev-diary è un aggiornamento editoriale di sviluppo in-universe: racconta cosa è stato osservato, provato, deciso e rimandato durante una giornata di lavoro. Può includere personaggi, attriti e conseguenze operative, ma il centro del testo deve restare il lavoro: componenti, requisiti, tradeoff, ticket, rischi, scelte tecniche e prossimi passi.

Il formato canonico è una cronaca tecnica/editoriale simile a un developer diary di prodotto: contesto, lavoro svolto, risultati, decisioni, follow-up. Se `research` è il paper assurdo e `wiki` è la reference, il dev-diary è il log di avanzamento commentato. Il mockumentary resta disponibile come variante esplicita, non come default.

Una entry non deve mai essere scritta come diario in prima persona di un personaggio. Può però includere spezzoni di dialoghi, interviste, ticket, messaggi Slack, note interne, documenti o incident report scritti dai personaggi.

---

## Obiettivo

Generare una entry editoriale coerente con il canon Mangrovia, utile per alimentare:

- la sezione `blog` o `dev-diary`;
- eventuali pagine wiki correlate;
- possibili eventi timeline;
- nuovi concetti interni ricorrenti.

Il testo deve essere pubblicabile in Markdown. L'impatto canonico va valutato nel report privato del workflow, non nel file pubblicato.

### Lingua e caratteri

Le entry pubblicate in italiano devono usare ortografia italiana naturale in UTF-8, incluse le lettere accentate (`è`, `é`, `à`, `ò`, `ù`, `ì`). Non trasformare parole come `è`, `può`, `già`, `verrà`, `capacità` o `verità` in versioni ASCII.

Mantenere invece ASCII dove serve tecnicamente: slug, file name, branch, path, identificatori di codice, chiavi YAML, comandi e token letterali.

---

## Fonti canoniche da consultare

Prima di generare l’entry, leggere e rispettare:

1. `canon-rules.md`
2. `characters.md`
3. `relationships.md`
4. `mangrovia-world.md`
5. `tone-and-style.md`
6. `timeline.md`

Se la richiesta contraddice il canon, segnalare il problema e proporre una versione coerente.

---

## Input atteso

La skill può ricevere uno o più di questi input:

```md
Topic: tema o giornata da documentare
Narrative frame: product-log / editorial / document-heavy / mockumentary / interview-heavy
Characters: personaggi coinvolti
Setting: ufficio / call / Slack / pausa sigaretta / retrospettiva / deploy / altro
Event: cosa succede
Tone: dry / more technical / more corporate / more comic / darker
Canon status: episodic / minor canon / major canon / undecided
Length: short / medium / long
Materials: changelog / ticket / Slack / snippet / decision log / interviste / mixed
Notes: istruzioni aggiuntive
```

Esempio:

```md
Topic: Mattia inizia l'onboarding sul Design System Qadra via Storybook
Narrative frame: product-log
Characters: Mattia, Giulia, Nikita, Vas, Giorgio, Adriano
Setting: Storybook + Figma + repository + Linear
Tone: dry
Canon status: minor canon
Length: medium
Materials: ticket + snippet + decision log
```

Se l’input è incompleto, fare una scelta ragionevole e procedere. Chiedere chiarimenti solo se manca completamente l’evento centrale.

---

## Tipi di entry

Scegliere il tipo più adatto.

### 1. Dev-diary product log

Voce terza o editoriale, asciutta, orientata al lavoro. Documenta una giornata o una sessione di sviluppo come aggiornamento di prodotto: cosa si voleva capire, cosa è stato controllato, cosa è emerso, cosa è stato deciso e cosa resta aperto.

È il formato canonico e il default.

### 2. Dev-diary document-heavy

Formato ibrido con changelog, decision log, estratti ticket, snippet, note di retrospettiva o recap Slack. La voce editoriale deve collegare i materiali e spiegare il loro impatto operativo.

Da usare quando il contenuto vive più nei documenti e nei sistemi di lavoro che nella scena.

### 3. Dev-diary con inserti di intervista

La struttura resta editoriale, ma include brevi risposte dei personaggi come se fossero state raccolte dopo l'evento.

Da usare quando la voce individuale è utile, senza trasformare l'entry in un testo autonomo firmato dal personaggio.

Esempio:

```md
Intervistato più tardi, Adriano ha detto che la parte difficile non era il bug, ma il fatto che il bug avesse già una roadmap.
```

### 4. Dev-diary mockumentary

Voce terza, asciutta, osservativa. Racconta la giornata come se una troupe invisibile avesse seguito call, corridoi, Slack, ticket e conseguenze operative.

Da usare solo quando l'utente chiede esplicitamente una scena, un episodio molto narrativo o un formato mockumentary. Non è il default.

### 5. Frammento interno

Formato ibrido: Slack recap, meeting notes, incident note, retrospettiva, estratto ticket, comunicazione interna.

Il frammento deve comunque essere incorniciato da una voce terza che contestualizza chi lo ha prodotto, quando e con quali conseguenze.

### 6. Giornata corale

Più personaggi reagiscono allo stesso evento. La voce resta editoriale, ma può alternare sezioni di lavoro, commenti brevi, transcript e documenti.

Da usare con moderazione: troppi personaggi possono rendere l’entry dispersiva.

### 7. Pausa sigaretta

Formato ricorrente, soprattutto per Adriano e Andrea. Breve, asciutto, spesso più vicino alla verità di molte retrospettive ufficiali.

Anche in questo caso la scena è raccontata in terza persona. Adriano e Andrea possono parlare direttamente nei dialoghi, ma non diventano narratori dell'entry.

---

## Struttura variabile

La struttura in capitoli non è fissa. Ogni dev-diary deve scegliere i heading in base all'episodio, al materiale disponibile e al ritmo operativo della giornata.

Le sezioni ricorrenti sotto sono un toolkit, non un template obbligatorio. Usarle solo quando aiutano davvero a ordinare il contenuto.

Il sito Astro renderizza il titolo e la data dalla frontmatter: non inserire un heading `# Titolo` nel corpo del Markdown pubblicato.

Possibili capitoli:

```md
_Date or approximate date, optional_

## Summary
Breve descrizione del lavoro svolto, del problema emerso e dell'esito.

## Context
Perché il tema è stato affrontato oggi e quale domanda operativa guidava la sessione.

## Worklog
Cosa è stato guardato, provato o confrontato. Usare dettagli concreti: repository, Storybook, Figma, ticket, log, branch, ambienti, varianti, vincoli cliente.

## Findings
Risultati della ricognizione. Separare fatti verificati, ipotesi e zone ancora ambigue.

## Decision
Decisione presa o non-decisione esplicita, con motivo.

## Next steps
Conseguenza concreta: ticket, owner, follow-up, demo, refactor, decisione rimandata, criterio di verifica.
```

Una entry media può usare tutti questi capitoli, solo alcuni, oppure capitoli più specifici come `## Ricognizione`, `## Ticket`, `## Evidenze`, `## Nota di review`, `## Esito della demo`, `## Cosa resta aperto`, `## Decisione provvisoria` o `## Follow-up operativo`.

Per entry brevi o molto focalizzate si può usare una struttura ridotta:

```md
## Summary
...

## Entry
Cronaca editoriale del lavoro, senza trasformarla in scena narrativa.

## Outcome
Decisione, ticket o follow-up.
```

Per entry esplicitamente narrative o mockumentary, si può usare `Summary / Entry / Outcome`, ma solo se richiesto dal brief o se il contenuto vive davvero nella scena.

Per entry brevi:

```md
Testo breve in terza persona, orientato a lavoro svolto, evidenze e prossimi passi.
```

Non forzare mai una sezione vuota o artificiale solo per rispettare un formato. Se l'episodio è una pausa sigaretta, un incident note, una review, una demo o un thread Slack, la struttura deve riflettere quella forma. Il vincolo stabile non è il nome dei capitoli, ma la presenza di una traiettoria chiara: contesto minimo, cosa è stato osservato o fatto, quali evidenze contano, cosa è stato deciso o rimandato.

Non includere `Related Entries`, `Canon Impact`, canon check notes, suggerimenti wiki o timeline assessment nel Markdown pubblicato. Queste informazioni appartengono al report privato del workflow.

---

## Regole di tono

Il dev-diary deve:

- essere editoriale, asciutto e orientato al lavoro;
- usare una cornice in terza persona o una voce redazionale impersonale;
- documentare una sequenza di lavoro riconoscibile;
- usare i personaggi come fonti, owner o partecipanti, non come motore principale dell'episodio;
- usare dettagli concreti;
- evitare punchline forzate;
- lasciare emergere il sottotesto;
- mantenere i personaggi competenti nel proprio ambito;
- trattare il grottesco come ordinaria amministrazione;
- far seguire agli eventi conseguenze operative plausibili.

Il testo non deve spiegare la comicità.

È corretto che il dev-diary contenga lore, riferimenti ricorrenti e dinamiche aziendali, ma il formato base non deve sembrare un racconto breve o una scena da sitcom. Questi elementi devono emergere da ticket, decisioni, compromessi tecnici, recap e conseguenze operative.

Evitare come default:

- dettagli fisici o psicologici da racconto se non servono a capire il lavoro;
- sequenze dialogate lunghe;
- finali aforistici o da battuta;
- scene costruite su call, silenzi, sguardi e pausa sigaretta se il tema è tecnico;
- personaggi trattati come gag ricorrenti invece che come persone coinvolte in una decisione.

La satira deve stare soprattutto nella frizione tra processo e realtà tecnica.

Scrivere:

> Oggi il team ha confrontato Storybook, Figma e produzione sul componente `Select`. Storybook documenta quattro varianti, Figma ne contiene sei e in produzione ne esistono due, entrambe modificate per contesti cliente diversi. Per la demo non serve risolvere l'intero Design System: serve scegliere una variante stabile, documentare l'eccezione e aprire una ricognizione separata.

Non scrivere:

> Nikita ha aperto una tab, poi un'altra. Mattia ha guardato il taccuino. Per qualche secondo nessuno ha parlato. Adriano ha detto che il Design System aveva tre fonti della verità e nessuna abbastanza coraggiosa da mentire da sola.

---

## Voce editoriale

La voce editoriale deve essere calma, precisa e leggermente sospetta.

Non deve giudicare troppo. Deve osservare e ordinare il lavoro.

Buon esempio:

```md
La giornata è stata dedicata alla prima ricognizione del Design System Qadra. L'obiettivo dichiarato era capire se Storybook potesse essere usato come fonte operativa per la schermata cliente in preparazione. Dopo il confronto con Figma e produzione, la risposta è stata: solo per alcuni componenti e solo dopo aver esplicitato quali varianti sono ancora affidabili.
```

La voce editoriale può entrare nel sottotesto, ma deve tornare rapidamente a evidenze, decisioni e follow-up.

---

## Voci dei personaggi come materiali interni

Le voci individuali devono comparire solo come materiali dentro la cornice editoriale:

- dialoghi osservati;
- spezzoni di intervista;
- commenti Slack;
- note su ticket;
- estratti di documenti;
- appunti interni;
- frammenti di retrospettiva.

Non generare entry interamente firmate o narrate da un personaggio. Le frasi in prima persona sono ammesse solo se presentate come citazioni, risposte, note o documenti.

### Adriano

Cinico, tecnico, asciutto. Può essere soggettivo e sarcastico, ma resta concreto.

Esempio di inserto:

```md
In un'intervista raccolta dopo il planning, Adriano ha detto: "Alle 9:30 ci hanno chiesto una stima sul refactor. Alle 9:34 ho capito che la stima era già stata promessa a qualcuno che non sa cosa sia un refactor."
```

### Andrea

Freddo, laconico, ostile sotto la superficie. Non deve insultare apertamente.

Esempio di inserto:

```md
Nel postmortem, Andrea ha scritto: "Ho verificato i log. La buona notizia è che il sistema si comporta in modo coerente. La cattiva è che il comportamento richiesto è questo."
```

### Giulia

Corporate, morbida, revisionista. Descrive problemi come opportunità di processo.

Esempio di inserto:

```md
Nel recap del workshop, Giulia ha scritto: "L’episodio di oggi ha reso visibile una possibilità interessante: trasformare una divergenza interpretativa tra prodotto e tecnologia in un momento di responsabilità condivisa."
```

### Vas

Pratica, umana, diretta. Meno velenosa, orientata alla soluzione.

Esempio di inserto:

```md
Intervistata a fine giornata, Vas ha detto: "A un certo punto ho chiesto cosa servisse davvero al cliente. Per qualche secondo la call è sembrata meno una call."
```

### Nikita

Difensivo, ansioso, tecnico ma evasivo.

Esempio di inserto:

```md
In un commento su Storybook, Nikita ha scritto: "Il componente non era rotto. Era in una fase in cui il comportamento corretto dipendeva da quale documento si considerava più aggiornato."
```

### Fiorenzo

Severo, tecnico, fisico, moralizzante.

Esempio di inserto:

```md
Durante la review, Fiorenzo ha detto: "Il problema non era la funzione. Il problema era la postura. Una funzione così entra in produzione come uno che fa stacco da terra con la schiena rotonda: magari oggi passa, domani ti spezza."
```

### Salvo

Pratico, paziente, con possibili esplosioni.

Esempio di inserto:

```md
Nel canale incident, Salvo ha scritto: "Abbiamo messo una patch. Non è bella, ma almeno adesso il sistema sbaglia nello stesso modo per tutti."
```

### Giorgio

Romanaccio e operativo nel parlato; formalissimo, burocratico e leggermente carabinieresco nei ticket. Tutto diventa classificazione, backlog o assegnazione.

Esempio di inserto:

```md
Giorgio, intervistato davanti alla board, ha detto: "Oggi m’hanno detto che c’era confusione. Io j’ho detto: perfetto, aprimo una board pe’ la confusione. Se nun c’ha uno stato, nun è confusione, è teatro."
```

### Lorenzo

Tecnico, nervoso, statistico. Il Milan può entrare come analogia.

Esempio di inserto:

```md
In un documento di stima, Lorenzo ha scritto: "Il modello suggerisce che la probabilità di consegna sia bassa, ma non nulla. Bassa come una rimonta dopo un primo tempo gestito male, quindi tecnicamente abbastanza alta da farci soffrire."
```

### Mattia

Scolastico, disponibile, ingenuo.

Esempio di inserto:

```md
Nelle note di onboarding, Mattia ha scritto: "Oggi ho provato a capire il design system. Mi sembrava una buona idea partire dagli atomi, ma nel repository ho trovato prima le molecole deprecate."
```

### Gigi

Romanaccio, autoritario, tecnico, taglia corto.

Esempio di inserto:

```md
Durante la review architetturale, Gigi ha detto: "Sta cosa nun è un refactor. È un condono edilizio co’ TypeScript."
```

### The Rock

Raro. Se usato, deve sembrare keynote, manifesto o comunicato.

Esempio di inserto:

```md
Nel keynote trimestrale, The Rock ha detto: "We are not integrating AI into the business. We are teaching the business to behave like AI: faster, stronger, trained on pain and aligned with value."
```

---

## Uso dei dialoghi

I dialoghi sono materiali di supporto, non la struttura dell'entry. Devono essere brevi, mirati e usati solo quando chiariscono una decisione, un conflitto di definizione o una responsabilità operativa.

Preferire una citazione singola o uno scambio asciutto a lunghe conversazioni teatrali. In una entry product-log media, 0-2 interventi diretti sono sufficienti.

Buon esempio:

```md
Mattia ha chiesto se Storybook dovesse essere considerato la fonte primaria.

Nikita ha risposto che, per alcuni componenti, Storybook documentava "la direzione prevista" più che lo stato effettivo. La distinzione è stata annotata nel ticket di ricognizione.
```

Evitare dialoghi in cui ogni personaggio spiega se stesso o fa battute troppo riconoscibili.

Dialoghi, interviste e documenti devono funzionare come prove raccolte dalla cronaca, non come sostituti della cronaca. Dopo un inserto, tornare alla voce editoriale e mostrare la conseguenza operativa.

---

## Pattern editoriali consigliati

### 1. Frase astratta → lavoro concreto

Una frase di The Rock o Giulia produce ticket, meeting o refactor.

### 2. Piccolo bug → crisi semantica

Un problema tecnico rivela che nessuno ha la stessa definizione di completamento, owner o requisito.

### 3. Recap informale → diagnosi corretta

Un confronto informale identifica ciò che il processo non riesce a nominare. Può essere una pausa sigaretta, ma non deve diventare automaticamente una scena narrativa.

### 4. Design system → ricognizione

Qualcuno confronta Storybook, Figma, repository e produzione per capire quali parti del Design System Qadra sono davvero adottabili.

### 5. Meeting → ticketizzazione

Un meeting produce più lavoro di quello che avrebbe dovuto risolvere.

### 6. Research → conseguenza assurda

Un articolo research interno viene preso abbastanza sul serio da diventare processo.

Quando un research compare nel dev-diary, trattarlo come oggetto di scena o documento che produce conseguenze operative. Non copiare il tono da paper nel racconto, se non in brevi estratti.

### 7. Onboarding → mappa operativa

Mattia viene introdotto a un sistema che gli era stato descritto come moderno, flessibile e quasi documentato; l'entry deve trasformare la confusione in mappa, non solo in scena.

### 8. Backend → pazienza finita

Fiorenzo, Salvo o Andrea affrontano un incidente causato da decisioni prese altrove.

---

## Possibili ambientazioni

- ufficio Mangrovia;
- call su Google Meet;
- Slack;
- Linear;
- retrospettiva;
- planning;
- town hall di The Rock;
- pausa sigaretta;
- code review;
- deploy;
- incident room;
- Figma;
- Storybook;
- documento Notion;
- cucina / area caffè;
- corridoio dopo un meeting;
- demo cliente;
- workshop di allineamento.

---

## Titoli

I titoli devono essere concreti, non troppo brillanti.

Buoni esempi:

- `Il giorno in cui la metafora è diventata un requisito`
- `Pausa sigaretta dopo il workshop di allineamento`
- `Nikita ha detto che mancava solo il tema dark`
- `Il deploy delle 17:30`
- `Mattia e il primo incontro con Storybook`
- `La retrospettiva che Giorgio ha trasformato in board`
- `Tre definizioni di completamento`
- `La patch di Salvo`

Da evitare:

- `Che casino assurdo in Mangrovia!`
- `The Rock fa impazzire tutti`
- `Nikita combina guai di nuovo`
- `La giornata più folle di sempre`

---

## Related entries per il report privato

Ogni entry deve proporre 3-8 voci correlate nel report privato del workflow, non nel Markdown pubblicato.

Esempi:

```md
- Adriano
- Andrea
- Pausa Sigaretta
- Design System Qadra
- Giorgio
- Feature Completion Confidence Index
```

Le voci correlate possono essere già esistenti o suggerite come future pagine wiki.

---

## Canon impact per il report privato

Ogni entry deve essere accompagnata da questa valutazione nel report privato del workflow.

```md
### Suggested status
Episodic / Minor canon / Major canon

### Timeline update needed
Yes / No

### Wiki update needed
Yes / No

### Character update needed
Yes / No

### Suggested wiki entries
- Entry 1
- Entry 2

### Suggested timeline entry
Only if needed.

### Notes
Brief explanation.
```

Non inserire questa valutazione nel Markdown pubblicato.

---

## Stati canonici

### Episodic

L’entry racconta una giornata o un evento senza conseguenze persistenti.

Esempio:

- pausa sigaretta dopo un meeting;
- piccolo bug risolto;
- call assurda ma senza effetti duraturi.

### Minor canon

L’entry introduce un concetto, pattern o micro-evento ricorrente.

Esempio:

- la pausa sigaretta diventa retrospettiva informale;
- nasce una metrica interna;
- Giorgio introduce una nuova categoria di ticket.

### Major canon

L’entry introduce un cambiamento strutturale.

Esempio:

- arriva un nuovo personaggio importante;
- un progetto viene ufficialmente chiuso o avviato;
- un grande incidente cambia i processi interni;
- un personaggio cambia ruolo.

Gli eventi major canon richiedono sempre aggiornamento timeline.

---

## Controllo canonico prima dell’output

Prima di produrre l’entry finale, verificare:

- i personaggi sono coerenti con `characters.md`?
- le dinamiche rispettano `relationships.md`?
- il tono rispetta `tone-and-style.md`?
- l’evento è plausibile dentro `mangrovia-world.md`?
- l’entry introduce cambiamenti canonici?
- se sì, sono segnalati nel report privato del workflow?
- la cornice scelta sembra un developer log editoriale e non un racconto breve?
- se la cornice è mockumentary, è stata richiesta esplicitamente o è davvero necessaria?
- il testo chiarisce lavoro svolto, evidenze, decisione e prossimi passi?
- la voce resta in terza persona anche quando include materiali dei personaggi?
- The Rock è usato con parsimonia?
- Giorgio resta centrato su ticket e task?
- Giulia resta plausibilmente ragionevole?
- Andrea non diventa apertamente aggressivo?

Se ci sono contraddizioni, correggerle prima dell’output.

---

## Output finale

L’output finale deve essere Markdown valido.

Scegliere 2-6 heading di secondo livello (`##`) adatti all'episodio. I capitoli possono cambiare ogni volta: non esiste una sequenza fissa obbligatoria.

Esempio product-log completo:

```md
## Summary
...

## Context
...

## Worklog
...

## Findings
...

## Decision
...

## Next steps
...
```

Esempio breve o con materiali interni:

```md
## Summary
...

## Entry
...

> Estratto, intervista, commento Slack o nota interna quando serve.

...

## Outcome
...
```

Altri heading validi, quando più naturali per l'episodio:

```md
## Ricognizione
## Evidenze
## Ticket
## Nota interna
## Decisione provvisoria
## Cosa resta aperto
## Follow-up operativo
```

Non aggiungere `Related Entries`, `Canon Impact` o note private nel Markdown pubblicato.

---

## Esempio breve product log

```md
## Summary

Oggi Mattia ha iniziato l'onboarding sul Design System Qadra usando Storybook come punto di ingresso. La ricognizione ha chiarito che alcuni componenti sono usabili come riferimento, mentre altri richiedono un confronto esplicito con Figma e produzione.

## Context

L'obiettivo della sessione era capire se Storybook potesse essere trattato come fonte operativa per la schermata cliente in preparazione. Giulia ha impostato il lavoro come ricognizione leggera, con focus su componenti già presenti nella libreria Qadra.

## Worklog

Il primo controllo ha riguardato il `Button`, che risulta abbastanza coerente tra Storybook e implementazione. Le differenze principali sono di naming e stato di adozione.

Il `Select` ha mostrato il problema reale: Storybook documenta quattro varianti, Figma ne contiene sei e in produzione ne esistono due, entrambe adattate in contesti cliente diversi. Nel repository è presente anche una variante con commento `TODO: align after DS merge`.

## Findings

- Storybook è utile come indice dei componenti, ma non sempre come fonte di verità.
- Figma conserva varianti non sempre adottate.
- La produzione contiene eccezioni nate prima della fusione Qadra-Mangrovia.
- Per la demo cliente serve una variante stabile del `Select`, non una normalizzazione completa del Design System.

## Decision

Per la demo verrà scelta una sola variante del `Select`, documentando esplicitamente perché è quella usata. La ricognizione completa della libreria resta separata dalla delivery corrente.

## Next steps

Giorgio ha aperto una epic `Ricognizione componenti Qadra`. Mattia seguirà il confronto Storybook/Figma/produzione insieme a Nikita. Vas ha chiesto che la scelta del `Select` venga chiusa prima della demo cliente.
```

---

## Esempio breve con documento interno

```md
## Summary

Un presunto bug frontend viene analizzato come incidente API e si rivela una divergenza tra implementazione, aspettativa di prodotto e commenti rimasti su Figma.

## Context

La segnalazione è arrivata durante la preparazione di una schermata cliente. Il comportamento visibile non corrispondeva al mockup Figma, ma il ticket originale non descriveva il campo contestato.

## Worklog

La richiesta arrivava al servizio nuovo alle 10:14. Il backend rispondeva con un payload formalmente valido. Il frontend, però, aspettava un campo che non era nello schema, non era nella documentazione e non compariva in nessun ticket approvato.

Andrea ha verificato i log senza particolare enfasi. Poi ha allegato una nota al ticket.

> Ho controllato i log del servizio nuovo.
>
> La richiesta arriva. Il backend risponde. Il payload è formalmente valido. Il problema è che il frontend si aspetta un campo che nessuno ha mai chiesto, tranne forse in un commento su Figma che Giulia ha definito “ancora rilevante nel suo intento originale”.
>
> Dal punto di vista API non c’è un bug.

## Findings

- Il backend rispetta lo schema attuale.
- Il frontend implementa un'aspettativa derivata da Figma.
- Il commento Figma non è mai stato trasformato in requisito.

## Decision

Il ticket non viene chiuso come bug API. Serve una decisione di prodotto: aggiungere il campo opzionale o aggiornare il mockup.

## Next steps

Giulia ha proposto di aggiungere un campo opzionale per preservare l'intento originale del commento Figma. Giorgio ha chiesto se aprire un bug, una task o un sotto-ticket di interpretazione.
```
