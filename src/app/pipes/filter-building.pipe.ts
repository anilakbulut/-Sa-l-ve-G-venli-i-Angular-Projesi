import { Pipe, PipeTransform } from '@angular/core';
import { FilterData } from '../service/filterdata.model';
import { isgData } from '../service/isgdata.model';

@Pipe({
  name: 'filterBuilding'
})
export class FilterBuildingPipe implements PipeTransform {

  transform(data: isgData[], filteredDataContent:FilterData) {

    if(filteredDataContent.viewBuild){
      return  data.filter((item: isgData) =>
      item.bina  == filteredDataContent.viewBuild
      )
    }
    return data;
  }

}
