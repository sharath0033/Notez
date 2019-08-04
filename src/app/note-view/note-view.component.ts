import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './../app.state';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as moment from 'moment';
import { SaveNotes } from '../store/note.actions';

@Component({
	selector: 'app-note-view',
	templateUrl: './note-view.component.html',
	styleUrls: ['./note-view.component.less']
})
export class NoteViewComponent implements OnInit {
	selectedNote: any;
	delayInput: Subject<string> = new Subject();

	constructor(private store: Store<State>) {
		this.store.pipe(select('noteData')).subscribe(noteData => {
			this.selectedNote = noteData.selectedNote;
		});

		this.delayInput.pipe(debounceTime(500),distinctUntilChanged()).subscribe(value => {
			this.store.dispatch(new SaveNotes());
		});
	}

	updateNote(event){
		this.delayInput.next(event);
	}

	ngOnInit(){}

}
