
import { COMPLETE_ACTIONS } from "../actions/store.actions"
import { TaskType } from "../types"

export type CompleteTasksStateType = {
   completeTasks: Array<TaskType>
}
type CompleteTypeAction = {
   type: COMPLETE_ACTIONS,
   payload: Array<TaskType>
}
const CompleteTasksInitState = {
   completeTasks: []
} 

export const completeTaskReducer = (state: CompleteTasksStateType = CompleteTasksInitState, action: CompleteTypeAction) => {
   switch (action.type) {
      case "FETCH-COMPLETE": { 
         return {completeTasks: [...action.payload, ]}
      }

      case "ADD-COMPLETE": {
         return {completeTasks: [...state.completeTasks, ...action.payload, ]}
      }
         
      case "DELETE-COMPLETE":
         const result = state.completeTasks.filter(el => el.id !== action.payload[0].id)
         
         return {completeTasks: [...result]}

      default: return state
   }
}