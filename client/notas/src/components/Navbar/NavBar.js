import {
  Box,
  Flex,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NoteContext } from '../Context/NotesProvider';
import { ColorModeSwitcher } from './components/ColorModeSwitcher';
import {UserMenu} from './components/UserMenu';





export default function NavBar() {


  const{getPage, titleLink,user }= useContext(NoteContext);



useEffect(() => {

}, []);

  return (
    <>
      <Box bg={useColorModeValue('blue.100', 'red.900')} px={4} width={'full'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>

          <HStack spacing={8} alignItems={'center'}>
            <Box>AppNotes</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>

              {(user.user?.username) ?<Link onClick={getPage}>{titleLink}</Link>
                                     :''
                }

            </HStack> 
          </HStack>
          <Flex alignItems={'center'}>
            {(user.user?.username) ?<UserMenu />
                   :''
              }
              <ColorModeSwitcher />
          </Flex>
          
        </Flex>
                  
      </Box>

      
    </>
  );
}