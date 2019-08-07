import { State } from './../app.state';
import { NoteActions, NoteActionTypes} from './note.actions';

export const sampleState: State = {
    notes: [{
        title: 'Sample Note',
		description: 'Sample additional text',
		locked: false,
        timeStamp: new Date()
    }],
    selectedNoteIndex: 0,
	selectedNote: {},
	searchKeyword: ''
};

export const initialState: State = JSON.parse(localStorage.getItem("NOTES_APPLICATION")) || sampleState;

initialState.selectedNote = initialState.notes[initialState.selectedNoteIndex];
  
export function reducer(state = initialState, action: NoteActions): State {
	let next;

    switch (action.type) {
		case NoteActionTypes.AddNote:
			let newNote = {
				title: '',
				description: '',
				locked: false,
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
			let newNotesList = state.notes.filter((item, index) => {
				return index !== state.selectedNoteIndex;
			});
			let newNoteIndex = ((state.selectedNoteIndex === 0) ? 0 : ( state.selectedNoteIndex - 1));
			next = {
				...state,
				notes: newNotesList,
				selectedNoteIndex: newNoteIndex,
				selectedNote: newNotesList[newNoteIndex]
			};
			break;
	
		case NoteActionTypes.SelectNote:
			next = {
				...state,
				selectedNoteIndex: action.payload,
				selectedNote: state.notes[action.payload]
			};
			break;

		case NoteActionTypes.SearchNote:
			next = {
				...state,
				searchKeyword: action.payload
			};
			break;

		case NoteActionTypes.LockUnlockNote:
			next = { ...state };
			break;

		default:
			next = state;
			break;
	}

	localStorage.setItem("NOTES_APPLICATION", JSON.stringify(next));
	return next;
}