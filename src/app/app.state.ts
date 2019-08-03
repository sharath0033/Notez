import { Note } from './note.model';

export interface AppState {
  readonly note: Note[];
}