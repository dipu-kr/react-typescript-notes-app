import React from 'react'
import { NoteObject } from '../type/note';

interface INoteProps { 
    data:NoteObject
}


const Note: React.FC<INoteProps> = ({data}) => {
    console.log(data)
  return (
    <div className='h-[170px] py-2 px-3 shadow-lg border rounded-md' style={{backgroundColor:data.color}}>
        <h3 className='text-center font-medium truncate capitalize'>{data.title}</h3>
        <div className='h-[60px] overflow-hidden text-ellipsis mb-2'>
                <p className='h-[60px] text-[11px] overflow-hidden text-ellipsis text-justify font-medium' style={{lineHeight:"16px"}}>{data.details}</p>
        </div>
        <div>
            <p className='text-sm font-medium'>Created Date and Time</p>
            <p className='text-xs'>{data.date}</p>
        </div>

    </div>
  )
}

export default Note