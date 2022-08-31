import { Pipe, PipeTransform } from '@angular/core';
import { FilterData } from '../service/filterdata.model';
import { isgData } from '../service/isgdata.model';

@Pipe({
  name: 'filterTypeOfReport'
})
export class FilterTypeOfReportPipe implements PipeTransform {

  transform(data: isgData[], filteredDataContent:FilterData) {

    if(filteredDataContent.viewTypeOfReport){
      return  data.filter((item: isgData) =>
      item.raporturu  == filteredDataContent.viewTypeOfReport
      )
    }
    return data;
  }

}
