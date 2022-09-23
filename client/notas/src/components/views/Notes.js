import { HStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ViewNotes from './ViewNote';

export const Notes = () => {
    const api='http://localhost:4000/api/all-notes';
    const [notes, setnotes] = useState();

    const getApi= async ()=>{

        const response = await fetch (api)
        .then((response) => response.json());

        setnotes(response);
        
    } 
    useEffect(() => { getApi(); });
    
    return (
        <HStack flexWrap={'wrap'} >
          {notes && notes.map((object) => (
            <div>
              <ViewNotes title={object.title} description={object.description} id={object._id} />
            </div>
          ))}
        </HStack>
  )
}
