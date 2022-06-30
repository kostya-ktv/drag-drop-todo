import React from 'react'
import styled from 'styled-components'
import noteImg from '../../../../Assets/note.svg'
import noteLogo from '../../../../Assets/note-logo.svg'
import { useNotesSelector } from '../../../../Store/selectors/store.selectors'

type Props = {}
const Component = styled.div`
   background-color: #77bbef;
   position: relative;
   height: 100%;
   overflow: hidden;
   width: 100%;
   .note-img {
    position: absolute;
    bottom: -96px;
    right: -76px;
    z-index: 0;
    height: 291px;
   }
   .note-logo {
    transform: rotate(333deg);
    position: absolute;
    z-index: 1;
    right: 24px;
    top: -36px;
   }
   .note {
    display: flex;
    max-height: 100%;
    overflow-y: auto;
    flex-direction: column;
    width: max-content;
    margin-left: 60px;
    margin-top: 20px;
    h4 {
      padding: 5px 20px;
      margin: 5px;
      cursor: pointer;
      border-radius: 5px;
      background-color: rgba(255,255,255,0.5);
      transition: all .4s ease;
      &:hover {
        background-color: rgba(255,255,255,0.2);
      }
    }
   }
`
const NoteList = (props: Props) => {
  const { notes } = useNotesSelector()
  return (
    <Component>
      <img src={noteLogo} className="note-logo"/>
      <div className="note">
        {notes && notes.map((note, i) => 
            <h4 key={i}>{note.title}</h4>
        )}
      </div>
      
      <img src={noteImg} className="note-img"/>
    </Component>
  )
}

export default NoteList