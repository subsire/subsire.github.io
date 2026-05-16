# Skill: Research Article

Questa skill genera articoli `research` fittizi per l’universo Mangrovia.

La sezione `research` non è dev-diary travestito da report e non è wiki con tono accademico. Deve sembrare una pubblicazione di laboratorio all’avanguardia, nello spirito di paper tecnici OpenAI/Anthropic: rigorosa, misurabile, visuale, sproporzionata rispetto all’oggetto e quasi completamente priva di ammiccamenti narrativi.

L’umorismo nasce dal fatto che un oggetto interno, piccolo o assurdo viene trattato con strumenti da ricerca avanzata: metriche, dataset, benchmark, grafici, ablation, tassonomie, limitazioni sperimentali. Non nasce da battute, personaggi in scena o frasi “strambe”.

---

## Obiettivo

Generare un articolo research coerente con il canon Mangrovia, utile per alimentare:

- la sezione `research` del sito/wiki;
- possibili pagine wiki collegate;
- eventuali eventi timeline;
- nuovi concetti interni ricorrenti.

La skill deve produrre un contenuto pubblicabile in Markdown. Il file pubblicato deve reggere come articolo di ricerca anche per un lettore che non conosce la lore Mangrovia. L'impatto canonico va valutato nel report privato del workflow, non nel file pubblicato.

### Lingua e caratteri

Gli articoli pubblicati in italiano devono usare ortografia italiana naturale in UTF-8, incluse le lettere accentate (`è`, `é`, `à`, `ò`, `ù`, `ì`). Non trasformare parole come `è`, `può`, `già`, `verrà`, `capacità` o `verità` in versioni ASCII.

Mantenere invece ASCII dove serve tecnicamente: slug, file name, branch, path, identificatori di codice, chiavi YAML, comandi, metriche, formule e token letterali.

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
Evidence roles: ruoli o fonti osservate, preferibilmente anonimizzate
Related concepts: concetti interni collegati
Canon status: episodic / minor canon / major canon / undecided
Length: short / medium / long
Target section: research
Notes: eventuali istruzioni aggiuntive
```

Esempio:

```md
Topic: classificazione delle metafore dirigenziali in ambienti AI-first
Angle: misurare quando una frase executive viene convertita in requisito funzionale
Evidence roles: executive speaker, delivery coordinator, product stakeholder
Related concepts: AI-first, ticket, roadmap, requirement ambiguity
Canon status: minor canon
Length: medium
```

Se l’input è incompleto, fare una scelta ragionevole e procedere. Chiedere chiarimenti solo se manca il tema centrale.

---

## Tipi di articoli research

Scegliere il tipo più adatto al tema.

### 1. Frontier lab paper

Documento tecnico-scientifico fittizio con abstract, metodo, dataset, risultati, figure, metriche e limiti. È il formato consigliato.

Adatto a:

- modelli predittivi su ticket, feature o incidenti;
- valutazione di componenti e processi;
- misurazione di drift organizzativo;
- metriche interne;
- agentic workflows;
- knowledge layer;
- design system trattati come sistema sperimentale.

### 2. Studio tecnico-operativo

Documento più vicino all’ingegneria, ma comunque con ipotesi, dataset, misure e risultati.

Adatto a:

- design system;
- component library;
- backend;
- CI;
- deploy;
- incidenti;
- ticket;
- metriche.

### 3. Systems paper

Documento che propone una tassonomia, architettura, metrica o framework operativo.

Adatto a:

- classificazione delle metafore dirigenziali;
- metriche di disponibilità dei componenti;
- modelli di ownership;
- workflow AI interni;
- valutazione di knowledge base o documentazione.

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

Documento che propone una nuova iniziativa tecnica o sperimentale, ma non la rende automaticamente canonica.

Adatto a:

- nuovi agenti AI;
- nuove metriche;
- nuovi processi;
- nuove dashboard;
- nuove forme di automazione.

---

## Struttura standard dell’articolo

Usare questa struttura come default.

Il sito Astro renderizza il titolo dalla frontmatter: non inserire un heading `# Titolo` nel corpo del Markdown pubblicato.

```md
## Abstract
Sintesi concisa: problema, metodo, dati, risultato principale, implicazione.

## Introduction
Contesto tecnico e motivazione della ricerca. Il riferimento a Mangrovia/Qadra deve essere minimo e funzionale.

## Methodology
Dataset, procedura sperimentale, annotazione, metriche e criteri di valutazione.

## Metrics
Definizione di metriche, indici o variabili operative.

## Results
Risultati principali, possibilmente con tabelle, grafici Markdown o figure descritte.

## Discussion
Interpretazione dei risultati e conseguenze operative.

## Limitations
Limiti dello studio, bias, dati mancanti, generalizzabilità.

## Future Work
Esperimenti successivi, dataset da estendere, validazioni.
```

Per articoli brevi, si può usare una struttura ridotta:

```md
## Summary

## Key Observations

## Implications
```

Non includere `Related Entries`, `Canon Impact`, canon check notes, suggerimenti wiki o timeline assessment nel Markdown pubblicato. Queste informazioni appartengono al report privato del workflow.

---

## Regole di tono

L’articolo deve:

- sembrare un paper frontier-lab credibile;
- usare precisione formale e metodologica;
- includere almeno una tabella, grafico testuale, metrica o figura descritta negli articoli medium/long;
- evitare battute esplicite;
- trattare l’assurdo come oggetto legittimo di misurazione;
- usare linguaggio tecnico con funzione analitica, non narrativa;
- mantenere credibilità interna;
- far emergere la satira dal contrasto tra metodo e oggetto.

Non scrivere:

> Questo è assurdo e fa ridere perché Mangrovia è ridicola.

Scrivere invece:

> La classificazione automatica delle metafore dirigenziali richiede una distinzione preliminare tra visione strategica, indicazione operativa e frase motivazionale non azionabile.

### Anti-pattern specifici

Evitare:

- scene, dialoghi o dinamiche da dev-diary;
- battute in `Limitations` che sembrano punchline;
- personaggi nominati come gag o lore;
- riferimenti che richiedono di conoscere episodi precedenti;
- toni da white paper corporate generico;
- titoli “divertenti”;
- affermazioni senza dati, benchmark, metriche o osservazioni strutturate.

---

## Uso dei personaggi

Gli articoli research non devono sembrare scene di blog. I personaggi devono essere assenti dal testo pubblicato salvo necessità metodologica. Quando servono, preferire ruoli anonimizzati:

- `frontend engineer`;
- `product stakeholder`;
- `design-system maintainer`;
- `delivery coordinator`;
- `executive speaker`;
- `participant P3`.

I nomi propri possono comparire nel report privato del workflow e nelle pagine dev-diary/wiki collegate. Nel research pubblicato usarli solo se l’utente lo chiede esplicitamente o se il paper è dichiaratamente in-universe e firmato.

Esempi:

```md
The dataset was assembled from 37 Slack messages, 12 unresolved Linear tickets and one post-meeting note produced by a delivery coordinator.
```

```md
Definitions of “almost complete” provided by frontend participants were excluded from the baseline model when they introduced excessive semantic variance.
```

```md
Informal technical conversations were treated as retrospective-adjacent events, with the limitation that participants did not accept the retrospective label.
```

---

## Voci e autori possibili

Un articolo research dovrebbe avere una voce impersonale, tecnica e collettiva.

### Mangrovia Research

Default consigliato per la frontmatter. Il testo deve comunque sembrare un paper, non un comunicato aziendale.

### Non firmato

Accettabile quando il formato del sito lo consente. Tono da laboratorio, neutro, tecnico, non narrativo.

### Firmato da personaggi

Da evitare salvo richiesta esplicita dell’utente. Se un research deve essere firmato da un personaggio, la voce del personaggio può influenzare il report privato o la premessa, ma il corpo deve restare metodologico. Non trasformare l’articolo in una scena o in un documento caratteriale.

---

## Titoli

I titoli devono sembrare titoli da paper: seri, specifici, misurabili e leggermente sproporzionati.

Buoni esempi:

- `A Predictive Model for Feature Completion Confidence in High-Ambiguity Product Environments`
- `Operational Classification of Executive Metaphors in AI-First Organizations`
- `Design System Adoption Under Conditions of Partial Design System Availability`
- `Smoke Breaks as Informal Incident Review Mechanisms`
- `Frontend Cost Optimization and the Economico Programmatore Pattern`
- `Measuring Strategic Alignment Drift After Wealth Management Integration`
- `Component Availability Gap: Measuring Adoption Readiness in Partially Governed Design Systems`
- `Documentation-Induced Confidence Shift in Frontend Planning Estimates`

Titoli da evitare:

- `Il design system fa ridere`
- `The Rock dice cose assurde`
- `Nikita non finisce mai niente ahah`
- `Casino totale in Mangrovia`

---

## Abstract

L’abstract deve essere serio e conciso. Deve presentare problema, dati, metodo, risultato e implicazione senza spiegare la gag.

Formula utile:

```md
This article examines [phenomenon] within [context], with a focus on [specific tension]. Based on [data/source], we identify [finding] and propose [operational consequence].
```

Esempio:

```md
This article examines informal technical conversations as retrospective-adjacent mechanisms within backend incident management. Based on five observed interactions and subsequent ticket outcomes, we identify a pattern of high diagnostic accuracy combined with low institutional adoption.
```

---

## Introduction

La sezione `Introduction` deve collegare il tema al contesto tecnico senza riversare lore. Mangrovia/Qadra può comparire come ambiente sperimentale, non come storia da raccontare.

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

## Problem framing

Il problema deve essere espresso come se fosse legittimo.

Esempi:

```md
The organization currently lacks a shared framework for determining whether an executive metaphor should be treated as inspiration, strategic direction or implementation requirement.
```

```md
Current frontend planning processes do not distinguish reliably between “almost complete”, “locally working”, “visible in Storybook” and “safe to ship”.
```

---

## Methodology details

La metodologia deve sembrare plausibile. L’assurdità deve stare nella scelta dell’oggetto, nella scala dell’apparato o nella precisione delle metriche.

Fonti dati possibili:

- Slack messages;
- Linear tickets;
- Git commits;
- pull request comments;
- Storybook pages;
- Figma files;
- incident reports;
- meeting notes;
- informal conversation notes;
- dashboard events;
- post-it di workshop;
- executive keynote transcripts;
- code review comments;
- statistical caveats.

Esempio:

```md
The study combines qualitative analysis of 18 planning meetings, 42 Linear tickets, 9 pull request comments and one unresolved Figma thread last updated in April.
```

---

## Results

Le findings devono essere numerate o chiaramente separate. Per articoli medium/long preferire `Results` con tabelle, grafici o figure.

Devono essere serie, ma lasciar emergere l’assurdo.

Esempio:

```md
### 1. “Almost complete” is not a stable technical category

Across the observed dataset, “almost complete” referred alternately to implemented code, intended architecture, visual approximation, local prototype or emotional proximity to closure.
```

---

## Discussion / Operational Implications

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

## Figure, tabelle e metriche

Negli articoli `medium` e `long`, includere almeno due tra:

- tabella di risultati;
- grafico testuale in Markdown;
- definizione di metrica;
- schema di modello;
- figura descritta con caption;
- mini-ablation o confronto tra baseline.

Esempi di metriche:

- `Component Availability Gap (CAG)`;
- `Documentation-Induced Confidence Shift (DICS)`;
- `Adoption Pressure Index (API)`;
- `Owner Visibility Score (OVS)`;
- `Semantic Completion Variance (SCV)`.

Esempio di figura:

```md
**Figure 1 — Component Availability Gap by evidence source.**

| Evidence source | Mean readiness | Confidence |
| --- | ---: | ---: |
| Storybook page | 0.61 | 0.74 |
| Production usage | 0.48 | 0.69 |
| Owner-confirmed component | 0.82 | 0.88 |
```

---

## Limitations

La sezione `Limitations` deve restare metodologica. Può far emergere l’assurdo, ma non deve diventare un contenitore di battute.

Deve sembrare normale, ma può contenere dettagli rivelatori.

Esempi:

```md
The study does not include components that exist only in local environments, unmerged branches or screenshots of intended behavior.
```

```md
Informal conversation data was reconstructed from memory because the relevant interactions were not logged in systems designed for analysis.
```

```md
The model has not yet been validated against executive statements delivered in high-signal motivational contexts.
```

---

## Future Work

Il future work deve sembrare utile e inevitabile, anche quando è sproporzionato.

Esempi:

```md
- Define a shared taxonomy for executive metaphors.
- Train an internal classifier on historical town hall transcripts.
- Evaluate whether metaphor classification requires a dedicated ticket type.
- Validate the taxonomy against roadmap conversion events.
```

---

## Related entries per il report privato

Ogni articolo deve proporre 3-8 voci correlate nel report privato del workflow, non nel Markdown pubblicato.

Esempi:

```md
- Design System Qadra
- Economico Programmatore
- The Rock
- Giorgio
- AI-first Transformation
- Feature Completion Confidence Index
```

Le voci correlate possono essere già esistenti o suggerite come future pagine wiki.

---

## Canon impact per il report privato

Ogni articolo deve essere accompagnato da questa valutazione nel report privato del workflow.

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
- il testo sembra un paper di ricerca e non un dev-diary?
- il testo contiene metriche, dati, tabelle, figure o valutazioni strutturate?
- i personaggi sono assenti o anonimizzati salvo richiesta esplicita?
- la lore resta nel contesto minimo necessario?
- l’articolo introduce cambiamenti canonici?
- se sì, sono segnalati nel report privato del workflow?
- ci sono contraddizioni con fatti già stabiliti?

Se ci sono contraddizioni, correggerle prima dell’output.

---

## Output finale

L’output finale deve essere Markdown valido.

Default:

```md
## Abstract
...

## Introduction
...

## Methodology
...

## Metrics
...

## Results
...

## Discussion
...

## Limitations
...

## Future Work
...
```

Non aggiungere `Related Entries`, `Canon Impact` o note private nel Markdown pubblicato.

---

## Esempio breve

```md
## Abstract

This article examines informal technical conversations as low-instrumentation incident analysis events. Based on five observed post-meeting interactions and subsequent ticket outcomes, we identify a pattern of high diagnostic precision, low documentation rate and limited institutional capture.

## Introduction

After a period of increased cross-functional planning, several high-value technical observations continued to emerge outside formal ceremonies. This creates a measurement problem: useful diagnostic signals may exist in organizational spaces not designed for capture.

## Methodology

We reconstructed five informal conversations from follow-up tickets, pull request comments and incident notes. Each observation was scored for diagnostic accuracy, documentation latency and institutional uptake.

## Metrics

`Informal Diagnostic Yield` measures whether an observation later matched the accepted root cause. `Capture Latency` measures the time between observation and first formal artifact.

## Results

| Event type | Mean diagnostic yield | Mean capture latency |
| --- | ---: | ---: |
| Formal retrospective | 0.62 | 0.4 days |
| Informal technical conversation | 0.84 | 1.7 days |

Informal conversations showed higher diagnostic yield but lower capture reliability.

## Discussion

The results suggest that diagnostic quality and process visibility are weakly coupled. A lightweight capture mechanism may improve retention, provided it does not alter the conditions that make the observations useful.

## Limitations

The study relies on partial recollection and post-hoc artifacts. It does not include conversations that produced correct diagnoses but no subsequent ticket.

## Future Work

- Extend the dataset to additional incident classes.
- Compare informal observations against baseline retrospective notes.
- Test whether structured capture reduces diagnostic quality.
```
