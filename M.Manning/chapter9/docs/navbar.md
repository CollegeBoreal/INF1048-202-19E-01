
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

#### Edit `app.component.html` file

* add the layout header content after `<!-- Insert header here -->` in the `<nb-layout-header>` tag

```html
    <!-- Insert header here -->
    <nb-sidebar>
      <nb-icon icon="activity"></nb-icon>Invoicing
    </nb-sidebar>

    <nb-sidebar end>
      <nb-actions size="medium">
        <nb-action class="control-item">Invoices</nb-action>
        <nb-action class="control-item">Customers</nb-action>
      </nb-actions>
    </nb-sidebar>
```

* replace the content after  <!--The content below is only a placeholder and can be replaced.--> in the `<nb-layout-column>` tag


```html
    <!--The content below is only a placeholder and can be replaced.-->
    <router-outlet></router-outlet>
```


* Final Result

```html
<nb-layout>

  <nb-layout-header fixed>
  <!-- Insert header here -->
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

    <!--The content below is only a placeholder and can be replaced.-->
    <router-outlet></router-outlet>

  </nb-layout-column>

  <nb-layout-footer fixed>
  <!-- Insert footer here -->
  </nb-layout-footer>

</nb-layout>
```

#### Edit `app.component.scss` file

   * add the below content

```css
.control-item {
  display: block;
}
```


[:fast_forward: Next](backend.md)
