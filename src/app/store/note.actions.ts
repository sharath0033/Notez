import {PayloadAction} from './note.model';

export enum NoteActionTypes {
	AddNote = '[Add Note] Add new note',
	DeleteNote = '[Delete Note] Delete selected note',
	SelectNote = '[Select Note] Select specific note',
	SearchNote = '[Search Note] Search all notes'
}

export class AddNote extends PayloadAction {
  	readonly type = NoteActionTypes.AddNote;
}

export class DeleteNote extends PayloadAction {
  	readonly type = NoteActionTypes.DeleteNote;
}

export class SelectNote extends PayloadAction {
  	readonly type = NoteActionTypes.SelectNote;
}

export class SearchNote extends PayloadAction {
  	readonly type = NoteActionTypes.SearchNote;
}

export type NoteActions = AddNote | DeleteNote | SelectNote | SearchNote;