# Skill: Research Article

Questa skill genera finti articoli `research` per l’universo Mangrovia.

Gli articoli devono sembrare documenti aziendali, white paper interni, report pseudo-accademici o analisi tecnico-strategiche prodotte da Mangrovia/Qadra. Devono essere seri in superficie e satirici nel sottotesto.

---

## Obiettivo

Generare un articolo research coerente con il canon Mangrovia, utile per alimentare:

- la sezione `research` del sito/wiki;
- possibili pagine wiki collegate;
- eventuali eventi timeline;
- nuovi concetti interni ricorrenti.

La skill deve produrre un contenuto pubblicabile in Markdown e, quando necessario, una sezione finale di impatto canonico.

---

## Fonti canoniche da consultare

Prima di generare l’articolo, leggere e rispettare:

1. `canon-rules.md`
2. `mangrovia-world.md`
3. `characters.md`
4. `relationships.md`
5. `tone-and-style.md`
6. `timeline.md`

Se una richiesta dell’utente contraddice il canon, segnalare la contraddizione e proporre una versione coerente.

---

## Input atteso

La skill può ricevere uno o più di questi input:

```md
Topic: tema dell’articolo
Angle: taglio specifico
Characters: personaggi coinvolti o citati
Related concepts: concetti interni collegati
Canon status: episodic / minor canon / major canon / undecided
Length: short / medium / long
Target section: research
Notes: eventuali istruzioni aggiuntive
```

Esempio:

```md
Topic: classificazione delle metafore dirigenziali
Angle: capire se le frasi di The Rock possono essere convertite automaticamente in requisiti funzionali
Characters: The Rock, Giorgio, Gigi, Giulia
Related concepts: AI-first, ticket, roadmap
Canon status: minor canon
Length: medium
```

Se l’input è incompleto, fare una scelta ragionevole e procedere. Chiedere chiarimenti solo se manca il tema centrale.

---

## Tipi di articoli research

Scegliere il tipo più adatto al tema.

### 1. White paper interno

Documento strategico, pulito, corporate, orientato a visione e applicazioni.

Adatto a:

- AI-first transformation;
- wealth management;
- agentic workflows;
- automazione;
- operational excellence;
- knowledge layer.

### 2. Studio tecnico-operativo

Documento più vicino all’ingegneria, con problemi, metodo, osservazioni e conseguenze.

Adatto a:

- design system;
- component library;
- backend;
- CI;
- deploy;
- incidenti;
- ticket;
- metriche.

### 3. Analisi pseudo-scientifica

Documento con tono quasi accademico, applicato a un oggetto ridicolo ma trattato con rigore.

Adatto a:

- probabilità che una feature sia davvero finita;
- produttività dei frontendisti economici;
- impatto della pausa sigaretta;
- modelli predittivi su bug e ticket;
- classificazione delle metafore dirigenziali.

### 4. Report post-incidente

Documento che analizza un evento tecnico o organizzativo già accaduto.

Adatto a:

- bug importanti;
- deploy falliti;
- regressioni;
- fraintendimenti di roadmap;
- incidenti causati da requisiti ambigui;
- problemi nati dal Design System Qadra.

### 5. Proposal research

Documento che propone una nuova iniziativa, ma non la rende automaticamente canonica.

Adatto a:

- nuovi agenti AI;
- nuove metriche;
- nuovi processi;
- nuove dashboard;
- nuove forme di automazione.

---

## Struttura standard dell’articolo

Usare questa struttura come default.

```md
# Titolo

## Abstract
Breve sintesi dell’articolo. Deve sembrare seria e utile, ma può contenere una premessa sottilmente assurda.

## Context
Contesto aziendale, tecnico o organizzativo.

## Problem
Qual è il problema analizzato.

## Method
Come Mangrovia ha studiato o intende studiare il problema.

## Findings
Osservazioni principali.

## Operational Implications
Conseguenze pratiche per team, prodotto, processi o tecnologia.

## Limitations
Limiti dello studio. Questa sezione è spesso utile per far emergere la comicità.

## Next Steps
Passi successivi, iniziative, esperimenti o decisioni.

## Related Entries
Link o nomi di possibili pagine wiki correlate.

## Canon Impact
Sezione tecnica non necessariamente pubblicabile. Valuta se l’articolo cambia il canon.
```

Per articoli brevi, si può usare una struttura ridotta:

```md
# Titolo

## Summary

## Key Observations

## Implications

## Canon Impact
```

---

## Regole di tono

L’articolo deve:

- sembrare serio;
- usare precisione formale;
- evitare battute esplicite;
- trattare l’assurdo come oggetto legittimo di analisi;
- usare linguaggio aziendale e tecnico con funzione narrativa;
- mantenere credibilità interna;
- far emergere la satira dal contrasto tra forma e contenuto.

Non scrivere:

> Questo è assurdo e fa ridere perché Mangrovia è ridicola.

Scrivere invece:

> La classificazione automatica delle metafore dirigenziali richiede una distinzione preliminare tra visione strategica, indicazione operativa e frase motivazionale non azionabile.

---

## Uso dei personaggi

Gli articoli research non devono sembrare scene di blog. I personaggi possono comparire come:

- autori;
- referenti interni;
- stakeholder;
- soggetti osservati;
- fonti di dati;
- casi studio;
- persone citate in modo indiretto.

Esempi:

```md
The initial dataset was assembled from 37 Slack messages, 12 unresolved Linear tickets and one post-meeting note written by Giorgio.
```

```md
Nikita’s definition of “almost complete” was excluded from the baseline model because it introduced excessive semantic variance.
```

```md
Andrea and Adriano’s cigarette breaks were treated as informal retrospectives, with the limitation that neither participant agreed to call them that.
```

---

## Voci e autori possibili

Un articolo research può essere:

### Non firmato

Default consigliato. Tono aziendale neutro, come documento interno Mangrovia.

### Firmato da Lorenzo

Più tecnico, statistico, con caveat, modelli e deviazioni occasionali sul Milan.

### Firmato da Giulia

Più corporate, orientato a processo, adoption, alignment e narrativa aziendale.

### Firmato da Vas

Più pratico, chiaro, orientato a cosa serve davvero e cosa può funzionare.

### Firmato da Fiorenzo

Più severo, tecnico, moraleggiante, con metafore fisiche.

### Firmato da Giorgio

Raro. Possibile solo se il research riguarda ticket, backlog, classificazioni operative. Tono romanaccio ma strutturato come report.

### Firmato da The Rock

Molto raro. Deve sembrare un manifesto o una nota strategica, non un articolo quotidiano.

Evitare articoli research firmati da troppi personaggi. Al massimo uno o due autori.

---

## Titoli

I titoli devono essere seri, specifici e leggermente sproporzionati.

Buoni esempi:

- `A Predictive Model for Feature Completion Confidence in High-Ambiguity Product Environments`
- `Operational Classification of Executive Metaphors in AI-First Organizations`
- `Design System Adoption Under Conditions of Partial Design System Availability`
- `Smoke Breaks as Informal Incident Review Mechanisms`
- `Frontend Cost Optimization and the Economico Programmatore Pattern`
- `Measuring Strategic Alignment Drift After Wealth Management Integration`

Titoli da evitare:

- `Il design system fa ridere`
- `The Rock dice cose assurde`
- `Nikita non finisce mai niente ahah`
- `Casino totale in Mangrovia`

---

## Abstract

L’abstract deve essere serio e conciso. Deve presentare il problema senza spiegare la gag.

Formula utile:

```md
This article examines [phenomenon] within [context], with a focus on [specific tension]. Based on [data/source], we identify [finding] and propose [operational consequence].
```

Esempio:

```md
This article examines the use of informal cigarette breaks as retrospective mechanisms within backend incident management. Based on recurring interactions between Adriano and Andrea, we identify a pattern of high diagnostic accuracy combined with low institutional adoption.
```

---

## Context

La sezione `Context` deve collegare il tema al mondo Mangrovia.

Possibili contesti:

- fusione Qadra/Mangrovia;
- riconversione blockchain → AI;
- Design System Qadra;
- crescita dei processi corporate;
- tensione tra roadmap e realtà tecnica;
- tentativi di automazione AI;
- wealth management come pressione commerciale;
- task e ticket come unità operative.

---

## Problem

Il problema deve essere espresso come se fosse legittimo.

Esempi:

```md
The organization currently lacks a shared framework for determining whether an executive metaphor should be treated as inspiration, strategic direction or implementation requirement.
```

```md
Current frontend planning processes do not distinguish reliably between “almost complete”, “locally working”, “visible in Storybook” and “safe to ship”.
```

---

## Method

La metodologia deve sembrare plausibile, ma può essere sottilmente ridicola.

Fonti dati possibili:

- Slack messages;
- Linear tickets;
- Git commits;
- pull request comments;
- Storybook pages;
- Figma files;
- incident reports;
- meeting notes;
- smoke break transcripts;
- dashboard events;
- post-it di workshop;
- keynote di The Rock;
- commenti di code review di Fiorenzo;
- caveat statistici di Lorenzo.

Esempio:

```md
The study combines qualitative analysis of 18 planning meetings, 42 Linear tickets, 9 pull request comments and one unresolved Figma thread last updated by Nikita in April.
```

---

## Findings

Le findings devono essere numerate o chiaramente separate.

Devono essere serie, ma lasciar emergere l’assurdo.

Esempio:

```md
### 1. “Almost complete” is not a stable technical category

Across the observed dataset, “almost complete” referred alternately to implemented code, intended architecture, visual approximation, local prototype or emotional proximity to closure.
```

---

## Operational Implications

Questa sezione deve trasformare l’analisi in conseguenze aziendali.

Esempi:

- creare un nuovo processo;
- aprire ticket;
- aggiornare la wiki;
- introdurre una metrica;
- creare un agent AI;
- cambiare una retrospettiva;
- assegnare un owner;
- proporre un proof of concept;
- non fare nulla ma con più consapevolezza.

Esempio:

```md
The organization should introduce a Feature Completion Confidence Index before accepting any estimate involving the expression “basically done”.
```

---

## Limitations

La sezione `Limitations` è una delle più utili per la satira.

Deve sembrare normale, ma può contenere dettagli rivelatori.

Esempi:

```md
The study does not include components that exist only in Nikita’s local environment.
```

```md
Smoke break data was reconstructed from memory, as neither Adriano nor Andrea accepted the premise that the conversations were part of a process.
```

```md
The model has not yet been validated against metaphors delivered while The Rock was standing near a screen displaying quarterly growth.
```

---

## Next Steps

I next steps devono sembrare utili e inevitabili, anche quando sono sproporzionati.

Esempi:

```md
- Define a shared taxonomy for executive metaphors.
- Train an internal classifier on historical town hall transcripts.
- Ask Giorgio to determine whether metaphor classification requires a dedicated ticket type.
- Validate the taxonomy with Gigi before it becomes roadmap.
```

---

## Related Entries

Ogni articolo deve proporre 3-8 voci correlate.

Esempi:

```md
## Related Entries

- Design System Qadra
- Economico Programmatore
- The Rock
- Giorgio
- AI-first Transformation
- Feature Completion Confidence Index
```

Le voci correlate possono essere già esistenti o suggerite come future pagine wiki.

---

## Canon Impact

Ogni articolo deve chiudere con questa sezione tecnica.

```md
## Canon Impact

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

La sezione `Canon Impact` può essere rimossa dalla versione pubblicata, ma deve essere prodotta nel workflow automatico.

---

## Stati canonici

### Episodic

L’articolo è valido come contenuto, ma non cambia il mondo.

Esempio:

- un singolo studio interno su una giornata;
- un report su un problema minore;
- una proposta non approvata.

### Minor canon

L’articolo introduce un concetto riutilizzabile, ma non cambia ruoli o storia principale.

Esempio:

- `Feature Completion Confidence Index`;
- classificazione delle metafore dirigenziali;
- pausa sigaretta come retrospettiva informale.

### Major canon

L’articolo introduce o formalizza un cambiamento strutturale.

Esempio:

- un nuovo prodotto AI centrale;
- un processo aziendale ufficiale;
- un grande incidente che cambia il modo di lavorare;
- la conclusione ufficiale del Design System Qadra.

Gli articoli major canon richiedono sempre aggiornamento timeline e probabilmente wiki.

---

## Controllo canonico prima dell’output

Prima di produrre l’articolo finale, verificare:

- il tema è coerente con Mangrovia/Qadra?
- i personaggi sono usati secondo `characters.md`?
- le relazioni rispettano `relationships.md`?
- il tono rispetta `tone-and-style.md`?
- l’articolo introduce cambiamenti canonici?
- se sì, sono segnalati in `Canon Impact`?
- ci sono contraddizioni con fatti già stabiliti?

Se ci sono contraddizioni, correggerle prima dell’output.

---

## Output finale

L’output finale deve essere Markdown valido.

Default:

```md
# Title

## Abstract
...

## Context
...

## Problem
...

## Method
...

## Findings
...

## Operational Implications
...

## Limitations
...

## Next Steps
...

## Related Entries
...

## Canon Impact
...
```

Non aggiungere spiegazioni fuori dall’articolo, salvo richiesta esplicita.

---

## Esempio breve

```md
# Smoke Breaks as Informal Incident Review Mechanisms

## Abstract

This article examines the role of informal cigarette breaks in backend incident analysis at Mangrovia. Based on recurring interactions between Adriano and Andrea, we identify a pattern of high diagnostic precision, low documentation rate and near-zero organizational recognition.

## Context

Following the Qadra-Mangrovia integration, the number of formal alignment rituals increased significantly. In parallel, several high-value technical observations continued to emerge outside sanctioned ceremonies, especially near building exits.

## Problem

Mangrovia currently lacks a process for capturing technically accurate but procedurally non-compliant insights generated during smoke breaks.

## Method

The analysis reconstructs five informal conversations between Adriano and Andrea, cross-referenced with subsequent bug reports, Linear tickets and one Slack thread Giulia later described as “a useful moment of shared ownership”.

## Findings

### 1. Informal diagnosis often precedes formal recognition

In four out of five observed cases, the likely root cause was identified before the issue entered an official meeting.

### 2. Institutional adoption remains limited

Neither Adriano nor Andrea accepted the classification of the smoke break as a retrospective format.

## Operational Implications

Mangrovia may benefit from a lightweight mechanism for capturing informal technical insight without naming it as a process, since naming it as a process would likely destroy it.

## Limitations

The study relies on partial recollection. Andrea declined to confirm several quotes on the grounds that doing so would make them “collaboration”.

## Next Steps

- Define criteria for informal incident insight.
- Avoid scheduling smoke breaks.
- Ask Giorgio whether unstructured technical truth can exist without a ticket.

## Related Entries

- Adriano
- Andrea
- Pausa Sigaretta
- Incidenti Backend Ricorrenti
- Giorgio

## Canon Impact

### Suggested status
Minor canon

### Timeline update needed
No

### Wiki update needed
Yes

### Character update needed
No

### Suggested wiki entries
- Pausa Sigaretta
- Informal Incident Review

### Suggested timeline entry
None.

### Notes
The article formalizes the recurring role of smoke breaks as informal diagnostic spaces, but does not introduce a major event.
```
