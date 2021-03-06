import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppGlobalService } from '../../../../app-global.service';
import { Sneakers } from '../../../content/interfaces/sneakers';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit, OnDestroy {
  public currentUser;
  public totalValue: number;
  public amountOfItems: number;
  private unsubscribe$ = new Subject<void>();
  constructor(
    public appGlobalService: AppGlobalService
  ) { }


  /**
   * при ініціалізації компоненти отримуються данні про потчного користувача, а також
   * відбувається підписка на дані про перелік обраних товарівю При зміні переліку відбувається
   * калькуляція кількості та загальної вартості товарів.
   */
  ngOnInit() {
    this.currentUser = localStorage.getItem('curentUserEmail');

    this.appGlobalService.savedCartListObservableSubject
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(
        (data: Sneakers[]) => {
          // console.log('Cart-items data in header component', data);
          this.amountOfItems = data.length;
          (() => {
            this.totalValue = 0;
            data.forEach((obj: Sneakers) => {
              this.totalValue += obj.price;
            });
          })();
          // console.log(this.totalValue);
        },
        (error) => console.log(error));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }

}
