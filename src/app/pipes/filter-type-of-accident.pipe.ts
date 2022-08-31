import { Pipe, PipeTransform } from '@angular/core';
import { FilterData } from '../service/filterdata.model';
import { isgData } from '../service/isgdata.model';

@Pipe({
  name: 'filterTypeOfAccident'
})
export class FilterTypeOfAccidentPipe implements PipeTransform {

  transform(data: isgData[], filteredDataContent:FilterData) {

    if(filteredDataContent.viewTypeOfAccident){
      return  data.filter((item: isgData) =>
      item.tur  == filteredDataContent.viewTypeOfAccident
      )
    }
    return data;
  }
}
