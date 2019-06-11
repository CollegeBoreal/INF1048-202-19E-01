# Preparing for Forms


##### Enabling `Template Driven` Forms Functionnality

* Edit `app.module.ts` and add `FORMS_MODULE` constant

```typescript
// Form Modules
const FORM_MODULES = [
  FormsModule
];
```

* Edit `app.module.ts` and add `FORMS_MODULE` constant

```typescript
// Material Modules
const MAT_MODULES = [
     <previous modules>
  MatFormFieldModule
];
```

* add `FORMS_MODULE` constant to the `imports:` metadata field of `@NgModule` decorator

```typescript
  imports: [
     <previous modules>
     ...MAT_MODULES,
    ...FORM_MODULES
  ],
```

* Final Result

```typescript 
// Nebular Modules
const NB_MODULES = [
  NbThemeModule.forRoot({ name: 'default' }),
  NbEvaIconsModule,
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule.forRoot(),
  NbActionsModule,
];

// Material Modules
const MAT_MODULES = [
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule
];

// Form Modules
const FORM_MODULES = [
  FormsModule
];


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ...NB_MODULES,
    ...MAT_MODULES,
    ...FORM_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

[:fast_forward: Next ](customer-forms.md)
