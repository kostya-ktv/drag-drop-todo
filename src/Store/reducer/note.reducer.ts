import { NOTE_ACTIONS } from "../actions/store.actions"
import { NoteType } from "../types"

export type NoteStateType = {
   notes: Array<NoteType>
}
type NoteTypeAction = {
   type: NOTE_ACTIONS,
   payload: Array<NoteType>
}
const NoteTasksInitState = {
   notes: []
} 

export const noteReducer = (state: NoteStateType = NoteTasksInitState, action: NoteTypeAction) => {
   switch (action.type) {
      case "FETCH-NOTE": {
         return {notes: [...action.payload]}
      }

      case "ADD-NOTE": {
         return {notes: [...state.notes, ...action.payload]}
      }
         
      case "DELETE-NOTE":
         return state

      default: return state
   }
}