import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { AppGlobalService } from '../../../../app-global.service';
import { Sneakers } from '../../interfaces/sneakers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  /**
   * - перелік усіх товарів
   */
  public offerList: Sneakers[];
  /**
   * - перелік товарів що обрані о корзини
   */
  public cartList: Sneakers[];
  /**
   * - стан філтру компоненти
   */
  public pipeState = {
    category: 'price',
    order: 'none'
  };

  /**
   * - параметри для селекту форми керування пайпом сортування по числовим значенням
   */
  public matNumberOption = [
    { value: 'none', viewValue: 'No' },
    { value: 'up', viewValue: '1-9' },
    { value: 'down', viewValue: '9-1' }
  ];

  /**
   * - параметри для селекту форми керування пайпом сортування по строковим значенням
   */
  public matStrOption = [
    { value: 'none', viewValue: 'No' },
    { value: 'up', viewValue: 'A-Z' },
    { value: 'down', viewValue: 'Z-A' }
  ];

  constructor(
    public contentService: ContentService,
    public appGlobalService: AppGlobalService,
    private router: Router
  ) { }
  /**
   * на єтапі ініціалізації заповнюється перелік товарів магазину, здійснюєсться підписка
   * на інформацію про обрані товари
   */
  ngOnInit() {
    this.offerList = Array.from(this.contentService.getofferList);

    this.appGlobalService.savedCartListObservableSubject.subscribe(
      (data: Sneakers[]) => {
        console.log('Отримано дані про обрані предмети', data);
        this.cartList = Array.from(data);
      },
      (error) => console.log(error));
  }

  /**
   * - метод управління відображенням кнопок замовлення та переходу до корзини
   * @param code: string - код продукту
   */
  public isOrdered(code: string): boolean {
    let chack = 0;
    if (this.cartList.length === 0) {
      return false;
    } else {
      this.cartList.forEach((obj: Sneakers) => {
        if (obj.vendorCode !== code) {
          chack += 0;
        } else {
          chack += 1;
        }
      });
      return !!chack;
    }
  }
  /**
   * - метод додавання товару до корзини
   * @param item - об'єкт данних про продукт
   */
  public addToCart(item: Sneakers) {
    this.appGlobalService.addItemToList(item);
  }

  /**
   * - метод зиіни пайпу сортування товарів
   * @param category - параметр згадно якого відбувається сортування
   * @param order - порядок сортування
   */
  public changePipeOrder(category: string, order: string) {
    this.pipeState.category = category;
    this.pipeState.order = order;
    console.log(this.offerList);
    this.offerList = this.offerList.slice();
  }
}
