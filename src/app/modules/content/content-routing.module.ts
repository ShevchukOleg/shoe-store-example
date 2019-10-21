import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './components/store/store.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [
  { path: 'store', component: StoreComponent},
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: '**', redirectTo: 'store', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
