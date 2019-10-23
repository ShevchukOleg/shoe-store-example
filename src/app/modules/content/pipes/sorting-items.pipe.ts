import { Pipe, PipeTransform } from '@angular/core';
import { Sneakers } from '../interfaces/sneakers';

@Pipe({
  name: 'sortingItems'
})

/**
 * - пайп сортування товарів по різним категоріям
 */
export class SortingItemsPipe implements PipeTransform {

  transform(values: Sneakers[], categori: string, order: string): Sneakers[] {
    // console.log('Data in pipe', categori, order, values);
    if (categori === 'price') {
      switch (order) {
        case 'none':
          return values;
        case 'up':
          return values.slice().sort((prev: Sneakers, next: Sneakers) => {
            return prev[categori] - next[categori];
          });
        case 'down':
          return values.slice().sort((prev: Sneakers, next: Sneakers) => {
            return next[categori] - prev[categori];
          });
      }
    } else {
      switch (order) {
        case 'none':
          return values;
        case 'up':
          return values.slice().sort(
            (prev: Sneakers, next: Sneakers) => {
              return prev[categori] > next[categori] ? 1 : (prev[categori] < next[categori] ? -1 : 0);
            }
          );
        case 'down':
          return values.slice().sort((prev: Sneakers, next: Sneakers) => {
            return prev[categori] < next[categori] ? 1 : (prev[categori] > next[categori] ? -1 : 0);
          });
      }
    }
  }
}
