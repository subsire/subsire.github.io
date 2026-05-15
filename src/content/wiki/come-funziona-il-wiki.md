---
title: "Come funziona il Wiki"
date: 2026-05-15
description: "Voce di riferimento sulla struttura stessa del wiki: dove vivono i file, quali metadati servono, come si linka tra le voci."
categories: ["Meta", "Guida"]
authors: ["subsire"]
---

## Struttura

Ogni voce del wiki è un file markdown in `src/content/wiki/<slug>.md`. Lo `slug` (nome del file) diventa l'URL: `/wiki/<slug>`.

### Metadati richiesti

- `title` — il titolo della voce
- `date` — ultima revisione
- `description` — una riga di sommario
- `categories` — almeno una categoria, alimenta i filtri della home del wiki

### Link tra voci

Si linka come in qualsiasi markdown: `[testo](/wiki/altro-slug/)`. Conviene usare URL assoluti con `/` finale per coerenza.

### Sezioni correlate

- [Research](/research/) — articoli più strutturati
- [Dev Diary](/dev-diary/) — note di sviluppo a caldo
