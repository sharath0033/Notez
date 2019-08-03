import { Action } from '@ngrx/store'
import { Note } from './note.model'
import * as NoteActions from './note.actions'

const data = [{
    id: 1,
    title: "New Note",
    description: "No additional text provided in the description",
    timeStamp: new Date()
},{
    id: 2,
    title: "New Note",
    description: "No additional text provided in the description",
    timeStamp: new Date()
},{
    id: 2,
    title: "New Note",
    description: "No additional text provided in the description",
    timeStamp: new Date()
},{
    id: 2,
    title: "New Note",
    description: "No additional text provided in the description",
    timeStamp: new Date()
},{
    id: 2,
    title: "New Note",
    description: "No additional text provided in the description",
    timeStamp: new Date()
},{
    id: 2,
    title: "New Note",
    description: "No additional text provided in the description",
    timeStamp: new Date()
},{
    id: 2,
    title: "New Note",
    description: "No additional text provided in the description",
    timeStamp: new Date()
},{
    id: 2,
    title: "New Note",
    description: "No additional text provided in the description",
    timeStamp: new Date()
},{
    id: 2,
    title: "New Note",
    description: "No additional text provided in the description",
    timeStamp: new Date()
}]

export function reducer(state: Note[] = data, action: NoteActions.Actions) {

    // Section 3
    switch(action.type) {
        case NoteActions.ADD_NOTE:
            return [...state, {
                id: 1,
                title: "New Note",
                description: "No additional text provided in the description",
                timeStamp: new Date()
            }];
        default:
            return state;
    }
}