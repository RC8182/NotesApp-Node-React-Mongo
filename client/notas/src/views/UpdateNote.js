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
  import React from 'react';
import { useParams } from 'react-router-dom';
  
  export default function UpdateNote() {
    const {id}= useParams();
    const update='https://my-rc-notes.herokuapp.com/api/update/' + id +'?_method=PUT';
    console.log(id); 
  
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
                        defaultValue={'lavel to update'}
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
                        name='description'
                        defaultValue={'data to update'}
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
                      Update Note
                    </Button>
  
   
                  </VStack>
                  </form>
                </Box>
              </Stack>
            </VStack>
          
        </Box>
  
    );
  }