# Créer le service d'accès au données

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

* Créer le composant `summary`

```
$ ng generate component components/summary
```

* Mettre à jour son `template`avec le code ci-dessous, (i.e. fichier `summary.component.html`)

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
- Ajouter une parametre d'entrée de composant `@Input` appellé `stock`
- Ajouter les fonctions `isNegative()` et `isPositive()` au code de la classe `SummaryComponent`

```typescript
  @Input() stock: any;

  isNegative() {
    if (!this.stock || this.stock.change >= 0) {
      return false;
    }

    return true;
  }

  isPositive() {
    if (!this.stock || this.stock.change <= 0) {
      return false;
    }

    return true;
  }
```