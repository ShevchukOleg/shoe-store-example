import { Component, OnInit } from '@angular/core';
import { AppGlobalService } from '../../../../app-global.service';
import { Sneakers } from '../../interfaces/sneakers';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  /**
   * - перелік товарів що обрані до корзини
   */
  public cartList: Sneakers[];
  /**
   * - загальна вартість обраних товарів
   */
  public totalPrice = 0;

  constructor(
    public appGlobalService: AppGlobalService,
    public router: Router) { }
    /**
     *  - на єтапі ініціалізації здіснюється підписка на спостерегіч за переліком обраниз товарів
     * дані копіюються у публічну змінну класу компоненти, підраховується загална вартість і теж
     * зберігається у філді класу
     */
  ngOnInit() {
    this.appGlobalService.savedCartListObservableSubject.subscribe(
      (data: Sneakers[]) => {
        console.log('Cart-items data in cart component', data);
        this.cartList = Object.assign(data);
        (() => {
          this.totalPrice = 0;
          this.cartList.forEach((obj: Sneakers) => {
            this.totalPrice += obj.price;
          });
        })();
        console.log(this.totalPrice);
      },
      (error) => console.log(error));
  }
  /**
   * - метод для активаці процесу очистки переліку обраних товарів
   */
  public clearCartList() {
    this.appGlobalService.clearCartList();
  }
  /**
   * - метод активації процесу видалення товару з переліку обраних
   * @param item - об'єкт що містить інформацію про товар для видалення
   */
  public deleteItem(item: Sneakers) {
    this.appGlobalService.deleteItemFromList(item);
  }
  /**
   *  - метод для переходу до сторінки магазину
   */
  public redirectToStore() {
    this.router.navigate(['/main/store'])
  }

}
