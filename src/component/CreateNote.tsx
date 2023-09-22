import React,{useState} from 'react'
import { NoteObject } from '../type/note'
import {v4 as uuid} from 'uuid'
import toast, { Toaster } from 'react-hot-toast';

const defaultObj = {
    id:0,
    title:"",
    details:"",
    color:"",
    date:(new Date().toLocaleString()).toString()
}

interface ICreateNoteProps {
    addNotes: (note: NoteObject) => void
}

const CreateNote: React.FC<ICreateNoteProps> = ({addNotes}) => {
    const [note,setNote] = useState<NoteObject>(defaultObj)
    const [error, setError] = useState("")

    const onValueChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
           setNote({...note, [e.target.name] : e.target.value})       
    }

    const onCreateNote = () =>{
         if(note.title.trim() === ""){
            toast.error("Title field is required")
        }else if(note.details.trim() === ""){
           toast.error("Details field is required") 
        }else{
           addNotes({...note, id: uuid()})
        }
        
    }


  return (
    <div className='w-full pt-6'>
        <div className='w-1/2  mx-auto flex flex-col gap-4'>
            <div className='flex flex-col'>
                <label className='text-[15px] uppercase font-medium'>Title</label>
                 <input 
                 type='text' 
                 placeholder="Title..." 
                 name="title"
                 onChange={(e)=>onValueChange(e)} 
                 className='h-[35px] rounded-sm cursor-pointer text-[14px] tracking-wide border border-gray-400 hover:border-cyan-400 outline-none pl-3'/>
            </div>
            <div className='flex flex-col'>
                <label className='text-[15px] uppercase font-medium'>Details</label>
                <textarea  
                placeholder='Details...' 
                 name="details"
                rows={5} 
                cols={50} 
                onChange={(e)=>onValueChange(e)} 
                className='rounded-sm cursor-pointer text-[13px] tracking-wide border border-gray-400 hover:border-cyan-400 outline-none pl-3 py-1 resize-none'>

            </textarea>
            </div>
            <div className='flex justify-between items-end'>
                <div className='flex flex-col'>
                   <label className='text-[15px] uppercase font-medium'>Pick  Card Background Color</label>
                    <input 
                    type='color' 
                     name="color"
                    onChange={(e)=>onValueChange(e)}  
                    className='w-[100px] h-[40px] outline-none cursor-pointer'/>
                </div>
                <button 
                onClick={()=>onCreateNote()}
                className='w-[100px] h-[40px] align-bottom shadow-lg rounded-md text-white uppercase text-[14px] bg-cyan-600 hover:bg-cyan-700'>Create</button>
            </div>
        </div>
        <Toaster/>
    </div>
  )
}

export default CreateNote