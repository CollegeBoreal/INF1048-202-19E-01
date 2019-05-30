# Stocks (Chapter 2)

* Créer un nouveau projet avec votre :id: (i.e. b30000000 )

 ``` 
 $ ng new <ID> && cd <ID>
 ```
 
 * Éditer le fichier `index.html` et rajouter le code ci-dessous à l'étiquette `<head>`
 
 ```html 
  <link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.1/material.indigo-orange.min.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
 ```
 
 * Éditer le fichier `styles.css` et rajouter le code ci-dessous 
 
 ```css
 body {
    background: #f3f3f3
 }
 ```
 
 * Éditer le fichier `app.component.html` et rajouter le code suivant
 
 ```html 
 <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Stock Tracker</span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <a class="mdl-navigation__link" >Dashboard</a>
        <a class="mdl-navigation__link" >Manage</a>        
      </nav>
    </div>
  </header>
  <main class="mdl-layout__content" style="padding: 1.25rem;">
   
  </main>
</div>
``` 

## Interface

* Ajouter une structure de données `StockInterface`

``` 
$ ng generate interface services/stockInterface
``` 

* Remplacer le code avec celui ci 
 
```typescrit
 export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}
``` 

## Service

* Rajouter le `service` appellé `Stocks` avec la commande suivante

 ``` 
 $ ng generate service services/stocks
 ```
* Éditer le fichier `stocks.service.ts`

- Ajouter des variables locales avant le décorateur `@Injectable`

```typescript
const stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
const service: string = 'https://angular2-in-action-api.herokuapp.com';
```

- Modifier son constructeur

```typescript
   constructor(private http: HttpClient) {}
``` 

- Ajouter des fonctions

```typescript
  get() {
    return stocks;
  }

  add(stock) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }

``` 
* Resultat final

```typescript
const stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
const service: string = 'https://angular2-in-action-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) {}

  get() {
    return stocks;
  }

  add(stock) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }

}
```

## Fournir le Service

* Éditer le fichier `app.module.ts`

- Importer le module HttpClientModule dans la métadonnée `imports:`
- Enregistrer le fourniseur de service `StocksService` auprès de la métadonnée `providers:`

* Resultat final

```typescript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    StocksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
## Créer les composants

```
$ ng generate component components/summary
```

```html
<div class="mdl-card stock-card mdl-shadow--2dp" 
     [ngClass]="{increase: isPositive(), decrease: isNegative()}" style="width: 100%;">
  <span>
    <div class="mdl-card__title">
      <h4 style="color: #fff; margin: 0">
        {{stock?.symbol?.toUpperCase()}}<br />
        {{stock?.lastTradePriceOnly | currency:'USD':'symbol':'.2'}}<br />
        {{stock?.change | currency:'USD':'symbol':'.2'}} ({{stock?.changeInPercent | percent:'.2'}})
      </h4>
    </div>
  </span>
</div>
```

