import { HStack } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { NoteContext } from '../components/Context/NotesProvider';
import ViewNotes from './ViewNote';

export const Notes = () => {
const {note} = useContext(NoteContext);


    return (
        <HStack flexWrap={'wrap'} >
          {note && note.map((object) => (
            <div key={object._id}>
              <ViewNotes title={object.title} description={object.description} id={object._id} />
            </div>
          ))}
        </HStack>
  )
}
