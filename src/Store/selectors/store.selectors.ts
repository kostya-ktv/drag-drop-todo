import { useSelector } from "react-redux";
import { CompleteTasksStateType } from "../reducer/completeTask.reducer";
import { NoteStateType } from "../reducer/note.reducer";
import { ProgressTasksStateType } from "../reducer/progressTask.reducer";
import { ApplicationStoreType } from "../reducer/root.reducer";

export const useProgressTasksSelector = (): ProgressTasksStateType=> {
   const progressTasks = useSelector((state: ApplicationStoreType) => state.progressTasks)
   return progressTasks
}

export const useCompleteTasksSelector = (): CompleteTasksStateType => {
   const completeTasks = useSelector((state: ApplicationStoreType) => state.completeTasks)
   return completeTasks
}

export const useNotesSelector = (): NoteStateType => {
   const notes = useSelector((state: ApplicationStoreType) => state.notes)
   return notes
}