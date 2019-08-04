import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './../app.state';
import { Observable } from 'rxjs/Observable';
import {pluck} from 'rxjs/operators';
import * as moment from 'moment';
import { SelectNote } from '../store/note.actions';

@Component({
	selector: 'app-notes-list',
	templateUrl: './notes-list.component.html',
	styleUrls: ['./notes-list.component.less']
})
export class NotesListComponent implements OnInit {
	notes: Observable<any>;
	selectedNoteIndex: Observable<number>;

	constructor(private store: Store<State>) {
		this.notes = this.store.pipe(pluck('noteData', 'notes'));
		this.selectedNoteIndex = this.store.pipe(pluck('noteData', 'selectedNoteIndex'));
	}
	
	formatTimeStamp(timeStamp){
		return moment(timeStamp).format('LT')
	}

	selectNote(noteIndex) {
		this.store.dispatch(new SelectNote(noteIndex));
	}

	ngOnInit() {}

}
