import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppGlobalService } from './app-global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'itcraftTest';
  public showHeader: boolean;

  constructor(
    public appGlobalService: AppGlobalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.appGlobalService.initializeCartList();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeader = this.appGlobalService.headerTriger();
      }
    });
    console.log(this.showHeader);
  }
}
