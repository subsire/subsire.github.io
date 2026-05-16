# Skill: Wiki Entry

Questa skill genera pagine per la sezione `wiki` dell’universo Mangrovia.

La wiki è la reference ordinata del progetto: raccoglie personaggi, aziende, progetti, eventi, concetti, incidenti, processi, oggetti tecnici e collegamenti tra `research`, `dev-diary` e `timeline`.

La wiki deve sembrare una wiki normale: asciutta, breve, neutra e utile anche per un lettore reale che arriva sul sito senza conoscere la lore. Non deve fare ammiccamenti, non deve imitare il dev-diary e non deve usare il tono research.

---

## Obiettivo

Generare una pagina wiki coerente con il canon Mangrovia, utile per:

- catalogare elementi ricorrenti;
- collegare contenuti research e dev-diary;
- chiarire personaggi, concetti e timeline;
- mantenere continuità tra contenuti generati automaticamente;
- rendere navigabile l’universo Mangrovia.

La skill deve produrre Markdown pubblicabile. La pagina pubblicata deve catalogare informazioni, non costruire scene o battute. Stato, note e impatto canonico vanno valutati nel report privato del workflow, non nel file pubblicato.

---

## Fonti canoniche da consultare

Prima di generare la pagina, leggere e rispettare:

1. `canon-rules.md`
2. `timeline.md`
3. `characters.md`
4. `relationships.md`
5. `mangrovia-world.md`
6. `tone-and-style.md`
7. eventuali articoli `research` o `dev-diary` collegati

Se la pagina richiesta contraddice il canon, segnalare la contraddizione e proporre una versione coerente.

---

## Input atteso

La skill può ricevere uno o più di questi input:

```md
Entry title: titolo della pagina
Entry type: character / company / project / concept / event / process / incident / artifact / role / location
Source content: contenuti research, diary o timeline da sintetizzare
Canon status: episodic / minor canon / major canon / undecided
Related characters: personaggi collegati
Related entries: voci correlate
Length: short / medium / long
Notes: istruzioni aggiuntive
```

Esempio:

```md
Entry title: Pausa Sigaretta
Entry type: concept
Source content: dev diary su Adriano e Andrea dopo workshop di allineamento
Canon status: minor canon
Related characters: Adriano, Andrea
Related entries: Informal Incident Review, Incidenti Backend Ricorrenti
Length: medium
```

Se l’input è incompleto, fare una scelta ragionevole e procedere. Chiedere chiarimenti solo se manca il soggetto della voce.

---

## Tipi di pagina wiki

Scegliere la struttura in base al tipo di voce.

### 1. Character entry

Per personaggi canonici o secondari approvati.

Esempi:

- Adriano
- Andrea
- Nikita
- Giulia
- Vas
- Giorgio
- Gigi
- The Rock

### 2. Company entry

Per aziende, team o entità organizzative.

Esempi:

- Mangrovia Blockchain Solutions
- Qadra
- Team Backend
- Team Frontend

### 3. Project entry

Per prodotti, iniziative o sistemi.

Esempi:

- Design System Qadra
- AI-first Transformation
- Feature Completion Confidence Index
- Executive Metaphor Classifier

### 4. Concept entry

Per concetti interni, categorie ricorrenti, rituali e pattern.

Esempi:

- Economico Programmatore
- Pausa Sigaretta
- Definition of Done
- Ownership Condivisa
- Ticketizzazione

### 5. Event entry

Per eventi specifici con impatto canonico.

Esempi:

- Fusione Qadra-Mangrovia
- Ultimo commit noto di Nikita
- Primo keynote AI-first di The Rock

### 6. Incident entry

Per incidenti tecnici, organizzativi o semi-ricorrenti.

Esempi:

- Incidente della Metafora Funzionale
- Regressione del Tema Dark
- Deploy delle 17:30

### 7. Process entry

Per pratiche interne, ufficiali o informali.

Esempi:

- Informal Incident Review
- Classificazione delle Metafore Dirigenziali
- Processo di Allineamento Cross-funzionale

---

## Tono wiki

La wiki deve essere:

- ordinata;
- neutra;
- precisa;
- leggibile;
- utile come riferimento;
- asciutta;
- più corta di un dev-diary o research equivalente;
- meno narrativa del diary;
- meno pseudo-accademica del research.

La wiki può contenere informazioni assurde perché il canon le contiene, ma non deve costruire la comicità con il tono. Il testo deve evitare punchline, strizzate d’occhio e riferimenti comprensibili solo a chi ha letto un episodio specifico.

Scrivere:

```md
La Pausa Sigaretta è un rituale informale associato principalmente ad Adriano e Andrea. Nei contenuti del sito è collegata a momenti di confronto tecnico fuori dai processi ufficiali.
```

Non scrivere:

```md
La Pausa Sigaretta è quando Adriano e Andrea escono a fumare e dicono cose cattivissime ma vere, ed è divertente perché l’azienda non capisce niente.
```

### Anti-pattern specifici

Evitare:

- battute, punchline o frasi da dev-diary;
- giudizi troppo letterari sul ruolo comico di un elemento;
- riferimenti a scene non spiegate;
- personaggi inseriti solo per colore;
- status come `mitologico` se non è una categoria necessaria e spiegata;
- paragrafi lunghi che raccontano l’episodio invece di sintetizzare la voce;
- trasformare una pagina wiki in recap di un research o diary.

---

## Struttura standard

Default:

Il sito Astro renderizza il titolo dalla frontmatter: non inserire un heading `# Entry Title` nel corpo del Markdown pubblicato.

```md
## Definition
Definizione breve e chiara.

## Overview
Descrizione generale.

## Background
Origine o contesto.

## Role in Mangrovia
Ruolo nel progetto, nell’organizzazione o nella continuità del sito.

## Known Events
Eventi collegati, se rilevanti.

## Related Characters
Personaggi collegati.
```

Per voci brevi:

```md
## Definition

## Notes
```

Non includere `Related Entries`, `Canon Notes`, `Canon Impact`, canon check notes, suggerimenti wiki o timeline assessment nel Markdown pubblicato. Queste informazioni appartengono al report privato del workflow.

---

## Struttura: Character Entry

Usare per personaggi.

```md
## Definition
Una frase che identifica il personaggio.

## Role
Ruolo nell’organizzazione.

## Appearance
Aspetto canonico.

## Personality
Tratti principali.

## Voice
Come parla o scrive.

## Function in the Canon
Funzione nella continuità del progetto, senza analisi comica esplicita.

## Relationships
Relazioni principali.

## Known Events
Eventi collegati.
```

### Nota

Per i personaggi già presenti in `characters.md`, la pagina wiki deve sintetizzare e riorganizzare, non inventare nuova biografia.

---

## Struttura: Company Entry

Usare per aziende o entità organizzative.

```md
## Definition

## Overview

## History

## Culture

## Products and Initiatives

## Key People

## Known Events
```

---

## Struttura: Project Entry

Usare per prodotti, sistemi, iniziative, strumenti e progetti.

```md
## Definition

## Status
Active / abandoned / partial / proposed / unclear / deprecated

## Overview

## Origin

## Technical Context

## Organizational Context

## Known Issues

## Related Characters

## Related Events
```

La sezione `Status` è particolarmente importante per progetti come il Design System Qadra. Usare categorie informative e comprensibili, non etichette ironiche.

---

## Struttura: Concept Entry

Usare per concetti ricorrenti, rituali, categorie o pattern.

```md
## Definition

## Overview

## Origin

## Usage

## Examples

## Related Characters
```

---

## Struttura: Event Entry

Usare per eventi canonici.

```md
## Definition

## Date
Data precisa o approssimativa.

## Summary

## Background

## Event

## Impact

## Related Characters

## Timeline Reference
```

---

## Struttura: Incident Entry

Usare per incidenti tecnici o organizzativi.

```md
## Definition

## Date
Data precisa o approssimativa.

## Summary

## Systems Involved

## Trigger

## Resolution

## Impact

## Related Characters
```

---

## Stati canonici delle voci wiki

### Episodic

Voce utile per un singolo contenuto o episodio, ma non necessariamente ricorrente.

### Minor canon

Voce ricorrente o concetto stabile, ma non strutturale.

### Major canon

Voce fondamentale per il mondo, la timeline, i personaggi o le dinamiche aziendali.

Ogni pagina wiki deve indicare lo stato proposto nel report privato del workflow.

---

## Regole sui personaggi

Quando si genera una pagina personaggio:

- non inventare backstory non presenti in `characters.md`;
- non cambiare aspetto;
- non cambiare ruolo;
- non cambiare relazioni principali;
- non rendere esplicito ciò che nel canon deve restare sottile;
- non trasformare antipatie in odio dichiarato pubblico;
- non creare evoluzioni senza timeline.

La wiki può descrivere tensioni e dinamiche, ma deve farlo con tono documentale e senza rendere il sottotesto più esplicito del necessario.

Esempio per Andrea:

```md
Andrea mantiene una cordialità professionale con il resto del team, pur essendo associato a una forma di distacco critico particolarmente marcata. La sua alleanza informale più stabile è con Adriano, soprattutto durante le pause sigaretta.
```

---

## Regole sui concetti

Quando si genera una pagina concetto:

- spiegare cos’è;
- dire da dove nasce;
- indicare chi lo usa;
- chiarire se è ufficiale o informale;
- riportare esempi brevi;
- collegarlo a personaggi e contenuti;
- non renderlo più importante di quanto sia.
- non importare automaticamente il tono dell’episodio in cui compare.

Esempio:

```md
La Pausa Sigaretta non è riconosciuta ufficialmente come processo Mangrovia. Tuttavia, diversi contenuti la associano a momenti di diagnosi tecnica informale, soprattutto tra Adriano e Andrea.
```

---

## Regole sugli eventi

Quando si genera una pagina evento:

- indicare se l’evento è canonico;
- collegarlo alla timeline;
- spiegare le conseguenze;
- non aggiungere conseguenze permanenti non autorizzate;
- distinguere tra fatto, interpretazione ufficiale e percezione del team.

Esempio:

```md
La fusione Qadra-Mangrovia è descritta nei comunicati ufficiali come integrazione strategica. Nei contenuti interni e nei diary viene spesso percepita come un’annessione culturale e operativa da parte di Qadra.
```

---

## Uso dei contenuti source

Se la pagina wiki deriva da un articolo `research` o da un `dev diary`, sintetizzare così:

- estrarre i fatti canonici;
- ignorare dettagli episodici non ricorrenti;
- mantenere i collegamenti utili;
- segnalare se l’elemento è solo proposto o già canonico;
- non importare automaticamente tono narrativo o pseudo-accademico.
- mantenere solo informazioni che aiutano a capire la voce in futuro.

Esempio:

Un diary racconta che Giorgio apre un ticket su una metafora di The Rock.

La pagina wiki non deve raccontare tutta la scena. Deve estrarre il concetto:

```md
La Classificazione delle Metafore Dirigenziali è un processo proposto per distinguere tra frasi motivazionali, indicazioni strategiche e requisiti funzionali emersi dai keynote di The Rock.
```

---

## Related entries per il report privato

Ogni pagina deve proporre 3-10 voci correlate nel report privato del workflow, non nel Markdown pubblicato.

Le voci correlate possono includere:

- personaggi;
- aziende;
- progetti;
- concetti;
- eventi;
- incidenti;
- research;
- diary.

Esempio:

```md
- Adriano
- Andrea
- Informal Incident Review
- Incidenti Backend Ricorrenti
- Definition of Done
- Giorgio
```

---

## Canon notes per il report privato

Le `Canon Notes` servono a indicare limiti e precisazioni nel report privato del workflow.

Esempi:

```md
- La Pausa Sigaretta non è un processo ufficiale Mangrovia.
- Non deve essere descritta come una retrospettiva formalizzata.
- Il suo valore sta nella natura informale e non riconosciuta.
```

```md
- Il Design System Qadra non è considerato completato.
- Nikita può descriverlo come quasi pronto, ma questa è una sua interpretazione.
- Qualsiasi completamento ufficiale richiede aggiornamento timeline.
```

---

## Canon impact per il report privato

Ogni pagina deve essere accompagnata da questa valutazione nel report privato del workflow.

```md
### Suggested status
Episodic / Minor canon / Major canon

### Timeline update needed
Yes / No

### Character update needed
Yes / No

### Related files to update
- timeline.md
- characters.md
- relationships.md
- mangrovia-world.md

### Notes
Brief explanation.
```

Non inserire questa valutazione nel Markdown pubblicato.

---

## Controllo canonico prima dell’output

Prima di produrre la pagina finale, verificare:

- la voce è coerente con `canon-rules.md`?
- se è un personaggio, rispetta `characters.md`?
- se include relazioni, rispetta `relationships.md`?
- se è un evento, è coerente con `timeline.md`?
- se deriva da research o diary, distingue fatti da tono del testo source?
- introduce nuovi dettagli canonici?
- se sì, sono segnalati nel report privato del workflow?
- la pagina è abbastanza neutra per una wiki?
- un lettore esterno può capirla senza conoscere la scena originale?
- ci sono battute, ammiccamenti o frasi da dev-diary da rimuovere?
- la voce è più breve e più asciutta della fonte da cui deriva?
- ci sono voci correlate utili?

Se ci sono contraddizioni, correggerle prima dell’output.

---

## Output finale

L’output finale deve essere Markdown valido.

Default:

```md
## Definition
...

## Overview
...

## Background
...

## Role in Mangrovia
...

## Known Events
...

## Related Characters
...
```

Non aggiungere `Related Entries`, `Canon Notes`, `Canon Impact` o note private nel Markdown pubblicato.

---

## Esempio: Concept Entry

```md
## Definition

La Pausa Sigaretta è un rituale informale associato principalmente ad Adriano e Andrea.

## Overview

Nei contenuti del sito, la Pausa Sigaretta indica momenti di confronto fuori dai processi ufficiali. È collegata soprattutto a osservazioni tecniche, incidenti e discussioni successive a meeting o retrospettive.

## Origin

L’origine precisa non è documentata. Il concetto emerge nei dev-diary legati ad Adriano e Andrea.

## Usage

La Pausa Sigaretta viene usata nei dev-diary come momento informale. Può comparire nei research come oggetto di analisi, di norma in forma anonimizzata o aggregata.

## Examples

- Adriano e Andrea identificano il problema reale di una feature dopo un workshop sulla definizione di completamento.
- Andrea conferma un’anomalia backend solo dopo essere uscito a fumare.

## Related Characters

- Adriano
- Andrea
- Giulia
- Giorgio
```

---

## Esempio: Project Entry

```md
## Definition

Il Design System Qadra è l’insieme di componenti, token, convenzioni visive e intenzioni progettuali sviluppate durante la fase Qadra e parzialmente ereditate da Mangrovia dopo la fusione.

## Status

Partial / unclear.

## Overview

Il Design System Qadra è uno degli asset tecnici ereditati da Qadra. Il suo stato effettivo non è descritto da una singola fonte: alcune parti risultano documentate, alcune implementate, alcune usate in produzione e altre non verificate.

## Origin

Il progetto nasce in Qadra. Nikita stima tre settimane più una di test per rifare il design system. Il lavoro non risulta completato e non risultano nuovi commit da aprile.

## Technical Context

Il Design System Qadra coinvolge componenti frontend, convenzioni visuali, token, documentazione, Storybook e integrazione con prodotti Mangrovia/Qadra.

## Organizational Context

Dopo la fusione, il Design System Qadra diventa una delle eredità tecniche di Qadra. È collegato a migrazione frontend, consolidamento UI, ownership dei componenti e verifica della documentazione.

## Known Issues

- Stato di completamento non verificabile.
- Differenza tra documentazione e implementazione.
- Componenti duplicati o divergenti.
- Definizione instabile di “quasi finito”.
- Ownership non sempre chiara.

## Related Characters

- Nikita
- Giulia
- Adriano
- Mattia

## Related Events

- Stima iniziale di tre settimane più una di test.
- Ultimo commit noto di Nikita.
- Fusione Qadra-Mangrovia.
```
