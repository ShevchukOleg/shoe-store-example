import { Component, OnInit } from '@angular/core';
import { AppGlobalService } from './app-global.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'itcraftTest';

  constructor(
    public appGlobalService: AppGlobalService
  ) { }

  ngOnInit(): void {
    this.appGlobalService.initializeCartList();
  }
}
