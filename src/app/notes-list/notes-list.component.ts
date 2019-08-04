import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './../app.state';
import { Observable } from 'rxjs';
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
	searchKeyword: string;

	constructor(private store: Store<State>) {
		this.store.pipe(select('noteData')).subscribe(noteData => {
			this.notes = noteData.notes;
			this.selectedNoteIndex = noteData.selectedNoteIndex;
			this.searchKeyword = noteData.searchKeyword;
		});
	}

	selectNote(noteIndex) {
		this.store.dispatch(new SelectNote(noteIndex));
	}

	ngOnInit() {}

}
