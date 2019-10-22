import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [SiteHeaderComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SiteHeaderComponent
  ]
})
export class HeaderModule { }
