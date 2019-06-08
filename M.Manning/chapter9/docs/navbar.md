
#Navigation

#### App Module

###### Nebular

* Edit `app.module.ts` and add `NBLayouModule`, `NbSidebarModule` and `NbActionsModule` to the existing `NB_MODULES` constant

```typescript
// Nebular Modules
const NB_MODULES = [
  ... Previous Modules,
  NbLayoutModule,
  NbSidebarModule.forRoot(),
  NbActionsModule,
];
```

###### Material Design

* Edit `app.module.ts` and add `MatCardModule` and `MatButtonModule` to the existing `MAT_MODULES` constant

```typescript
// Material Modules
const MAT_MODULES = [
  MatCardModule,
  MatButtonModule
];
```

#### App Component

* Edit `app.component.html` file

```html
<nb-layout>

  <nb-layout-header fixed>
  <!-- Insert header here -->
    $ Invoicing
  </nb-layout-header>

  <nb-layout-column>

    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>Shiba Inu</mat-card-title>
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
      <mat-card-content>
        <p>
          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
          bred for hunting.
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>
    </mat-card>
    
    <router-outlet></router-outlet>
    
  </nb-layout-column>

  <nb-layout-footer fixed>
  <!-- Insert footer here -->
  </nb-layout-footer>

</nb-layout>
```

* Edit the `app-routing.module.ts`

```typescript
const routes: Routes = [
  { path: 'invoices', component: InvoicesComponent },
  { path: 'invoices/create', component: InvoiceFormComponent },
  { path: 'invoices/:invoiceId', component: InvoiceComponent },
  { path: 'invoices/:invoiceId/edit', component: InvoiceFormComponent },
  { path: '', pathMatch: 'full', redirectTo: '/invoices' },
];
```
