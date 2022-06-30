import styled from "styled-components"
import backGroundImg from "../../Assets/background.jpg"
import { useCompleteTasksSelector, useNotesSelector, useProgressTasksSelector } from "../../Store/selectors/store.selectors"
import CompleteList from "./Components/CompleteList"
import GreetingBox from "./Components/GreetingBox"
import NoteList from "./Components/NoteList"
import ProgressList from "./Components/ProgressList"

const Component = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
   .background-img {
      position: absolute;
      z-index: -1;
      filter: blur(5px);
      height: 100vh;
      width: 100vw;
   }
   .box {
      display: flex;
      background-color: white;
      width: 1200px;
      position: relative;
      height: 80vh;
      padding: 20px;
      box-shadow: 0px 1px 20px #a8a6a6;
   }
   .right-container {
      display: flex;
      flex-direction: column;
      margin-left: 30px;
      width: 100%;
      .greet-complete {
         display: flex;
         height: 1000px;
         margin-bottom: 30px;
      }
   }
   .statistic {
      position: absolute;
      top: 0;
   }
   
`

export const DashBoard = () => {
   const {completeTasks} = useCompleteTasksSelector()
   const {progressTasks} = useProgressTasksSelector()
   const {notes} = useNotesSelector()
   return (
      <Component className="DashBoard">
         <img src={backGroundImg} className="background-img"/>
         <div className="box">
            <ProgressList/>

            <div className="right-container">
               <div className="greet-complete">
                  <GreetingBox/>
                  <CompleteList/>
               </div>
               <NoteList/>
            </div>
         <div className="statistic">Complete : {completeTasks.length}, Progress : {progressTasks.length}, Notes: {notes.length}</div> 
         </div>
      </Component>    
   )
}