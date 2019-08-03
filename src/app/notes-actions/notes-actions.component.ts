import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Note } from './../note.model'
import * as NoteActions from './../note.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-notes-actions',
  templateUrl: './notes-actions.component.html',
  styleUrls: ['./notes-actions.component.less']
})
export class NotesActionsComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addNote() {
    this.store.dispatch(new NoteActions.AddNote())
  }

  ngOnInit() {}

}
