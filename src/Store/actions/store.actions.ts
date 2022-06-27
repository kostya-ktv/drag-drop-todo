import { Dispatch } from "redux"

export type PROGRESS_ACTIONS = 'ADD-PROGRESS' | 'DELETE-PROGRESS' | 'FETCH-PROGRESS'
export type COMPLETE_ACTIONS = 'ADD-COMPLETE' | 'DELETE-COMPLETE' | 'FETCH-COMPLETE'
export type NOTE_ACTIONS = 'ADD-NOTE' | 'DELETE-NOTE' | 'FETCH-NOTE'

type ACTIONS = PROGRESS_ACTIONS | COMPLETE_ACTIONS | NOTE_ACTIONS

export const appDispatch = (type: ACTIONS, payload: any[], dispatch: Dispatch) => {
   dispatch({type: type, payload: payload})
}

