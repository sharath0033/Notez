import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { reducer } from './store/note.reducer';
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
        FormsModule,
        StoreModule.forRoot({
            noteData: reducer
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
