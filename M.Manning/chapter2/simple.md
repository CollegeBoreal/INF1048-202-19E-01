# Afficher une page simple

* Modifier le fichier`app.component.ts`

```typescript
  stocks: Array<StockInterface>;

  constructor(service: StocksService) {
    service.load(['JMIA']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }
```

* Modifier le fichier`app.component.html`

   - rajouter la `directive` `*ngIf="stocks"` dans l'étiquette `<main>` 

```html
 <main class="mdl-layout__content" style="padding: 1.25rem;" *ngIf="stocks">

 </main>
```
