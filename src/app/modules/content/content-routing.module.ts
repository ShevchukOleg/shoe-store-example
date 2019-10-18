import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './components/store/store.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
  { path: 'store', component: StoreComponent},
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
