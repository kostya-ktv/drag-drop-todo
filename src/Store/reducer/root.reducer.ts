import { combineReducers } from "redux";
import { completeTaskReducer } from "./completeTask.reducer";
import { noteReducer } from "./note.reducer";
import { progressTask } from "./progressTask.reducer";

export const rootReducer = combineReducers({
   progressTasks: progressTask,
   completeTasks: completeTaskReducer,
   notes: noteReducer
})

export type ApplicationStoreType = ReturnType<typeof rootReducer>