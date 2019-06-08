
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

  <nb-layout-header class="layout-container" fixed>
    <nb-sidebar>
      <nb-icon icon="activity"></nb-icon>Invoicing
    </nb-sidebar>

    <nb-sidebar end>
      <nb-actions size="medium">
        <nb-action class="control-item">Invoices</nb-action>
        <nb-action class="control-item">Customers</nb-action>
      </nb-actions>
    </nb-sidebar>
  </nb-layout-header>

  <nb-layout-column>

    <router-outlet></router-outlet>

  </nb-layout-column>

  <nb-layout-footer fixed>
    <!-- Insert footer here -->
  </nb-layout-footer>

</nb-layout>
```

[:fast_forward: Next](invoice.md)
