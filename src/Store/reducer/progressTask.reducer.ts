import { PROGRESS_ACTIONS } from "../actions/store.actions"
import { TaskType } from "../types"

export type ProgressTasksStateType = {
   progressTasks: Array<TaskType>
}
type ProgressTypeAction = {
   type: PROGRESS_ACTIONS,
   payload: Array<TaskType>
}
const ProgressTasksInitState = {
   progressTasks: []
} 

export const progressTask = (state: ProgressTasksStateType = ProgressTasksInitState, action: ProgressTypeAction) => {
   switch (action.type) {
      case "FETCH-PROGRESS": {
         return {progressTasks: [...action.payload, ]}
      }

      case "ADD-PROGRESS": {
         return {progressTasks: [...state.progressTasks, ...action.payload, ]}
      }
         
      case "DELETE-PROGRESS":
         const result = state.progressTasks.filter(el => el.id !== action.payload[0].id)
         return {progressTasks: [...result]}

      default: return state
   }
}