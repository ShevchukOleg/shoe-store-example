import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Sneakers } from '../../interfaces/sneakers';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public offerList: Sneakers[];

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

}
