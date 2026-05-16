# Skill: Dev-Diary Entry

Questa skill genera contenuti per la sezione `blog` / `dev-diary` dell’universo Mangrovia.

Il dev-diary racconta giornate, incidenti, meeting, piccoli disastri, scambi tra personaggi e conseguenze operative. È la sezione in cui vive la storia principale di Mangrovia: scene, personaggi, tensioni, fraintendimenti, conseguenze e ritmo da mockumentary aziendale.

Il formato canonico è quello del mockumentary: una voce terza, esterna o semi-interna, osserva la vita aziendale con satira asciutta e dettagli tecnici credibili. Se `research` è il paper assurdo e `wiki` è la reference, il dev-diary è la puntata.

Una entry non deve mai essere scritta come diario in prima persona di un personaggio. Può però includere spezzoni di dialoghi, interviste, ticket, messaggi Slack, note interne, documenti o incident report scritti dai personaggi.

---

## Obiettivo

Generare una entry narrativa coerente con il canon Mangrovia, utile per alimentare:

- la sezione `blog` o `dev-diary`;
- eventuali pagine wiki correlate;
- possibili eventi timeline;
- nuovi concetti interni ricorrenti.

Il testo deve essere pubblicabile in Markdown. L'impatto canonico va valutato nel report privato del workflow, non nel file pubblicato.

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
Topic: tema o giornata da raccontare
Narrative frame: mockumentary / editorial / document-heavy / interview-heavy
Characters: personaggi coinvolti
Setting: ufficio / call / Slack / pausa sigaretta / retrospettiva / deploy / altro
Event: cosa succede
Tone: dry / more comic / more technical / more corporate / darker
Canon status: episodic / minor canon / major canon / undecided
Length: short / medium / long
Materials: dialoghi / interviste / Slack / ticket / documenti / mixed
Notes: istruzioni aggiuntive
```

Esempio:

```md
Topic: una frase di The Rock viene interpretata come requisito funzionale
Narrative frame: mockumentary
Characters: The Rock, Giulia, Giorgio, Gigi, Adriano, Andrea
Setting: town hall + Slack + pausa sigaretta
Tone: dry
Canon status: minor canon
Length: medium
Materials: dialoghi + Slack + ticket
```

Se l’input è incompleto, fare una scelta ragionevole e procedere. Chiedere chiarimenti solo se manca completamente l’evento centrale.

---

## Tipi di entry

Scegliere il tipo più adatto.

### 1. Dev-diary mockumentary

Voce terza, asciutta, osservativa. Racconta la giornata come se una troupe invisibile avesse seguito call, corridoi, Slack, ticket e conseguenze operative.

È il formato canonico e il default.

### 2. Dev-diary con inserti di intervista

La struttura resta in terza persona, ma include brevi risposte dei personaggi come se fossero state raccolte dopo l'evento.

Da usare quando la voce individuale è utile, senza trasformare l'entry in un testo autonomo firmato dal personaggio.

Esempio:

```md
Intervistato più tardi, Adriano ha detto che la parte difficile non era il bug, ma il fatto che il bug avesse già una roadmap.
```

### 3. Frammento interno

Formato ibrido: Slack recap, meeting notes, incident note, retrospettiva, estratto ticket, comunicazione interna.

Il frammento deve comunque essere incorniciato da una voce terza che contestualizza chi lo ha prodotto, quando e con quali conseguenze.

### 4. Giornata corale

Più personaggi reagiscono allo stesso evento. La voce resta mockumentary, ma segue diversi momenti e può alternare scena, dialogo, transcript e documenti.

Da usare con moderazione: troppi personaggi possono rendere l’entry dispersiva.

### 5. Pausa sigaretta

Formato ricorrente, soprattutto per Adriano e Andrea. Breve, asciutto, spesso più vicino alla verità di molte retrospettive ufficiali.

Anche in questo caso la scena è raccontata in terza persona. Adriano e Andrea possono parlare direttamente nei dialoghi, ma non diventano narratori dell'entry.

---

## Struttura standard

Default per una entry media:

Il sito Astro renderizza il titolo e la data dalla frontmatter: non inserire un heading `# Titolo` nel corpo del Markdown pubblicato.

```md
_Date or approximate date, optional_

## Summary
Breve descrizione dell’episodio.

## Entry
Racconto della giornata o dell’evento.

## Outcome
Conseguenza concreta: ticket, decisione, mancata decisione, update, nuovo meeting, piccolo incidente.
```

Per entry più narrative, si può omettere `Summary` e usare direttamente il racconto.

Per entry brevi:

```md
Testo breve in terza persona.
```

Non includere `Related Entries`, `Canon Impact`, canon check notes, suggerimenti wiki o timeline assessment nel Markdown pubblicato. Queste informazioni appartengono al report privato del workflow.

---

## Regole di tono

Il dev-diary deve:

- essere narrativo ma asciutto;
- usare sempre una cornice in terza persona;
- sviluppare una scena o una sequenza riconoscibile;
- usare i personaggi come motore dell’episodio;
- usare dettagli concreti;
- evitare punchline forzate;
- lasciare emergere il sottotesto;
- mantenere i personaggi competenti nel proprio ambito;
- trattare il grottesco come ordinaria amministrazione;
- far seguire agli eventi conseguenze operative plausibili.

Il testo non deve spiegare la comicità.

È corretto che il dev-diary contenga lore, riferimenti ricorrenti e dinamiche da “The Office” aziendale. Questi elementi non devono essere esportati con lo stesso tono in `research` o `wiki`.

Scrivere:

> Giorgio ha chiesto se la frase andasse aperta come bug, task o iniziativa strategica. Giulia ha risposto che forse era presto per categorizzare. Gigi ha detto che se diventava roadmap lui si licenziava, ma lo ha detto in modo abbastanza tecnico da farlo sembrare un parere architetturale.

Non scrivere:

> Tutti erano confusi perché The Rock aveva detto una frase assurda e Giorgio, come sempre, voleva farci un ticket. Che situazione ridicola.

---

## Voce editoriale

La voce editoriale deve essere calma, precisa e leggermente sospetta.

Non deve giudicare troppo. Deve osservare.

Buon esempio:

```md
La giornata è iniziata con un messaggio di Giulia sul canale prodotto. Il messaggio proponeva un rapido allineamento sul concetto di completamento, ma conteneva quattro definizioni diverse di completamento e nessun riferimento al codice.
```

La voce editoriale può entrare nel sottotesto, ma senza diventare onnisciente in modo pesante.

---

## Voci dei personaggi come materiali interni

Le voci individuali devono comparire solo come materiali dentro la cornice mockumentary:

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

Romanaccio, operativo, tutto diventa ticket.

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

I dialoghi devono essere brevi e mirati.

Preferire scambi asciutti a lunghe conversazioni teatrali.

Buon esempio:

```md
“Quindi è una feature?” ha chiesto Mattia.

Adriano ha guardato il ticket. “È una promessa vestita da bug.”

Andrea ha spento la sigaretta. “E neanche bene.”
```

Evitare dialoghi in cui ogni personaggio spiega se stesso o fa battute troppo riconoscibili.

Dialoghi, interviste e documenti devono funzionare come prove raccolte dalla narrazione, non come sostituti della narrazione. Dopo un inserto, tornare alla voce terza e mostrare la conseguenza operativa.

---

## Pattern narrativi consigliati

### 1. Frase astratta → lavoro concreto

Una frase di The Rock o Giulia produce ticket, meeting o refactor.

### 2. Piccolo bug → crisi semantica

Un problema tecnico rivela che nessuno ha la stessa definizione di completamento, owner o requisito.

### 3. Pausa sigaretta → diagnosi corretta

Adriano e Andrea capiscono fuori dal processo ciò che il processo non riesce a vedere.

### 4. Design system → archeologia

Qualcuno cerca di capire lo stato del Design System Qadra e scopre livelli di intenzione, copia, commenti e componenti mai conclusi.

### 5. Meeting → ticketizzazione

Un meeting produce più lavoro di quello che avrebbe dovuto risolvere.

### 6. Research → conseguenza assurda

Un articolo research interno viene preso abbastanza sul serio da diventare processo.

Quando un research compare nel dev-diary, trattarlo come oggetto di scena o documento che produce conseguenze operative. Non copiare il tono da paper nel racconto, se non in brevi estratti.

### 7. Onboarding → trauma controllato

Mattia viene introdotto a un sistema che gli era stato descritto come moderno, flessibile e quasi documentato.

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
- la cornice narrativa scelta è coerente con il formato mockumentary?
- la voce resta in terza persona anche quando include materiali dei personaggi?
- The Rock è usato con parsimonia?
- Giorgio resta centrato su ticket e task?
- Giulia resta plausibilmente ragionevole?
- Andrea non diventa apertamente aggressivo?

Se ci sono contraddizioni, correggerle prima dell’output.

---

## Output finale

L’output finale deve essere Markdown valido.

Default:

```md
## Summary
...

## Entry
...

## Outcome
...
```

Per entry con materiali interni:

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

Non aggiungere `Related Entries`, `Canon Impact` o note private nel Markdown pubblicato.

---

## Esempio breve editoriale

```md
## Summary

Dopo un workshop sul concetto di completamento, Adriano e Andrea escono a fumare e identificano in tre minuti il problema che il workshop non è riuscito a nominare.

## Entry

Il workshop era iniziato con una slide di Giulia intitolata “Towards a Shared Definition of Done”. La slide conteneva quattro definizioni, due frecce circolari e una citazione di The Rock sulla disciplina come muscolo organizzativo.

Nikita aveva detto che per lui un componente era done quando la parte difficile era stata impostata. Mattia aveva chiesto se “impostata” volesse dire committata. Nessuno gli aveva risposto subito.

Giorgio aveva aperto un ticket per chiarire il significato operativo di “done”, poi un secondo ticket per capire chi fosse l’owner del primo.

Alle 11:47 Adriano era uscito. Andrea lo aveva seguito senza dire niente.

“Il problema è che non sanno se stanno parlando di codice, Figma o desiderio,” disse Adriano.

Andrea accese la sigaretta. “Stanno parlando di budget.”

La retrospettiva informale durò meno di quattro minuti. Non produsse action item, ma identificò correttamente il rischio principale della release.

## Outcome

Nel pomeriggio Giulia propose un nuovo meeting per consolidare la definizione di completamento. Giorgio collegò i due ticket precedenti a una nuova epic.
```

---

## Esempio breve con documento interno

```md
## Summary

Un presunto bug frontend viene analizzato come incidente API e si rivela una divergenza tra implementazione, aspettativa di prodotto e commenti rimasti su Figma.

## Entry

La richiesta arrivava al servizio nuovo alle 10:14. Il backend rispondeva con un payload formalmente valido. Il frontend, però, aspettava un campo che non era nello schema, non era nella documentazione e non compariva in nessun ticket approvato.

Andrea ha verificato i log senza particolare enfasi. Poi ha allegato una nota al ticket.

> Ho controllato i log del servizio nuovo.
>
> La richiesta arriva. Il backend risponde. Il payload è formalmente valido. Il problema è che il frontend si aspetta un campo che nessuno ha mai chiesto, tranne forse in un commento su Figma che Giulia ha definito “ancora rilevante nel suo intento originale”.
>
> Dal punto di vista API non c’è un bug.

Il ticket è rimasto aperto perché la frase "dal punto di vista API" ha creato spazio sufficiente per una controanalisi di prodotto.

Alle 11:02 Adriano è uscito a fumare. Andrea lo ha seguito pochi secondi dopo.

“Quindi non è un bug?” ha chiesto Adriano.

Andrea ha spento lo schermo del telefono. “È una richiesta che funziona contro se stessa.”

## Outcome

Giulia ha proposto di aggiungere un campo opzionale per preservare l'intento originale del commento Figma. Giorgio ha chiesto se aprire un bug, una task o un sotto-ticket di interpretazione.
```
