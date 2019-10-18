import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { StoreComponent } from './components/store/store.component';
import { CartComponent } from './components/cart/cart.component';
import { ContentService } from './services/content.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [StoreComponent, CartComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [ContentService]
})
export class ContentModule { }
