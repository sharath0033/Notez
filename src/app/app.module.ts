import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { reducer } from './note.reducer';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesActionsComponent } from './notes-actions/notes-actions.component';
import { NoteViewComponent } from './note-view/note-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
    NotesActionsComponent,
    NoteViewComponent
  ],
  imports: [
    BrowserModule, 
    StoreModule.forRoot({
      note: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
