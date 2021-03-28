import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): unknown {
    let today: Date = new Date();
    let todayDateOnly: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateDifference = Math.abs(todayDateOnly-value);
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference * 0.001;
    var dayCounter = dateDifferenceSeconds / secondsInDay;
     
    if (dayCounter <= 0){
      return 'today';
    }
    if (dayCounter >= 1 && todayDateOnly>value) {
      return dayCounter;
    } else {
      return 0;
    }
  }

}
