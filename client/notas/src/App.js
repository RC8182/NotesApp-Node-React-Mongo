import React from 'react';
import {
  ChakraProvider,
  Flex,
} from '@chakra-ui/react';  
import {Route, BrowserRouter,Routes} from 'react-router-dom';
import NavBar from './components/Navbar/NavBar'
import CreateNotes from './views/CreateNote';
import { Notes } from './views/Notes';
import UpdateNote from './views/UpdateNote';

function App() {
  return (
    <ChakraProvider >
        <BrowserRouter>
        
        <Flex  justifyContent={'center'} flexWrap={'wrap'}>
        <NavBar />

        <Routes>
        <Route path='/' element={<CreateNotes />} />
        <Route path='/api/all-notes' element={<Notes />} />
        <Route path='/api/update' element={<UpdateNote />} />
        </Routes> 
      
        </Flex>

      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
