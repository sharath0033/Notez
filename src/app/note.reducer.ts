import { Action } from '@ngrx/store'
import { Note } from './note.model'
import * as NoteActions from './note.actions'

const INITIAL_STATE: Note = {
    id: 1,
    name: "New Note", 
    timestamp: new Date()
}

export function reducer(state: Note[] = [INITIAL_STATE], action: NoteActions.Actions) {

    // Section 3
    switch(action.type) {
        case NoteActions.ADD_NOTE:
            return [...state, action.payload];
        default:
            return state;
    }
}