import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Sneakers } from '../../interfaces/sneakers';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  /**
   * - перелік товарів
   */
  public offerList: Sneakers[];

  public pipeState = {
    category: 'price',
    order: 'none'
  };

/**
 * - параметри для селекту форми керування пайпом сортування по числовим значенням
 */
  public matNumberOption = [
    {value: 'none', viewValue: 'No' },
    {value: 'up', viewValue: '1-9' },
    {value: 'down', viewValue: '9-1' }
  ];

/**
 * - параметри для селекту форми керування пайпом сортування по строковим значенням
 */
  public matStrOption = [
    {value: 'none', viewValue: 'No' },
    {value: 'up', viewValue: 'A-Z' },
    {value: 'down', viewValue: 'Z-A' }
  ];

  public pipeControl = {
    category: 'manufacturer',
    order: 'none'
  };

  constructor(
    public contentService: ContentService
  ) { }

  ngOnInit() {
    this.offerList = Object.assign(this.contentService.getofferList);
    console.log(this.offerList);
  }

  public isordered(item: Sneakers) {
    return false;
  }

  public addToCart(item: Sneakers) {
    console.log(item);
  }

  public changePipeOrder(category: string, order: string) {
    this.pipeState.category = category;
    this.pipeState.order = order;
    console.log(this.pipeState);
    this.offerList = this.offerList.slice();
  }

}
