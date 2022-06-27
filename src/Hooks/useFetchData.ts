import { useEffect  } from "react"
import { useDispatch } from "react-redux"
import { appDispatch } from "../Store/actions/store.actions"
import { NoteType, TaskType } from "../Store/types"
import { generateUUID } from "../Util/uuid.generator"

const fakeDATA: any = [
   {id: generateUUID(), type: "progress", title: 'Learn React Testing library', priority: 'red', expiredDate: '05d:12h:24m:34s'},
   {id: generateUUID(), type: "complete", title: 'Node working threads', priority: 'red', expiredDate: '05d:12h:24m:34s'},
   {id: generateUUID(), type: "note", title: 'Book CODE Mr. Klemence'},
 ]
export const useFetchData = () => {
   const dispatch = useDispatch()
   const fetchResult = [...fakeDATA]
   const progressTasks: Array<TaskType> = []
   const completeTasks: Array<TaskType> = []
   const notes: Array<NoteType> = []
 
   fetchResult.forEach(el => {
      switch (el.type) {
         case 'complete': completeTasks.push(el)
            break;
         case 'note': notes.push(el)
            break;
         case 'progress': progressTasks.push(el)
            break;
         default: break;
      }
   })
   useEffect(() => {
      appDispatch("FETCH-COMPLETE", completeTasks, dispatch)
      appDispatch("FETCH-PROGRESS", progressTasks, dispatch)
      appDispatch("FETCH-NOTE", notes, dispatch)
   }, [])
}