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
	selectedNote: Observable<object>;
	selectedNoteIndex: Observable<number>;

	constructor(private store: Store<State>) {
		this.store.pipe(select('noteData')).subscribe(noteData => {
			this.selectedNote = noteData.selectedNote;
			this.selectedNoteIndex = noteData.selectedNoteIndex;
		});
	}

	addNote() {
		this.store.dispatch(new AddNote());
	}

	deleteNote() {
		this.store.dispatch(new DeleteNote(this.selectedNoteIndex));
	}

	ngOnInit() {}

}
