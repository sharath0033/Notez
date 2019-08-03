import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Note } from './note.model'

// Section 2
export const ADD_NOTE = '[NOTE] Add';
export const DELETE_NOTE = '[NOTE] DELETE';

// Section 3
export class AddNote implements Action {
    readonly type = ADD_NOTE

    //constructor(public payload: Note) {}
}

export class DeleteNote implements Action {
    readonly type = DELETE_NOTE

    //constructor(public payload: number) {}
}

// Section 4
export type Actions = AddNote | DeleteNote
