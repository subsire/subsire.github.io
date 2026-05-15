---
title: "Primo giorno: setup del Dev Diary"
date: 2026-05-15
description: "Apriamo il dev diary del progetto. Note sparse, decisioni, cose imparate. Si scrive a caldo, si rilegge dopo."
categories: ["Setup", "Meta"]
authors: ["subsire"]
---

## Perché un dev diary

Un posto dove buttare giù decisioni tecniche, dubbi, link, errori utili. Niente pretesa di completezza: prima si scrive, poi si capisce.

### Come scrivere una nuova voce

1. Crea un file in `src/content/dev-diary/<slug>.md`.
2. Compila il frontmatter (titolo, data, descrizione, almeno una categoria).
3. Scrivi.

```bash
touch src/content/dev-diary/$(date +%Y-%m-%d)-nota.md
```

### Cosa NON è il dev diary

Non è documentazione ufficiale (quella va nel **Wiki**) né un saggio (quello va in **Research**). È il blocco appunti.
