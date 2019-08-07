import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormatDatePipe } from './format-date.pipe';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

	constructor(private sanitizer: DomSanitizer) { } 

	transform(collection: any, searchKeyword: string): any {
		if(searchKeyword === ''){
			return collection;
		}else{
			let lowerCaseSearchKeyword = searchKeyword.toLocaleLowerCase();
			let regexPattern = new RegExp(lowerCaseSearchKeyword, "gi");
			let newCollection = collection.map((item) => {
				return { ...item };
			});
			return newCollection.filter((item) => {
				let formattedTime = new FormatDatePipe().transform(item.timeStamp, 'MMMM D, YYYY [at] LT');
				if(item.title.toLocaleLowerCase().indexOf(lowerCaseSearchKeyword) !== -1
					|| formattedTime.toLocaleLowerCase().indexOf(lowerCaseSearchKeyword) !== -1
					|| item.description.toLocaleLowerCase().indexOf(lowerCaseSearchKeyword) !== -1){
					if(item.title.toLocaleLowerCase().indexOf(lowerCaseSearchKeyword) !== -1){
						item.title = this.sanitizer.bypassSecurityTrustHtml(item.title.replace(regexPattern, '<span style="color:#dca30e;">$&</span>'));
					}
					if(formattedTime.toLocaleLowerCase().indexOf(lowerCaseSearchKeyword) !== -1){
						formattedTime = new FormatDatePipe().transform(item.timeStamp, 'LT')
						item.timeStamp = this.sanitizer.bypassSecurityTrustHtml(formattedTime.replace(regexPattern, '<span style="color:#dca30e;">$&</span>'));
					}
					if(item.description.toLocaleLowerCase().indexOf(lowerCaseSearchKeyword) !== -1){
						item.description = this.sanitizer.bypassSecurityTrustHtml(item.description.replace(regexPattern, '<span style="color:#dca30e;">$&</span>'));
					}
					return item;
				}
			})
		}
	}

}
