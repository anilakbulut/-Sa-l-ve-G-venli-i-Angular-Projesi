import { Pipe, PipeTransform } from '@angular/core';
import { FilterData } from '../service/filterdata.model';
import { isgData } from '../service/isgdata.model';

@Pipe({
  name: 'filterArea'
})
export class FilterAreaPipe implements PipeTransform {

  transform(data: isgData[], filteredDataContent:FilterData) {

    if(filteredDataContent.viewArea){
      return  data.filter((item: isgData) =>
      item.konum  == filteredDataContent.viewArea
      )
    }
    return data;
  }
}
