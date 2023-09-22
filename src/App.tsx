import {useState} from "react"
import './App.css'
import CreateNote from './component/CreateNote'
import Navbar from './component/Navbar'
import Notes from './component/Notes'
import { NoteObject } from "./type/note"

function App() {
  const [notes, setNotes] = useState<NoteObject[]>([])    // created a array of object with types
  console.log(notes )

  const addNotes = (note: NoteObject) =>{
 setNotes([note, ...notes])
  }

  return (
    <div className='w-full h-[100vh] '>
      <Navbar/>
      <CreateNote addNotes={addNotes}/>
      <Notes notes={notes}/>
    </div>
  )
}

export default App
