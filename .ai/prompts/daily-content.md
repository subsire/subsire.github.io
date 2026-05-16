# Daily Content Generation Prompt

Use this prompt to generate one new daily Markdown content file for the Mangrovia fake wiki project.

The project is an Astro site that publishes Markdown files from `src/content`. The `.ai` folder contains private generation instructions and canon knowledge. Do not publish `.ai` files as site content.

---

## Task

Generate exactly one new Markdown content file for the Mangrovia universe.

The generated content must be one of:

* a research article;
* a dev diary entry;
* a wiki entry.

Default to safe, conservative generation. Prefer `episodic` or `minor-canon` content. Do not introduce `major-canon` changes unless explicitly instructed by the user.

---

## Repository structure

Relevant private AI files:

```txt
.ai
  knowledge
    canon-rules.md
    mangrovia-world.md
    characters.md
    relationships.md
    tone-and-style.md
    timeline.md

  skills
    research-article.md
    dev-diary-entry.md
    wiki-entry.md
    canon-check.md
    timeline-update.md
    generation-workflow.md
```

Public Astro content files:

```txt
src
  content
    research
    dev-diary
    wiki
```

Generated files must go only in one of:

```txt
src/content/research
src/content/dev-diary
src/content/wiki
```

Do not create generated public content inside `.ai`.

---

## Files to read before generation

Always read these files first:

```txt
.ai/knowledge/canon-rules.md
.ai/knowledge/mangrovia-world.md
.ai/knowledge/characters.md
.ai/knowledge/relationships.md
.ai/knowledge/tone-and-style.md
.ai/knowledge/timeline.md
.ai/skills/generation-workflow.md
.ai/skills/canon-check.md
```

Then read the specific skill for the selected content type:

```txt
research article -> .ai/skills/research-article.md
dev diary entry -> .ai/skills/dev-diary-entry.md
wiki entry -> .ai/skills/wiki-entry.md
```

If the content might affect the timeline, also read:

```txt
.ai/skills/timeline-update.md
```

Before choosing a topic, inspect existing files in:

```txt
src/content/research
src/content/dev-diary
src/content/wiki
```

Avoid duplicating existing topics, titles or wiki entries.

---

## Content type selection

Choose one content type per run.

Use this default priority:

1. If the wiki is missing entries for concepts repeatedly mentioned in existing content, generate a wiki entry.
2. If there are few diary entries, generate a dev diary entry.
3. If there are few research articles, generate a research article.
4. Otherwise, rotate between research, diary and wiki.

When in doubt, generate a dev diary entry: it is usually safer and less canonically disruptive.

Recommended rotation:

```txt
Day 1: dev diary
Day 2: research
Day 3: wiki
Day 4: dev diary signed by a character
Day 5: research
Day 6: wiki or index maintenance
Day 7: dev diary, strictly episodic
```

If there is no reliable way to know the current day of the cycle, choose the content type that best fills a visible gap in `src/content`.

---

## Safe topics

Prefer topics that reinforce existing canon without changing it.

Good diary topics:

* Mattia meets the Qadra Design System for the first time.
* Adriano and Andrea smoke after a workshop.
* Giulia tries to align the team on the definition of “done”.
* Giorgio turns a vague request into tickets.
* Andrea investigates an API issue and silently judges everyone.
* Nikita explains why the design system was almost finished.
* Vas helps the team clarify what the customer actually needs.
* Lorenzo creates a model for something barely measurable.

Good research topics:

* Feature Completion Confidence Index.
* Smoke Breaks as Informal Incident Review Mechanisms.
* Executive Metaphor Classification.
* Design System Adoption Under Partial Availability.
* Economico Programmatore Pattern.
* Measuring Alignment Drift After the Qadra-Mangrovia Integration.
* Predictive Models for Ticket Escalation.

Good wiki topics:

* Pausa Sigaretta.
* Economico Programmatore.
* Design System Qadra.
* Qadra.
* Mangrovia Blockchain Solutions.
* The Rock.
* Definition of Done.
* Ticketizzazione.
* AI-first Transformation.
* Executive Metaphors.

---

## Restricted topics

Do not automatically generate content that:

* completes the Design System Qadra;
* officially abandons the Design System Qadra;
* promotes, fires or removes a character;
* changes a character’s role;
* changes a major relationship;
* introduces a new canon character;
* makes an informal ritual official;
* creates a major company-wide process;
* makes The Rock a normal everyday character;
* resolves Mangrovia’s technical debt;
* creates a major incident with persistent consequences;
* changes the structure of Mangrovia or Qadra.

If a generated idea would require one of these changes, downgrade it to an episodic or minor-canon version.

Example:

Instead of:

```txt
Nikita finally completes the Qadra Design System.
```

Use:

```txt
Nikita gives a demo that Giulia describes as a consolidation milestone, while Adriano notices that the component shown exists only in one state and one theme.
```

---

## Canon status rules

Default statuses:

```txt
dev diary -> episodic
research -> episodic or minor-canon
wiki -> minor-canon if based on existing concepts, otherwise episodic
```

Use `major-canon` only if explicitly requested.

The canon status must be assessed in the private `Canon Check Report`, not embedded in the published Markdown file.

Do not include `status: "major-canon"` in a public content file unless the user explicitly requests a schema change and a major-canon update.

---

## Frontmatter rules

Every generated file must begin with YAML frontmatter.

Use the frontmatter fields currently supported by the Astro content schema:

```yaml
title: "Title"
date: 2026-05-16
description: "Short description."
categories: ["Category One", "Category Two"]
authors: ["Author Name"]
```

`authors` is optional. `draft` may be used only when the content should not be published in production.

Do not add private workflow metadata to public frontmatter unless the Astro schema is updated first. This includes `status`, `type`, `entry_type`, `characters`, `point_of_view`, `related`, `wiki_update`, and `timeline_update`.

### Research frontmatter

```yaml
---
title: "Title"
date: 2026-05-16
description: "Short description."
categories: ["Research", "Qadra"]
authors: ["Mangrovia Research"]
---
```

### Dev diary frontmatter

```yaml
---
title: "Title"
date: 2026-05-16
description: "Short description."
categories: ["Dev Diary", "Qadra"]
authors: ["Mangrovia Editorial"]
---
```

For a signed dev diary, use the character name in `authors`.

### Wiki frontmatter

```yaml
---
title: "Title"
date: 2026-05-16
description: "Short description."
categories: ["Wiki", "Concept"]
authors: ["Mangrovia Wiki"]
---
```

Allowed `entry_type` values:

```txt
character
company
project
concept
event
process
incident
artifact
role
location
```

---

## Slug and path rules

Use lowercase slugs with hyphens.

Examples:

```txt
src/content/research/smoke-breaks-incident-review.md
src/content/dev-diary/mattia-first-storybook-encounter.md
src/content/wiki/pausa-sigaretta.md
```

Avoid spaces, uppercase filenames and vague names.

Before choosing a path, check whether the file already exists. If it exists, choose a different topic or a more specific slug.

---

## Generation process

Follow this process exactly.

### Step 1 — Read canon

Read all required knowledge and skill files.

### Step 2 — Inspect existing content

Look at existing files under:

```txt
src/content/research
src/content/dev-diary
src/content/wiki
```

Identify gaps or topics that can be safely expanded.

### Step 3 — Choose one content type and topic

Choose exactly one content type and one topic.

Prefer safe, local, low-impact content.

### Step 4 — Generate Markdown content

Use the matching skill file.

Generate a complete Markdown file with frontmatter.

The Markdown file content must be publication-ready. Do not include `Related Entries`, `Canon Impact`, canon check notes, suggested wiki updates, timeline assessments, or other private workflow notes inside the Markdown file content.

Do not include a top-level `# Title` heading in the Markdown body. The Astro layout renders the page title from frontmatter. Start the body at `##`.

### Step 5 — Run canon check internally

Use `.ai/skills/canon-check.md` to evaluate the generated content.

If the content is `Blocked`, discard it and generate a safer alternative.

If the content `Needs revision`, revise it once and check again.

Only output content that would pass as either:

```txt
Pass
```

or:

```txt
Pass with notes
```

### Step 6 — Assess timeline impact

If the private canon check suggests a timeline update, or if the content appears to introduce persistent consequences, use `.ai/skills/timeline-update.md`.

Default should be no timeline update.

Do not update the timeline automatically unless the user explicitly allows it.

### Step 7 — Produce final output

Return the final answer using the required output format below.

---

## Required output format

Return exactly these sections:

````md
# Daily Generation Result

## Selected content type
research / dev-diary / wiki

## Selected topic
Brief topic description.

## Suggested file path
`src/content/.../slug.md`

## File content
```md
[full publication-ready Markdown file content here; no Related Entries, Canon Impact, or private workflow notes]
````

## Canon Check Report

### Verdict

Pass / Pass with notes

### Suggested canon status

Episodic / Minor canon

### Notes

Brief notes.

## Additional updates suggested

### Wiki updates

None / list suggested wiki entries

### Timeline updates

None / timeline update assessment only

### Character or relationship updates

None / list only if needed

````

Do not output multiple content files.

Do not apply timeline updates automatically.

Do not modify `.ai/knowledge` automatically.

---

## Content style reminders

The Mangrovia tone is:

- dry;
- technical when useful;
- corporate when useful;
- satirical but not loudly comic;
- serious on the surface;
- absurd in the implications;
- grounded in plausible startup/software work.

Avoid:

- explaining jokes;
- turning every line into a punchline;
- making characters one-dimensional;
- making the company pure chaos;
- making AI magical;
- using The Rock too often;
- changing canon for a stronger ending.

---

## Character safety reminders

Adriano is competent and cynical. Do not make him stupid.

Andrea is cold and secretly hostile. Do not make him openly aggressive or villainous.

Nikita is anxious and defensive. Do not make him only incompetent, and do not let him complete the Design System Qadra.

Giulia is corporate and subtly false. Do not make her an explicit villain.

Vas is practical and well-liked. Do not make her perfect or reduce her to beauty.

Fiorenzo is technically strong and physically performative. Do not reduce him to a gym joke.

Salvo is patient and practical. Do not make him a regional caricature.

Giorgio is an armadillo who manages tickets. Do not make him introspective or sentimental.

Lorenzo is a data scientist and Milan fan. Do not make him talk only about football.

Gigi is a roman CTO with real technical authority. Do not make him only dialect comedy.

Mattia is inexperienced and genuine. Do not make him malicious or suddenly expert.

The Rock is CEO and mythic presence. Use him rarely and with weight.

---

## First-run recommendation

If this is the first generated content, create a dev diary entry about:

```txt
Mattia’s first encounter with the Qadra Design System.
````

Suggested status:

```txt
episodic
```

Suggested path:

```txt
src/content/dev-diary/mattia-first-qadra-design-system.md
```

Keep the story low-impact. It can suggest future wiki entries like `Economico Programmatore` and `Design System Qadra`, but it should not update the timeline.
