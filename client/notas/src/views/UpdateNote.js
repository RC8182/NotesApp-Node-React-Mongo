import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Stack,
    Textarea,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';

  import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NoteContext } from '../components/Context/NotesProvider';


  
  export default function UpdateNote() {


    
    const {noteByNoteId, getNoteByNoteID, isAuthUser} = useContext(NoteContext);
    const noteId= useParams();
    const id=noteId.noteId;

    useEffect(() => {getNoteByNoteID(id);
      isAuthUser()}, []);

    const title= noteByNoteId?.title;
    const description= noteByNoteId?.description;


const update= process.env.REACT_APP_SERVER_URL +'/api/update/' + id +'?_method=PUT';
    return (
  
        <Box
          borderRadius="lg"
          m={{ base: 5, md: 16, lg: 10 }}
          p={{ base: 5, lg: 16 }}>
         
            <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
  
              <Stack
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: 'column', md: 'row' }}>
  
  
                <Box
                  bg={useColorModeValue('black', 'gray.100')}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue( 'white', 'black')}
                  shadow="base">
  
                <form action={update} method='POST'>
                <input type={'hidden'} name='_method' value={'PUT'} />
                  <VStack spacing={5}>
                   
                    <FormControl isRequired borderColor={useColorModeValue( 'white', 'black')}>
  
                      <FormLabel
                      color={useColorModeValue( 'white', 'black')}>Task</FormLabel>
  
                      <InputGroup>
  
                        <Input 
                        type="text" 
                        name="title"
                        defaultValue={title}
                        borderColor={useColorModeValue( 'white', 'black')} />
                      </InputGroup>
                    </FormControl>
  
                    <FormControl 
                    isRequired
                    >
  
                      <FormLabel 
                      color={useColorModeValue( 'white', 'black')}
                      >Note</FormLabel>
                      
                      <Textarea
                        name={'description'}
                        defaultValue={description}
                        rows={6}
                        resize="none"
                        borderColor={useColorModeValue( 'white', 'gray.800')}
                        color={useColorModeValue( 'white', 'black')}
                      />
                    </FormControl>
  
                    <Button
                    width={'full'}
                      type='submit'
                      colorScheme="green"
                      bg="green.800"
                      color="white"
                      _hover={{
                        bg: 'green.500',
                      }}
                    >
                      Edit
                    </Button>
  
   
                  </VStack>
                  </form>
                </Box>
              </Stack>
            </VStack>
          
        </Box>
  
    );
  }