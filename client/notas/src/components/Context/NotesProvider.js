import {createContext, useState} from 'react';
import CreateNotes from '../../views/CreateNote';
import { Notes } from '../../views/Notes';


export const NoteContext= createContext();

export const NotesProvider = ({children}) => {

    const api= process.env.REACT_APP_SERVER_URL ;
/*---------------- GET NOTAS BY ID ------------------------- */
    const [noteByNoteId, setNoteByNoteId]=useState();

    const getNoteByNoteID= async (id)=>{
        await fetch(api+'/api/all-notes/find/'+id)
            .then(res => res.json())
            .then(res=> setNoteByNoteId(res))
            
        }

/*---------------------- GET USERS BY ID -------------------- */
    const [noteByUserId, setNoteByUserId]=useState();

    const getNoteByUserID= async (id)=>{
      const apiLink= api+ '/api/all-notes/'+ id;
        await fetch(apiLink)
        .then(res=> res.json())
        .then(res=> setNoteByUserId(res))

    }    


/*------------------------- SET PAGES ------------------------- */

    const [titleLink, setTitleLink]= useState('New Note');
    const [page, setPage]= useState(null);

    const getPage=()=>{
      if(titleLink === 'All Notes'){
        setPage(<Notes/>);
        setTitleLink('New Note');
      }else{
        setPage(<CreateNotes/>);
        setTitleLink('All Notes');

        }
    }


/*---------------------------- LOGIN -------------------------- */
const [obj, setObj]= useState('');
    const signin= async(user, pass)=>{

      const link= api +'/api/log-in';
      await fetch(link, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // de lo contrario deserializate no funciona!
        body:JSON.stringify({
        username: user,
        password: pass
      }),
      })
      .then(res=> res.json(res))
      .then(res=> setObj(res))
      console.log(obj.message, 'obj')
   
    };
/*------------------------LOG OUT ----------------------------- */
const logout= async()=>{
  console.log('Cerrando secion')
      await fetch(api + '/api/log-out')
      .then(res=> console.log(res))
}
/*--------------------- GET AUTH USER-------------------------- */
const [user, setUser]=useState('');
    const isAuthUser= async()=>{
      const link=api +'/api/user';
      await fetch(link,{credentials: 'include'})
      .then(res=> res.json(res))
      .then(res=> setUser(res))

    }
    
/*------------------------------------------------------------- */
    const data={noteByNoteId, getNoteByNoteID, noteByUserId, getNoteByUserID,
     page, getPage, titleLink,
    signin, obj, isAuthUser, user, logout};


 

  return (
    <NoteContext.Provider value={data}>
        {children}
    </NoteContext.Provider>
  )
}