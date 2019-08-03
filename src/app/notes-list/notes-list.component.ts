import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Note } from '../store/note.model';
import { AppState } from './../app.state';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.less']
})
export class NotesListComponent implements OnInit {

  notes: Observable<Note[]>;

  constructor(private store: Store<AppState>) {
    this.notes = store.select('note'); 
  }
  
  formatTimeStamp(timeStamp){
    console.log(timeStamp, "------------");
    return moment(timeStamp).format('LT')
  }

  ngOnInit() {}

}
