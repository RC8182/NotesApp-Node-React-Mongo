import { Avatar, Button, Link, Menu, MenuButton, MenuDivider, MenuItem, MenuList } from '@chakra-ui/react'
import { useContext } from 'react';
import { NoteContext } from '../../Context/NotesProvider'


export const UserMenu = () => {

const {logout, user }= useContext(NoteContext);
//console.log(user)

  return (
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
          'https://www.kindpng.com/picc/m/499-4999373_ca-rosario-central-logo-png-escudo-de-rosario.png'
        }
      />
    </MenuButton>
    <MenuList>
      <MenuItem>{user.user?.username}</MenuItem>
      <MenuDivider />
      <Link href={process.env.REACT_APP_CLIENT_URL+'/api/user/new-note/TODO'}>
      <MenuItem>New Note</MenuItem>
      </Link>
      <Link href={process.env.REACT_APP_CLIENT_URL +'/api/user/TODO/new-note/'}>
      <MenuItem>All Notes</MenuItem>
      </Link>
      <MenuDivider />
      <Link href={process.env.REACT_APP_CLIENT_URL }>
      <MenuItem onClick={logout}
      >Log Out</MenuItem>
      </Link>
    </MenuList>
  </Menu>
  )
}
