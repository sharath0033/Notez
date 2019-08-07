import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent {

	constructor() { }

	toggleSidebarIndicator: boolean = true;
	toggleSideviewIndicator: boolean = true;

	receiveMessage($event) {
		if($event.toggleSidebarIndicator != undefined){
			this.toggleSidebarIndicator = $event.toggleSidebarIndicator;
		}else if($event.toggleSideviewIndicator != undefined){
			this.toggleSideviewIndicator = $event.toggleSideviewIndicator;
		}
	}
}
