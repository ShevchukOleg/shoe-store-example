import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppGlobalService } from './app-global.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'itcraftTest';
  public showHeader: boolean;
  private unsubscribe$ = new Subject<void>();

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

    this.router.events
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.showHeader = this.appGlobalService.headerTriger();
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }
}
