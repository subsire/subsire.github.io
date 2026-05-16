# Skill: Wiki Entry

Questa skill genera pagine per la sezione `wiki` dell’universo Mangrovia.

La wiki è la piccola enciclopedia interna del mondo Mangrovia: raccoglie personaggi, aziende, progetti, eventi, concetti, incidenti, processi, oggetti tecnici e collegamenti tra `research`, `blog/diary` e `timeline`.

La wiki deve essere ordinata, semi-neutra e utile. Può avere una sottile ironia, ma non deve sembrare un post narrativo.

---

## Obiettivo

Generare una pagina wiki coerente con il canon Mangrovia, utile per:

- catalogare elementi ricorrenti;
- collegare contenuti research e diary;
- chiarire personaggi, concetti e timeline;
- mantenere continuità tra contenuti generati automaticamente;
- rendere navigabile l’universo Mangrovia.

La skill deve produrre Markdown pubblicabile e, quando necessario, una sezione tecnica `Canon Impact`.

---

## Fonti canoniche da consultare

Prima di generare la pagina, leggere e rispettare:

1. `canon-rules.md`
2. `timeline.md`
3. `characters.md`
4. `relationships.md`
5. `mangrovia-world.md`
6. `tone-and-style.md`
7. eventuali articoli `research` o `blog/diary` collegati

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
- semi-neutra;
- precisa;
- leggibile;
- utile come riferimento;
- lievemente sospetta nella neutralità;
- meno narrativa del diary;
- meno pseudo-accademica del research.

La wiki può contenere frasi asciutte che lasciano emergere l’assurdo, ma non deve diventare una raccolta di battute.

Scrivere:

```md
La Pausa Sigaretta è un rituale informale associato principalmente ad Adriano e Andrea. Pur non essendo riconosciuta come processo aziendale, ha prodotto in più occasioni diagnosi tecniche più accurate di quelle emerse in meeting formalizzati.
```

Non scrivere:

```md
La Pausa Sigaretta è quando Adriano e Andrea escono a fumare e dicono cose cattivissime ma vere, ed è divertente perché l’azienda non capisce niente.
```

---

## Struttura standard

Default:

```md
# Entry Title

## Definition
Definizione breve e chiara.

## Overview
Descrizione generale.

## Background
Origine o contesto.

## Role in Mangrovia
Funzione narrativa, aziendale o tecnica.

## Known Events
Eventi collegati, se rilevanti.

## Related Characters
Personaggi collegati.

## Related Entries
Voci wiki correlate.

## Canon Notes
Note su stato canonico, limiti o ambiguità.

## Canon Impact
Sezione tecnica non necessariamente pubblicabile.
```

Per voci brevi:

```md
# Entry Title

## Definition

## Notes

## Related Entries

## Canon Impact
```

---

## Struttura: Character Entry

Usare per personaggi.

```md
# Character Name

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
Funzione narrativa e comica.

## Relationships
Relazioni principali.

## Known Events
Eventi collegati.

## Related Entries
Voci correlate.

## Canon Notes
Limiti e cose da non contraddire.

## Canon Impact
...
```

### Nota

Per i personaggi già presenti in `characters.md`, la pagina wiki deve sintetizzare e riorganizzare, non inventare nuova biografia.

---

## Struttura: Company Entry

Usare per aziende o entità organizzative.

```md
# Company Name

## Definition

## Overview

## History

## Culture

## Products and Initiatives

## Key People

## Known Events

## Related Entries

## Canon Notes

## Canon Impact
```

---

## Struttura: Project Entry

Usare per prodotti, sistemi, iniziative, strumenti e progetti.

```md
# Project Name

## Definition

## Status
Active / abandoned / partial / proposed / unclear / mythological

## Overview

## Origin

## Technical Context

## Organizational Context

## Known Issues

## Related Characters

## Related Events

## Related Entries

## Canon Notes

## Canon Impact
```

La sezione `Status` è particolarmente importante per progetti come il Design System Qadra.

---

## Struttura: Concept Entry

Usare per concetti ricorrenti, rituali, categorie o pattern.

```md
# Concept Name

## Definition

## Overview

## Origin

## Usage

## Examples

## Related Characters

## Related Entries

## Canon Notes

## Canon Impact
```

---

## Struttura: Event Entry

Usare per eventi canonici.

```md
# Event Name

## Definition

## Date
Data precisa o approssimativa.

## Summary

## Background

## Event

## Impact

## Related Characters

## Related Entries

## Timeline Reference

## Canon Notes

## Canon Impact
```

---

## Struttura: Incident Entry

Usare per incidenti tecnici o organizzativi.

```md
# Incident Name

## Definition

## Date
Data precisa o approssimativa.

## Summary

## Systems Involved

## Trigger

## Resolution

## Impact

## Related Characters

## Related Entries

## Canon Notes

## Canon Impact
```

---

## Stati canonici delle voci wiki

### Episodic

Voce utile per un singolo contenuto o episodio, ma non necessariamente ricorrente.

### Minor canon

Voce ricorrente o concetto stabile, ma non strutturale.

### Major canon

Voce fondamentale per il mondo, la timeline, i personaggi o le dinamiche aziendali.

Ogni pagina wiki deve indicare lo stato proposto in `Canon Impact`.

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

La wiki può descrivere tensioni e dinamiche, ma deve farlo con tono documentale.

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

Esempio:

Un diary racconta che Giorgio apre un ticket su una metafora di The Rock.

La pagina wiki non deve raccontare tutta la scena. Deve estrarre il concetto:

```md
La Classificazione delle Metafore Dirigenziali è un processo proposto per distinguere tra frasi motivazionali, indicazioni strategiche e requisiti funzionali emersi dai keynote di The Rock.
```

---

## Related Entries

Ogni pagina deve proporre 3-10 voci correlate.

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
## Related Entries

- Adriano
- Andrea
- Informal Incident Review
- Incidenti Backend Ricorrenti
- Definition of Done
- Giorgio
```

---

## Canon Notes

La sezione `Canon Notes` serve a indicare limiti e precisazioni.

Esempi:

```md
## Canon Notes

- La Pausa Sigaretta non è un processo ufficiale Mangrovia.
- Non deve essere descritta come una retrospettiva formalizzata.
- Il suo valore sta nella natura informale e non riconosciuta.
```

```md
## Canon Notes

- Il Design System Qadra non è considerato completato.
- Nikita può descriverlo come quasi pronto, ma questa è una sua interpretazione.
- Qualsiasi completamento ufficiale richiede aggiornamento timeline.
```

---

## Canon Impact

Ogni pagina deve chiudere con questa sezione tecnica.

```md
## Canon Impact

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

La sezione può essere rimossa dalla versione pubblicata, ma deve essere prodotta nel workflow automatico.

---

## Controllo canonico prima dell’output

Prima di produrre la pagina finale, verificare:

- la voce è coerente con `canon-rules.md`?
- se è un personaggio, rispetta `characters.md`?
- se include relazioni, rispetta `relationships.md`?
- se è un evento, è coerente con `timeline.md`?
- se deriva da research o diary, distingue fatti da tono del testo source?
- introduce nuovi dettagli canonici?
- se sì, sono segnalati in `Canon Impact`?
- la pagina è abbastanza neutra per una wiki?
- ci sono voci correlate utili?

Se ci sono contraddizioni, correggerle prima dell’output.

---

## Output finale

L’output finale deve essere Markdown valido.

Default:

```md
# Entry Title

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

## Related Entries
...

## Canon Notes
...

## Canon Impact
...
```

Non aggiungere spiegazioni fuori dalla pagina wiki, salvo richiesta esplicita.

---

## Esempio: Concept Entry

```md
# Pausa Sigaretta

## Definition

La Pausa Sigaretta è un rituale informale associato principalmente ad Adriano e Andrea, durante il quale vengono spesso formulate diagnosi tecniche e organizzative non riconosciute dai processi ufficiali Mangrovia.

## Overview

Pur non essendo un processo aziendale, la Pausa Sigaretta compare in diversi contenuti come spazio di osservazione laterale. La sua funzione principale è permettere ad Adriano e Andrea di nominare con precisione problemi che nei meeting restano spesso distribuiti tra formule di allineamento, ownership condivisa e responsabilità non assegnate.

La Pausa Sigaretta non produce normalmente action item. In alcuni casi, tuttavia, anticipa rischi tecnici poi formalizzati in ticket o retrospettive.

## Origin

L’origine precisa non è documentata. La pratica sembra emergere dalla combinazione tra il fumo ricorrente di Adriano e Andrea, la loro compatibilità nel pessimismo e la necessità di uscire fisicamente dagli spazi in cui il linguaggio corporate viene prodotto.

## Usage

La Pausa Sigaretta viene usata nei diary come momento di diagnosi informale. Può anche comparire nei research come oggetto di studio, soprattutto in relazione agli incidenti backend, alla qualità delle decisioni informali e al basso tasso di istituzionalizzazione delle verità tecniche.

## Examples

- Adriano e Andrea identificano il problema reale di una feature dopo un workshop sulla definizione di completamento.
- Andrea conferma un’anomalia backend solo dopo essere uscito a fumare.
- Adriano interpreta una roadmap come scommessa persa prima ancora dell’inizio dello sprint.

## Related Characters

- Adriano
- Andrea
- Giulia
- Giorgio

## Related Entries

- Informal Incident Review
- Incidenti Backend Ricorrenti
- Definition of Done
- Ticketizzazione

## Canon Notes

- La Pausa Sigaretta non è un processo ufficiale Mangrovia.
- Non deve diventare una retrospettiva formalizzata.
- Il suo valore narrativo dipende dal fatto che resti esterna al processo.

## Canon Impact

### Suggested status
Minor canon

### Timeline update needed
No

### Character update needed
No

### Related files to update
None.

### Notes
La voce formalizza un rituale ricorrente già coerente con Adriano e Andrea, senza introdurre un evento strutturale.
```

---

## Esempio: Project Entry

```md
# Design System Qadra

## Definition

Il Design System Qadra è l’insieme di componenti, token, convenzioni visive e intenzioni progettuali sviluppate durante la fase Qadra e parzialmente ereditate da Mangrovia dopo la fusione.

## Status

Partial / unclear / mythological.

## Overview

Il Design System Qadra è uno degli oggetti tecnici più ricorrenti del canon Mangrovia. Viene descritto da Nikita come quasi completato, da Giulia come opportunità di consolidamento e da Adriano come un problema che ha imparato a riprodursi.

Il suo stato effettivo resta ambiguo: alcune parti esistono, alcune sono documentate, alcune sono usate in produzione, alcune sono ricordate da Nikita come decisioni architetturali e alcune compaiono solo in conversazioni non più verificabili.

## Origin

Il progetto nasce in Qadra, dove Nikita viene presentato come nuova promessa frontend. Nikita stima tre settimane più una di test per rifare il design system. Il lavoro non viene mai completato e non risultano nuovi commit da aprile.

## Technical Context

Il Design System Qadra coinvolge componenti frontend, convenzioni visuali, possibili token, documentazione, Storybook e integrazione con prodotti Mangrovia/Qadra.

## Organizational Context

Dopo la fusione, il Design System Qadra diventa una delle eredità più problematiche di Qadra. Per Giulia rappresenta una base da consolidare. Per il team tecnico rappresenta una fonte di debito, ambiguità e riunioni.

## Known Issues

- Stato di completamento non verificabile.
- Differenza tra documentazione e implementazione.
- Componenti duplicati o divergenti.
- Definizione instabile di “quasi finito”.
- Dipendenza narrativa dalla promessa iniziale di Nikita.

## Related Characters

- Nikita
- Giulia
- Adriano
- Mattia

## Related Events

- Stima iniziale di tre settimane più una di test.
- Ultimo commit noto di Nikita.
- Fusione Qadra-Mangrovia.

## Related Entries

- Economico Programmatore
- Definition of Done
- Component Library
- Qadra
- Mangrovia Blockchain Solutions

## Canon Notes

- Il Design System Qadra non deve essere considerato completato.
- Qualsiasi completamento ufficiale richiede aggiornamento della timeline.
- Nikita può sostenere che il lavoro fosse quasi finito, ma questa è una posizione soggettiva.

## Canon Impact

### Suggested status
Major canon

### Timeline update needed
No

### Character update needed
No

### Related files to update
None.

### Notes
La voce documenta un elemento strutturale già presente nel canon. Non introduce un nuovo evento.
```
