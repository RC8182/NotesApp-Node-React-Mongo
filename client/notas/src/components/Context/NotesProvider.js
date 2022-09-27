import {createContext, useState} from 'react';

export const NoteContext= createContext();

export const NotesProvider = ({children}) => {
    const api='https://my-rc-notes.herokuapp.com/api/all-notes';

    const [note, setNote]=useState();

    const getApi= async ()=>{
        const allNotes= await fetch(api)
        .then((allNotes)=>allNotes.json());
        setNote(allNotes);
        }

    const data={note, getApi};

  return (
    <NoteContext.Provider value={data}>
        {children}
    </NoteContext.Provider>
  )
}
