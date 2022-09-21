import React from 'react';
import {
  ChakraProvider,

  Flex,
} from '@chakra-ui/react';

import './css/index.css'
import NavBar from './components/Navbar/NavBar'



function App() {
  return (
    <ChakraProvider >
      <Flex id='container' >
        <NavBar />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
