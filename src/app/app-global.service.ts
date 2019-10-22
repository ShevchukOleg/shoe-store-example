import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { Sneakers } from './modules/content/interfaces/sneakers';

@Injectable({
  providedIn: 'root'
})
export class AppGlobalService {

  public savedCartList: Sneakers[] = [];

  public savedCartListSource = new BehaviorSubject(this.savedCartList);

  public savedCartListObservableSubject: Observable<Sneakers[]> = this.savedCartListSource.asObservable();

  constructor() { }

  public initializeCartList() {
    const savedInfo = localStorage.getItem('savedCartList');
    if (savedInfo !== null) {
      this.savedCartList = JSON.parse(savedInfo);
      this.savedCartListSource.next(this.savedCartList);
    }
    return;
  }
  /**
   * - метод додавання товару в корзину користувача
   * @param item об'єкт данниз про товар
   */
  public addItemToList(item: Sneakers) {
    this.savedCartList.push(item);
    localStorage.setItem('savedCartList', JSON.stringify(this.savedCartList));
    this.savedCartListSource.next(this.savedCartList);
  }

  /**
   * - метод для видалення товару з корзини
   * @param item - об'єкт данниз про товар що видаляється
   */
  public deleteItemFromList(item: Sneakers) {
    this.savedCartList = this.savedCartList.filter((obj: Sneakers) => obj.vendorCode !== item.vendorCode);
    localStorage.setItem('savedCartList', JSON.stringify(this.savedCartList));
    this.savedCartListSource.next(this.savedCartList);
  }
  /**
   * метод очищення корзини користувача
   */
  public clearCartList() {
    this.savedCartList = [];
    localStorage.setItem('savedCartList', JSON.stringify(this.savedCartList));
    this.savedCartListSource.next(this.savedCartList);
  }

  /**
   * метод що керує відображенням хедеру
   */
  public headerTriger(): boolean {
    const currentUser = localStorage.getItem('curentUserEmail');
    const access = (currentUser !== null ? true : false);
    console.log(access);
    return access;
  }
}
