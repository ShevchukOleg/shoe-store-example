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

  /**
   * при ініціалізації компоненти найфвищого рівня активується метод глобального сервісу
   * для оновлення інформації про перелік обраних користувачем товарів, та здійснюється управління
   * станом відображення хедеру
   */
  ngOnInit(): void {
    this.appGlobalService.initializeCartList();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeader = this.appGlobalService.headerTriger();
      }
    });
  }
}
