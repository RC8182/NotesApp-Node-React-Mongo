import { Flex } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'

import { NoteContext } from '../components/Context/NotesProvider'


export const Dashboard = () => {
  const{ page, isAuthUser, getPage }= useContext(NoteContext);

  useEffect(() => {
    isAuthUser();  
    getPage()
  }, []);
                                      
  return (
    <Flex display={'flex'} justifyContent={'center'} gap={'8'}>
      {page}
    </Flex>
  )
}
