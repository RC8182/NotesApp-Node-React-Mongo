import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorMode/ColorModeSwitcher';
import { NavLinks } from './NavLinks';





export default function NavBar() {
  const Links = [{title:'New Note', href: 'https://mynotesrc8182.netlify.app/'},
                 {title:'All Notes', href: 'https://mynotesrc8182.netlify.app/api/all-notes'}
                ];
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
              {Links.map((link) => (

                <NavLinks title={link.title} href={link.href} />

              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://pbs.twimg.com/profile_images/1455239043424440323/FTDrXsxj_400x400.jpg'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>RC8182</MenuItem>
                <MenuItem>Edit Profile</MenuItem>
                <MenuDivider />
                <MenuItem>Log Out</MenuItem>
              </MenuList>
            </Menu>
            <ColorModeSwitcher />
          </Flex>
          
        </Flex>
                  
      </Box>

      
    </>
  );
}