# Generation Workflow

Questo file descrive il workflow operativo per generare contenuti automatici nell’universo Mangrovia.

Serve a coordinare knowledge file e skill, evitando che l’AI produca articoli, diary o pagine wiki incoerenti tra loro.

---

## Obiettivo

Ogni contenuto generato deve poter passare attraverso un flusso chiaro:

1. leggere il canon;
2. generare il contenuto;
3. controllare la coerenza;
4. decidere lo stato canonico;
5. aggiornare wiki o timeline se necessario;
6. salvare il contenuto nella sezione corretta.

Il workflow deve permettere generazione automatica, ma con abbastanza controlli da mantenere continuità.

---

# File coinvolti

---

## Knowledge files

I file di knowledge definiscono il mondo, i personaggi, la timeline e le regole.

```txt
/knowledge
  mangrovia-world.md
  characters.md
  relationships.md
  tone-and-style.md
  canon-rules.md
  timeline.md
```

### `mangrovia-world.md`

Contesto generale: Mangrovia, Qadra, fusione, AI, cultura aziendale, sezioni del progetto.

### `characters.md`

Schede operative dei personaggi.

### `relationships.md`

Dinamiche ricorrenti tra personaggi.

### `tone-and-style.md`

Guida di tono, voce e stile.

### `canon-rules.md`

Regole rigide su cosa l’AI può o non può modificare.

### `timeline.md`

Eventi canonici già accaduti o già stabiliti.

---

## Skill files

Le skill definiscono come produrre o controllare contenuti.

```txt
/skills
  research-article.md
  dev-diary-entry.md
  wiki-entry.md
  canon-check.md
  timeline-update.md
```

### `research-article.md`

Genera articoli pseudo-seri per la sezione `research`.

### `dev-diary-entry.md`

Genera post narrativi, diary, frammenti interni e giornate aziendali.

### `wiki-entry.md`

Genera pagine enciclopediche semi-neutre.

### `canon-check.md`

Controlla se un contenuto è coerente e pubblicabile.

### `timeline-update.md`

Decide se un contenuto deve aggiornare `timeline.md`.

---

# Workflow generale

---

## Step 1 — Select content type

Decidere che tipo di contenuto generare.

Possibili tipi:

- `research`
- `dev-diary`
- `wiki`
- `timeline-update`

Esempi:

```md
Generate a research article about the Feature Completion Confidence Index.
```

```md
Generate a dev diary entry about Mattia’s first encounter with the Qadra Design System.
```

```md
Generate a wiki entry for Pausa Sigaretta.
```

---

## Step 2 — Load base canon

Prima di generare qualunque contenuto, leggere sempre:

1. `canon-rules.md`
2. `mangrovia-world.md`
3. `characters.md`
4. `relationships.md`
5. `tone-and-style.md`
6. `timeline.md`

La priorità è:

1. non contraddire il canon;
2. usare correttamente personaggi e relazioni;
3. rispettare il tono;
4. generare un testo utile per la sezione richiesta.

---

## Step 3 — Load specific skill

Caricare la skill adatta:

```txt
research -> research-article.md
blog/diary -> dev-diary-entry.md
wiki -> wiki-entry.md
canon validation -> canon-check.md
timeline evaluation -> timeline-update.md
```

La skill specifica definisce struttura, formato, tono e output.

---

## Step 4 — Generate draft

Generare una prima bozza del contenuto.

Ogni bozza deve includere, salvo eccezioni, una sezione tecnica finale:

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

Questa sezione può essere rimossa dalla versione pubblicata, ma è utile per il workflow automatico.

---

## Step 5 — Run canon check

Ogni bozza deve essere validata con `canon-check.md`.

Input:

```md
Content type: research / dev-diary / wiki / timeline / other
Target status: non-canon / episodic / minor canon / major canon / undecided
Content: [generated content]
Source notes: [prompt or generation notes]
```

Output atteso:

```md
# Canon Check Report

## Verdict
Pass / Pass with notes / Needs revision / Blocked

## Suggested canon status
Non-canon / Episodic / Minor canon / Major canon

## Summary
...

## Issues
...

## Required changes
...

## Optional improvements
...

## Canon updates needed
Timeline / Wiki / Characters / Relationships / World / None

## Notes
...
```

---

## Step 6 — Apply canon check result

### If verdict is `Pass`

Il contenuto può essere pubblicato o salvato.

Procedere a eventuali aggiornamenti wiki/timeline se indicati.

### If verdict is `Pass with notes`

Il contenuto è pubblicabile, ma applicare eventuali piccoli miglioramenti se automatici e sicuri.

Esempi:

- aggiungere related entries;
- chiarire Canon Impact;
- correggere titolo;
- ridurre una frase troppo comica.

### If verdict is `Needs revision`

Correggere la bozza e rieseguire `canon-check.md`.

Non pubblicare finché non passa almeno come `Pass with notes`.

### If verdict is `Blocked`

Non pubblicare.

Il contenuto contraddice il canon o introduce cambiamenti non autorizzati.

Possibili azioni:

- riscrivere in modo coerente;
- trasformare l’evento in episodico;
- chiedere autorizzazione all’autore;
- aggiornare consapevolmente il canon, se l’autore approva.

---

# Workflow per Research

---

## Input tipico

```md
Topic: tema dell’articolo
Angle: taglio specifico
Characters: personaggi coinvolti o citati
Related concepts: concetti interni collegati
Canon status: episodic / minor canon / major canon / undecided
Length: short / medium / long
```

## Flow

1. Leggere knowledge file.
2. Caricare `research-article.md`.
3. Generare articolo con struttura research.
4. Includere `Canon Impact`.
5. Eseguire `canon-check.md`.
6. Se il check passa, decidere se serve `wiki-entry.md`.
7. Se l’articolo introduce evento persistente, eseguire `timeline-update.md`.
8. Salvare in `/content/research`.

## Output path consigliato

```txt
/content/research/YYYY-MM-DD-slug.md
```

Se non si usano date precise:

```txt
/content/research/slug.md
```

## Esempio

```txt
/content/research/feature-completion-confidence-index.md
```

---

# Workflow per Dev Diary

---

## Input tipico

```md
Topic: tema o giornata
Point of view: editorial / character name / mixed
Characters: personaggi coinvolti
Setting: ufficio / call / Slack / pausa sigaretta / deploy / altro
Event: cosa succede
Tone: dry / more comic / more technical / more corporate / darker
Canon status: episodic / minor canon / major canon / undecided
Length: short / medium / long
```

## Flow

1. Leggere knowledge file.
2. Caricare `dev-diary-entry.md`.
3. Generare entry narrativa.
4. Includere `Canon Impact`.
5. Eseguire `canon-check.md`.
6. Se il check passa, valutare se nascono nuove wiki entry.
7. Se l’episodio cambia il mondo, eseguire `timeline-update.md`.
8. Salvare in `/content/blog` o `/content/diary`.

## Output path consigliato

```txt
/content/diary/YYYY-MM-DD-slug.md
```

Oppure, se non si usano date precise:

```txt
/content/diary/slug.md
```

## Esempio

```txt
/content/diary/pausa-sigaretta-workshop-allineamento.md
```

---

# Workflow per Wiki

---

## Input tipico

```md
Entry title: titolo pagina
Entry type: character / company / project / concept / event / process / incident / artifact / role / location
Source content: contenuti research, diary o timeline da sintetizzare
Canon status: episodic / minor canon / major canon / undecided
Related characters: personaggi collegati
Related entries: voci correlate
Length: short / medium / long
```

## Flow

1. Leggere knowledge file.
2. Caricare `wiki-entry.md`.
3. Se la voce deriva da un research o diary, estrarre solo i fatti utili.
4. Generare pagina wiki semi-neutra.
5. Includere `Canon Notes` e `Canon Impact`.
6. Eseguire `canon-check.md`.
7. Se la pagina wiki formalizza un evento persistente, eseguire `timeline-update.md`.
8. Salvare in `/content/wiki`.

## Output path consigliato

```txt
/content/wiki/slug.md
```

## Esempio

```txt
/content/wiki/pausa-sigaretta.md
/content/wiki/design-system-qadra.md
/content/wiki/economico-programmatore.md
```

---

# Workflow per Timeline

---

## Quando eseguirlo

Eseguire `timeline-update.md` quando un contenuto:

- introduce evento persistente;
- modifica stato di progetto;
- cambia relazione importante;
- formalizza un processo;
- introduce personaggio canonico;
- cambia ruolo di un personaggio;
- produce conseguenze operative stabili;
- è classificato come `Major canon`;
- è classificato come `Minor canon` ma introduce origine o formalizzazione di un concetto.

## Flow

1. Prendere il contenuto generato e già validato.
2. Caricare `timeline-update.md`.
3. Valutare se serve update.
4. Se `No update needed`, non modificare `timeline.md`.
5. Se `Update recommended`, decidere se aggiungere evento o solo wiki entry.
6. Se `Update required`, generare entry e aggiornare `timeline.md`.
7. Eseguire `canon-check.md` sulla nuova timeline entry.

---

# Workflow completo consigliato

---

## Research article completo

```txt
Input idea
  ↓
Load knowledge files
  ↓
research-article.md
  ↓
Draft article
  ↓
canon-check.md
  ↓
If pass:
  ├─ save research article
  ├─ generate/update wiki entries if needed
  └─ run timeline-update.md if canon impact requires it
```

---

## Dev diary completo

```txt
Input episode
  ↓
Load knowledge files
  ↓
dev-diary-entry.md
  ↓
Draft diary entry
  ↓
canon-check.md
  ↓
If pass:
  ├─ save diary entry
  ├─ suggest wiki entries for recurring concepts
  └─ run timeline-update.md only if event has persistent impact
```

---

## Wiki entry completa

```txt
Input entry or source content
  ↓
Load knowledge files
  ↓
wiki-entry.md
  ↓
Draft wiki page
  ↓
canon-check.md
  ↓
If pass:
  ├─ save wiki page
  └─ run timeline-update.md only if page formalizes an event or process
```

---

# Canon status decisions

---

## Non-canon

Usare per:

- prove;
- alternative;
- bozze scartate;
- esperimenti;
- contenuti non approvati.

Non aggiornare wiki o timeline.

---

## Episodic

Usare per:

- giornate singole;
- piccoli bug;
- scene di dialogo;
- pause sigaretta senza conseguenze;
- research proposal non adottate;
- contenuti validi ma senza impatto persistente.

Può essere pubblicato, ma non aggiorna timeline.

Può suggerire wiki entry solo se rafforza un concetto ricorrente.

---

## Minor canon

Usare per:

- concetti ricorrenti;
- rituali informali;
- nuove metriche non strutturali;
- pattern interni;
- pagine wiki utili;
- micro-eventi citabili.

Può richiedere wiki update.

Richiede timeline solo se ha origine importante o conseguenze persistenti.

---

## Major canon

Usare per:

- fusioni;
- arrivi di personaggi canonici;
- cambi ruolo;
- grandi incidenti;
- nuovi processi ufficiali;
- cambi stato di progetti centrali;
- decisioni strutturali di The Rock;
- modifiche stabili alle relazioni.

Richiede sempre timeline update.

Può richiedere update anche di characters, relationships o world.

---

# Suggested repository structure

---

## Minimal structure

```txt
/knowledge
  canon-rules.md
  mangrovia-world.md
  characters.md
  relationships.md
  tone-and-style.md
  timeline.md

/skills
  research-article.md
  dev-diary-entry.md
  wiki-entry.md
  canon-check.md
  timeline-update.md
  generation-workflow.md

/content
  /research
  /diary
  /wiki
```

---

## Expanded structure

```txt
/knowledge
  canon-rules.md
  mangrovia-world.md
  characters.md
  relationships.md
  tone-and-style.md
  timeline.md

/skills
  research-article.md
  dev-diary-entry.md
  wiki-entry.md
  canon-check.md
  timeline-update.md
  generation-workflow.md

/content
  /research
    feature-completion-confidence-index.md
    smoke-breaks-incident-review.md
  /diary
    pausa-sigaretta-workshop-allineamento.md
    mattia-primo-incontro-storybook.md
  /wiki
    mangrovia-blockchain-solutions.md
    qadra.md
    the-rock.md
    design-system-qadra.md
    economico-programmatore.md
    pausa-sigaretta.md

/indexes
  research-index.md
  diary-index.md
  wiki-index.md
  timeline-index.md

/templates
  research-template.md
  diary-template.md
  wiki-template.md
  timeline-template.md
```

---

# Naming conventions

---

## File names

Usare slug lowercase, con trattini.

```txt
pausa-sigaretta.md
feature-completion-confidence-index.md
design-system-qadra.md
```

Evitare:

```txt
Pausa Sigaretta.md
FeatureCompletionConfidence.md
nuovo file finale definitivo.md
```

---

## Titles

I titoli interni possono usare maiuscole normali.

```md
# Pausa Sigaretta
# Feature Completion Confidence Index
# Design System Qadra
```

---

## Dates

Usare date precise solo quando stabilite.

Per contenuti senza data canonica, preferire file senza data o con data di pubblicazione separata dai fatti canonici.

---

# Metadata consigliati

Ogni contenuto pubblicabile può iniziare con frontmatter YAML.

## Research

```yaml
---
title: "Smoke Breaks as Informal Incident Review Mechanisms"
type: "research"
status: "minor-canon"
related:
  - Adriano
  - Andrea
  - Pausa Sigaretta
  - Incidenti Backend Ricorrenti
timeline_update: false
wiki_update: true
---
```

## Dev diary

```yaml
---
title: "Pausa sigaretta dopo il workshop di allineamento"
type: "dev-diary"
status: "minor-canon"
point_of_view: "editorial"
characters:
  - Adriano
  - Andrea
  - Giulia
  - Giorgio
timeline_update: false
wiki_update: true
---
```

## Wiki

```yaml
---
title: "Pausa Sigaretta"
type: "wiki"
entry_type: "concept"
status: "minor-canon"
related:
  - Adriano
  - Andrea
  - Informal Incident Review
---
```

## Timeline

Timeline entries possono non avere frontmatter se restano dentro `timeline.md`.

---

# Automation-safe rules

Queste regole sono pensate per generazione automatica giornaliera o semi-automatica.

## Default safe generation

Quando il sistema genera contenuti senza supervisione diretta, usare default conservativi:

- preferire `episodic` o `minor canon`;
- evitare major canon automatici;
- non cambiare ruoli, relazioni o stato dei progetti centrali;
- non completare il Design System Qadra;
- non introdurre nuovi personaggi canonici;
- non rendere ufficiali processi informali;
- non usare The Rock come personaggio quotidiano;
- proporre timeline update invece di applicarlo automaticamente, salvo regole esplicite.

## Allowed automatic content

Sono sicuri da generare automaticamente:

- research proposal non strutturali;
- diary episodici;
- wiki su concetti già approvati;
- aggiornamenti di indici;
- canon check report;
- timeline update assessment senza applicazione automatica.

## Restricted automatic content

Richiedono conferma dell’autore:

- major canon;
- nuovi personaggi canonici;
- cambi di ruolo;
- cambi di relazione;
- completamento o abbandono di progetti centrali;
- grandi incidenti;
- decisioni strutturali di The Rock;
- aggiornamenti a `characters.md`, `relationships.md`, `mangrovia-world.md` e `canon-rules.md`.

---

# Daily generation workflow

Questo workflow è pensato per un task automatico giornaliero.

## Conservative daily mode

1. Scegliere un tipo di contenuto tra:
  - research episodico;
  - dev diary episodico;
  - wiki entry su concetto già canonico.
2. Evitare major canon.
3. Leggere knowledge file.
4. Generare contenuto con skill specifica.
5. Eseguire canon check.
6. Se `Pass` o `Pass with notes`, salvare bozza.
7. Se `Needs revision`, correggere una volta e ricontrollare.
8. Se `Blocked`, scartare o salvare come non-canon.
9. Produrre un breve report con:
  - file creato;
  - stato canonico;
  - wiki update suggeriti;
  - timeline update suggeriti;
  - problemi trovati.

## Daily output report

```md
# Daily Generation Report

## Created content
- `/content/diary/slug.md`

## Canon status
Episodic / Minor canon / Major canon

## Canon check verdict
Pass / Pass with notes / Needs revision / Blocked

## Wiki updates suggested
- Entry 1
- Entry 2

## Timeline updates suggested
None / Entry title

## Notes
Brief notes.
```

---

# Human review mode

Quando l’autore rivede un contenuto, può decidere:

- pubblicare così com’è;
- pubblicare rimuovendo `Canon Impact`;
- trasformare un episodic in minor canon;
- promuovere un minor canon a major canon;
- aggiornare timeline;
- aggiornare wiki;
- aggiornare personaggi o relazioni;
- scartare il contenuto.

Se l’autore promuove un contenuto a major canon, aggiornare sempre:

1. `timeline.md`
2. eventuali pagine wiki collegate
3. eventuali schede personaggio o relazioni
4. `mangrovia-world.md`, se cambia il mondo aziendale

---

# Recommended first generation cycle

Per testare il sistema, usare questo ciclo iniziale:

## 1. Generare un dev diary episodico

Tema consigliato:

```md
Mattia incontra per la prima volta il Design System Qadra.
```

Status previsto:

```md
Episodic o Minor canon
```

## 2. Eseguire canon check

Verificare soprattutto:

- Mattia non deve diventare troppo competente;
- Nikita non deve completare il design system;
- Adriano può essere diffidente ma non sadico;
- Giulia deve restare plausibilmente corporate.

## 3. Generare wiki entry suggerita

Possibile voce:

```md
Economico Programmatore
```

## 4. Valutare timeline update

Probabilmente no, salvo che l’episodio venga definito come arrivo canonico di Mattia o formalizzazione del pattern.

---

# Recommended recurring content rotation

Per evitare monotonia, alternare:

1. research pseudo-serio;
2. dev diary editoriale;
3. wiki entry;
4. dev diary firmato;
5. research tecnico;
6. wiki update;
7. canon check / index maintenance.

Esempio rotazione settimanale:

```txt
Monday: research
Tuesday: dev diary
Wednesday: wiki entry
Thursday: dev diary signed by character
Friday: research or incident report
Saturday: wiki/index maintenance
Sunday: no major canon, only episodic content
```

---

# Failure handling

## If canon check fails

- Non pubblicare.
- Leggere `Required changes`.
- Correggere solo i problemi indicati.
- Rieseguire canon check.
- Se fallisce di nuovo, salvare come bozza non-canon o scartare.

## If timeline update is blocked

- Non aggiornare timeline.
- Verificare se il contenuto introduce major canon non autorizzato.
- Trasformare l’evento in episodico o chiedere decisione umana.

## If content is good but too impactful

- Pubblicare come non-canon draft;
- oppure ridurre l’impatto;
- oppure chiedere conferma all’autore per promuoverlo a major canon.

## If new concept appears repeatedly

- Creare wiki entry.
- Valutare se serve timeline entry di origine.
- Aggiornare indici.

---

# Rule of thumb

Research inventa idee.

Diary inventa episodi.

Wiki organizza concetti.

Timeline registra conseguenze.

Canon check protegge il mondo.

Se un contenuto non cambia niente, può essere pubblicato senza timeline.

Se un contenuto cambia qualcosa, deve lasciare una traccia nel canon.
