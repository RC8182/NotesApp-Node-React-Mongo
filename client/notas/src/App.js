import React from 'react';
import {
  ChakraProvider,
  Flex,
} from '@chakra-ui/react';  
import {Route, BrowserRouter,Routes} from 'react-router-dom';
import NavBar from './components/Navbar/NavBar'

import UpdateNote from './views/UpdateNote';
import { NotesProvider } from './components/Context/NotesProvider';
import { AuthProvider } from './components/Context/AuthProvider';
import { Home } from './views/Home';
import { Dashboard } from './views/Dashboard';
import Login from './views/Login';


function App() {
  return (
    <ChakraProvider >
      <AuthProvider>
         <NotesProvider>
            <BrowserRouter>
              <Flex  justifyContent={'center'} flexWrap={'wrap'}>
                <NavBar />
                <Routes>
                  <Route path='/'  element={<Home/>} />
                  <Route path='/login'  element={<Login />} />
                  <Route path='/dashboard'  element={<Dashboard />} />
                  <Route path='/update/:noteId' element={<UpdateNote />} />
                </Routes> 
              </Flex>
            </BrowserRouter>
        </NotesProvider>
      </AuthProvider>  
    </ChakraProvider>
  );
}

export default App;
