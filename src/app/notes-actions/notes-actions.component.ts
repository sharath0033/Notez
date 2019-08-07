import { Component, OnInit , Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './../app.state';
import { Observable } from 'rxjs';
import { AddNote, DeleteNote, LockUnlockNote, SearchNote } from '../store/note.actions';

@Component({
	selector: 'app-notes-actions',
	templateUrl: './notes-actions.component.html',
	styleUrls: ['./notes-actions.component.less']
})
export class NotesActionsComponent implements OnInit {
	selectedNote: any;
	notes: any;
	searchKeyword: Observable<string>;
	toggleSidebarIndicator: boolean = true;
	toggleSideviewIndicator: boolean = true;

	@Output() messageEvent = new EventEmitter<any>();

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

	lockUnlockNote() {
		this.selectedNote.locked = !this.selectedNote.locked;
		this.store.dispatch(new LockUnlockNote());
	}

	searchNote(){
		this.store.dispatch(new SearchNote(this.searchKeyword));
	}

	toggleSidebar(){
		this.toggleSidebarIndicator = !this.toggleSidebarIndicator;
		this.messageEvent.emit({toggleSidebarIndicator: this.toggleSidebarIndicator});
	}

	toggleSideview(){
		this.toggleSideviewIndicator = !this.toggleSideviewIndicator;
		this.messageEvent.emit({toggleSideviewIndicator: this.toggleSideviewIndicator});
	}

	ngOnInit() {}

}
