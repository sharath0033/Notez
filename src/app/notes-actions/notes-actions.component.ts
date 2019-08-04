import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './../app.state';
import { Observable } from 'rxjs';
import { AddNote, DeleteNote } from '../store/note.actions';

@Component({
	selector: 'app-notes-actions',
	templateUrl: './notes-actions.component.html',
	styleUrls: ['./notes-actions.component.less']
})
export class NotesActionsComponent implements OnInit {
	selectedNote;
	notes: Observable<any>;

	constructor(private store: Store<State>) {
		this.store.pipe(select('noteData')).subscribe(noteData => {
			this.selectedNote = noteData.selectedNote;
			this.notes = noteData.notes;
		});
	}

	addNote() {
		this.store.dispatch(new AddNote());
	}

	deleteNote() {
		this.store.dispatch(new DeleteNote());
	}

	ngOnInit() {}

}
