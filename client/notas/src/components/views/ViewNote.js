
import {
    Box,
    Button,
    Stack,
    Textarea,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  
  export default function ViewNotes(props) {
    const title= props.title;
    const description=props.description;
    const id= props.id;
    const url='http://localhost:4000/api/all-notes/delete/'+ id +'?_method=DELETE';

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
  
                <form action={url} method='POST'>
                <input type={'hidden'} name='_method' value={'DELETE'} />
                  <VStack spacing={5}>
  
                      <h1
                      color={useColorModeValue( 'white', 'black')}
                      >{title}
                      </h1>
                      <Textarea isDisabled
                        value={description}
                        name="note"
                        rows={10}
                        resize="none"
                        borderColor={useColorModeValue( 'white', 'gray.800')}
                        color={useColorModeValue( 'white', 'black')}
                      />
  
                    <Button
                    width={'full'}
                      type='submit'
                      colorScheme="red"
                      bg="red.400"
                      color="white"
                      _hover={{
                        bg: 'red.500',
                      }}
                    >
                      Delete Note
                    </Button>
  
   
                  </VStack>
                  </form>
                </Box>
              </Stack>
            </VStack>
          
        </Box>
  
    );
  }