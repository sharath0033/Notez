import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './../app.state';
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Component({
	selector: 'app-note-view',
	templateUrl: './note-view.component.html',
	styleUrls: ['./note-view.component.less']
})
export class NoteViewComponent implements OnInit {
	selectedNote: Observable<object>;

	constructor(private store: Store<State>) {
		this.store.pipe(select('noteData')).subscribe(noteData => {
			this.selectedNote = noteData.selectedNote;
		});
	}

	formatTimeStamp(timeStamp){
		return moment(timeStamp).format('MMMM D, YYYY [at] LT')
	}

	ngOnInit() {}

}
