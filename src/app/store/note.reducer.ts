import { State } from './../app.state';
import { NoteActions, NoteActionTypes} from './note.actions';

const win = window as any;
win.devTools = win.__REDUX_DEVTOOLS_EXTENSION__.connect();

export const sampleState: State = {
    notes: [{
        title: 'Sample Note',
        description: 'Sample description',
        timeStamp: new Date()
    }],
    selectedNoteIndex: 0,
    selectedNote: {}
};

export const initialState: State = JSON.parse(localStorage.getItem("NOTES_APPLICATION")) || sampleState;

initialState.selectedNote = initialState.notes[initialState.selectedNoteIndex];
  
export function reducer(state = initialState, action: NoteActions): State {
	let next;

    switch (action.type) {
		case NoteActionTypes.AddNote:
			let newNote = {
				title: '',
				description: 'Description',
				timeStamp: new Date()
			}
			next = {
				...state,
					notes: [newNote, ...state.notes],
					selectedNoteIndex: 0,
					selectedNote: newNote
			};
			break;
		
		case NoteActionTypes.SaveNotes:
			next = { ...state };
			break;
	
		case NoteActionTypes.DeleteNote:
			//action.payload
			next = {
				...state,
				selectedNoteIndex: action.payload,
				selectedNote: state.notes[action.payload]
			};
			break;
	
		case NoteActionTypes.SelectNote:
			next = {
				...state,
				selectedNoteIndex: action.payload,
				selectedNote: state.notes[action.payload]
			};
			break;

		/* case NoteActionTypes.SearchNote:
			return {
				...initialState
			}; */

		default:
			next = state;
			break;
	}

	win.devTools.send(action.type, next);
	localStorage.setItem("NOTES_APPLICATION", JSON.stringify(next));
	return next;
}