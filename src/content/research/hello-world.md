---
title: "Hello, Research"
date: 2026-05-15
description: "Primo articolo di prova della sezione Research. Serve a verificare il rendering del markdown e la struttura della pagina."
categories: ["Meta", "Note"]
authors: ["subsire"]
---

## Benvenuti

Questa è la prima voce della sezione **Research**. Ogni articolo vive in un file markdown sotto `src/content/research/`.

### Cosa va nel frontmatter

- `title` — titolo dell'articolo
- `date` — data di pubblicazione (YAML date)
- `description` — riga di sommario mostrata nell'indice
- `categories` — array di categorie (almeno una); alimentano i filtri
- `authors` — array di autori, opzionale
- `draft` — `true` per escludere dall'indice in produzione

### Esempio di codice

```ts
import { getCollection } from "astro:content";

const articles = await getCollection("research");
```

### Esempio di citazione

> "The best way to predict the future is to invent it." — Alan Kay

Buona scrittura.
