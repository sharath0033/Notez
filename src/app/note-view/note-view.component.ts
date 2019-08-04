import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './../app.state';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Component({
	selector: 'app-note-view',
	templateUrl: './note-view.component.html',
	styleUrls: ['./note-view.component.less']
})
export class NoteViewComponent implements OnInit {
	selectedNote: Observable<any>;

	constructor(private store: Store<State>) {
		this.store.select('noteData').subscribe(data => {
			this.selectedNote = data.selectedNote;
		});
	}

	formatTimeStamp(timeStamp){
		return moment(timeStamp).format('MMMM D, YYYY [at] LT')
	}

	ngOnInit() {}

}
