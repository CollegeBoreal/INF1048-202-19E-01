# Afficher une page simple

* Modifier le fichier àpp.component.ts``

```typescript
  stocks: Array<StockInterface>;

  constructor(service: StocksService) {
    service.load(['JMIA']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }
```
