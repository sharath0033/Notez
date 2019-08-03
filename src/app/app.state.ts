import { Note } from './store/note.model';

export interface AppState {
  readonly note: Note[];
}