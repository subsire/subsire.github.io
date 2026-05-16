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
6. valutare se servono immagini a supporto;
7. salvare il contenuto e gli asset nella sezione corretta.

Il workflow deve permettere generazione automatica, ma con abbastanza controlli da mantenere continuità.

---

# File coinvolti

---

## Knowledge files

I file di knowledge definiscono il mondo, i personaggi, la timeline e le regole.

```txt
.ai/knowledge
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

## Visual reference files

Le immagini in `.ai/images/` sono reference visive e di stile per i protagonisti. Servono per mantenere continuità quando un post generato viene accompagnato da una o più immagini.

```txt
.ai/images
  adriano.png
  fiorenzo.png
  gigi.png
  giulia.png
  mattia.png
  nikita.png
  salvatore.png
  the-rock.png
  vas.png
```

Regole operative:

- usare queste immagini come reference, non come output da sovrascrivere;
- caricare le reference dei personaggi effettivamente presenti nell’immagine;
- se un personaggio non ha reference, evitare primi piani o dettagli troppo specifici;
- mantenere lo stile coerente con l’immaginario visivo già presente nel progetto;
- generare immagini che completano il post, senza introdurre fatti canonici non presenti nel testo;
- non usare le immagini per rendere “ufficiale” un evento che il testo lascia ambiguo.

---

## Skill files

Le skill definiscono come produrre o controllare contenuti.

```txt
.ai/skills
  research-article.md
  dev-diary-entry.md
  wiki-entry.md
  canon-check.md
  timeline-update.md
```

### `research-article.md`

Genera paper fittizi da laboratorio per la sezione `research`: metriche, dataset, figure, risultati e tono non narrativo.

### `dev-diary-entry.md`

Genera developer log editoriali, frammenti interni e giornate aziendali documentate con contesto, lavoro svolto, evidenze, decisioni e prossimi passi.

### `wiki-entry.md`

Genera pagine wiki asciutte, neutrali e leggibili come reference.

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

### Separazione dei registri

Non applicare un generico “tono Mangrovia” a tutte le sezioni. La skill specifica vince sempre:

- `research`: paper frontier-lab fittizio, con metodo, dati, metriche, tabelle/grafici e personaggi assenti o anonimizzati;
- `dev-diary`: developer log editoriale in terza persona, con lavoro svolto, evidenze, decisioni e conseguenze operative; scene e dialoghi sono opzionali e non sono il default;
- `wiki`: reference neutra, breve e asciutta, comprensibile anche a un lettore esterno.

Se un contenuto usa il tono giusto ma nella sezione sbagliata, va spostato o riscritto.

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
visual assets -> .ai/images references + image generation tool/skill
```

La skill specifica definisce struttura, formato, tono e output.

---

## Step 4 — Generate draft

Generare una prima bozza del contenuto.

Ogni bozza pubblicabile deve contenere solo il Markdown destinato al sito. Non includere sezioni tecniche come `Related Entries`, `Canon Notes` o `Canon Impact` nel corpo del file.

Accompagnare invece la bozza con un report privato del workflow:

```md
## Canon Check Report

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

Quando il contenuto può essere accompagnato da immagini, aggiungere anche un brief visivo tecnico:

```md
## Visual Brief

### Images needed
Yes / No

### Suggested image count
0 / 1 / 2 / 3

### Purpose
cover / inline / gallery / document insert / character moment

### Subjects
- Personaggio, luogo, oggetto o scena

### Reference images
- `.ai/images/adriano.png`
- `.ai/images/giulia.png`

### Style notes
Indicazioni su composizione, tono, luce, formato e coerenza con il post.

### Prompt draft
Prompt sintetico per generare l’immagine.

### Suggested output path
`public/images/posts/<slug>-cover.png`
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

- aggiungere wiki updates suggeriti al report privato;
- chiarire il canon check report;
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

## Step 7 — Generate optional visual assets

Ogni contenuto pubblicabile può avere zero, una o più immagini di accompagnamento.

Generare immagini solo dopo che il testo ha passato `canon-check.md` almeno come `Pass with notes`. Le immagini devono illustrare o completare il contenuto, non aggiungere eventi nuovi.

Flow consigliato:

1. Leggere il `Visual Brief`, se presente.
2. Identificare personaggi, ambienti, oggetti o documenti da rappresentare.
3. Caricare le reference rilevanti da `.ai/images/`.
4. Generare una cover se il post beneficia di un’immagine principale.
5. Generare immagini inline solo se aggiungono valore narrativo o documentale.
6. Salvare gli output in `public/images/posts/` con slug coerente.
7. Aggiornare il markdown o il frontmatter solo se il sito supporta già quel campo.
8. Se il sito non supporta ancora immagini nel frontmatter, inserire l’immagine nel corpo Markdown.
9. Non aggiungere campi `image`, `cover` o simili al frontmatter finché lo schema Astro non li supporta.

Esempio di output:

```txt
public/images/posts/pausa-sigaretta-workshop-allineamento-cover.png
public/images/posts/pausa-sigaretta-workshop-allineamento-ticket.png
```

Esempio Markdown:

```md
![Adriano e Andrea fuori dall’ufficio dopo il workshop di allineamento](/images/posts/pausa-sigaretta-workshop-allineamento-cover.png)
```

Le immagini generate devono rispettare:

- personaggi coerenti con `characters.md`;
- relazioni coerenti con `relationships.md`;
- tono coerente con `tone-and-style.md`;
- nessuna nuova milestone aziendale implicita;
- nessuna contraddizione con `timeline.md`;
- nessuna sovrascrittura delle reference in `.ai/images/`.

---

# Workflow per Research

---

## Input tipico

```md
Topic: tema dell’articolo
Angle: taglio specifico
Evidence roles: ruoli, fonti o partecipanti da trattare in forma anonimizzata
Related concepts: concetti interni collegati
Canon status: episodic / minor canon / major canon / undecided
Length: short / medium / long
```

## Flow

1. Leggere knowledge file.
2. Caricare `research-article.md`.
3. Generare articolo con struttura research.
4. Non includere `Related Entries`, `Canon Impact` o note private nel Markdown pubblicato.
5. Eseguire `canon-check.md` e produrre il report canonico separatamente.
6. Se il check passa, decidere se serve `wiki-entry.md`.
7. Se l’articolo introduce una milestone aziendale, eseguire `timeline-update.md`.
8. Preparare `Visual Brief` e generare immagini se utili.
9. Salvare in `src/content/research`.

## Output path consigliato

```txt
src/content/research/YYYY-MM-DD-slug.md
```

Se non si usano date precise:

```txt
src/content/research/slug.md
```

## Esempio

```txt
src/content/research/feature-completion-confidence-index.md
```

---

# Workflow per Dev Diary

---

## Input tipico

```md
Topic: tema o giornata
Narrative frame: product-log / editorial / document-heavy / mockumentary / interview-heavy
Characters: personaggi coinvolti
Setting: ufficio / call / Slack / pausa sigaretta / deploy / altro
Event: cosa succede
Tone: dry / more comic / more technical / more corporate / darker
Canon status: episodic / minor canon / major canon / undecided
Length: short / medium / long
Materials: changelog / ticket / Slack / snippet / decision log / interviste / mixed
```

## Flow

1. Leggere knowledge file.
2. Caricare `dev-diary-entry.md`.
3. Generare entry in formato developer log editoriale. Usare il mockumentary solo se richiesto esplicitamente.
4. Non includere `Related Entries`, `Canon Impact` o note private nel Markdown pubblicato.
5. Eseguire `canon-check.md` e produrre il report canonico separatamente.
6. Se il check passa, valutare se nascono nuove wiki entry.
7. Se l'entry introduce una milestone aziendale, eseguire `timeline-update.md`.
8. Preparare `Visual Brief` e generare immagini se utili.
9. Salvare in `src/content/dev-diary`.

## Output path consigliato

```txt
src/content/dev-diary/YYYY-MM-DD-slug.md
```

Oppure, se non si usano date precise:

```txt
src/content/dev-diary/slug.md
```

## Esempio

```txt
src/content/dev-diary/pausa-sigaretta-workshop-allineamento.md
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
4. Generare pagina wiki neutra, asciutta e breve.
5. Non includere `Related Entries`, `Canon Notes`, `Canon Impact` o note private nel Markdown pubblicato.
6. Eseguire `canon-check.md` e produrre il report canonico separatamente.
7. Se la pagina wiki formalizza una milestone aziendale, eseguire `timeline-update.md`.
8. Preparare `Visual Brief` e generare immagini se utili.
9. Salvare in `src/content/wiki`.

## Output path consigliato

```txt
src/content/wiki/slug.md
```

## Esempio

```txt
src/content/wiki/pausa-sigaretta.md
src/content/wiki/design-system-qadra.md
src/content/wiki/economico-programmatore.md
```

---

# Workflow per Timeline

---

## Quando eseguirlo

Eseguire `timeline-update.md` quando un contenuto:

- introduce una milestone aziendale;
- modifica lo stato di Mangrovia o Qadra;
- cambia CEO, leadership o governance centrale;
- avvia, chiude o rilancia una linea di prodotto centrale;
- cambia stato ufficiale del Design System Qadra;
- introduce fusione, acquisizione, annessione o rebrand;
- produce un grande incidente che cambia roadmap, governance o offerta;
- è classificato come `Major canon` e riguarda la roadmap aziendale.

## Flow

1. Prendere il contenuto generato e già validato.
2. Caricare `timeline-update.md`.
3. Valutare se serve update.
4. Se `No update needed`, non modificare `timeline.md`.
5. Se `Update recommended`, decidere se confermare la milestone o documentarla solo in wiki/world.
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
  ├─ generate optional visual assets
  └─ run timeline-update.md only if it introduces a company milestone
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
  ├─ generate optional visual assets
  └─ run timeline-update.md only if it introduces a company milestone
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
  ├─ generate optional visual assets
  └─ run timeline-update.md only if page formalizes a company milestone
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

Richiede timeline solo se coincide con una milestone aziendale.

---

## Major canon

Usare per:

- fusioni;
- cambi di CEO o leadership centrale;
- grandi incidenti;
- nuove linee di prodotto ufficiali;
- cambi stato di progetti centrali;
- decisioni strutturali di The Rock;
- rebrand, acquisizioni o cambi di fase aziendale.

Richiede timeline update solo se riguarda la roadmap aziendale.

Può richiedere update anche di characters, relationships o world.

---

# Suggested repository structure

---

## Minimal structure

```txt
.ai/knowledge
  canon-rules.md
  mangrovia-world.md
  characters.md
  relationships.md
  tone-and-style.md
  timeline.md

.ai/skills
  research-article.md
  dev-diary-entry.md
  wiki-entry.md
  canon-check.md
  timeline-update.md
  generation-workflow.md

.ai/images
  adriano.png
  giulia.png
  ...

src/content
  /research
  /dev-diary
  /wiki

public/images/posts
  generated-post-images.png
```

---

## Expanded structure

```txt
.ai/knowledge
  canon-rules.md
  mangrovia-world.md
  characters.md
  relationships.md
  tone-and-style.md
  timeline.md

.ai/skills
  research-article.md
  dev-diary-entry.md
  wiki-entry.md
  canon-check.md
  timeline-update.md
  generation-workflow.md

.ai/images
  adriano.png
  fiorenzo.png
  gigi.png
  giulia.png
  mattia.png
  nikita.png
  salvatore.png
  the-rock.png
  vas.png

src/content
  /research
    feature-completion-confidence-index.md
    smoke-breaks-incident-review.md
  /dev-diary
    pausa-sigaretta-workshop-allineamento.md
    mattia-primo-incontro-storybook.md
  /wiki
    mangrovia-blockchain-solutions.md
    qadra.md
    the-rock.md
    design-system-qadra.md
    economico-programmatore.md
    pausa-sigaretta.md

public/images/posts
  feature-completion-confidence-index-cover.png
  pausa-sigaretta-workshop-allineamento-cover.png

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

Ogni contenuto pubblicabile deve iniziare con frontmatter YAML compatibile con lo schema Astro del sito.

Non inserire nel frontmatter pubblico campi privati o non supportati dallo schema, come `status`, `type`, `entry_type`, `characters`, `related`, `timeline_update` o `wiki_update`, finché lo schema Astro non li supporta esplicitamente.

## Research

```yaml
---
title: "Component Availability Gap in Partially Governed Design Systems"
date: 2026-05-16
description: "A measurement framework for component readiness when documentation, implementation and production usage diverge."
categories: ["Research", "Design System"]
authors: ["Mangrovia Research"]
---
```

## Dev diary

```yaml
---
title: "Pausa sigaretta dopo il workshop di allineamento"
date: 2026-05-16
description: "Un breve episodio sulla differenza tra allineamento dichiarato e comprensione operativa."
categories: ["Dev Diary", "Workshop"]
authors: ["Mangrovia Editorial"]
---
```

## Wiki

```yaml
---
title: "Pausa Sigaretta"
date: 2026-05-16
description: "Rituale informale associato ad analisi tecniche non ufficiali."
categories: ["Wiki", "Concept"]
authors: ["Mangrovia Wiki"]
---
```

## Timeline

Timeline entries possono non avere frontmatter se restano dentro `timeline.md`.

## Visual assets

I campi `visual_assets`, `cover_image`, `image` o simili vanno usati nel frontmatter solo se lo schema Astro li supporta. In caso contrario, inserire le immagini nel corpo Markdown.

Esempio sicuro nel corpo del contenuto:

```md
![Descrizione breve e utile dell’immagine](/images/posts/slug-cover.png)
```

Esempio di metadata tecnico per il workflow, non necessariamente da pubblicare:

```yaml
visual_assets:
  cover: "/images/posts/slug-cover.png"
  inline:
    - "/images/posts/slug-ticket.png"
  references:
    - ".ai/images/adriano.png"
    - ".ai/images/giulia.png"
```

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
- generare al massimo una cover per contenuto, salvo richiesta esplicita;
- usare `.ai/images/` solo come reference e non sovrascriverla;
- non generare immagini che aggiungono fatti canonici non presenti nel testo;
- proporre timeline update invece di applicarlo automaticamente, salvo regole esplicite.

## Allowed automatic content

Sono sicuri da generare automaticamente:

- research proposal non strutturali;
- diary episodici;
- wiki su concetti già approvati;
- cover image per contenuti già passati dal canon check;
- immagini inline documentali, se rappresentano oggetti, schermate fittizie, ticket o scene già descritte;
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
- immagini che mostrano eventi major canon non approvati;
- primi piani di personaggi senza reference visiva disponibile;
- immagini che contraddicono schede personaggio o relazioni;
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
6. Se `Pass` o `Pass with notes`, preparare eventuale `Visual Brief`.
7. Generare al massimo una cover se utile e sicura.
8. Salvare bozza e asset.
9. Se `Needs revision`, correggere una volta e ricontrollare.
10. Se `Blocked`, scartare o salvare come non-canon.
11. Produrre un breve report con:
  - file creato;
  - immagini create;
  - stato canonico;
  - wiki update suggeriti;
  - timeline update suggeriti;
  - problemi trovati.

## Daily output report

```md
# Daily Generation Report

## Created content
- `src/content/dev-diary/slug.md`

## Visual assets
- `/images/posts/slug-cover.png`

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
- pubblicare solo se il Markdown non contiene `Related Entries`, `Canon Impact` o note private del workflow;
- pubblicare con o senza immagini;
- richiedere rigenerazione o rimozione delle immagini;
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

Probabilmente no, salvo che l’episodio venga definito come milestone aziendale.

## 5. Generare una cover opzionale

Usare le reference disponibili in `.ai/images/` per i personaggi presenti. La cover deve mostrare la scena descritta, non introdurre nuove conseguenze canoniche.

---

# Recommended recurring content rotation

Per evitare monotonia, alternare:

1. research in forma di paper fittizio;
2. dev diary product-log;
3. wiki entry;
4. dev diary con inserti di intervista o documenti;
5. research tecnico;
6. wiki update;
7. canon check / index maintenance.

Esempio rotazione settimanale:

```txt
Monday: research
Tuesday: dev diary
Wednesday: wiki entry
Thursday: dev diary document-heavy
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

## If visual generation fails

- Pubblicare il testo senza immagine.
- Non sostituire reference mancanti con somiglianze inventate.
- Salvare il visual brief come nota tecnica, se utile.
- Rigenerare solo dopo aver chiarito soggetto, reference e funzione dell’immagine.

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

Research inventa idee in forma misurabile.

Diary inventa episodi.

Wiki organizza concetti.

Timeline registra conseguenze.

Canon check protegge il mondo.

Images completano il post, ma non fanno canon da sole.

Se un contenuto non cambia niente, può essere pubblicato senza timeline.

Se un contenuto cambia qualcosa, deve lasciare una traccia nel canon.
