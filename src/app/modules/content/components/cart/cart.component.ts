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

  public clearCartList() {
    this.appGlobalService.clearCartList();
  }

}
