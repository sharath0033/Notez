import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './../app.state';
import { Observable } from 'rxjs';
import { AddNote, DeleteNote, SearchNote } from '../store/note.actions';

@Component({
	selector: 'app-notes-actions',
	templateUrl: './notes-actions.component.html',
	styleUrls: ['./notes-actions.component.less']
})
export class NotesActionsComponent implements OnInit {
	selectedNote: any;
	notes: any;
	searchKeyword: Observable<string>;

	constructor(private store: Store<State>) {
		this.store.pipe(select('noteData')).subscribe(noteData => {
			this.selectedNote = noteData.selectedNote;
			this.notes = noteData.notes;
			this.searchKeyword = noteData.searchKeyword;
		});
	}

	addNote() {
		this.store.dispatch(new AddNote());
	}

	deleteNote() {
		this.store.dispatch(new DeleteNote());
	}

	searchNote(){
		this.store.dispatch(new SearchNote(this.searchKeyword));
	}

	ngOnInit() {}

}
