import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products/:category', component: ProductsComponent },
  { path: 'store', component: ProductsComponent },
  { path: 'contact', component: ProductsComponent },
  { path: '**', component: NotFoundComponent }
];
