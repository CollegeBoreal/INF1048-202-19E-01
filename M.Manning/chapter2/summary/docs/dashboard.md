# Dashboard

* Créer le composant `Tableau de Bord`

```
$ ng generate component components/dashboard
```

* Éditer le composant principal de l'application `app.component.html`

  - retirer la directive `*ngIf="stocks"` aux paramètres de l'étiquette `<main>`
  
  - rajouter l'étiquette `<app-dashboard>`

```html
  <main class="mdl-layout__content" style="padding: 1.25rem;" >
    <app-dashboard></app-dashboard>
  </main>
```

* Réinitialiser le composant principal de l'application `app.component.ts`

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
```

### L'application est prete à repartir de nouveau

* Éditer le composant `dashboard`

   - Déclarer les variables locales `stocks` et `symbols`

```typescript
  stocks: Array<StockInterface>;
  symbols: Array<string>;
```
   - Injecter le Service `StocksService` au constructeur

```typescript
  constructor(private service: StocksService) { }
```
   - Initialiser les variables locales par la fonction `ngOnInit`

```typescript
  ngOnInit() {
    this.symbols = this.service.get();
    this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks);
  }
```

* Résultat final

```typescript
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks: Array<StockInterface>;
  symbols: Array<string>;

  constructor(private service: StocksService) { }

  ngOnInit() {
    this.symbols = this.service.get();
    this.service.load(this.symbols).subscribe(stocks => this.stocks = stocks);
  }

}
```



