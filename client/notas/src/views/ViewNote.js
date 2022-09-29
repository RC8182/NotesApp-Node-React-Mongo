import { EditIcon } from '@chakra-ui/icons'
import {
    Box,
    Button,
    Icon,
    Link,
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
    const url= process.env.REACT_APP_SERVER_URL +'/api/all-notes/delete/'+ id +'?_method=DELETE';
    const update='/api/update/' + id;

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

                <Link href={update}>
                  <Icon as={ EditIcon } w={6} h={6} />
                </Link>

                <form action={url} method='POST'>
                <input type={'hidden'} name='_method' value={'DELETE'} />

                  <VStack spacing={5}>
  
                      <h1
                      color={useColorModeValue( 'white', 'black')}
                      >{title}
                      </h1>
                      <Textarea isReadOnly
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