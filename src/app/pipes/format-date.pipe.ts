import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  	name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
	transform(date: Date, formatString: string): string {
		if(formatString){
			return moment(date).format(formatString);
		}else{
			return moment(date).format('MMMM D, YYYY [at] LT');
		}
	}

}
