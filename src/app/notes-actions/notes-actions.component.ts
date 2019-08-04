import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from './../app.state';
import { Observable } from 'rxjs/Observable';
import { AddNote, DeleteNote } from '../store/note.actions';

@Component({
	selector: 'app-notes-actions',
	templateUrl: './notes-actions.component.html',
	styleUrls: ['./notes-actions.component.less']
})
export class NotesActionsComponent implements OnInit {
	selectedNote: Observable<any>;

	constructor(private store: Store<State>) {
		this.store.select('noteData').subscribe(data => {
			this.selectedNote = data.selectedNote;
		});
	}

	addNote() {
		this.store.dispatch(new AddNote());
	}

	deleteNote(noteIndex) {
		this.store.dispatch(new DeleteNote(noteIndex));
	}

	ngOnInit() {}

}
