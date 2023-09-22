import React from 'react'
import Note from "./Note"
import { NoteObject } from '../type/note'

interface INotesProps {
  notes:NoteObject[]
}

const Notes: React.FC<INotesProps> = ({notes}) => {
  return (
    <div className='w-full py-10'>
        <div className='w-11/12  mx-auto'>
             <h1 className='text-lg font-semibold uppercase text-center underline mb-4'>Notes</h1>
             {notes?.length > 0 ? 
             <div className='w-full grid grid-cols-4 gap-3'>
                  {
                    notes?.map((data,index)=>(
                      <Note data={data} key={index}/>
                    ))
                  }
             </div>
             :<div className='py-6'>
              <p className='text-center'>You have not created any notes</p>
             </div>
              }
             
        </div>
    </div>
  )
}

export default Notes