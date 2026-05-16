---
title: "Adozione del Design System Qadra in condizioni di disponibilità parziale"
date: 2026-05-16
description: "Analisi tecnico-operativa sull'adozione di componenti design system quando documentazione, implementazione e uso in produzione non coincidono."
categories: ["Research", "Design System", "Qadra"]
authors: ["Mangrovia Research"]
---

## Abstract

Questo articolo analizza l'adozione del Design System Qadra in un contesto in cui la disponibilità dei componenti non può essere descritta come una variabile binaria. A partire da Storybook, ticket aperti, note di allineamento e osservazioni del team frontend, vengono identificate quattro forme distinte di disponibilità: documentale, implementativa, produttiva e percepita.

I risultati suggeriscono che la pressione all'adozione aumenta sensibilmente quando un componente ha un nome, anche se il comportamento effettivo del componente non è ancora stabile in tutti gli stati, temi e casi d'uso. La conclusione operativa è che Mangrovia dovrebbe valutare il Design System Qadra non in base alla domanda "esiste?", ma in base alla più utile domanda "in quale senso esiste?".

## Context

Dopo la fusione tra Qadra e Mangrovia, il Design System Qadra è entrato nel perimetro tecnico dell'organizzazione come asset strategico, base di consolidamento frontend e oggetto di interpretazione collettiva. La sua funzione dichiarata è aumentare coerenza visiva, velocità di prodotto e riuso dei componenti nei prodotti wealth management e AI-first.

La sua funzione reale è più complessa.

Alcuni componenti risultano presenti in Storybook ma non sono utilizzati in produzione. Altri sono utilizzati in produzione ma non corrispondono alla documentazione. Altri ancora compaiono nei file Figma con stati non ancora implementati, oppure esistono come wrapper locali creati da team che non avevano tempo di aspettare il consolidamento ufficiale.

In questo scenario, la parola "adozione" tende a produrre ambiguità. Per Giulia indica un percorso di allineamento verso una libreria condivisa. Per Adriano indica il rischio di sostituire un componente rotto con uno rotto in modo più istituzionale. Per Nikita indica spesso una fase quasi conclusa, purché non venga richiesta una verifica completa degli edge case.

## Problem

Mangrovia non dispone ancora di una definizione condivisa di disponibilità per i componenti del Design System Qadra.

La mancanza di questa definizione produce tre effetti ricorrenti:

1. un componente documentato viene considerato adottabile prima che il suo comportamento sia verificato;
2. un componente già usato in produzione viene considerato legacy anche quando funziona meglio della sua sostituzione prevista;
3. la distanza tra roadmap e codice viene riclassificata come problema di ownership, invece che come problema di stato del componente.

Il problema non è quindi solo tecnico. È semantico, organizzativo e leggermente economico, nel senso specifico in cui un "economico programmatore" può essere caricato di responsabilità che richiederebbero una governance di prodotto più costosa.

## Method

Lo studio combina fonti documentali e operative raccolte durante la fase post-fusione:

- 23 componenti presenti o citati nel perimetro Qadra;
- 17 pagine Storybook, di cui 6 con esempi incompleti o non aggiornati;
- 12 ticket frontend collegati a migrazione, refactor o adozione;
- 9 commenti di pull request relativi a varianti, temi o comportamenti responsive;
- 4 note di allineamento scritte dopo meeting con Giulia;
- 1 osservazione di Adriano classificata come "non formalmente utile" ma successivamente confermata da un bug;
- 1 commento di Giorgio sul fatto che, senza owner, "nun è un componente, è un sospetto co' le props".

Ogni componente è stato valutato su cinque dimensioni:

- presenza in documentazione;
- presenza in codice condiviso;
- uso verificabile in produzione;
- copertura degli stati principali;
- esistenza di un owner riconoscibile.

Non è stata assegnata una penalità specifica ai componenti che risultano "quasi finiti", perché la categoria è stata considerata troppo instabile per un confronto quantitativo.

## Findings

### 1. La disponibilità documentale viene spesso confusa con la disponibilità operativa

La presenza di una pagina Storybook produce un aumento immediato della fiducia organizzativa, anche quando la pagina mostra un solo stato, un solo tema o un esempio costruito su dati non rappresentativi.

Questo fenomeno è particolarmente rilevante nei meeting di pianificazione, dove la frase "il componente c'è già" tende a ridurre artificialmente la stima. In almeno quattro casi osservati, la disponibilità documentale ha generato una riduzione dello scope apparente, seguita da un aumento dello scope reale durante l'implementazione.

### 2. La presenza in produzione non coincide con maturità

Alcuni componenti risultano già in produzione, ma solo perché sono stati integrati prima della stabilizzazione della libreria. In questi casi l'adozione non è una prova di maturità, ma una testimonianza storica della necessità.

Il team ha identificato componenti che funzionano correttamente solo nel contesto specifico in cui sono stati inizialmente copiati. La loro generalizzazione richiederebbe un refactor, ma il refactor viene spesso rinviato perché il componente, almeno nel punto in cui si trova, non sta ancora causando abbastanza rumore.

### 3. L'assenza di owner aumenta la mitologia del componente

Quando un componente non ha un owner chiaro, la sua interpretazione viene distribuita tra Storybook, Figma, ticket, memoria dei developer e ottimismo residuo.

In assenza di owner, Nikita tende a descrivere lo stato come "da consolidare", Giulia come "in fase di armonizzazione" e Adriano come "da non toccare fino a prova contraria". Nessuna delle tre definizioni è completamente falsa. Il problema è che producono azioni diverse.

### 4. L'adozione parziale genera componenti derivati

Quando la fiducia nel componente centrale è insufficiente, i team creano wrapper locali, override CSS, adattatori temporanei o piccole astrazioni che promettono di essere rimosse dopo il consolidamento.

La rimozione successiva non è stata osservata con frequenza statisticamente incoraggiante.

Questo pattern aumenta il debito tecnico proprio nel momento in cui l'organizzazione crede di ridurlo. Il Design System diventa così contemporaneamente soluzione, fonte di duplicazione e linguaggio comune per discutere la duplicazione.

## Operational Implications

Mangrovia dovrebbe introdurre una matrice di disponibilità del componente prima di dichiarare qualsiasi migrazione verso il Design System Qadra.

La matrice proposta distingue almeno cinque stati:

- `documentato`: esiste una pagina o una specifica consultabile;
- `implementato`: esiste codice condiviso importabile;
- `verificato`: sono coperti stati, temi e casi responsive principali;
- `adottato`: esiste almeno un uso in produzione non sperimentale;
- `governato`: esiste un owner responsabile di modifiche, regressioni e deprecazioni.

Un componente può essere considerato adottabile solo quando almeno `implementato`, `verificato` e `governato` sono veri. La presenza di `documentato` senza `verificato` deve essere trattata come segnale informativo, non come promessa di velocità.

La proposta non implica il completamento del Design System Qadra. Implica soltanto che l'incompletezza venga descritta con più precisione.

## Limitations

Lo studio presenta alcuni limiti.

Primo, non include componenti presenti soltanto in ambienti locali, branch non mergiati o cartelle nominate `new-new-components`.

Secondo, le valutazioni su Figma sono state limitate ai file accessibili senza chiedere a Giulia quale fosse "la versione davvero utile per allinearci".

Terzo, le dichiarazioni di Nikita sullo stato del Design System sono state considerate dati qualitativi, non indicatori di rilascio.

Quarto, il campione non distingue sempre tra componente duplicato e componente riscritto con la stessa intenzione ma con un nome abbastanza diverso da sembrare strategico.

## Next Steps

- Definire una tassonomia interna per la disponibilità dei componenti.
- Aggiornare i ticket di migrazione con lo stato reale del componente, non solo con il riferimento alla pagina Storybook.
- Chiedere a Giorgio di introdurre un tipo ticket per "verifica disponibilità componente", senza trasformarlo in un processo più grande del componente stesso.
- Usare la matrice su tre componenti Qadra prima di proporre una migrazione più ampia.
- Documentare i casi in cui il componente legacy funziona meglio del componente ufficialmente preferibile.
