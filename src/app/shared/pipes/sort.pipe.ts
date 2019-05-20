import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(items: any[], sortedBy: any): any {
   // console.log('TYPE', sortedBy);
  //  debugger;
    if (sortedBy === 'price') {
      return items.sort((a, b) => Number(b[sortedBy]) - Number(a[sortedBy]));
    } else {
      return items.sort((a, b) => (a[sortedBy] > b[sortedBy]) ? 1 : (b[sortedBy] > a[sortedBy]) ? -1 : 0);
    }
  //  )
  //  return (sortedBy === 'price') ? items.sort((a, b) => Number(b[sortedBy]) - Number(a[sortedBy])) : items.sort();
   // return items.sort();
  }

}
