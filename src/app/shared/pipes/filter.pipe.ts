import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], term: string): any {
    return items ? items.filter(item => (item.name.includes(term) || item.description.includes(term))) : items;
  }

}


