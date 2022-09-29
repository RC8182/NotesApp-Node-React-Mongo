import {createContext, useEffect, useState} from 'react';

export const NoteContext= createContext();

export const NotesProvider = ({children}) => {
    const api= process.env.REACT_APP_SERVER_URL +'/api/all-notes';

    const [note, setNote]=useState();

    const getApi= async ()=>{
        await fetch(api)
            .then(res => res.json())
            .then(data=> setNote(data))
            
        }


    const [noteId, setNoteId]=useState();

    const getApiNoteByID= async (id)=>{
      const apiLink= api+ '/find/'+ id;
        await fetch(apiLink)
        .then(res=> res.json())
        .then(data=> setNoteId(data))

    }    



    const data={note, getApi, noteId, getApiNoteByID};


    useEffect(() => { getApi();

                      });

  return (
    <NoteContext.Provider value={data}>
        {children}
    </NoteContext.Provider>
  )
}
