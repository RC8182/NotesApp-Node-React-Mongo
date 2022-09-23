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

export default function CreateNotes() {


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

              <form action='http://localhost:4000/api/new-note' method='POST'>
                <VStack spacing={5}>
                 
                  <FormControl isRequired borderColor={useColorModeValue( 'white', 'black')}>

                    <FormLabel
                    color={useColorModeValue( 'white', 'black')}>Label</FormLabel>

                    <InputGroup>

                      <Input 
                      type="text" 
                      name="title"
                      placeholder="Your Note"
                      _placeholder={{'color': useColorModeValue( 'white', 'black')}} 
                      borderColor={useColorModeValue( 'white', 'black')} />
                    </InputGroup>
                  </FormControl>

                  <FormControl 
                  isRequired
                  >

                    <FormLabel 
                    color={useColorModeValue( 'white', 'black')}
                    >Nota</FormLabel>
                    
                    <Textarea
                      name="description"
                      placeholder="Your Message"
                      _placeholder={{'color': useColorModeValue( 'white', 'black')}} 
                      rows={6}
                      resize="none"
                      borderColor={useColorModeValue( 'white', 'gray.800')}
                      color={useColorModeValue( 'white', 'black')}
                    />
                  </FormControl>

                  <Button
                  width={'full'}
                    type='submit'
                    colorScheme="blue"
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: 'blue.500',
                    }}
                  >
                    Create Note
                  </Button>

 
                </VStack>
                </form>
              </Box>
            </Stack>
          </VStack>
        
      </Box>

  );
}