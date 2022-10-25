import { HStack } from '@chakra-ui/react';
import React, { useContext, useEffect } from 'react'
import { NoteContext } from '../components/Context/NotesProvider';
import ViewNotes from './ViewNote';

export const Notes = () => {
const {noteByUserId, getNoteByUserID, isAuthUser, user} = useContext(NoteContext);

const userId=user.user?._id;


useEffect(() => {
  isAuthUser(); 
  getNoteByUserID(userId); },[]);

    return (
        <HStack flexWrap={'wrap'} >
          {noteByUserId && noteByUserId.map((object) => (
            <div key={object._id}>
              <ViewNotes title={object.title} description={object.description} id={object._id} user={object.user} />
            </div>
          ))}
        </HStack>
  )
}
