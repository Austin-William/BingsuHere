import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StoreComponent } from './pages/store/store.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: CategoryComponent },
  { path: 'products/:category', component: CategoryComponent },
  { path: 'products/:category', component: ProductComponent },
  { path: 'store', component: StoreComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent }
];
