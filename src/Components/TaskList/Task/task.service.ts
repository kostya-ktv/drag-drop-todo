import { Dispatch } from "redux"
import { appDispatch } from "../../../Store/actions/store.actions"
import { TaskType } from "../../../Store/types"

export function handleDragStart(e: React.DragEvent<HTMLDivElement>, task: TaskType): void {
   e.dataTransfer.setData("task", JSON.stringify(task))
}
export const handleDrop = (e: any, dropOn: 'completeList' | 'progressList', dispatch: Dispatch): void => {
   
   const task: TaskType = JSON.parse(e.dataTransfer.getData("task"))
   
   if(task.type === "complete" && dropOn === "progressList") {
      task.type = 'progress'
      appDispatch("ADD-PROGRESS", [task], dispatch)
      appDispatch("DELETE-COMPLETE", [task], dispatch)
      
   }
   if(task.type === "progress" && dropOn === "completeList") {
      task.type = 'complete'
      appDispatch("ADD-COMPLETE", [task], dispatch)
      appDispatch("DELETE-PROGRESS", [task], dispatch)
   }
}
export function handleDragOver(e: any): void {
   e.preventDefault()
}


